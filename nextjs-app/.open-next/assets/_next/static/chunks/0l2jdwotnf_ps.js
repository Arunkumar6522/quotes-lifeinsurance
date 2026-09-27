(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75148,e=>{"use strict";var r=e.i(43476),a=e.i(22016),i=e.i(18566);e.s(["default",0,function({crumbs:e}){let n=(0,i.useRouter)();return(0,r.jsxs)("div",{className:"bc-wrap",children:[(0,r.jsxs)("button",{className:"bc-back",onClick:()=>n.back(),"aria-label":"Go back",children:[(0,r.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,r.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]}),(0,r.jsx)("span",{className:"bc-divider"}),(0,r.jsx)("nav",{className:"bc-trail","aria-label":"Breadcrumb",children:e.map((i,n)=>{let c=n===e.length-1;return(0,r.jsxs)("span",{className:"bc-item",children:[!c&&i.href?(0,r.jsx)(a.default,{href:i.href,className:"bc-link",children:i.label}):(0,r.jsx)("span",{className:"bc-current",children:i.label}),!c&&(0,r.jsx)("span",{className:"bc-sep",children:"›"})]},n)})}),(0,r.jsx)("style",{children:`
        .bc-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        /* Back button */
        .bc-back {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          padding: 5px 12px 5px 9px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
          font-family: inherit;
        }
        .bc-back:hover {
          background: rgba(255,255,255,0.14);
          color: #fff;
        }
        /* Divider */
        .bc-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }
        /* Trail */
        .bc-trail {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }
        .bc-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .bc-link {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.15s;
        }
        .bc-link:hover { color: var(--green); }
        .bc-sep {
          font-size: 13px;
          color: rgba(255,255,255,0.2);
        }
        .bc-current {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
        }
      `})]})}])}]);