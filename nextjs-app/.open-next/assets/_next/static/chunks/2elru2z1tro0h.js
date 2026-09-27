(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78883,e=>{"use strict";var a=e.i(43476),r=e.i(71645),l=e.i(22016),c=e.i(70119),i=e.i(56691),s=e.i(46932),t=e.i(73130);let o=(e=0)=>({hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.4,delay:e,ease:[.22,1,.36,1]}}}),n=[{value:"",label:"Select Province"},{value:"AB",label:"Alberta"},{value:"BC",label:"British Columbia"},{value:"MB",label:"Manitoba"},{value:"NB",label:"New Brunswick"},{value:"NL",label:"Newfoundland and Labrador"},{value:"NS",label:"Nova Scotia"},{value:"NT",label:"Northwest Territories"},{value:"NU",label:"Nunavut"},{value:"ON",label:"Ontario"},{value:"PE",label:"Prince Edward Island"},{value:"QC",label:"Quebec"},{value:"SK",label:"Saskatchewan"},{value:"YT",label:"Yukon"}],d=[{value:"",label:"Select Term"},{value:"10",label:"10 Years"},{value:"15",label:"15 Years"},{value:"20",label:"20 Years"},{value:"25",label:"25 Years"},{value:"30",label:"30 Years"},{value:"whole",label:"Whole Life"}],p=e=>e>=1e6?`$${(e/1e6).toFixed(1)}M`:`$${(e/1e3).toFixed(0)}K`;e.s(["default",0,function(){let{openModal:e}=(0,t.useModal)(),[x,m]=(0,r.useState)(25e4),[u,h]=(0,r.useState)(""),[g,b]=(0,r.useState)(""),[f,v]=(0,r.useState)(""),[j,y]=(0,r.useState)(""),[w,N]=(0,r.useState)(""),[k,C]=(0,r.useState)(!1),z=x&&u&&g&&f&&j&&w,S=(()=>{if(!z)return null;let e=new Date(g),a=new Date().getFullYear()-e.getFullYear(),r=.15;a<30?r*=.7:a<40?r*=1:a<50?r*=1.5:a<60?r*=2.2:r*=3.5,"male"===f&&(r*=1.15),"yes"===j&&(r*=2.5),"whole"===u?r*=4:parseInt(u)>=25?r*=1.3:parseInt(u)>=20&&(r*=1.15);let l=x/1e3*r;return{low:Math.round(.8*l),mid:Math.round(l),high:Math.round(1.3*l)}})();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{}),(0,a.jsx)("main",{children:(0,a.jsx)("section",{className:"calc-section",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)(s.motion.div,{className:"calc-page-header",initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.4,ease:[.22,1,.36,1]},children:[(0,a.jsxs)("div",{className:"calc-nav-row",children:[(0,a.jsxs)(l.default,{href:"/",className:"calc-back-btn",children:[(0,a.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M19 12H5"}),(0,a.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]}),(0,a.jsxs)("div",{className:"calc-breadcrumb",children:[(0,a.jsx)(l.default,{href:"/",children:"Home"}),(0,a.jsx)("span",{className:"calc-breadcrumb-sep",children:"›"}),(0,a.jsx)("span",{children:"Quote Calculator"})]})]}),(0,a.jsxs)("h1",{className:"calc-page-title",children:["Life Insurance ",(0,a.jsx)("span",{children:"Quote Calculator"})]}),(0,a.jsx)("p",{className:"calc-page-desc",children:"Get an instant estimate in seconds. No personal information required. Free, confidential, and no obligation."})]}),(0,a.jsxs)("div",{className:"calc-grid",children:[(0,a.jsx)(s.motion.div,{className:"calc-form-card",initial:"hidden",animate:"show",variants:o(0),children:(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),z&&C(!0)},children:[(0,a.jsxs)("div",{className:"calc-field",children:[(0,a.jsxs)("label",{className:"calc-label",children:["Coverage Amount",(0,a.jsx)("span",{className:"calc-value",children:p(x)})]}),(0,a.jsxs)("div",{className:"calc-slider-wrap",children:[(0,a.jsx)("input",{type:"range",min:15e3,max:15e5,step:5e3,value:x,onChange:e=>m(Number(e.target.value)),className:"calc-slider"}),(0,a.jsxs)("div",{className:"calc-slider-labels",children:[(0,a.jsx)("span",{children:"$15K"}),(0,a.jsx)("span",{children:"$1.5M"})]})]})]}),(0,a.jsxs)("div",{className:"calc-field",children:[(0,a.jsx)("label",{className:"calc-label",children:"Term Duration"}),(0,a.jsx)("select",{value:u,onChange:e=>h(e.target.value),className:"calc-select",children:d.map(e=>(0,a.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,a.jsxs)("div",{className:"calc-field",children:[(0,a.jsx)("label",{className:"calc-label",children:"Date of Birth"}),(0,a.jsx)("input",{type:"date",value:g,onChange:e=>b(e.target.value),className:"calc-input",max:new Date().toISOString().split("T")[0]})]}),(0,a.jsxs)("div",{className:"calc-field-row",children:[(0,a.jsxs)("div",{className:"calc-field calc-field-half",children:[(0,a.jsx)("label",{className:"calc-label",children:"Gender"}),(0,a.jsxs)("div",{className:"calc-radio-group-compact",children:[(0,a.jsxs)("label",{className:`calc-radio-compact ${"male"===f?"active":""}`,children:[(0,a.jsx)("input",{type:"radio",name:"gender",value:"male",checked:"male"===f,onChange:e=>v(e.target.value)}),"Male"]}),(0,a.jsxs)("label",{className:`calc-radio-compact ${"female"===f?"active":""}`,children:[(0,a.jsx)("input",{type:"radio",name:"gender",value:"female",checked:"female"===f,onChange:e=>v(e.target.value)}),"Female"]})]})]}),(0,a.jsxs)("div",{className:"calc-field calc-field-half",children:[(0,a.jsx)("label",{className:"calc-label",children:"Tobacco Use"}),(0,a.jsxs)("div",{className:"calc-radio-group-compact",children:[(0,a.jsxs)("label",{className:`calc-radio-compact ${"no"===j?"active":""}`,children:[(0,a.jsx)("input",{type:"radio",name:"smoker",value:"no",checked:"no"===j,onChange:e=>y(e.target.value)}),"No"]}),(0,a.jsxs)("label",{className:`calc-radio-compact ${"yes"===j?"active":""}`,children:[(0,a.jsx)("input",{type:"radio",name:"smoker",value:"yes",checked:"yes"===j,onChange:e=>y(e.target.value)}),"Yes"]})]})]})]}),(0,a.jsxs)("div",{className:"calc-field",children:[(0,a.jsx)("label",{className:"calc-label",children:"Province"}),(0,a.jsx)("select",{value:w,onChange:e=>N(e.target.value),className:"calc-select",children:n.map(e=>(0,a.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,a.jsxs)("button",{type:"submit",className:`calc-submit ${z?"":"disabled"}`,disabled:!z,children:[(0,a.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),(0,a.jsx)("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),(0,a.jsx)("line",{x1:"8",y1:"10",x2:"16",y2:"10"}),(0,a.jsx)("line",{x1:"8",y1:"14",x2:"12",y2:"14"})]}),"Calculate My Quote"]})]})}),(0,a.jsx)(s.motion.div,{className:"calc-result-card",initial:"hidden",animate:"show",variants:o(.1),children:k?(0,a.jsxs)(s.motion.div,{className:"calc-result-filled",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[(0,a.jsxs)("div",{className:"calc-result-header",children:[(0,a.jsx)("div",{className:"calc-result-icon calc-result-icon--success",children:(0,a.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,a.jsx)("h3",{className:"calc-result-title",children:"Your Estimated Quote"}),(0,a.jsx)("p",{className:"calc-result-subtitle",children:"Based on your information"})]}),(0,a.jsxs)("div",{className:"calc-estimate-box",children:[(0,a.jsx)("span",{className:"calc-estimate-label",children:"Monthly Premium"}),(0,a.jsxs)("div",{className:"calc-estimate-range",children:[(0,a.jsxs)("span",{className:"calc-estimate-low",children:["$",S?.low]}),(0,a.jsx)("span",{className:"calc-estimate-sep",children:"–"}),(0,a.jsxs)("span",{className:"calc-estimate-high",children:["$",S?.high]})]}),(0,a.jsxs)("span",{className:"calc-estimate-avg",children:["Average: ~$",S?.mid,"/month"]})]}),(0,a.jsxs)("div",{className:"calc-summary",children:[(0,a.jsxs)("div",{className:"calc-summary-row",children:[(0,a.jsx)("span",{children:"Coverage"}),(0,a.jsx)("strong",{children:p(x)})]}),(0,a.jsxs)("div",{className:"calc-summary-row",children:[(0,a.jsx)("span",{children:"Term"}),(0,a.jsx)("strong",{children:"whole"===u?"Whole Life":`${u} Years`})]}),(0,a.jsxs)("div",{className:"calc-summary-row",children:[(0,a.jsx)("span",{children:"Tobacco Use"}),(0,a.jsx)("strong",{children:"yes"===j?"Yes":"No"})]})]}),(0,a.jsxs)("div",{className:"calc-result-actions",children:[(0,a.jsx)("button",{onClick:e,className:"calc-cta-primary",children:"Get Exact Quote →"}),(0,a.jsx)("button",{onClick:()=>C(!1),className:"calc-cta-secondary",children:"Recalculate"})]}),(0,a.jsx)("p",{className:"calc-disclaimer",children:"* This is an estimate only. Actual premiums may vary based on health history, lifestyle, and underwriting. Speak with a licensed advisor for an accurate quote."})]}):(0,a.jsxs)("div",{className:"calc-result-empty",children:[(0,a.jsx)("div",{className:"calc-result-icon",children:(0,a.jsxs)("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,a.jsx)("polyline",{points:"9 12 11 14 15 10"})]})}),(0,a.jsx)("h3",{className:"calc-result-title",children:"Your Estimate"}),(0,a.jsx)("p",{className:"calc-result-empty-text",children:"Fill out the form to get your personalized life insurance quote estimate."})]})})]}),(0,a.jsxs)(s.motion.div,{className:"calc-info-grid",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},children:[(0,a.jsxs)(s.motion.div,{variants:o(0),className:"calc-info-card",children:[(0,a.jsx)("div",{className:"calc-info-icon",children:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),(0,a.jsx)("h4",{children:"100% Confidential"}),(0,a.jsx)("p",{children:"Your information is secure and never shared without your consent."})]}),(0,a.jsxs)(s.motion.div,{variants:o(.08),className:"calc-info-card",children:[(0,a.jsx)("div",{className:"calc-info-icon",children:(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),(0,a.jsx)("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]})}),(0,a.jsx)("h4",{children:"No Cost to You"}),(0,a.jsx)("p",{children:"Our service is completely free. We're compensated by insurers, not you."})]}),(0,a.jsxs)(s.motion.div,{variants:o(.16),className:"calc-info-card",children:[(0,a.jsx)("div",{className:"calc-info-icon",children:(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,a.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,a.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,a.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),(0,a.jsx)("h4",{children:"Licensed Advisors"}),(0,a.jsx)("p",{children:"Work with AMF-licensed professionals who prioritize your best interest."})]})]})]})})}),(0,a.jsx)(i.default,{}),(0,a.jsx)("style",{children:`
        /* ── Calculator Section ── */
        .calc-section {
          padding: 32px 0 60px;
          background: #f8f9fa;
          min-height: calc(100vh - 80px);
        }

        /* ── Page Header ── */
        .calc-page-header {
          margin-bottom: 28px;
        }
        .calc-nav-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .calc-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          color: var(--dark);
          text-decoration: none;
          transition: all 0.2s;
        }
        .calc-back-btn:hover {
          border-color: var(--green);
          color: var(--green);
        }
        .calc-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
        }
        .calc-breadcrumb a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .calc-breadcrumb a:hover {
          color: var(--green);
        }
        .calc-breadcrumb-sep {
          color: var(--border);
        }
        .calc-page-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--dark);
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 8px;
        }
        .calc-page-title span {
          color: var(--green);
        }
        .calc-page-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          max-width: 500px;
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        /* ── Form Card ── */
        .calc-form-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          border: 1px solid var(--border);
        }
        .calc-field {
          margin-bottom: 18px;
        }
        .calc-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .calc-field-half {
          margin-bottom: 18px;
        }
        .calc-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .calc-value {
          font-size: 15px;
          font-weight: 800;
          color: var(--green);
          text-transform: none;
          letter-spacing: 0;
        }

        /* Slider */
        .calc-slider-wrap { position: relative; }
        .calc-slider {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e5e7eb;
          appearance: none;
          cursor: pointer;
        }
        .calc-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--green);
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(74,164,97,0.4);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .calc-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--green);
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(74,164,97,0.4);
          cursor: pointer;
        }
        .calc-slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: var(--muted);
          margin-top: 4px;
        }

        /* Select & Input */
        .calc-select,
        .calc-input {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 500;
          color: var(--dark);
          background: var(--bg-soft);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .calc-select:focus,
        .calc-input:focus {
          outline: none;
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(74,164,97,0.15);
        }

        /* Compact Radio Buttons for Gender/Tobacco */
        .calc-radio-group-compact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .calc-radio-compact {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          border-radius: 8px;
          background: var(--bg-soft);
          border: 1.5px solid var(--border);
          font-size: 13px;
          font-weight: 600;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .calc-radio-compact input {
          display: none;
        }
        .calc-radio-compact.active {
          background: rgba(74,164,97,0.1);
          border-color: var(--green);
          color: var(--green);
        }
        .calc-radio-compact:hover:not(.active) {
          border-color: #aaa;
        }

        /* Radio Buttons */
        .calc-radio-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .calc-radio-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 16px;
          border-radius: 12px;
          background: var(--bg-soft);
          border: 1.5px solid var(--border);
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .calc-radio-btn input {
          display: none;
        }
        .calc-radio-btn.active {
          background: rgba(74,164,97,0.08);
          border-color: var(--green);
          color: var(--green);
        }
        .calc-radio-btn:hover:not(.active) {
          border-color: #aaa;
        }
        .calc-radio-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        /* Submit */
        .calc-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          background: var(--green);
          color: #fff;
          font-size: 15px;
          font-weight: 800;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-top: 4px;
        }
        .calc-submit:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(74,164,97,0.35);
        }
        .calc-submit.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Result Card ── */
        .calc-result-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          border: 1px solid var(--border);
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }
        .calc-result-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px 20px;
        }
        .calc-result-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .calc-result-icon--success {
          width: 48px;
          height: 48px;
          background: var(--green);
          color: #fff;
          margin-bottom: 12px;
        }
        .calc-result-title {
          font-size: 18px;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 6px;
        }
        .calc-result-subtitle {
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .calc-result-empty-text {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.7;
          max-width: 240px;
        }

        /* Filled Result */
        .calc-result-filled {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .calc-result-header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Estimate Box */
        .calc-estimate-box {
          width: 100%;
          background: linear-gradient(135deg, var(--green) 0%, #3d8a4f 100%);
          border-radius: 14px;
          padding: 20px 20px;
          margin-bottom: 18px;
        }
        .calc-estimate-label {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .calc-estimate-range {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 6px;
          margin: 8px 0 6px;
        }
        .calc-estimate-low,
        .calc-estimate-high {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
        }
        .calc-estimate-sep {
          font-size: 20px;
          color: rgba(255,255,255,0.5);
        }
        .calc-estimate-avg {
          font-size: 13px;
          color: rgba(255,255,255,0.8);
        }

        /* Summary */
        .calc-summary {
          width: 100%;
          background: var(--bg-soft);
          border-radius: 10px;
          padding: 12px 16px;
          margin-bottom: 18px;
        }
        .calc-summary-row {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          font-size: 13px;
          color: var(--muted);
          border-bottom: 1px solid var(--border);
        }
        .calc-summary-row:last-child {
          border-bottom: none;
        }
        .calc-summary-row strong {
          color: var(--dark);
        }

        /* CTAs */
        .calc-result-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }
        .calc-cta-primary {
          width: 100%;
          padding: 14px 20px;
          background: var(--green);
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .calc-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(74,164,97,0.35);
        }
        .calc-cta-secondary {
          width: 100%;
          padding: 12px 20px;
          background: transparent;
          color: var(--muted);
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          font-family: inherit;
          transition: border-color 0.2s, color 0.2s;
        }
        .calc-cta-secondary:hover {
          border-color: var(--green);
          color: var(--green);
        }

        /* Disclaimer */
        .calc-disclaimer {
          font-size: 10px;
          color: var(--muted);
          line-height: 1.5;
          margin-top: 14px;
          text-align: center;
        }

        /* ── Info Cards ── */
        .calc-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .calc-info-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .calc-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .calc-info-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .calc-info-card h4 {
          font-size: 15px;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 8px;
        }
        .calc-info-card p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 900px) {
          .calc-grid {
            grid-template-columns: 1fr;
          }
          .calc-result-card {
            min-height: auto;
          }
          .calc-info-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .calc-section {
            padding: 20px 0 40px;
          }
          .calc-page-header {
            margin-bottom: 20px;
          }
          .calc-nav-row {
            flex-direction: row;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
          }
          .calc-page-title {
            font-size: 1.4rem;
          }
          .calc-page-desc {
            font-size: 13px;
          }
          .calc-form-card,
          .calc-result-card {
            padding: 20px 16px;
          }
          .calc-field-row {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .calc-estimate-low,
          .calc-estimate-high {
            font-size: 24px;
          }
        }
      `})]})}])}]);