/**
 * Cloudflare Pages Function — /api/google-reviews
 *
 * Proxies the Google Places Details REST API from the edge so:
 *  - No referrer restrictions apply (server-to-server call)
 *  - No Maps JS API needed in the browser
 *  - No CORS issues
 *
 * Env vars (set in Cloudflare Pages → Settings → Environment variables):
 *   NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
 */
export async function onRequestGet(context) {
  const apiKey  = context.env.GOOGLE_PLACES_SERVER_KEY;
  const placeId = "ChIJVaEV7SgZyUwRg9rLg5Z4G0c";

  if (!apiKey) {
    return new Response(
      JSON.stringify({ status: "ERROR", error: "Missing API key" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=name,rating,user_ratings_total,reviews,url` +
    `&key=${apiKey}`;

  try {
    const res  = await fetch(url, {
      headers: {
        // Satisfy Google's HTTP referrer restriction on the API key
        "Referer": "https://quotes-lifeinsurance.com",
      },
    });
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type":                "application/json",
        "Access-Control-Allow-Origin": "*",
        // Cache 5 minutes on CDN — reviews don't change that often
        "Cache-Control":               "public, max-age=300, s-maxage=300",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ status: "ERROR", error: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
