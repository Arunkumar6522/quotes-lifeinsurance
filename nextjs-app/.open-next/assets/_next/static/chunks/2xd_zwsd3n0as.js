(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,34305,e=>{"use strict";var t=e.i(43476),r=e.i(46932),i=e.i(71645),a=e.i(49652);let o={some:0,all:1},n={up:{hidden:{opacity:0,y:24},show:e=>({opacity:1,y:0,transition:{duration:.4,delay:e,ease:[.22,1,.36,1]}})},left:{hidden:{opacity:0,x:-24},show:e=>({opacity:1,x:0,transition:{duration:.4,delay:e,ease:[.22,1,.36,1]}})},right:{hidden:{opacity:0,x:24},show:e=>({opacity:1,x:0,transition:{duration:.4,delay:e,ease:[.22,1,.36,1]}})},none:{hidden:{opacity:0},show:e=>({opacity:1,transition:{duration:.3,delay:e,ease:"easeOut"}})}};e.s(["default",0,function({children:e,className:s,style:l,delay:d=0,direction:c="up",once:p=!0}){let x=(0,i.useRef)(null),h=function(e,{root:t,margin:r,amount:n,once:s=!1,initial:l=!1}={}){let[d,c]=(0,i.useState)(l);return(0,i.useEffect)(()=>{if(!e.current||s&&d)return;let i={root:t&&t.current||void 0,margin:r,amount:n};return function(e,t,{root:r,margin:i,amount:n="some"}={}){let s=(0,a.resolveElements)(e),l=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let r=l.get(e.target);if(!!r!==e.isIntersecting)if(e.isIntersecting){let r=t(e.target,e);"function"==typeof r?l.set(e.target,r):d.unobserve(e.target)}else"function"==typeof r&&(r(e),l.delete(e.target))})},{root:r,rootMargin:i,threshold:"number"==typeof n?n:o[n]});return s.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(c(!0),s?void 0:()=>c(!1)),i)},[t,e,r,s,n]),d}(x,{once:p,margin:"-60px"}),g=n[c];return(0,t.jsx)(r.motion.div,{ref:x,className:s,style:l,initial:"hidden",animate:h?"show":"hidden",variants:g,custom:d,children:e})}],34305)},40210,e=>{"use strict";var t=e.i(43476),r=e.i(46932),i=e.i(22016),a=e.i(7761);let o=(e=0)=>({hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.55,delay:e,ease:"easeOut"}}}),n=[{icon:(0,t.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,t.jsx)("polyline",{points:"9 12 11 14 15 10"})]}),textEn:"Fully Regulated & Licensed",textFr:"Entièrement réglementé et agréé"},{icon:(0,t.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),(0,t.jsx)("path",{d:"M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"})]}),textEn:"100% Free Advice, Always",textFr:"Conseils 100% gratuits, toujours"},{icon:(0,t.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,t.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),textEn:"Truly Independent Broker",textFr:"Courtier vraiment indépendant"}];e.s(["default",0,function(){let{t:e,lang:s}=(0,a.useLang)();return(0,t.jsxs)("section",{className:"about-section",children:[(0,t.jsx)("div",{className:"container about-container",children:(0,t.jsxs)("div",{className:"about-body",children:[(0,t.jsxs)(r.motion.div,{className:"about-copy",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},children:[(0,t.jsx)(r.motion.span,{variants:o(0),className:"section-label",children:e.aboutLabel}),(0,t.jsxs)(r.motion.h2,{variants:o(.07),className:"about-h2",children:[e.aboutH2a," ",(0,t.jsx)("span",{style:{color:"var(--green)"},children:e.aboutH2b})]}),(0,t.jsx)(r.motion.p,{variants:o(.12),className:"about-p",children:e.aboutP1}),(0,t.jsx)(r.motion.p,{variants:o(.16),className:"about-p",children:e.aboutP2}),(0,t.jsx)(r.motion.div,{variants:o(.2),children:(0,t.jsx)(i.default,{href:"/about",className:"btn-primary",children:e.aboutCta})})]}),(0,t.jsx)(r.motion.div,{className:"about-right",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},children:n.map((e,i)=>(0,t.jsxs)(r.motion.div,{variants:o(.08*i),className:"about-pillar",children:[(0,t.jsx)("span",{className:"about-pillar-icon",children:e.icon}),(0,t.jsx)("span",{className:"about-pillar-text",children:"fr"===s?e.textFr:e.textEn})]},e.textEn))})]})}),(0,t.jsx)("style",{children:`
        /* ── Section ── */
        .about-section {
          background: #fff;
          padding: 80px 0;
        }
        .about-container {
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        /* ── Body two-col ── */
        .about-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* ── Copy ── */
        .about-copy {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .about-h2 {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 800;
          line-height: 1.18;
          color: var(--dark);
          margin: 8px 0 18px;
        }
        .about-p {
          font-size: 15px;
          color: var(--body);
          line-height: 1.8;
          margin-bottom: 14px;
        }

        /* ── Right col ── */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Pillar rows */
        .about-pillar {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg-soft);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .about-pillar:hover {
          border-color: rgba(74,164,97,0.35);
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          transform: translateX(4px);
        }
        .about-pillar-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .about-pillar:hover .about-pillar-icon {
          background: rgba(74,164,97,0.18);
        }
        .about-pillar-text {
          font-size: 14px;
          font-weight: 700;
          color: var(--dark);
        }

        /* AMF badge */
        .about-amf {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          background: rgba(74,164,97,0.05);
          border: 1px solid rgba(74,164,97,0.2);
          margin-top: 4px;
        }
        .about-amf-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(74,164,97,0.12);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .about-amf-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 3px;
        }
        .about-amf-sub {
          font-size: 12px;
          color: var(--muted);
        }

        /* ── MOBILE FIRST ── */
        @media (max-width: 768px) {
          .about-section { padding: 56px 0; }
          .about-container { gap: 40px; }

          /* Stack body */
          .about-body {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-pillar:hover { transform: none; }
        }

        @media (max-width: 400px) {
          .about-section { padding: 44px 0; }
        }
      `})]})}])},3436,e=>{"use strict";var t=e.i(43476),r=e.i(34305),i=e.i(73130),a=e.i(7761);e.s(["default",0,function(){let{openModal:e}=(0,i.useModal)(),{t:o}=(0,a.useLang)();return(0,t.jsxs)("section",{className:"cta-section",children:[(0,t.jsx)("div",{className:"container cta-inner",children:(0,t.jsxs)(r.default,{className:"cta-content",children:[(0,t.jsx)("span",{className:"cta-eyebrow",children:"Free Consultation"}),(0,t.jsx)("h2",{className:"cta-heading",children:o.ctaH2}),(0,t.jsx)("p",{className:"cta-sub",children:o.ctaSub}),(0,t.jsx)("div",{className:"cta-btns",children:(0,t.jsx)("button",{onClick:e,className:"cta-btn-main",children:o.ctaBtn})}),(0,t.jsx)("p",{className:"cta-trust",children:o.ctaTrust})]})}),(0,t.jsx)("style",{children:`
        .cta-section {
          background: var(--green);
          position: relative;
          padding: 80px 0;
          overflow: hidden;
        }
        /* Subtle decorative circle */
        .cta-section::before {
          content: "";
          position: absolute;
          right: -120px; top: -120px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .cta-section::after {
          content: "";
          position: absolute;
          left: -80px; bottom: -80px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
        }
        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 620px;
          margin: 0 auto;
        }

        /* Eyebrow */
        .cta-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 5px 16px;
          margin-bottom: 20px;
        }

        /* Heading */
        .cta-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.025em;
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 16px;
        }

        /* Sub */
        .cta-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* Buttons */
        .cta-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 28px;
        }
        .cta-btn-main {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--green);
          font-weight: 800;
          font-size: 14px;
          padding: 15px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .cta-btn-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.2);
        }
        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 14px 28px;
          border-radius: 50px;
          border: 2px solid rgba(255,255,255,0.4);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .cta-btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.7);
        }

        /* Trust */
        .cta-trust {
          font-size: 11.5px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.3px;
        }

        @media (max-width: 500px) {
          .cta-btns { flex-direction: column; width: 100%; }
          .cta-btn-main, .cta-btn-ghost { width: 100%; justify-content: center; }
          .cta-section { padding: 56px 0; }
        }
      `})]})}])},35060,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function i({name:e,photoUrl:a}){let[o,n]=(0,r.useState)(!1);return o||!a?(0,t.jsx)("div",{className:"gr-reviewer-avatar-fallback",children:e.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2)}):(0,t.jsx)("img",{src:a,alt:e,className:"gr-reviewer-photo",onError:()=>n(!0),referrerPolicy:"no-referrer"})}function a({size:e=24}){return(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 48 48",children:[(0,t.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"}),(0,t.jsx)("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),(0,t.jsx)("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),(0,t.jsx)("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.58-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]})}function o({rating:e,size:r=16}){return(0,t.jsx)("div",{style:{display:"flex",gap:"2px"},children:[1,2,3,4,5].map(i=>(0,t.jsx)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:i<=e?"#fbbf24":"#e5e7eb",children:(0,t.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},i))})}function n(){return(0,t.jsxs)("div",{className:"gr-review-card gr-skeleton-card",children:[(0,t.jsxs)("div",{className:"gr-review-header",children:[(0,t.jsx)("div",{className:"gr-skeleton gr-skeleton-avatar"}),(0,t.jsxs)("div",{className:"gr-reviewer-info",children:[(0,t.jsx)("div",{className:"gr-skeleton gr-skeleton-name"}),(0,t.jsx)("div",{className:"gr-skeleton gr-skeleton-time"})]}),(0,t.jsx)("div",{className:"gr-skeleton gr-skeleton-icon"})]}),(0,t.jsx)("div",{className:"gr-skeleton gr-skeleton-stars"}),(0,t.jsx)("div",{className:"gr-skeleton gr-skeleton-text"}),(0,t.jsx)("div",{className:"gr-skeleton gr-skeleton-text short"})]})}e.s(["default",0,function(){let[e,s]=(0,r.useState)(null),[l,d]=(0,r.useState)(!0),[c,p]=(0,r.useState)(null),[x,h]=(0,r.useState)(!1),g=(0,r.useRef)(null),m="https://www.google.com/maps/place/DCW+FINANCIAL+INC./@45.4978758,-73.6484381,17z/";if((0,r.useEffect)(()=>{fetch("/api/google-reviews").then(e=>e.json()).then(e=>{e.success&&e.data?(s(e.data),p(null)):(p(e.error||"Failed to load reviews"),console.error("Google Reviews API error:",e)),d(!1)}).catch(e=>{console.error("Failed to fetch Google reviews:",e),p("Failed to load reviews"),d(!1)})},[]),!l&&!e)return null;let f=e?.reviews?[...e.reviews,...e.reviews]:[];return(0,t.jsxs)("section",{className:"google-reviews-section",children:[(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"gr-header",children:[(0,t.jsxs)("div",{className:"gr-header-left",children:[(0,t.jsxs)("div",{className:"gr-google-badge",children:[(0,t.jsx)(a,{size:28}),(0,t.jsx)("span",{children:"Google Reviews"})]}),e&&(0,t.jsxs)("div",{className:"gr-rating-summary",children:[(0,t.jsx)("span",{className:"gr-rating-number",children:e.rating?.toFixed(1)||"5.0"}),(0,t.jsxs)("div",{className:"gr-rating-details",children:[(0,t.jsx)(o,{rating:Math.round(e.rating||5),size:20}),(0,t.jsxs)("span",{className:"gr-review-count",children:["Based on ",e.totalReviews||0," review",1!==e.totalReviews?"s":""]})]})]})]}),(0,t.jsx)("a",{href:e?.url||m,target:"_blank",rel:"noopener noreferrer",className:"gr-write-review-btn",children:"Write a Review"})]}),l?(0,t.jsx)("div",{className:"gr-carousel-wrapper",children:(0,t.jsxs)("div",{className:"gr-carousel-track gr-skeleton-track",children:[(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{})]})}):c?(0,t.jsx)("div",{className:"gr-error",children:(0,t.jsxs)("p",{children:["Unable to load Google Reviews. ",(0,t.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"View on Google Maps"})]})}):0===f.length?(0,t.jsx)("div",{className:"gr-empty",children:(0,t.jsx)("p",{children:"No reviews yet. Be the first to review!"})}):(0,t.jsx)("div",{className:"gr-carousel-wrapper",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:(0,t.jsx)("div",{ref:g,className:`gr-carousel-track ${x?"paused":""}`,children:f.map((e,r)=>(0,t.jsxs)("a",{href:e.author_url||"#",target:"_blank",rel:"noopener noreferrer",className:"gr-review-card",children:[(0,t.jsxs)("div",{className:"gr-review-header",children:[(0,t.jsx)(i,{name:e.author_name,photoUrl:e.profile_photo_url}),(0,t.jsxs)("div",{className:"gr-reviewer-info",children:[(0,t.jsx)("h4",{className:"gr-reviewer-name",children:e.author_name}),(0,t.jsx)("span",{className:"gr-review-time",children:e.relative_time_description})]}),(0,t.jsx)("div",{className:"gr-google-icon",children:(0,t.jsx)(a,{size:20})})]}),(0,t.jsx)(o,{rating:e.rating,size:18}),(0,t.jsx)("p",{className:"gr-review-text",children:e.text||"Gave us 5 stars on Google!"})]},r))})}),(0,t.jsx)("div",{className:"gr-footer",children:(0,t.jsxs)("a",{href:e?.url||m,target:"_blank",rel:"noopener noreferrer",className:"gr-see-all-btn",children:["See All Reviews on Google",(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]})})]}),(0,t.jsx)("style",{children:`
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
      `})]})}])},51442,e=>{"use strict";var t=e.i(43476),r=e.i(46932),i=e.i(22016),a=e.i(7761),o=e.i(73130);let n=(e=0)=>({hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.65,delay:e,ease:[.22,1,.36,1]}}});e.s(["default",0,function(){let{t:e}=(0,a.useLang)(),{openModal:s}=(0,o.useModal)();return(0,t.jsxs)("section",{className:"hero-section",children:[(0,t.jsx)("div",{className:"container hero-container",children:(0,t.jsxs)("div",{className:"hero-grid",children:[(0,t.jsxs)(r.motion.div,{initial:"hidden",animate:"show",className:"hero-copy",children:[(0,t.jsxs)(r.motion.h1,{variants:n(.08),className:"hero-h1",children:[e.heroH1a,(0,t.jsx)("br",{}),(0,t.jsx)("span",{style:{color:"var(--green)"},children:e.heroH1b}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"hero-h1-sub",children:e.heroH1c})]}),(0,t.jsxs)(r.motion.p,{variants:n(.15),className:"hero-sub",children:[e.heroSub," ",(0,t.jsx)("strong",{style:{color:"var(--green)",fontWeight:800},children:e.heroFree}),"."]}),(0,t.jsxs)(r.motion.div,{variants:n(.22),className:"hero-ctas",children:[(0,t.jsx)("button",{onClick:s,className:"btn-primary",children:e.heroCta1}),(0,t.jsxs)(i.default,{href:"/about",className:"hero-learn-btn",children:[e.heroCta2,(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),(0,t.jsx)(r.motion.div,{initial:"hidden",animate:"show",variants:((e=0)=>({hidden:{opacity:0,x:48},show:{opacity:1,x:0,transition:{duration:.7,delay:e,ease:[.22,1,.36,1]}}}))(.18),className:"hero-form-col",children:(0,t.jsx)("div",{style:{overflow:"hidden",borderRadius:"16px",lineHeight:0},children:(0,t.jsx)("iframe",{src:"https://form.questionscout.com/616e35ca63bd79140f61b3ef",className:"qs-iframe",title:"Get a Free Life Insurance Quote",frameBorder:"0",scrolling:"no",allow:"clipboard-write",loading:"eager"})})})]})}),(0,t.jsx)("style",{children:`
        .hero-section { background: #f4f6f8; position: relative; }
        .hero-container { padding-top: 60px; padding-bottom: 60px; }

        .hero-grid {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 48px;
          align-items: flex-start;
        }
        .hero-copy { display: flex; flex-direction: column; }

        .hero-h1 {
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 900; line-height: 1.08;
          letter-spacing: -0.03em; color: var(--dark);
          margin-bottom: 20px;
          font-family: var(--font-sora), sans-serif;
        }
        .hero-h1-sub {
          font-size: 0.68em; font-weight: 700;
          color: #6b7280; letter-spacing: -0.01em;
        }

        .hero-sub {
          font-size: 16px; color: #4b5563;
          line-height: 1.8; margin-bottom: 32px; max-width: 460px;
        }

        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 36px; }
        .hero-learn-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: 50px;
          border: 2px solid var(--border); color: var(--dark);
          font-size: 14px; font-weight: 700; background: #fff;
          text-decoration: none; transition: all 0.2s ease;
        }
        .hero-learn-btn:hover { 
          border-color: var(--green);
          color: var(--green);
          transform: translateY(-2px);
        }
        .hero-learn-btn svg {
          transition: transform 0.2s;
        }
        .hero-learn-btn:hover svg {
          transform: translateX(3px);
        }

        .hero-form-col { width: 100%; }
        .qs-iframe {
          width: 100%; height: 640px; border: none;
          border-radius: 16px; display: block; background: #fff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          /* Form FIRST on mobile */
          .hero-form-col { order: -1; }
          .hero-copy     { order: 1; }
          .qs-iframe { height: 600px; }
        }
        @media (max-width: 600px) {
          .hero-container { padding-top: 20px !important; padding-bottom: 32px !important; }
          .hero-h1 { font-size: clamp(1.8rem, 8vw, 2.4rem) !important; }
          .hero-ctas { flex-direction: column; gap: 10px; }
          .hero-ctas button, .hero-ctas .hero-learn-btn {
            width: 100%; justify-content: center; text-align: center;
          }
          /* Full viewport width, no border-radius, no scrollbar */
          .hero-form-col {
            margin-left: -20px;
            margin-right: -20px;
            width: calc(100% + 40px);
          }
          .qs-iframe {
            height: 580px;
            border-radius: 0;
            overflow: hidden;
          }
          /* Kill any scrollbar on iframe wrapper too */
          .hero-form-col > div {
            border-radius: 0 !important;
            overflow: hidden !important;
          }
        }
      `})]})}])},53166,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let i=[{id:1,name:"Sarah Mitchell",location:"Toronto, ON",serviceType:"Term Life",contentType:"text",testimonial:"Outstanding service! They took the time to explain every option and helped me find the perfect term life policy for my family. The process was smooth and I felt supported throughout.",videoUrl:"",rating:5,date:"2024-02-15",avatarUrl:""},{id:2,name:"Michael Chen",location:"Vancouver, BC",serviceType:"Whole Life",contentType:"text",testimonial:"Very professional and knowledgeable team. They helped me understand the benefits of whole life insurance and found me a great rate. Highly recommend!",videoUrl:"",rating:5,date:"2024-01-20",avatarUrl:""},{id:3,name:"Emma Thompson",location:"Montreal, QC",serviceType:"Critical Illness",contentType:"text",testimonial:"I was looking for critical illness coverage and they made the whole process so easy. Great communication and follow-up. Thank you for protecting my family!",videoUrl:"",rating:5,date:"2024-03-01",avatarUrl:""}];function a({rating:e}){return(0,t.jsx)("div",{className:"stars",children:[1,2,3,4,5].map(r=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:r<=e?"#fbbf24":"#e5e7eb",children:(0,t.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},r))})}function o({name:e,avatarUrl:i,size:a=48}){let[n,s]=(0,r.useState)(!1);return n||!i?(0,t.jsx)("div",{className:"avatar-fallback",style:{width:a,height:a,fontSize:.35*a},children:e.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2)}):(0,t.jsx)("img",{src:i,alt:e,className:"avatar-img",style:{width:a,height:a},onError:()=>s(!0)})}function n(){return(0,t.jsxs)("div",{className:"featured skeleton-featured",children:[(0,t.jsx)("div",{className:"featured-content",children:(0,t.jsxs)("div",{className:"featured-quote skeleton-quote-wrap",children:[(0,t.jsx)("div",{className:"skeleton skeleton-quote-line"}),(0,t.jsx)("div",{className:"skeleton skeleton-quote-line"}),(0,t.jsx)("div",{className:"skeleton skeleton-quote-line short"})]})}),(0,t.jsxs)("div",{className:"author-row",children:[(0,t.jsx)("div",{className:"skeleton skeleton-avatar"}),(0,t.jsxs)("div",{className:"author-info",children:[(0,t.jsx)("div",{className:"skeleton skeleton-name"}),(0,t.jsx)("div",{className:"skeleton skeleton-location"})]}),(0,t.jsxs)("div",{className:"author-meta",children:[(0,t.jsx)("div",{className:"skeleton skeleton-service"}),(0,t.jsx)("div",{className:"skeleton skeleton-stars"})]})]})]})}function s(){return(0,t.jsxs)("div",{className:"testimonials-list",children:[(0,t.jsxs)("div",{className:"list-header",children:[(0,t.jsx)("div",{className:"skeleton skeleton-list-title"}),(0,t.jsx)("div",{className:"skeleton skeleton-list-count"})]}),(0,t.jsx)("div",{className:"list-scroll",children:[1,2,3,4].map(e=>(0,t.jsxs)("div",{className:"list-card skeleton-list-card",children:[(0,t.jsx)("div",{className:"skeleton skeleton-list-avatar"}),(0,t.jsxs)("div",{className:"list-card-content",children:[(0,t.jsx)("div",{className:"skeleton skeleton-list-name"}),(0,t.jsx)("div",{className:"skeleton skeleton-list-loc"}),(0,t.jsx)("div",{className:"skeleton skeleton-list-text"})]})]},e))})]})}let l=`
  .testimonials-section {
    padding: 80px 0;
    background: linear-gradient(180deg, #fff 0%, #f8faf9 100%);
  }

  .header {
    text-align: center;
    margin-bottom: 48px;
  }
  .badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(74,164,97,0.1);
    color: var(--green);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 20px;
    margin-bottom: 16px;
  }
  .header h2 {
    font-size: clamp(28px, 5vw, 38px);
    font-weight: 800;
    color: var(--dark);
    margin-bottom: 12px;
  }
  .header p {
    font-size: 16px;
    color: var(--muted);
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 32px;
    align-items: start;
  }

  /* Featured Area */
  .featured {
    background: #fff;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    border: 1px solid var(--border);
    position: relative;
  }

  /* Navigation Arrows */
  .nav-arrows {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 10;
    padding: 0 8px;
  }
  .nav-arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    color: var(--dark);
  }
  .nav-arrow:hover {
    background: var(--green);
    color: #fff;
    border-color: var(--green);
    transform: scale(1.05);
  }
  .nav-arrow--prev {
    margin-left: -20px;
  }
  .nav-arrow--next {
    margin-right: -20px;
  }

  /* Featured Content with Animation */
  .featured-content {
    animation: fadeIn 0.4s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    border-radius: 14px;
    overflow: hidden;
    background: #0f1623;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .featured-quote {
    position: relative;
    padding: 40px 32px;
    min-height: 200px;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, rgba(74,164,97,0.03) 0%, rgba(74,164,97,0.08) 100%);
    border-radius: 14px;
  }
  .quote-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 56px;
    height: 56px;
  }
  .quote-text {
    font-size: 18px;
    line-height: 1.7;
    color: var(--dark);
    font-style: italic;
    position: relative;
    z-index: 1;
  }

  .author-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  
  .avatar-img {
    border-radius: 50%;
    object-fit: cover;
  }
  .avatar-fallback {
    border-radius: 50%;
    background: linear-gradient(135deg, var(--green), #2d8a4e);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    flex-shrink: 0;
  }

  .author-info {
    flex: 1;
    min-width: 120px;
  }
  .author-info h4 {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 2px;
  }
  .author-info p {
    font-size: 13px;
    color: var(--muted);
  }
  .author-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
  .service-tag {
    padding: 4px 12px;
    background: rgba(74,164,97,0.1);
    color: var(--green);
    font-size: 11px;
    font-weight: 700;
    border-radius: 12px;
  }
  .stars {
    display: flex;
    gap: 2px;
  }

  /* Pagination Bar */
  .pagination-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }
  .pagination-text {
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
  }
  .progress-dots {
    display: flex;
    gap: 6px;
  }
  .progress-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--border);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s;
  }
  .progress-dot:hover {
    background: #aaa;
  }
  .progress-dot--active {
    background: var(--green);
    width: 24px;
    border-radius: 4px;
  }
  .auto-play-indicator {
    display: flex;
    align-items: center;
    opacity: 0.6;
  }

  /* Testimonials List */
  .testimonials-list {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
  }

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }
  .list-header h3 {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark);
    margin: 0;
  }
  .review-count {
    font-size: 12px;
    font-weight: 600;
    color: var(--green);
    background: rgba(74,164,97,0.1);
    padding: 4px 10px;
    border-radius: 12px;
  }

  .list-scroll {
    max-height: 380px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-right: 4px;
  }

  /* Custom scrollbar */
  .list-scroll::-webkit-scrollbar {
    width: 6px;
  }
  .list-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  .list-scroll::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
  .list-scroll::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  .list-card {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px;
    background: #f8f9fb;
    border: 2px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    width: 100%;
  }
  .list-card:hover {
    background: #f0f4f2;
    border-color: rgba(74,164,97,0.3);
  }
  .list-card--active {
    background: rgba(74,164,97,0.08);
    border-color: var(--green);
  }

  .list-card-content {
    flex: 1;
    min-width: 0;
  }
  .list-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 2px;
  }
  .list-card-header h5 {
    font-size: 14px;
    font-weight: 700;
    color: var(--dark);
    margin: 0;
  }
  .video-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: var(--green);
    color: #fff;
    border-radius: 50%;
  }
  .list-card-location {
    font-size: 12px;
    color: var(--muted);
  }
  .list-card-preview {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.5;
    margin: 6px 0 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .scroll-hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    font-size: 12px;
    color: var(--muted);
    border-top: 1px solid var(--border);
    margin-top: 8px;
  }
  .scroll-hint svg {
    animation: bounce 1.5s infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }

  /* Dots for mobile */
  .dots {
    display: none;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
    flex-wrap: wrap;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--border);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s;
  }
  .dot:hover {
    background: #aaa;
  }
  .dot--active {
    background: var(--green);
    transform: scale(1.2);
  }

  /* Loading */
  .loading-wrap {
    display: flex;
    justify-content: center;
    padding: 80px 0;
  }
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border);
    border-top-color: var(--green);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Skeleton Loader Styles */
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 8px;
  }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  .skeleton-featured {
    pointer-events: none;
  }
  .skeleton-quote-wrap {
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .skeleton-quote-line {
    height: 20px;
    width: 100%;
  }
  .skeleton-quote-line.short {
    width: 60%;
  }
  .skeleton-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .skeleton-name {
    height: 18px;
    width: 120px;
    margin-bottom: 6px;
  }
  .skeleton-location {
    height: 14px;
    width: 80px;
  }
  .skeleton-service {
    height: 24px;
    width: 80px;
    border-radius: 12px;
  }
  .skeleton-stars {
    height: 18px;
    width: 90px;
  }

  /* Skeleton list */
  .skeleton-list-card {
    pointer-events: none;
  }
  .skeleton-list-title {
    height: 18px;
    width: 100px;
  }
  .skeleton-list-count {
    height: 24px;
    width: 80px;
    border-radius: 12px;
  }
  .skeleton-list-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .skeleton-list-name {
    height: 16px;
    width: 100px;
    margin-bottom: 6px;
  }
  .skeleton-list-loc {
    height: 12px;
    width: 70px;
    margin-bottom: 8px;
  }
  .skeleton-list-text {
    height: 32px;
    width: 100%;
  }

  /* Mobile */
  @media (max-width: 900px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
    .testimonials-list {
      display: none;
    }
    .dots {
      display: flex;
    }
    .featured-quote {
      padding: 24px 16px;
      min-height: auto;
    }
    .quote-text {
      font-size: 16px;
    }
    .quote-icon {
      width: 48px;
      height: 48px;
    }
    .author-meta {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
    .nav-arrows {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .testimonials-section {
      padding: 60px 0;
    }
    .featured {
      padding: 16px;
    }
    .author-row {
      gap: 12px;
    }
  }
`;e.s(["default",0,function(){let[e,d]=(0,r.useState)(i),[c,p]=(0,r.useState)(0),[x,h]=(0,r.useState)(!0),[g,m]=(0,r.useState)(!1);(0,r.useEffect)(()=>{fetch("https://script.google.com/macros/s/AKfycbwzoJbeZvpRY3_pVNgjgDuLqBSsJ9GVuu5MdVTvtne2vIpVyX8YBPWFg23aQ0mhKPFqkg/exec").then(e=>e.json()).then(e=>{e.success&&e.data.length>0&&d(e.data),h(!1)}).catch(()=>h(!1))},[]),(0,r.useEffect)(()=>{if(g||e.length<=1)return;let t=setInterval(()=>{p(t=>(t+1)%e.length)},6e3);return()=>clearInterval(t)},[g,e.length]);let f=(0,r.useCallback)(()=>{p(t=>(t+1)%e.length)},[e.length]),u=(0,r.useCallback)(()=>{p(t=>(t-1+e.length)%e.length)},[e.length]),b=e[c],v=b?.contentType==="video"?function(e){if(!e)return null;let t=e.match(/youtu\.be\/([^?&\s]{11})/);if(t)return t[1];let r=e.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);return r?r[1]:null}(b.videoUrl):null;return x?(0,t.jsxs)("section",{className:"testimonials-section",children:[(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("span",{className:"badge",children:"Client Stories"}),(0,t.jsx)("h2",{children:"What Our Clients Say"}),(0,t.jsx)("p",{children:"Real experiences from families we've helped protect"})]}),(0,t.jsxs)("div",{className:"content-grid",children:[(0,t.jsx)(n,{}),(0,t.jsx)(s,{})]})]}),(0,t.jsx)("style",{children:l})]}):(0,t.jsxs)("section",{className:"testimonials-section",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("span",{className:"badge",children:"Client Stories"}),(0,t.jsx)("h2",{children:"What Our Clients Say"}),(0,t.jsx)("p",{children:"Real experiences from families we've helped protect"})]}),(0,t.jsxs)("div",{className:"content-grid",children:[(0,t.jsxs)("div",{className:"featured",children:[e.length>1&&(0,t.jsxs)("div",{className:"nav-arrows",children:[(0,t.jsx)("button",{className:"nav-arrow nav-arrow--prev",onClick:u,"aria-label":"Previous testimonial",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(0,t.jsx)("button",{className:"nav-arrow nav-arrow--next",onClick:f,"aria-label":"Next testimonial",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"9 18 15 12 9 6"})})})]}),(0,t.jsx)("div",{className:"featured-content",children:v?(0,t.jsx)("div",{className:"video-container",children:(0,t.jsx)("iframe",{src:`https://www.youtube.com/embed/${v}?rel=0`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:`${b.name} testimonial`})}):(0,t.jsxs)("div",{className:"featured-quote",children:[(0,t.jsxs)("svg",{className:"quote-icon",viewBox:"0 0 24 24",fill:"var(--green)",opacity:"0.15",children:[(0,t.jsx)("path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"}),(0,t.jsx)("path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"})]}),(0,t.jsxs)("p",{className:"quote-text",children:["“",b?.testimonial,"”"]})]})},c),(0,t.jsxs)("div",{className:"author-row",children:[(0,t.jsx)(o,{name:b?.name||"",avatarUrl:b?.avatarUrl,size:52}),(0,t.jsxs)("div",{className:"author-info",children:[(0,t.jsx)("h4",{children:b?.name}),(0,t.jsx)("p",{children:b?.location})]}),(0,t.jsxs)("div",{className:"author-meta",children:[(0,t.jsx)("span",{className:"service-tag",children:b?.serviceType}),(0,t.jsx)(a,{rating:b?.rating||5})]})]}),e.length>1&&(0,t.jsxs)("div",{className:"pagination-bar",children:[(0,t.jsxs)("span",{className:"pagination-text",children:[c+1," of ",e.length]}),(0,t.jsx)("div",{className:"progress-dots",children:e.map((e,r)=>(0,t.jsx)("button",{className:`progress-dot ${r===c?"progress-dot--active":""}`,onClick:()=>p(r),"aria-label":`View testimonial ${r+1}`},r))}),(0,t.jsx)("div",{className:"auto-play-indicator",children:g?(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"var(--muted)",children:[(0,t.jsx)("rect",{x:"6",y:"4",width:"4",height:"16"}),(0,t.jsx)("rect",{x:"14",y:"4",width:"4",height:"16"})]}):(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"var(--green)",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})})})]})]}),(0,t.jsxs)("div",{className:"testimonials-list",children:[(0,t.jsxs)("div",{className:"list-header",children:[(0,t.jsx)("h3",{children:"All Reviews"}),(0,t.jsxs)("span",{className:"review-count",children:[e.length," reviews"]})]}),(0,t.jsx)("div",{className:"list-scroll","data-lenis-prevent":!0,children:e.map((e,r)=>(0,t.jsxs)("button",{className:`list-card ${r===c?"list-card--active":""}`,onClick:()=>p(r),children:[(0,t.jsx)(o,{name:e.name,avatarUrl:e.avatarUrl,size:44}),(0,t.jsxs)("div",{className:"list-card-content",children:[(0,t.jsxs)("div",{className:"list-card-header",children:[(0,t.jsx)("h5",{children:e.name}),"video"===e.contentType&&(0,t.jsx)("span",{className:"video-badge",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})})})]}),(0,t.jsx)("span",{className:"list-card-location",children:e.location}),(0,t.jsxs)("p",{className:"list-card-preview",children:[e.testimonial.slice(0,80),"..."]})]})]},e.id))}),e.length>4&&(0,t.jsxs)("div",{className:"scroll-hint",children:[(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M12 5v14M5 12l7 7 7-7"})}),(0,t.jsx)("span",{children:"Scroll for more"})]})]})]}),(0,t.jsx)("div",{className:"dots",children:e.map((e,r)=>(0,t.jsx)("button",{className:`dot ${r===c?"dot--active":""}`,onClick:()=>p(r),"aria-label":`View testimonial ${r+1}`},r))})]}),(0,t.jsx)("style",{children:l})]})}])}]);