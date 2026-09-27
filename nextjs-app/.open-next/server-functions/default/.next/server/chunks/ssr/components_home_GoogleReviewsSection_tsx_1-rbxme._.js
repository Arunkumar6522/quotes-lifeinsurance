module.exports=[39624,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d({name:a,photoUrl:e}){let[f,g]=(0,c.useState)(!1);return f||!e?(0,b.jsx)("div",{className:"gr-reviewer-avatar-fallback",children:a.split(" ").map(a=>a[0]).join("").toUpperCase().slice(0,2)}):(0,b.jsx)("img",{src:e,alt:a,className:"gr-reviewer-photo",onError:()=>g(!0),referrerPolicy:"no-referrer"})}function e({size:a=24}){return(0,b.jsxs)("svg",{width:a,height:a,viewBox:"0 0 48 48",children:[(0,b.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"}),(0,b.jsx)("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),(0,b.jsx)("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),(0,b.jsx)("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.58-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]})}function f({rating:a,size:c=16}){return(0,b.jsx)("div",{style:{display:"flex",gap:"2px"},children:[1,2,3,4,5].map(d=>(0,b.jsx)("svg",{width:c,height:c,viewBox:"0 0 24 24",fill:d<=a?"#fbbf24":"#e5e7eb",children:(0,b.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},d))})}function g(){return(0,b.jsxs)("div",{className:"gr-review-card gr-skeleton-card",children:[(0,b.jsxs)("div",{className:"gr-review-header",children:[(0,b.jsx)("div",{className:"gr-skeleton gr-skeleton-avatar"}),(0,b.jsxs)("div",{className:"gr-reviewer-info",children:[(0,b.jsx)("div",{className:"gr-skeleton gr-skeleton-name"}),(0,b.jsx)("div",{className:"gr-skeleton gr-skeleton-time"})]}),(0,b.jsx)("div",{className:"gr-skeleton gr-skeleton-icon"})]}),(0,b.jsx)("div",{className:"gr-skeleton gr-skeleton-stars"}),(0,b.jsx)("div",{className:"gr-skeleton gr-skeleton-text"}),(0,b.jsx)("div",{className:"gr-skeleton gr-skeleton-text short"})]})}a.s(["default",0,function(){let[a,h]=(0,c.useState)(null),[i,j]=(0,c.useState)(!0),[k,l]=(0,c.useState)(null),[m,n]=(0,c.useState)(!1),o=(0,c.useRef)(null),p="https://www.google.com/maps/place/DCW+FINANCIAL+INC./@45.4978758,-73.6484381,17z/";if((0,c.useEffect)(()=>{fetch("/api/google-reviews").then(a=>a.json()).then(a=>{a.success&&a.data?(h(a.data),l(null)):(l(a.error||"Failed to load reviews"),console.error("Google Reviews API error:",a)),j(!1)}).catch(a=>{console.error("Failed to fetch Google reviews:",a),l("Failed to load reviews"),j(!1)})},[]),!i&&!a)return null;let q=a?.reviews?[...a.reviews,...a.reviews]:[];return(0,b.jsxs)("section",{className:"google-reviews-section",children:[(0,b.jsxs)("div",{className:"container",children:[(0,b.jsxs)("div",{className:"gr-header",children:[(0,b.jsxs)("div",{className:"gr-header-left",children:[(0,b.jsxs)("div",{className:"gr-google-badge",children:[(0,b.jsx)(e,{size:28}),(0,b.jsx)("span",{children:"Google Reviews"})]}),a&&(0,b.jsxs)("div",{className:"gr-rating-summary",children:[(0,b.jsx)("span",{className:"gr-rating-number",children:a.rating?.toFixed(1)||"5.0"}),(0,b.jsxs)("div",{className:"gr-rating-details",children:[(0,b.jsx)(f,{rating:Math.round(a.rating||5),size:20}),(0,b.jsxs)("span",{className:"gr-review-count",children:["Based on ",a.totalReviews||0," review",1!==a.totalReviews?"s":""]})]})]})]}),(0,b.jsx)("a",{href:a?.url||p,target:"_blank",rel:"noopener noreferrer",className:"gr-write-review-btn",children:"Write a Review"})]}),i?(0,b.jsx)("div",{className:"gr-carousel-wrapper",children:(0,b.jsxs)("div",{className:"gr-carousel-track gr-skeleton-track",children:[(0,b.jsx)(g,{}),(0,b.jsx)(g,{}),(0,b.jsx)(g,{}),(0,b.jsx)(g,{}),(0,b.jsx)(g,{})]})}):k?(0,b.jsx)("div",{className:"gr-error",children:(0,b.jsxs)("p",{children:["Unable to load Google Reviews. ",(0,b.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"View on Google Maps"})]})}):0===q.length?(0,b.jsx)("div",{className:"gr-empty",children:(0,b.jsx)("p",{children:"No reviews yet. Be the first to review!"})}):(0,b.jsx)("div",{className:"gr-carousel-wrapper",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:(0,b.jsx)("div",{ref:o,className:`gr-carousel-track ${m?"paused":""}`,children:q.map((a,c)=>(0,b.jsxs)("a",{href:a.author_url||"#",target:"_blank",rel:"noopener noreferrer",className:"gr-review-card",children:[(0,b.jsxs)("div",{className:"gr-review-header",children:[(0,b.jsx)(d,{name:a.author_name,photoUrl:a.profile_photo_url}),(0,b.jsxs)("div",{className:"gr-reviewer-info",children:[(0,b.jsx)("h4",{className:"gr-reviewer-name",children:a.author_name}),(0,b.jsx)("span",{className:"gr-review-time",children:a.relative_time_description})]}),(0,b.jsx)("div",{className:"gr-google-icon",children:(0,b.jsx)(e,{size:20})})]}),(0,b.jsx)(f,{rating:a.rating,size:18}),(0,b.jsx)("p",{className:"gr-review-text",children:a.text||"Gave us 5 stars on Google!"})]},c))})}),(0,b.jsx)("div",{className:"gr-footer",children:(0,b.jsxs)("a",{href:a?.url||p,target:"_blank",rel:"noopener noreferrer",className:"gr-see-all-btn",children:["See All Reviews on Google",(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]})})]}),(0,b.jsx)("style",{children:`
        .google-reviews-section {
          padding: 80px 0;
          background: #f8faf9;
          overflow: hidden;
        }

        .gr-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 40px;
        }

        .gr-header-left {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .gr-google-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          color: var(--dark);
        }

        .gr-rating-summary {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .gr-rating-number {
          font-size: 42px;
          font-weight: 800;
          color: var(--dark);
          line-height: 1;
        }

        .gr-rating-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gr-review-count {
          font-size: 13px;
          color: var(--muted);
        }

        .gr-write-review-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #fff;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          color: #4285F4;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .gr-write-review-btn:hover {
          border-color: #4285F4;
          background: rgba(66, 133, 244, 0.05);
        }

        .gr-loading {
          display: flex;
          justify-content: center;
          padding: 60px 0;
        }
        .gr-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e5e7eb;
          border-top-color: #4285F4;
          border-radius: 50%;
          animation: gr-spin 0.8s linear infinite;
        }
        @keyframes gr-spin {
          to { transform: rotate(360deg); }
        }

        /* Skeleton Styles */
        .gr-skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: gr-shimmer 1.5s infinite;
          border-radius: 8px;
        }
        @keyframes gr-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .gr-skeleton-card {
          pointer-events: none;
        }
        .gr-skeleton-track {
          animation: none !important;
        }
        .gr-skeleton-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .gr-skeleton-name {
          height: 16px;
          width: 100px;
          margin-bottom: 6px;
        }
        .gr-skeleton-time {
          height: 12px;
          width: 70px;
        }
        .gr-skeleton-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        .gr-skeleton-stars {
          height: 18px;
          width: 100px;
          margin: 8px 0;
        }
        .gr-skeleton-text {
          height: 14px;
          width: 100%;
          margin-bottom: 8px;
        }
        .gr-skeleton-text.short {
          width: 70%;
        }

        .gr-empty, .gr-error {
          text-align: center;
          padding: 60px 20px;
          color: var(--muted);
        }
        .gr-error a {
          color: #4285F4;
          text-decoration: underline;
        }

        /* Carousel */
        .gr-carousel-wrapper {
          position: relative;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        .gr-carousel-track {
          display: flex;
          gap: 20px;
          animation: gr-scroll 30s linear infinite;
          width: max-content;
          padding: 10px 0;
        }

        .gr-carousel-track.paused {
          animation-play-state: paused;
        }

        @keyframes gr-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .gr-review-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          transition: all 0.25s;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 300px;
          max-width: 300px;
          flex-shrink: 0;
        }
        .gr-review-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-4px);
          border-color: #4285F4;
        }

        .gr-review-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gr-reviewer-photo {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
        }

        .gr-reviewer-avatar-fallback {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4285F4, #34A853);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }

        .gr-reviewer-info {
          flex: 1;
          min-width: 0;
        }

        .gr-reviewer-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--dark);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .gr-review-time {
          font-size: 12px;
          color: var(--muted);
        }

        .gr-google-icon {
          flex-shrink: 0;
        }

        .gr-review-text {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gr-footer {
          text-align: center;
          margin-top: 32px;
        }

        .gr-see-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4285F4;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .gr-see-all-btn:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .google-reviews-section {
            padding: 60px 0;
          }
          .gr-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .gr-rating-number {
            font-size: 36px;
          }
          .gr-review-card {
            min-width: 280px;
            max-width: 280px;
          }
        }

        @media (max-width: 500px) {
          .gr-header-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .gr-review-card {
            min-width: 260px;
            max-width: 260px;
          }
        }
      `})]})}])}];

//# sourceMappingURL=components_home_GoogleReviewsSection_tsx_1-rbxme._.js.map