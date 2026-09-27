module.exports=[91828,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(50944);a.s(["default",0,function({crumbs:a}){let e=(0,d.useRouter)();return(0,b.jsxs)("div",{className:"bc-wrap",children:[(0,b.jsxs)("button",{className:"bc-back",onClick:()=>e.back(),"aria-label":"Go back",children:[(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,b.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]}),(0,b.jsx)("span",{className:"bc-divider"}),(0,b.jsx)("nav",{className:"bc-trail","aria-label":"Breadcrumb",children:a.map((d,e)=>{let f=e===a.length-1;return(0,b.jsxs)("span",{className:"bc-item",children:[!f&&d.href?(0,b.jsx)(c.default,{href:d.href,className:"bc-link",children:d.label}):(0,b.jsx)("span",{className:"bc-current",children:d.label}),!f&&(0,b.jsx)("span",{className:"bc-sep",children:"›"})]},e)})}),(0,b.jsx)("style",{children:`
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
      `})]})}])}];

//# sourceMappingURL=components_Breadcrumb_tsx_1csof6r._.js.map