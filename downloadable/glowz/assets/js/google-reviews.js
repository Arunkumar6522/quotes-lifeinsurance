/**
 * Google Reviews Loader — Quotes Life Insurance
 * Fetches reviews from google-reviews.php (server-side proxy)
 * and injects them into the existing .wpo-testimonial-active owl carousel.
 */
(function ($) {
    'use strict';

    // ── Helpers ───────────────────────────────────────────────────────────────

    function starSVG(rating) {
        var stars = '';
        for (var i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<span style="color:#FBBC04;font-size:18px;">&#9733;</span>';
            } else {
                stars += '<span style="color:#ddd;font-size:18px;">&#9733;</span>';
            }
        }
        return stars;
    }

    function googleLogoSVG() {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" height="30">'
            + '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/>'
            + '<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>'
            + '<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>'
            + '<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.58-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>'
            + '</svg>';
    }

    function avatarInitials(name) {
        var parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    var avatarColors = ['#0E7A47','#1A6B3C','#0B5E3A','#155E40','#247D50','#0D6040'];

    function buildReviewCard(review, index) {
        var initials   = avatarInitials(review.author);
        var color      = avatarColors[index % avatarColors.length];
        var photoHtml  = review.photo
            ? '<img src="' + review.photo + '" alt="' + review.author + '" style="width:52px;height:52px;border-radius:50%;object-fit:cover;">'
            : '<div style="width:52px;height:52px;border-radius:50%;background:' + color + ';display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px;flex-shrink:0;">' + initials + '</div>';

        // If no text, show a friendly fallback
        var rawText = (review.text || '').trim();
        var displayText = rawText.length > 0
            ? (rawText.length > 220 ? rawText.substring(0, 220).trim() + '&hellip;' : rawText)
            : 'Gave us ' + review.rating + ' stars on Google \u2014 thank you!';

        return '<div class="wpo-testimonial-item">'
            + '  <div class="t-logo" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">'
            + '    ' + googleLogoSVG()
            + '    <span style="font-size:12px;color:#9CA3AF;font-style:italic;">Posted on Google</span>'
            + '  </div>'
            + '  <p style="font-size:15px;line-height:1.75;color:#4B5563;">&ldquo;' + displayText + '&rdquo;</p>'
            + '  <div class="wpo-testimonial-info" style="margin-top:20px;">'
            + '    <div class="wpo-testimonial-info-img" style="margin-right:14px;">' + photoHtml + '</div>'
            + '    <div class="wpo-testimonial-info-text">'
            + '      <h5 style="margin:0 0 4px;"><a href="' + review.author_url + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">' + review.author + '</a></h5>'
            + '      <span style="font-size:13px;color:#6B7280;">' + (review.time || 'Google Review') + '</span>'
            + '    </div>'
            + '    <div class="rating" style="margin-left:auto;">' + starSVG(review.rating) + '</div>'
            + '  </div>'
            + '</div>';
    }

    // ── Main ──────────────────────────────────────────────────────────────────

    function loadGoogleReviews() {
        var $carousel = $('.wpo-testimonial-active');
        if (!$carousel.length) return;

        $.getJSON('google-reviews.php')
            .done(function (data) {
                if (!data.reviews || !data.reviews.length) return; // keep fallback cards

                // Destroy existing owl instance before replacing slides
                if ($carousel.hasClass('owl-loaded')) {
                    $carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                }

                // Build new cards
                var html = '';
                $.each(data.reviews, function (i, review) {
                    html += buildReviewCard(review, i);
                });
                $carousel.html(html);

                // Update overall rating in heading if element exists
                if (data.rating) {
                    $('.gr-overall-score').text(parseFloat(data.rating).toFixed(1));
                }
                if (data.total) {
                    $('.gr-total-count').text('Based on ' + data.total + ' Google Reviews');
                }

                // Re-init owl carousel with same settings as original
                $carousel.addClass('owl-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    smartSpeed: 500,
                    responsive: {
                        0:   { items: 1 },
                        768: { items: 1 },
                        992: { items: 1 }
                    }
                });
            })
            .fail(function () {
                // PHP file missing or server error — keep the static fallback cards
                console.log('Google Reviews: using static fallback cards.');
            });
    }

    // Run after DOM + owl are ready
    $(window).on('load', function () {
        loadGoogleReviews();
    });

}(jQuery));
