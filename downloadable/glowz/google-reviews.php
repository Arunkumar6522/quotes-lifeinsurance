<?php
/**
 * Google Reviews Proxy — Quotes Life Insurance
 * Fetches live reviews from Google Places API server-side.
 * API key is never exposed to the browser.
 *
 * HOW TO USE:
 *   Called via fetch('/google-reviews.php') from the page JS.
 *   Returns JSON: { rating, total, reviews: [...] }
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// ── Configuration ─────────────────────────────────────────────────────────────
$api_key  = 'AIzaSyB1p069iCVICdVA3T1CuI1lrCb_NeWwuWs';
$place_id = 'ChIJV_G4ujVjUjoR52CHaXrL6Qg'; // KADS Enterprises / Quotes Life Insurance

// ── Cache: store result for 6 hours so we don't hammer the API ────────────────
$cache_file = __DIR__ . '/reviews-cache.json';
$cache_ttl  = 6 * 60 * 60; // 6 hours in seconds

if (file_exists($cache_file) && (time() - filemtime($cache_file)) < $cache_ttl) {
    echo file_get_contents($cache_file);
    exit;
}

// ── Fetch from Google Places API ──────────────────────────────────────────────
$fields = 'name,rating,user_ratings_total,reviews';
$url    = "https://maps.googleapis.com/maps/api/place/details/json"
        . "?place_id={$place_id}"
        . "&fields={$fields}"
        . "&key={$api_key}";

$context = stream_context_create([
    'http' => ['timeout' => 10]
]);

$response = @file_get_contents($url, false, $context);

if (!$response) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not reach Google API']);
    exit;
}

$data = json_decode($response, true);

if (($data['status'] ?? '') !== 'OK') {
    http_response_code(500);
    echo json_encode([
        'error'  => 'Google API error',
        'status' => $data['status'] ?? 'UNKNOWN',
        'message'=> $data['error_message'] ?? ''
    ]);
    exit;
}

$result = $data['result'] ?? [];

// ── Shape the response ────────────────────────────────────────────────────────
$reviews = [];
foreach (($result['reviews'] ?? []) as $r) {
    // Only include reviews with text
    if (empty(trim($r['text'] ?? ''))) continue;

    $reviews[] = [
        'author'      => $r['author_name']          ?? 'Anonymous',
        'photo'       => $r['profile_photo_url']    ?? '',
        'rating'      => (int)($r['rating']         ?? 5),
        'text'        => $r['text']                 ?? '',
        'time'        => $r['relative_time_description'] ?? '',
        'author_url'  => $r['author_url']           ?? '#',
    ];
}

$output = [
    'name'   => $result['name']                ?? 'Quotes Life Insurance',
    'rating' => $result['rating']              ?? 5.0,
    'total'  => $result['user_ratings_total']  ?? 0,
    'reviews'=> $reviews,
];

// ── Save cache ────────────────────────────────────────────────────────────────
file_put_contents($cache_file, json_encode($output));

echo json_encode($output);
