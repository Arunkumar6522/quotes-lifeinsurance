(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56691,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(57688),o=e.i(7761);e.s(["default",0,function(){let{t:e,lang:i}=(0,o.useLang)(),a=[{label:e.home,href:"/"},{label:e.about,href:"/about"},{label:e.contact,href:"/contact"},{label:"fr"===i?"Calculez votre devis":"Calculate Your Quote",href:"/quote-calculator"}],l=[{label:e.termLife,href:"/services/term-life"},{label:e.wholeLife,href:"/services/whole-life"},{label:e.disability,href:"/services/disability"}];return(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsxs)("div",{className:"container footer-grid",children:[(0,t.jsxs)("div",{className:"footer-brand",children:[(0,t.jsx)(r.default,{href:"/",className:"footer-logo-link",children:(0,t.jsx)(n.default,{src:"/white.png",alt:"Quotes Life Insurance",width:180,height:50,style:{objectFit:"contain"}})}),(0,t.jsxs)("p",{className:"footer-desc",children:[e.footerTagline," ",e.footerFounders]}),(0,t.jsx)("div",{className:"footer-chips",children:(0,t.jsxs)("a",{href:"mailto:info@quotes-lifeinsurance.com",className:"footer-chip",children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),(0,t.jsx)("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),"Email"]})}),(0,t.jsxs)("p",{className:"footer-amf",children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",style:{display:"inline",verticalAlign:"middle",marginRight:"5px"},children:[(0,t.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,t.jsx)("polyline",{points:"9 12 11 14 15 10"})]}),e.footerAmfNumbers]})]}),(0,t.jsxs)("div",{className:"footer-col",children:[(0,t.jsx)("h4",{className:"footer-col-h",children:e.footerLinks}),(0,t.jsx)("ul",{className:"footer-list",children:a.map(e=>(0,t.jsx)("li",{children:(0,t.jsxs)(r.default,{href:e.href,className:"footer-link",children:[(0,t.jsx)("span",{className:"footer-arrow",children:"›"}),e.label]})},e.label))})]}),(0,t.jsxs)("div",{className:"footer-col",children:[(0,t.jsx)("h4",{className:"footer-col-h",children:e.footerServices}),(0,t.jsx)("ul",{className:"footer-list",children:l.map(e=>(0,t.jsx)("li",{children:(0,t.jsxs)(r.default,{href:e.href,className:"footer-link",children:[(0,t.jsx)("span",{className:"footer-arrow",children:"›"}),e.label]})},e.label))})]})]}),(0,t.jsx)("div",{className:"footer-bar",children:(0,t.jsxs)("div",{className:"container footer-bar-inner",children:[(0,t.jsxs)("p",{className:"footer-copy",children:["© ",new Date().getFullYear()," ",e.footerCopyright]}),(0,t.jsxs)("div",{className:"footer-bar-links",children:[(0,t.jsx)(r.default,{href:"/privacy-policy",className:"footer-bar-link",children:e.footerPrivacy}),(0,t.jsx)("span",{className:"footer-bar-sep",children:"·"}),(0,t.jsx)(r.default,{href:"/terms",className:"footer-bar-link",children:e.footerTerms})]})]})}),(0,t.jsx)("style",{children:`
        .footer { background: #0e1420; color: #fff; }

        /* 3-col grid — brand left, quick links center, services right */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          padding: 56px 0 48px;
        }
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; padding: 40px 0 32px; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        /* Brand col */
        .footer-logo-link { display: inline-block; margin-bottom: 16px; }
        .footer-desc {
          font-size: 13px; color: rgba(255,255,255,0.72);
          line-height: 1.7; margin-bottom: 18px; max-width: 280px;
        }
        .footer-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .footer-chip {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600;
          color: rgba(255,255,255,0.82);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50px; padding: 5px 12px;
          text-decoration: none; transition: color 0.15s, background 0.15s;
        }
        .footer-chip:hover { color: var(--green); background: rgba(74,164,97,0.12); border-color: rgba(74,164,97,0.25); }
        .footer-amf {
          font-size: 11px; color: rgba(255,255,255,0.55); line-height: 1.5;
        }
        .footer-amf svg { color: var(--green); }

        /* Link cols */
        .footer-col-h {
          font-size: 10px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.55);
          margin-bottom: 18px;
        }
        .footer-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
        .footer-link {
          display: flex; align-items: center; gap: 5px;
          font-size: 13px; color: rgba(255,255,255,0.75);
          text-decoration: none; transition: color 0.15s;
        }
        .footer-link:hover { color: var(--green); }
        .footer-arrow {
          color: var(--green); font-size: 15px; line-height: 1;
          transition: transform 0.15s;
        }
        .footer-link:hover .footer-arrow { transform: translateX(2px); }

        /* Bottom bar */
        .footer-bar { border-top: 1px solid rgba(255,255,255,0.1); }
        .footer-bar-inner {
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap;
          gap: 10px; padding: 16px 0;
        }
        .footer-copy { font-size: 11.5px; color: rgba(255,255,255,0.5); }
        .footer-bar-links { display: flex; align-items: center; gap: 8px; }
        .footer-bar-link {
          font-size: 11.5px; color: rgba(255,255,255,0.5);
          text-decoration: none; transition: color 0.15s;
        }
        .footer-bar-link:hover { color: rgba(255,255,255,0.85); }
        .footer-bar-sep { color: rgba(255,255,255,0.2); font-size: 11px; }
      `})]})}])},70119,e=>{"use strict";var t=e.i(43476),r=e.i(10872),n=e.i(22016),o=e.i(57688),i=e.i(71645),a=e.i(7761);let l=[{title:"Life Insurance",icon:(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),items:[{label:"Term Life Insurance",href:"/services/term-life"},{label:"Whole Life Insurance",href:"/services/whole-life"},{label:"Universal Life Insurance",href:"/services/universal-life"}]},{title:"Critical Illness",icon:(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"})}),items:[{label:"Critical Illness Coverage",href:"/services/critical-illness"}]},{title:"Disability",icon:(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("path",{d:"m4.93 4.93 14.14 14.14"})]}),items:[{label:"Disability Insurance",href:"/services/disability"}]}];e.s(["default",0,function(){let{t:e,lang:s,setLang:c}=(0,a.useLang)(),[d,u]=(0,i.useState)(!1),[f,p]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),h=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return f&&document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[f]),(0,t.jsxs)("header",{style:{position:"sticky",top:0,zIndex:100},children:[(0,t.jsx)("div",{className:"topbar",children:(0,t.jsxs)("div",{className:"container topbar-inner",children:[(0,t.jsxs)("div",{className:"topbar-left",children:[(0,t.jsxs)("a",{href:"mailto:info@quotes-lifeinsurance.com",className:"topbar-link",children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),(0,t.jsx)("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),"info@quotes-lifeinsurance.com"]}),(0,t.jsxs)("span",{className:"topbar-link topbar-hide-md",children:[(0,t.jsxs)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),(0,t.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),"4900 Jean-Talon Ouest, Unit 200, Montréal, QC"]})]}),(0,t.jsx)("div",{className:"topbar-right",children:(0,t.jsxs)("div",{className:"lang-toggle",onClick:()=>c("en"===s?"fr":"en"),children:[(0,t.jsx)("span",{className:`lang-toggle-label${"en"===s?" lang-toggle-label--active":""}`,children:"EN"}),(0,t.jsx)("div",{className:"lang-toggle-track",children:(0,t.jsx)("div",{className:`lang-toggle-thumb${"fr"===s?" lang-toggle-thumb--right":""}`})}),(0,t.jsx)("span",{className:`lang-toggle-label${"fr"===s?" lang-toggle-label--active":""}`,children:"FR"})]})})]})}),(0,t.jsxs)("nav",{className:"main-nav",children:[(0,t.jsxs)("div",{className:"container main-nav-inner",children:[(0,t.jsx)(n.default,{href:"/",className:"logo-wrap",children:(0,t.jsx)(o.default,{src:"/logo.png",alt:"Quotes Life Insurance",width:200,height:60,priority:!0,style:{height:"52px",width:"auto",objectFit:"contain"}})}),(0,t.jsxs)("div",{className:"desktop-nav",children:[(0,t.jsx)(n.default,{href:"/",className:"nav-link",children:e.home}),(0,t.jsxs)("div",{className:"dropdown-wrap",ref:h,children:[(0,t.jsxs)("button",{className:"nav-link nav-link--btn",onClick:()=>p(!f),children:[e.services,(0,t.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transition:"transform 0.2s",transform:f?"rotate(180deg)":"none"},children:(0,t.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),f&&(0,t.jsxs)("div",{className:"mega-dropdown",children:[(0,t.jsx)("div",{className:"mega-grid",children:l.map(e=>(0,t.jsxs)("div",{className:"mega-category",children:[(0,t.jsxs)("div",{className:"mega-cat-header",children:[(0,t.jsx)("span",{className:"mega-cat-icon",children:e.icon}),(0,t.jsx)("span",{className:"mega-cat-title",children:e.title})]}),(0,t.jsx)("div",{className:"mega-cat-items",children:e.items.map(e=>(0,t.jsx)(n.default,{href:e.href,className:"mega-item",onClick:()=>p(!1),children:e.label},e.label))})]},e.title))}),(0,t.jsxs)("div",{className:"mega-footer",children:[(0,t.jsx)("span",{children:"Need help choosing?"}),(0,t.jsx)(n.default,{href:"/contact",onClick:()=>p(!1),children:"Get Free Consultation →"})]})]})]}),(0,t.jsx)(n.default,{href:"/about",className:"nav-link",children:e.about}),(0,t.jsx)(n.default,{href:"/articles",className:"nav-link",children:e.articles}),(0,t.jsx)(n.default,{href:"/careers",className:"nav-link",children:"Join Our Team"}),(0,t.jsx)(n.default,{href:"/contact",className:"nav-link",children:e.contact})]}),(0,t.jsx)("div",{className:"desktop-nav",children:(0,t.jsx)(r.default,{label:e.getQuote,style:{fontSize:"14px",padding:"11px 24px"}})}),(0,t.jsx)("button",{onClick:()=>u(!d),className:"mobile-btn","aria-label":"Toggle menu",children:[0,1,2].map(e=>(0,t.jsx)("span",{style:{display:"block",width:"22px",height:"2px",background:"#374151",borderRadius:"2px",transition:"all 0.2s",transform:d&&0===e?"rotate(45deg) translate(5px,5px)":d&&1===e?"scaleX(0)":d&&2===e?"rotate(-45deg) translate(5px,-5px)":"none"}},e))})]}),d&&(0,t.jsxs)("div",{className:"mobile-menu",children:[(0,t.jsx)(n.default,{href:"/",onClick:()=>u(!1),className:"mobile-link",children:e.home}),(0,t.jsxs)("button",{className:"mobile-link mobile-link--btn",onClick:()=>m(!g),children:[e.services,(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{transition:"transform 0.2s",transform:g?"rotate(180deg)":"none",marginLeft:"auto"},children:(0,t.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),g&&(0,t.jsx)("div",{className:"mobile-services-section",children:l.map(e=>(0,t.jsxs)("div",{className:"mobile-cat",children:[(0,t.jsx)("p",{className:"mobile-cat-title",children:e.title}),e.items.map(e=>(0,t.jsx)(n.default,{href:e.href,onClick:()=>u(!1),className:"mobile-sub-link",children:e.label},e.label))]},e.title))}),(0,t.jsx)(n.default,{href:"/about",onClick:()=>u(!1),className:"mobile-link",children:e.about}),(0,t.jsx)(n.default,{href:"/articles",onClick:()=>u(!1),className:"mobile-link",children:e.articles}),(0,t.jsx)(n.default,{href:"/careers",onClick:()=>u(!1),className:"mobile-link",children:"Join Our Team"}),(0,t.jsx)(n.default,{href:"/contact",onClick:()=>u(!1),className:"mobile-link",children:e.contact}),(0,t.jsx)("div",{className:"mobile-lang",children:["en","fr"].map(e=>(0,t.jsx)("button",{onClick:()=>{c(e),u(!1)},className:`mobile-lang-btn${s===e?" mobile-lang-btn--active":""}`,children:e.toUpperCase()},e))}),(0,t.jsx)(r.default,{label:e.getQuote,style:{marginTop:"12px",width:"100%",justifyContent:"center"}})]})]}),(0,t.jsx)("style",{children:`
        .topbar { background: var(--green); padding: 7px 0; font-size: 12px; color: #fff; }
        .topbar-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .topbar-left  { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        .topbar-right { display: flex; align-items: center; gap: 14px; }
        .topbar-link  { display: flex; align-items: center; gap: 5px; color: rgba(255,255,255,0.82); text-decoration: none; font-size: 12px; transition: color 0.15s; }
        .topbar-link:hover { color: #fff; }
        .topbar-link--bold { font-weight: 700; color: #fff; }
        .topbar-divider { width: 1px; height: 16px; background: rgba(255,255,255,0.3); }
        .amf-badge { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.9); letter-spacing: 0.3px; }
        
        /* Language toggle switch */
        .lang-toggle {
          display: flex; align-items: center; gap: 8px;
          cursor: pointer; user-select: none;
        }
        .lang-toggle-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.5px;
          color: rgba(255,255,255,0.5); transition: color 0.2s;
        }
        .lang-toggle-label--active { color: #fff; }
        .lang-toggle-track {
          width: 36px; height: 20px;
          background: rgba(255,255,255,0.2);
          border-radius: 12px; position: relative;
          transition: background 0.2s;
        }
        .lang-toggle:hover .lang-toggle-track { background: rgba(255,255,255,0.3); }
        .lang-toggle-thumb {
          position: absolute; top: 2px; left: 2px;
          width: 16px; height: 16px;
          background: #fff; border-radius: 50%;
          transition: transform 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .lang-toggle-thumb--right { transform: translateX(16px); }

        .main-nav { background: #fff; box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 2px 16px rgba(0,0,0,0.05); }
        .main-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 72px; gap: 8px; }
        .logo-wrap { flex-shrink: 0; display: flex; align-items: center; text-decoration: none; }
        .logo-purple { filter: hue-rotate(270deg) saturate(0.8); }

        .desktop-nav { display: flex; align-items: center; gap: 2px; }
        .nav-link {
          padding: 8px 13px; border-radius: 8px; font-size: 14px; font-weight: 600;
          color: #374151; text-decoration: none; white-space: nowrap;
          transition: color 0.15s, background 0.15s; position: relative;
        }
        .nav-link:hover { color: var(--green); background: rgba(74,164,97,0.07); }
        .nav-link--btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 4px; font-family: inherit; }

        .dropdown-wrap { position: relative; }
        
        /* Mega Dropdown */
        .mega-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 200;
          width: 680px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 12px 48px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        .mega-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .mega-category {
          padding: 0;
        }
        
        .mega-cat-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 8px;
        }
        
        .mega-cat-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .mega-cat-title {
          font-size: 13px;
          font-weight: 800;
          color: var(--dark);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .mega-cat-items {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .mega-item {
          display: block;
          padding: 8px 10px;
          font-size: 13px;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .mega-item:hover {
          background: rgba(74,164,97,0.08);
          color: var(--green);
        }
        
        .mega-footer {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mega-footer span {
          font-size: 13px;
          color: var(--muted);
        }
        .mega-footer a {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .mega-footer a:hover {
          opacity: 0.8;
        }

        .mobile-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 6px; cursor: pointer; }
        .mobile-menu { background: #fff; border-top: 1px solid var(--border); padding: 12px 20px 20px; max-height: 70vh; overflow-y: auto; }
        .mobile-link { display: flex; align-items: center; padding: 11px 0; font-size: 14px; font-weight: 600; color: #374151; text-decoration: none; border-bottom: 1px solid var(--border); transition: color 0.15s; width: 100%; background: none; border-top: none; border-left: none; border-right: none; }
        .mobile-link:hover { color: var(--green); }
        .mobile-link--btn { cursor: pointer; }
        
        /* Mobile Services Section */
        .mobile-services-section {
          padding: 12px 0 12px 8px;
          background: #f9fafb;
          margin: 0 -20px;
          padding-left: 28px;
          padding-right: 20px;
        }
        .mobile-section-title {
          font-size: 10px;
          font-weight: 800;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .mobile-cat {
          margin-bottom: 16px;
        }
        .mobile-cat:last-child {
          margin-bottom: 0;
        }
        .mobile-cat-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mobile-sub-link {
          display: block;
          padding: 8px 0 8px 12px;
          font-size: 13px;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          border-left: 2px solid var(--border);
          margin-left: 4px;
          transition: color 0.15s, border-color 0.15s;
        }
        .mobile-sub-link:hover {
          color: var(--green);
          border-color: var(--green);
        }
        
        .mobile-lang { display: flex; gap: 8px; margin-top: 14px; }
        .mobile-lang-btn { border: 1.5px solid var(--border); background: none; border-radius: 8px; padding: 6px 16px; font-size: 13px; font-weight: 700; color: #374151; cursor: pointer; transition: all 0.15s; }
        .mobile-lang-btn--active { background: var(--green); border-color: var(--green); color: #fff; }

        @media (max-width: 900px) {
          .desktop-nav  { display: none !important; }
          .mobile-btn   { display: flex !important; }
          .topbar-hide-sm { display: none !important; }
          .topbar-hide-md { display: none !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .topbar-hide-md { display: none !important; }
          .mega-dropdown { width: 560px; }
          .mega-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}])},10872,e=>{"use strict";var t=e.i(43476),r=e.i(73130);e.s(["default",0,function({label:e="Get a Free Quote",className:n="btn-primary",style:o}){let{openModal:i}=(0,r.useModal)();return(0,t.jsx)("button",{onClick:i,className:n,style:o,children:e})}])},22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return v}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809),a=e.r(43476),l=i._(e.r(71645)),s=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),f=e.r(5550),p=e.r(88540),g=e.r(91949),m=e.r(73668),h=e.r(9396);function x(t){var r;let n,o,i,[x,v]=(0,l.useOptimistic)(g.IDLE_LINK_STATUS),y=(0,l.useRef)(null),{href:j,as:w,children:k,prefetch:_=null,passHref:N,replace:C,shallow:P,scroll:S,onClick:E,onMouseEnter:O,onTouchStart:R,legacyBehavior:z=!1,onNavigate:L,transitionTypes:I,ref:M,unstable_dynamicOnHover:T,...$}=t;n=k,z&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let A=l.default.useContext(c.AppRouterContext),D=!1!==_,U=!1===_?"none":!0===_?"full":"auto",B="none"!==U?"auto"===U?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,F="string"==typeof(r=w||j)?r:(0,s.formatUrl)(r);if(z){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(n)}let W=z?o&&"object"==typeof o&&o.ref:M,q,X=l.default.useCallback(e=>(null!==A&&(y.current=(0,g.mountLinkInstance)(e,F,A,B,D,v,q)),()=>{y.current&&((0,g.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,g.unmountPrefetchableInstance)(e)}),[D,F,A,B,v,q]),G={ref:(0,d.useMergedRef)(X,W),onClick(t){z||"function"!=typeof E||E(t),z&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!A||t.defaultPrevented||function(t,r,n,o,i,a,s,c="none"){if("u">typeof window){let d,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);l.default.startTransition(()=>{f(r,o?"replace":"push",!1===i?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,s,c)})}}(t,F,y,C,S,L,I,U)},onMouseEnter(e){z||"function"!=typeof O||O(e),z&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),A&&D&&(0,g.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){z||"function"!=typeof R||R(e),z&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),A&&D&&(0,g.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,u.isAbsoluteUrl)(F)?G.href=F:z&&!N&&("a"!==o.type||"href"in o.props)||(G.href=(0,f.addBasePath)(F)),i=z?l.default.cloneElement(o,G):(0,a.jsx)("a",{...$,...G,children:n}),(0,a.jsx)(b.Provider,{value:x,children:i})}let b=(0,l.createContext)(g.IDLE_LINK_STATUS),v=()=>(0,l.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},85437,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return j}});let n=e.r(55682),o=e.r(90809),i=e.r(43476),a=o._(e.r(71645)),l=n._(e.r(74080)),s=n._(e.r(25633)),c=e.r(8927),d=e.r(87690),u=e.r(18556),f=e.r(65856),p=n._(e.r(1948)),g=e.r(18581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,o,i,a){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function x(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b="u"<typeof window?a.useEffect:a.useLayoutEffect,v=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:o,decoding:l,className:s,style:c,fetchPriority:d,placeholder:u,loading:f,unoptimized:p,fill:m,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:w,sizesInput:k,onLoad:_,onError:N,...C},P)=>{let S=(0,a.useRef)(!1),E=(0,a.useRef)(null);b(()=>{let{current:e}=S,{current:t}=E;e||null===t||(N&&(t.src=t.src),t.complete&&h(t,u,v,y,j,p,k),S.current=!0)},[e,u,v,y,N,p,k]);let O=(0,g.useMergedRef)(P,E);return(0,i.jsx)("img",{...C,...x(d),loading:f,width:o,height:n,decoding:l,"data-nimg":m?"fill":"1",className:s,style:c,sizes:r,srcSet:t,src:e,ref:O,onLoad:e=>{h(e.currentTarget,u,v,y,j,p,k)},onError:e=>{w(!0),"empty"!==u&&j(!0),N&&N(e)}})});function y({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let j=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(u.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),o=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:o,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[x,b]=(0,a.useState)(!1),[j,w]=(0,a.useState)(!1),{props:k,meta:_}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:x,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...k,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:w,sizesInput:e.sizes,ref:t}),_.preload?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},70965,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},1948,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let n=e.r(70965),o=e.r(43369);function i({config:e,src:t,width:r,quality:a}){let l=(0,o.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,o.getAssetToken)())l=void 0;else{let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),n=r.get("dpl");if(n){l=n,r.delete("dpl");let o=r.toString();t=t.slice(0,e)+(o?"?"+o:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,n.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}i.__next_img_default=!0;let a=i},25633,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return m},defaultHead:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(55682),a=e.r(90809),l=e.r(43476),s=a._(e.r(71645)),c=i._(e.r(98879)),d=e.r(42732);function u(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let p=["name","httpEquiv","charSet","itemProp"];function g(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?i=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?i=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!a)&&n.has(t)?i=!1:(n.add(t),o[r]=n)}}}return i})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,s.useContext)(d.HeadManagerContext);return(0,l.jsx)(c.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},88143,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}){let l=r?40*r:e,s=o?40*o:t,c=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return a}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}});let n=e.r(43369),o=e.r(88143),i=e.r(87690),a=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:u=!1,loading:f,className:p,quality:g,width:m,height:h,fill:x=!1,style:b,overrideSrc:v,onLoad:y,onLoadingComplete:j,placeholder:w="empty",blurDataURL:k,fetchPriority:_,decoding:N="async",layout:C,objectFit:P,objectPosition:S,lazyBoundary:E,lazyRoot:O,...R},z){var L;let I,M,T,{imgConf:$,showAltText:A,blurComplete:D,defaultLoader:U}=z,B=$||i.imageConfigDefault;if("allSizes"in B)I=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),r=B.qualities?.sort((e,t)=>e-t);I={...B,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=R.loader||U;delete R.loader,delete R.srcSet;let W="__next_img_default"in F;if(W){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let q="",X=s(m),G=s(h);if((L=e)&&"object"==typeof L&&(l(L)||void 0!==L.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=t.blurWidth,T=t.blurHeight,k=k||t.blurDataURL,q=t.src,!x)if(X||G){if(X&&!G){let e=X/t.width;G=Math.round(t.height*e)}else if(!X&&G){let e=G/t.height;X=Math.round(t.width*e)}}else X=t.width,G=t.height}let Q=!d&&!u&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:q)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,Q=!1),I.unoptimized&&(r=!0),W&&!I.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let K=s(g),V=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:S}:{},A?{}:{color:"transparent"},b),J=D||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:X,heightInt:G,blurWidth:M,blurHeight:T,blurDataURL:k||"",objectFit:V.objectFit})}")`:`url("${w}")`,Y=a.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,H=J?{backgroundSize:Y,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function({config:e,src:t,unoptimized:r,width:o,quality:i,sizes:a,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,n.getAssetToken)())e=void 0;else if(e){let r=t.indexOf("?");if(-1!==r){let n=new URLSearchParams(t.slice(r+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,r)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:c}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,o=[];for(let e;e=r.exec(n);)o.push(parseInt(e[2]));if(o.length){let r=.01*Math.min(...o);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((r,n)=>`${l({config:e,src:t,quality:i,width:r})} ${"w"===c?r:n+1}${c}`).join(", "),src:l({config:e,src:t,quality:i,width:s[d]})}}({config:I,src:e,unoptimized:r,width:X,quality:K,sizes:t,loader:F}),ee=Q?"lazy":f;return{props:{...R,loading:ee,fetchPriority:_,width:X,height:G,decoding:N,className:p,style:{...V,...H},sizes:Z.sizes,srcSet:Z.srcSet,src:v||Z.src},meta:{unoptimized:r,preload:u||d,placeholder:w,fill:x}}}},18556,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=e.r(55682)._(e.r(71645)),o=e.r(87690),i=n.default.createContext(o.imageConfigDefault)},65856,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(55682)._(e.r(71645)).default.createContext(null)},94909,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return d},getImageProps:function(){return c}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(55682),a=e.r(8927),l=e.r(85437),s=i._(e.r(1948));function c(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=l.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),o=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(i.urlQueryToSearchParams(s)));let d=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${o}${d}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let n=e.r(71645),o="u"<typeof window,i=o?()=>{}:n.useLayoutEffect,a=o?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),l()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,h=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}}]);