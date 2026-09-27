module.exports=[4458,a=>{"use strict";var b=a.i(87924),c=a.i(46271),d=a.i(72131),e=a.i(54760);let f={some:0,all:1},g={up:{hidden:{opacity:0,y:24},show:a=>({opacity:1,y:0,transition:{duration:.4,delay:a,ease:[.22,1,.36,1]}})},left:{hidden:{opacity:0,x:-24},show:a=>({opacity:1,x:0,transition:{duration:.4,delay:a,ease:[.22,1,.36,1]}})},right:{hidden:{opacity:0,x:24},show:a=>({opacity:1,x:0,transition:{duration:.4,delay:a,ease:[.22,1,.36,1]}})},none:{hidden:{opacity:0},show:a=>({opacity:1,transition:{duration:.3,delay:a,ease:"easeOut"}})}};a.s(["default",0,function({children:a,className:h,style:i,delay:j=0,direction:k="up",once:l=!0}){let m=(0,d.useRef)(null),n=function(a,{root:b,margin:c,amount:g,once:h=!1,initial:i=!1}={}){let[j,k]=(0,d.useState)(i);return(0,d.useEffect)(()=>{if(!a.current||h&&j)return;let d={root:b&&b.current||void 0,margin:c,amount:g};return function(a,b,{root:c,margin:d,amount:g="some"}={}){let h=(0,e.resolveElements)(a),i=new WeakMap,j=new IntersectionObserver(a=>{a.forEach(a=>{let c=i.get(a.target);if(!!c!==a.isIntersecting)if(a.isIntersecting){let c=b(a.target,a);"function"==typeof c?i.set(a.target,c):j.unobserve(a.target)}else"function"==typeof c&&(c(a),i.delete(a.target))})},{root:c,rootMargin:d,threshold:"number"==typeof g?g:f[g]});return h.forEach(a=>j.observe(a)),()=>j.disconnect()}(a.current,()=>(k(!0),h?void 0:()=>k(!1)),d)},[b,a,c,h,g]),j}(m,{once:l,margin:"-60px"}),o=g[k];return(0,b.jsx)(c.motion.div,{ref:m,className:h,style:i,initial:"hidden",animate:n?"show":"hidden",variants:o,custom:j,children:a})}],4458)},45482,a=>{"use strict";var b=a.i(87924),c=a.i(46271),d=a.i(38246),e=a.i(35577);let f=(a=0)=>({hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.55,delay:a,ease:"easeOut"}}}),g=[{icon:(0,b.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,b.jsx)("polyline",{points:"9 12 11 14 15 10"})]}),textEn:"Fully Regulated & Licensed",textFr:"Entièrement réglementé et agréé"},{icon:(0,b.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),(0,b.jsx)("path",{d:"M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"})]}),textEn:"100% Free Advice, Always",textFr:"Conseils 100% gratuits, toujours"},{icon:(0,b.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,b.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),textEn:"Truly Independent Broker",textFr:"Courtier vraiment indépendant"}];a.s(["default",0,function(){let{t:a,lang:h}=(0,e.useLang)();return(0,b.jsxs)("section",{className:"about-section",children:[(0,b.jsx)("div",{className:"container about-container",children:(0,b.jsxs)("div",{className:"about-body",children:[(0,b.jsxs)(c.motion.div,{className:"about-copy",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},children:[(0,b.jsx)(c.motion.span,{variants:f(0),className:"section-label",children:a.aboutLabel}),(0,b.jsxs)(c.motion.h2,{variants:f(.07),className:"about-h2",children:[a.aboutH2a," ",(0,b.jsx)("span",{style:{color:"var(--green)"},children:a.aboutH2b})]}),(0,b.jsx)(c.motion.p,{variants:f(.12),className:"about-p",children:a.aboutP1}),(0,b.jsx)(c.motion.p,{variants:f(.16),className:"about-p",children:a.aboutP2}),(0,b.jsx)(c.motion.div,{variants:f(.2),children:(0,b.jsx)(d.default,{href:"/about",className:"btn-primary",children:a.aboutCta})})]}),(0,b.jsx)(c.motion.div,{className:"about-right",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},children:g.map((a,d)=>(0,b.jsxs)(c.motion.div,{variants:f(.08*d),className:"about-pillar",children:[(0,b.jsx)("span",{className:"about-pillar-icon",children:a.icon}),(0,b.jsx)("span",{className:"about-pillar-text",children:"fr"===h?a.textFr:a.textEn})]},a.textEn))})]})}),(0,b.jsx)("style",{children:`
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
      `})]})}])},24753,a=>{"use strict";var b=a.i(87924),c=a.i(4458),d=a.i(85196),e=a.i(35577);a.s(["default",0,function(){let{openModal:a}=(0,d.useModal)(),{t:f}=(0,e.useLang)();return(0,b.jsxs)("section",{className:"cta-section",children:[(0,b.jsx)("div",{className:"container cta-inner",children:(0,b.jsxs)(c.default,{className:"cta-content",children:[(0,b.jsx)("span",{className:"cta-eyebrow",children:"Free Consultation"}),(0,b.jsx)("h2",{className:"cta-heading",children:f.ctaH2}),(0,b.jsx)("p",{className:"cta-sub",children:f.ctaSub}),(0,b.jsx)("div",{className:"cta-btns",children:(0,b.jsx)("button",{onClick:a,className:"cta-btn-main",children:f.ctaBtn})}),(0,b.jsx)("p",{className:"cta-trust",children:f.ctaTrust})]})}),(0,b.jsx)("style",{children:`
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
      `})]})}])},38148,a=>{"use strict";var b=a.i(87924),c=a.i(46271),d=a.i(38246),e=a.i(35577),f=a.i(85196);let g=(a=0)=>({hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.65,delay:a,ease:[.22,1,.36,1]}}});a.s(["default",0,function(){let{t:a}=(0,e.useLang)(),{openModal:h}=(0,f.useModal)();return(0,b.jsxs)("section",{className:"hero-section",children:[(0,b.jsx)("div",{className:"container hero-container",children:(0,b.jsxs)("div",{className:"hero-grid",children:[(0,b.jsxs)(c.motion.div,{initial:"hidden",animate:"show",className:"hero-copy",children:[(0,b.jsxs)(c.motion.h1,{variants:g(.08),className:"hero-h1",children:[a.heroH1a,(0,b.jsx)("br",{}),(0,b.jsx)("span",{style:{color:"var(--green)"},children:a.heroH1b}),(0,b.jsx)("br",{}),(0,b.jsx)("span",{className:"hero-h1-sub",children:a.heroH1c})]}),(0,b.jsxs)(c.motion.p,{variants:g(.15),className:"hero-sub",children:[a.heroSub," ",(0,b.jsx)("strong",{style:{color:"var(--green)",fontWeight:800},children:a.heroFree}),"."]}),(0,b.jsxs)(c.motion.div,{variants:g(.22),className:"hero-ctas",children:[(0,b.jsx)("button",{onClick:h,className:"btn-primary",children:a.heroCta1}),(0,b.jsxs)(d.default,{href:"/about",className:"hero-learn-btn",children:[a.heroCta2,(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),(0,b.jsx)(c.motion.div,{initial:"hidden",animate:"show",variants:((a=0)=>({hidden:{opacity:0,x:48},show:{opacity:1,x:0,transition:{duration:.7,delay:a,ease:[.22,1,.36,1]}}}))(.18),className:"hero-form-col",children:(0,b.jsx)("div",{style:{overflow:"hidden",borderRadius:"16px",lineHeight:0},children:(0,b.jsx)("iframe",{src:"https://form.questionscout.com/616e35ca63bd79140f61b3ef",className:"qs-iframe",title:"Get a Free Life Insurance Quote",frameBorder:"0",scrolling:"no",allow:"clipboard-write",loading:"eager"})})})]})}),(0,b.jsx)("style",{children:`
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
      `})]})}])},68794,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d=[{id:1,name:"Sarah Mitchell",location:"Toronto, ON",serviceType:"Term Life",contentType:"text",testimonial:"Outstanding service! They took the time to explain every option and helped me find the perfect term life policy for my family. The process was smooth and I felt supported throughout.",videoUrl:"",rating:5,date:"2024-02-15",avatarUrl:""},{id:2,name:"Michael Chen",location:"Vancouver, BC",serviceType:"Whole Life",contentType:"text",testimonial:"Very professional and knowledgeable team. They helped me understand the benefits of whole life insurance and found me a great rate. Highly recommend!",videoUrl:"",rating:5,date:"2024-01-20",avatarUrl:""},{id:3,name:"Emma Thompson",location:"Montreal, QC",serviceType:"Critical Illness",contentType:"text",testimonial:"I was looking for critical illness coverage and they made the whole process so easy. Great communication and follow-up. Thank you for protecting my family!",videoUrl:"",rating:5,date:"2024-03-01",avatarUrl:""}];function e({rating:a}){return(0,b.jsx)("div",{className:"stars",children:[1,2,3,4,5].map(c=>(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:c<=a?"#fbbf24":"#e5e7eb",children:(0,b.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},c))})}function f({name:a,avatarUrl:d,size:e=48}){let[g,h]=(0,c.useState)(!1);return g||!d?(0,b.jsx)("div",{className:"avatar-fallback",style:{width:e,height:e,fontSize:.35*e},children:a.split(" ").map(a=>a[0]).join("").toUpperCase().slice(0,2)}):(0,b.jsx)("img",{src:d,alt:a,className:"avatar-img",style:{width:e,height:e},onError:()=>h(!0)})}function g(){return(0,b.jsxs)("div",{className:"featured skeleton-featured",children:[(0,b.jsx)("div",{className:"featured-content",children:(0,b.jsxs)("div",{className:"featured-quote skeleton-quote-wrap",children:[(0,b.jsx)("div",{className:"skeleton skeleton-quote-line"}),(0,b.jsx)("div",{className:"skeleton skeleton-quote-line"}),(0,b.jsx)("div",{className:"skeleton skeleton-quote-line short"})]})}),(0,b.jsxs)("div",{className:"author-row",children:[(0,b.jsx)("div",{className:"skeleton skeleton-avatar"}),(0,b.jsxs)("div",{className:"author-info",children:[(0,b.jsx)("div",{className:"skeleton skeleton-name"}),(0,b.jsx)("div",{className:"skeleton skeleton-location"})]}),(0,b.jsxs)("div",{className:"author-meta",children:[(0,b.jsx)("div",{className:"skeleton skeleton-service"}),(0,b.jsx)("div",{className:"skeleton skeleton-stars"})]})]})]})}function h(){return(0,b.jsxs)("div",{className:"testimonials-list",children:[(0,b.jsxs)("div",{className:"list-header",children:[(0,b.jsx)("div",{className:"skeleton skeleton-list-title"}),(0,b.jsx)("div",{className:"skeleton skeleton-list-count"})]}),(0,b.jsx)("div",{className:"list-scroll",children:[1,2,3,4].map(a=>(0,b.jsxs)("div",{className:"list-card skeleton-list-card",children:[(0,b.jsx)("div",{className:"skeleton skeleton-list-avatar"}),(0,b.jsxs)("div",{className:"list-card-content",children:[(0,b.jsx)("div",{className:"skeleton skeleton-list-name"}),(0,b.jsx)("div",{className:"skeleton skeleton-list-loc"}),(0,b.jsx)("div",{className:"skeleton skeleton-list-text"})]})]},a))})]})}let i=`
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
`;a.s(["default",0,function(){let[a,j]=(0,c.useState)(d),[k,l]=(0,c.useState)(0),[m,n]=(0,c.useState)(!0),[o,p]=(0,c.useState)(!1);(0,c.useEffect)(()=>{fetch("https://script.google.com/macros/s/AKfycbwzoJbeZvpRY3_pVNgjgDuLqBSsJ9GVuu5MdVTvtne2vIpVyX8YBPWFg23aQ0mhKPFqkg/exec").then(a=>a.json()).then(a=>{a.success&&a.data.length>0&&j(a.data),n(!1)}).catch(()=>n(!1))},[]),(0,c.useEffect)(()=>{if(o||a.length<=1)return;let b=setInterval(()=>{l(b=>(b+1)%a.length)},6e3);return()=>clearInterval(b)},[o,a.length]);let q=(0,c.useCallback)(()=>{l(b=>(b+1)%a.length)},[a.length]),r=(0,c.useCallback)(()=>{l(b=>(b-1+a.length)%a.length)},[a.length]),s=a[k],t=s?.contentType==="video"?function(a){if(!a)return null;let b=a.match(/youtu\.be\/([^?&\s]{11})/);if(b)return b[1];let c=a.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);return c?c[1]:null}(s.videoUrl):null;return m?(0,b.jsxs)("section",{className:"testimonials-section",children:[(0,b.jsxs)("div",{className:"container",children:[(0,b.jsxs)("div",{className:"header",children:[(0,b.jsx)("span",{className:"badge",children:"Client Stories"}),(0,b.jsx)("h2",{children:"What Our Clients Say"}),(0,b.jsx)("p",{children:"Real experiences from families we've helped protect"})]}),(0,b.jsxs)("div",{className:"content-grid",children:[(0,b.jsx)(g,{}),(0,b.jsx)(h,{})]})]}),(0,b.jsx)("style",{children:i})]}):(0,b.jsxs)("section",{className:"testimonials-section",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,b.jsxs)("div",{className:"container",children:[(0,b.jsxs)("div",{className:"header",children:[(0,b.jsx)("span",{className:"badge",children:"Client Stories"}),(0,b.jsx)("h2",{children:"What Our Clients Say"}),(0,b.jsx)("p",{children:"Real experiences from families we've helped protect"})]}),(0,b.jsxs)("div",{className:"content-grid",children:[(0,b.jsxs)("div",{className:"featured",children:[a.length>1&&(0,b.jsxs)("div",{className:"nav-arrows",children:[(0,b.jsx)("button",{className:"nav-arrow nav-arrow--prev",onClick:r,"aria-label":"Previous testimonial",children:(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,b.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(0,b.jsx)("button",{className:"nav-arrow nav-arrow--next",onClick:q,"aria-label":"Next testimonial",children:(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,b.jsx)("polyline",{points:"9 18 15 12 9 6"})})})]}),(0,b.jsx)("div",{className:"featured-content",children:t?(0,b.jsx)("div",{className:"video-container",children:(0,b.jsx)("iframe",{src:`https://www.youtube.com/embed/${t}?rel=0`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:`${s.name} testimonial`})}):(0,b.jsxs)("div",{className:"featured-quote",children:[(0,b.jsxs)("svg",{className:"quote-icon",viewBox:"0 0 24 24",fill:"var(--green)",opacity:"0.15",children:[(0,b.jsx)("path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"}),(0,b.jsx)("path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"})]}),(0,b.jsxs)("p",{className:"quote-text",children:["“",s?.testimonial,"”"]})]})},k),(0,b.jsxs)("div",{className:"author-row",children:[(0,b.jsx)(f,{name:s?.name||"",avatarUrl:s?.avatarUrl,size:52}),(0,b.jsxs)("div",{className:"author-info",children:[(0,b.jsx)("h4",{children:s?.name}),(0,b.jsx)("p",{children:s?.location})]}),(0,b.jsxs)("div",{className:"author-meta",children:[(0,b.jsx)("span",{className:"service-tag",children:s?.serviceType}),(0,b.jsx)(e,{rating:s?.rating||5})]})]}),a.length>1&&(0,b.jsxs)("div",{className:"pagination-bar",children:[(0,b.jsxs)("span",{className:"pagination-text",children:[k+1," of ",a.length]}),(0,b.jsx)("div",{className:"progress-dots",children:a.map((a,c)=>(0,b.jsx)("button",{className:`progress-dot ${c===k?"progress-dot--active":""}`,onClick:()=>l(c),"aria-label":`View testimonial ${c+1}`},c))}),(0,b.jsx)("div",{className:"auto-play-indicator",children:o?(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"var(--muted)",children:[(0,b.jsx)("rect",{x:"6",y:"4",width:"4",height:"16"}),(0,b.jsx)("rect",{x:"14",y:"4",width:"4",height:"16"})]}):(0,b.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"var(--green)",children:(0,b.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})})})]})]}),(0,b.jsxs)("div",{className:"testimonials-list",children:[(0,b.jsxs)("div",{className:"list-header",children:[(0,b.jsx)("h3",{children:"All Reviews"}),(0,b.jsxs)("span",{className:"review-count",children:[a.length," reviews"]})]}),(0,b.jsx)("div",{className:"list-scroll","data-lenis-prevent":!0,children:a.map((a,c)=>(0,b.jsxs)("button",{className:`list-card ${c===k?"list-card--active":""}`,onClick:()=>l(c),children:[(0,b.jsx)(f,{name:a.name,avatarUrl:a.avatarUrl,size:44}),(0,b.jsxs)("div",{className:"list-card-content",children:[(0,b.jsxs)("div",{className:"list-card-header",children:[(0,b.jsx)("h5",{children:a.name}),"video"===a.contentType&&(0,b.jsx)("span",{className:"video-badge",children:(0,b.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:(0,b.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})})})]}),(0,b.jsx)("span",{className:"list-card-location",children:a.location}),(0,b.jsxs)("p",{className:"list-card-preview",children:[a.testimonial.slice(0,80),"..."]})]})]},a.id))}),a.length>4&&(0,b.jsxs)("div",{className:"scroll-hint",children:[(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M12 5v14M5 12l7 7 7-7"})}),(0,b.jsx)("span",{children:"Scroll for more"})]})]})]}),(0,b.jsx)("div",{className:"dots",children:a.map((a,c)=>(0,b.jsx)("button",{className:`dot ${c===k?"dot--active":""}`,onClick:()=>l(c),"aria-label":`View testimonial ${c+1}`},c))})]}),(0,b.jsx)("style",{children:i})]})}])}];

//# sourceMappingURL=components_1iu1lw5._.js.map