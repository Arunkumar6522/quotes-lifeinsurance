"use client";
import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  serviceType: string;
  contentType: "text" | "video";
  testimonial: string;
  videoUrl: string;
  rating: number;
  date: string;
  avatarUrl: string;
}

// Fallback testimonials
const fallbackTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Toronto, ON",
    serviceType: "Term Life",
    contentType: "text",
    testimonial: "Outstanding service! They took the time to explain every option and helped me find the perfect term life policy for my family. The process was smooth and I felt supported throughout.",
    videoUrl: "",
    rating: 5,
    date: "2024-02-15",
    avatarUrl: ""
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Vancouver, BC",
    serviceType: "Whole Life",
    contentType: "text",
    testimonial: "Very professional and knowledgeable team. They helped me understand the benefits of whole life insurance and found me a great rate. Highly recommend!",
    videoUrl: "",
    rating: 5,
    date: "2024-01-20",
    avatarUrl: ""
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Montreal, QC",
    serviceType: "Critical Illness",
    contentType: "text",
    testimonial: "I was looking for critical illness coverage and they made the whole process so easy. Great communication and follow-up. Thank you for protecting my family!",
    videoUrl: "",
    rating: 5,
    date: "2024-03-01",
    avatarUrl: ""
  },
];

// Extract YouTube video ID
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const shortMatch = url.match(/youtu\.be\/([^?&\s]{11})/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
  return longMatch ? longMatch[1] : null;
}

// Get initials from name
function getInitials(name: string): string {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

// Star rating
function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={s <= rating ? "#fbbf24" : "#e5e7eb"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

// Avatar component
function Avatar({ name, avatarUrl, size = 48 }: { name: string; avatarUrl?: string; size?: number }) {
  const [imgError, setImgError] = useState(false);
  
  if (imgError || !avatarUrl) {
    return (
      <div 
        className="avatar-fallback"
        style={{ width: size, height: size, fontSize: size * 0.35 }}
      >
        {getInitials(name)}
      </div>
    );
  }
  
  return (
    <img 
      src={avatarUrl} 
      alt={name}
      className="avatar-img"
      style={{ width: size, height: size }}
      onError={() => setImgError(true)}
    />
  );
}

// Skeleton loader component for testimonials
function TestimonialSkeleton() {
  return (
    <div className="featured skeleton-featured">
      <div className="featured-content">
        <div className="featured-quote skeleton-quote-wrap">
          <div className="skeleton skeleton-quote-line"></div>
          <div className="skeleton skeleton-quote-line"></div>
          <div className="skeleton skeleton-quote-line short"></div>
        </div>
      </div>
      <div className="author-row">
        <div className="skeleton skeleton-avatar"></div>
        <div className="author-info">
          <div className="skeleton skeleton-name"></div>
          <div className="skeleton skeleton-location"></div>
        </div>
        <div className="author-meta">
          <div className="skeleton skeleton-service"></div>
          <div className="skeleton skeleton-stars"></div>
        </div>
      </div>
    </div>
  );
}

function TestimonialListSkeleton() {
  return (
    <div className="testimonials-list">
      <div className="list-header">
        <div className="skeleton skeleton-list-title"></div>
        <div className="skeleton skeleton-list-count"></div>
      </div>
      <div className="list-scroll">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="list-card skeleton-list-card">
            <div className="skeleton skeleton-list-avatar"></div>
            <div className="list-card-content">
              <div className="skeleton skeleton-list-name"></div>
              <div className="skeleton skeleton-list-loc"></div>
              <div className="skeleton skeleton-list-text"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const sheetUrl = "https://script.google.com/macros/s/AKfycbwzoJbeZvpRY3_pVNgjgDuLqBSsJ9GVuu5MdVTvtne2vIpVyX8YBPWFg23aQ0mhKPFqkg/exec";
    
    fetch(sheetUrl)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setTestimonials(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const current = testimonials[activeIndex];
  const youtubeId = current?.contentType === "video" ? getYouTubeId(current.videoUrl) : null;

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          {/* Header */}
          <div className="header">
            <span className="badge">Client Stories</span>
            <h2>What Our Clients Say</h2>
            <p>Real experiences from families we&apos;ve helped protect</p>
          </div>

          {/* Skeleton Content */}
          <div className="content-grid">
            <TestimonialSkeleton />
            <TestimonialListSkeleton />
          </div>
        </div>

      </section>
    );
  }

  return (
    <section 
      className="testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header */}
        <div className="header">
          <span className="badge">Client Stories</span>
          <h2>What Our Clients Say</h2>
          <p>Real experiences from families we&apos;ve helped protect</p>
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Left: Featured Video/Quote */}
          <div className="featured">
            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <div className="nav-arrows">
                <button className="nav-arrow nav-arrow--prev" onClick={goPrev} aria-label="Previous testimonial">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button className="nav-arrow nav-arrow--next" onClick={goNext} aria-label="Next testimonial">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            )}

            <div className="featured-content" key={activeIndex}>
              {youtubeId ? (
                <>
                  <div className="video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${current.name} testimonial`}
                    />
                  </div>
                  {/* Show text below video if available */}
                  {current?.testimonial && (
                    <div className="video-quote-text">
                      <p>&ldquo;{current.testimonial}&rdquo;</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="featured-quote">
                  <svg className="quote-icon" viewBox="0 0 24 24" fill="var(--green)" opacity="0.15">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                  </svg>
                  <p className="quote-text">&ldquo;{current?.testimonial}&rdquo;</p>
                </div>
              )}
            </div>
            
            {/* Author info */}
            <div className="author-row">
              <Avatar name={current?.name || ""} avatarUrl={current?.avatarUrl} size={52} />
              <div className="author-info">
                <h4>{current?.name}</h4>
                <p>{current?.location}</p>
              </div>
              <div className="author-meta">
                <span className="service-tag">{current?.serviceType}</span>
                <Stars rating={current?.rating || 5} />
              </div>
            </div>

            {/* Pagination & Progress */}
            {testimonials.length > 1 && (
              <div className="pagination-bar">
                <span className="pagination-text">{activeIndex + 1} of {testimonials.length}</span>
                <div className="progress-dots">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`progress-dot ${idx === activeIndex ? "progress-dot--active" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="auto-play-indicator">
                  {isPaused ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--muted)">
                      <rect x="6" y="4" width="4" height="16"/>
                      <rect x="14" y="4" width="4" height="16"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green)">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Scrollable List */}
          <div className="testimonials-list">
            <div className="list-header">
              <h3>All Reviews</h3>
              <span className="review-count">{testimonials.length} reviews</span>
            </div>
            <div className="list-scroll" data-lenis-prevent>
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  className={`list-card ${idx === activeIndex ? "list-card--active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Avatar name={t.name} avatarUrl={t.avatarUrl} size={44} />
                  <div className="list-card-content">
                    <div className="list-card-header">
                      <h5>{t.name}</h5>
                      {t.contentType === "video" && (
                        <span className="video-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                          </svg>
                        </span>
                      )}
                    </div>
                    <span className="list-card-location">{t.location}</span>
                    <p className="list-card-preview">{t.testimonial.slice(0, 80)}...</p>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Scroll indicator */}
            {testimonials.length > 4 && (
              <div className="scroll-hint">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
                <span>Scroll for more</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? "dot--active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
