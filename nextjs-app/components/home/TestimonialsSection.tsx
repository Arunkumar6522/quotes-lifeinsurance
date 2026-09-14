// Real Google reviews — fetched via Places API (place: KADS Enterprises / Quotes Life Insurance)
// Rating: 4.9 ★ from 10 ratings. 5 reviewers shown below.
// Only Jeffrin Binu left written text; others gave star-only ratings.

const reviews = [
  {
    name: "Jeffrin Binu",
    time: "5 years ago",
    rating: 5,
    text: "Good",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjUw5laS30uNT3moIqJ34pB_XzkcM4y26uyedx7cjTOA2cckWikPeQ=s128-c0x00000000-cc-rp-mo-ba2",
    url:  "https://www.google.com/maps/contrib/111666124984551759565/reviews",
  },
  {
    name: "v. Vignesh",
    time: "4 years ago",
    rating: 5,
    text: "",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjVEw4lg66kWuxveHfSt6eoDRjRtMUCNCsuls-9Ts7Yjof9jokjIFA=s128-c0x00000000-cc-rp-mo",
    url:  "https://www.google.com/maps/contrib/105256845171088494172/reviews",
  },
  {
    name: "Vishwa Karthi",
    time: "5 years ago",
    rating: 5,
    text: "",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjUQAeYh5rWYeBw09NDLcwCV1wYcTcC5dJJVwt5R820g93ewIgU=s128-c0x00000000-cc-rp-mo",
    url:  "https://www.google.com/maps/contrib/110582462356116185749/reviews",
  },
  {
    name: "Aaron Akash",
    time: "5 years ago",
    rating: 5,
    text: "",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjVkeUXidvGr5XWQVWBcfIXfUPpiPL_U148e3zFQQidawfxYVluD=s128-c0x00000000-cc-rp-mo-ba2",
    url:  "https://www.google.com/maps/contrib/107694646345848315195/reviews",
  },
  {
    name: "AKASH S",
    time: "5 years ago",
    rating: 5,
    text: "",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjVE4jq-Jh578ba_1ZYOcg5N_azfqkj4kanRDKrcsdCfCa4FpuU0=s128-c0x00000000-cc-rp-mo",
    url:  "https://www.google.com/maps/contrib/111154956684016173543/reviews",
  },
  {
    name: "Abdul Hakeem",
    time: "5 years ago",
    rating: 5,
    text: "",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjW9N9ruzNXuWrDlApCAQ_zi80stzNCCGhm3MSzfiQQupO48rTB21g=s128-c0x00000000-cc-rp-mo",
    url:  "https://www.google.com/maps/contrib/102235838649681775281/reviews",
  },
];

// Triple for seamless continuous loop
const allReviews = [...reviews, ...reviews, ...reviews];

const REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJV_G4ujVjUjoR52CHaXrL6Qg";

function GoogleG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.58-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "88px 0", background: "var(--bg-soft)" }}>
      <div className="container">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label">Google Reviews</span>
          <h2 style={{
            fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
            fontWeight: 800, marginTop: "8px", color: "var(--dark)",
          }}>
            What Our Clients Say
          </h2>
          {/* Overall rating row */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            marginTop: "16px",
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "50px",
            padding: "10px 20px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <GoogleG />
            <span style={{ fontSize: "24px", fontWeight: 900, color: "var(--dark)", lineHeight: 1 }}>4.9</span>
            <span style={{ color: "#FBBC04", fontSize: "17px", letterSpacing: "2px" }}>★★★★★</span>
            <span style={{ fontSize: "12px", color: "#9CA3AF", borderLeft: "1px solid var(--border)", paddingLeft: "12px" }}>
              10 Google Ratings
            </span>
          </div>
        </div>

      </div>

      {/* Full-width marquee */}
      <div style={{
        overflow: "hidden",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        maskImage:       "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        paddingBottom: "8px",
      }}>
        <div className="reviews-track" style={{ paddingLeft: "24px" }}>
          {allReviews.map((r, i) => {
            // Show actual text if available, otherwise honest star message
            const displayText = r.text.trim()
              ? `"${r.text}"`
              : `Rated us ${r.rating} out of 5 stars on Google.`;
            const isStarOnly = !r.text.trim();

            return (
              <a
                key={`${r.name}-${i}`}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flexShrink: 0,
                  width: "320px",
                  borderRadius: "20px",
                  padding: "24px 22px 20px",
                  background: "#fff",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  textDecoration: "none",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                {/* Header: avatar + name + Google G */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.photo}
                      alt={r.name}
                      style={{
                        width: "42px", height: "42px",
                        borderRadius: "50%", objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "13px", color: "var(--dark)", marginBottom: "2px" }}>
                        {r.name}
                      </p>
                      <p style={{ fontSize: "11px", color: "#9CA3AF" }}>
                        {r.time} · Google Review
                      </p>
                    </div>
                  </div>
                  <GoogleG />
                </div>

                {/* Stars */}
                <div style={{ color: "#FBBC04", fontSize: "15px", letterSpacing: "2px" }}>
                  {"★".repeat(r.rating)}
                </div>

                {/* Review text */}
                <p style={{
                  fontSize: "13px",
                  color: isStarOnly ? "#9CA3AF" : "#374151",
                  fontStyle: isStarOnly ? "italic" : "normal",
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {displayText}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom: leave a review CTA */}
      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <a
          href={REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: "13px", padding: "12px 26px" }}
        >
          ★ &nbsp;Leave Us a Google Review
        </a>
      </div>

    </section>
  );
}
