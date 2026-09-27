module.exports=[15037,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(38679),f=a.i(783),g=a.i(46271),h=a.i(85196);let i=(a=0)=>({hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.4,delay:a,ease:[.22,1,.36,1]}}}),j=[{value:"",label:"Select Province"},{value:"AB",label:"Alberta"},{value:"BC",label:"British Columbia"},{value:"MB",label:"Manitoba"},{value:"NB",label:"New Brunswick"},{value:"NL",label:"Newfoundland and Labrador"},{value:"NS",label:"Nova Scotia"},{value:"NT",label:"Northwest Territories"},{value:"NU",label:"Nunavut"},{value:"ON",label:"Ontario"},{value:"PE",label:"Prince Edward Island"},{value:"QC",label:"Quebec"},{value:"SK",label:"Saskatchewan"},{value:"YT",label:"Yukon"}],k=[{value:"",label:"Select Term"},{value:"10",label:"10 Years"},{value:"15",label:"15 Years"},{value:"20",label:"20 Years"},{value:"25",label:"25 Years"},{value:"30",label:"30 Years"},{value:"whole",label:"Whole Life"}],l=a=>a>=1e6?`$${(a/1e6).toFixed(1)}M`:`$${(a/1e3).toFixed(0)}K`;a.s(["default",0,function(){let{openModal:a}=(0,h.useModal)(),[m,n]=(0,c.useState)(25e4),[o,p]=(0,c.useState)(""),[q,r]=(0,c.useState)(""),[s,t]=(0,c.useState)(""),[u,v]=(0,c.useState)(""),[w,x]=(0,c.useState)(""),[y,z]=(0,c.useState)(!1),A=m&&o&&q&&s&&u&&w,B=(()=>{if(!A)return null;let a=new Date(q),b=new Date().getFullYear()-a.getFullYear(),c=.15;b<30?c*=.7:b<40?c*=1:b<50?c*=1.5:b<60?c*=2.2:c*=3.5,"male"===s&&(c*=1.15),"yes"===u&&(c*=2.5),"whole"===o?c*=4:parseInt(o)>=25?c*=1.3:parseInt(o)>=20&&(c*=1.15);let d=m/1e3*c;return{low:Math.round(.8*d),mid:Math.round(d),high:Math.round(1.3*d)}})();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(e.default,{}),(0,b.jsx)("main",{children:(0,b.jsx)("section",{className:"calc-section",children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsxs)(g.motion.div,{className:"calc-page-header",initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.4,ease:[.22,1,.36,1]},children:[(0,b.jsxs)("div",{className:"calc-nav-row",children:[(0,b.jsxs)(d.default,{href:"/",className:"calc-back-btn",children:[(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M19 12H5"}),(0,b.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]}),(0,b.jsxs)("div",{className:"calc-breadcrumb",children:[(0,b.jsx)(d.default,{href:"/",children:"Home"}),(0,b.jsx)("span",{className:"calc-breadcrumb-sep",children:"›"}),(0,b.jsx)("span",{children:"Quote Calculator"})]})]}),(0,b.jsxs)("h1",{className:"calc-page-title",children:["Life Insurance ",(0,b.jsx)("span",{children:"Quote Calculator"})]}),(0,b.jsx)("p",{className:"calc-page-desc",children:"Get an instant estimate in seconds. No personal information required. Free, confidential, and no obligation."})]}),(0,b.jsxs)("div",{className:"calc-grid",children:[(0,b.jsx)(g.motion.div,{className:"calc-form-card",initial:"hidden",animate:"show",variants:i(0),children:(0,b.jsxs)("form",{onSubmit:a=>{a.preventDefault(),A&&z(!0)},children:[(0,b.jsxs)("div",{className:"calc-field",children:[(0,b.jsxs)("label",{className:"calc-label",children:["Coverage Amount",(0,b.jsx)("span",{className:"calc-value",children:l(m)})]}),(0,b.jsxs)("div",{className:"calc-slider-wrap",children:[(0,b.jsx)("input",{type:"range",min:15e3,max:15e5,step:5e3,value:m,onChange:a=>n(Number(a.target.value)),className:"calc-slider"}),(0,b.jsxs)("div",{className:"calc-slider-labels",children:[(0,b.jsx)("span",{children:"$15K"}),(0,b.jsx)("span",{children:"$1.5M"})]})]})]}),(0,b.jsxs)("div",{className:"calc-field",children:[(0,b.jsx)("label",{className:"calc-label",children:"Term Duration"}),(0,b.jsx)("select",{value:o,onChange:a=>p(a.target.value),className:"calc-select",children:k.map(a=>(0,b.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,b.jsxs)("div",{className:"calc-field",children:[(0,b.jsx)("label",{className:"calc-label",children:"Date of Birth"}),(0,b.jsx)("input",{type:"date",value:q,onChange:a=>r(a.target.value),className:"calc-input",max:new Date().toISOString().split("T")[0]})]}),(0,b.jsxs)("div",{className:"calc-field-row",children:[(0,b.jsxs)("div",{className:"calc-field calc-field-half",children:[(0,b.jsx)("label",{className:"calc-label",children:"Gender"}),(0,b.jsxs)("div",{className:"calc-radio-group-compact",children:[(0,b.jsxs)("label",{className:`calc-radio-compact ${"male"===s?"active":""}`,children:[(0,b.jsx)("input",{type:"radio",name:"gender",value:"male",checked:"male"===s,onChange:a=>t(a.target.value)}),"Male"]}),(0,b.jsxs)("label",{className:`calc-radio-compact ${"female"===s?"active":""}`,children:[(0,b.jsx)("input",{type:"radio",name:"gender",value:"female",checked:"female"===s,onChange:a=>t(a.target.value)}),"Female"]})]})]}),(0,b.jsxs)("div",{className:"calc-field calc-field-half",children:[(0,b.jsx)("label",{className:"calc-label",children:"Tobacco Use"}),(0,b.jsxs)("div",{className:"calc-radio-group-compact",children:[(0,b.jsxs)("label",{className:`calc-radio-compact ${"no"===u?"active":""}`,children:[(0,b.jsx)("input",{type:"radio",name:"smoker",value:"no",checked:"no"===u,onChange:a=>v(a.target.value)}),"No"]}),(0,b.jsxs)("label",{className:`calc-radio-compact ${"yes"===u?"active":""}`,children:[(0,b.jsx)("input",{type:"radio",name:"smoker",value:"yes",checked:"yes"===u,onChange:a=>v(a.target.value)}),"Yes"]})]})]})]}),(0,b.jsxs)("div",{className:"calc-field",children:[(0,b.jsx)("label",{className:"calc-label",children:"Province"}),(0,b.jsx)("select",{value:w,onChange:a=>x(a.target.value),className:"calc-select",children:j.map(a=>(0,b.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,b.jsxs)("button",{type:"submit",className:`calc-submit ${A?"":"disabled"}`,disabled:!A,children:[(0,b.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),(0,b.jsx)("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),(0,b.jsx)("line",{x1:"8",y1:"10",x2:"16",y2:"10"}),(0,b.jsx)("line",{x1:"8",y1:"14",x2:"12",y2:"14"})]}),"Calculate My Quote"]})]})}),(0,b.jsx)(g.motion.div,{className:"calc-result-card",initial:"hidden",animate:"show",variants:i(.1),children:y?(0,b.jsxs)(g.motion.div,{className:"calc-result-filled",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[(0,b.jsxs)("div",{className:"calc-result-header",children:[(0,b.jsx)("div",{className:"calc-result-icon calc-result-icon--success",children:(0,b.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,b.jsx)("h3",{className:"calc-result-title",children:"Your Estimated Quote"}),(0,b.jsx)("p",{className:"calc-result-subtitle",children:"Based on your information"})]}),(0,b.jsxs)("div",{className:"calc-estimate-box",children:[(0,b.jsx)("span",{className:"calc-estimate-label",children:"Monthly Premium"}),(0,b.jsxs)("div",{className:"calc-estimate-range",children:[(0,b.jsxs)("span",{className:"calc-estimate-low",children:["$",B?.low]}),(0,b.jsx)("span",{className:"calc-estimate-sep",children:"–"}),(0,b.jsxs)("span",{className:"calc-estimate-high",children:["$",B?.high]})]}),(0,b.jsxs)("span",{className:"calc-estimate-avg",children:["Average: ~$",B?.mid,"/month"]})]}),(0,b.jsxs)("div",{className:"calc-summary",children:[(0,b.jsxs)("div",{className:"calc-summary-row",children:[(0,b.jsx)("span",{children:"Coverage"}),(0,b.jsx)("strong",{children:l(m)})]}),(0,b.jsxs)("div",{className:"calc-summary-row",children:[(0,b.jsx)("span",{children:"Term"}),(0,b.jsx)("strong",{children:"whole"===o?"Whole Life":`${o} Years`})]}),(0,b.jsxs)("div",{className:"calc-summary-row",children:[(0,b.jsx)("span",{children:"Tobacco Use"}),(0,b.jsx)("strong",{children:"yes"===u?"Yes":"No"})]})]}),(0,b.jsxs)("div",{className:"calc-result-actions",children:[(0,b.jsx)("button",{onClick:a,className:"calc-cta-primary",children:"Get Exact Quote →"}),(0,b.jsx)("button",{onClick:()=>z(!1),className:"calc-cta-secondary",children:"Recalculate"})]}),(0,b.jsx)("p",{className:"calc-disclaimer",children:"* This is an estimate only. Actual premiums may vary based on health history, lifestyle, and underwriting. Speak with a licensed advisor for an accurate quote."})]}):(0,b.jsxs)("div",{className:"calc-result-empty",children:[(0,b.jsx)("div",{className:"calc-result-icon",children:(0,b.jsxs)("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,b.jsx)("polyline",{points:"9 12 11 14 15 10"})]})}),(0,b.jsx)("h3",{className:"calc-result-title",children:"Your Estimate"}),(0,b.jsx)("p",{className:"calc-result-empty-text",children:"Fill out the form to get your personalized life insurance quote estimate."})]})})]}),(0,b.jsxs)(g.motion.div,{className:"calc-info-grid",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},children:[(0,b.jsxs)(g.motion.div,{variants:i(0),className:"calc-info-card",children:[(0,b.jsx)("div",{className:"calc-info-icon",children:(0,b.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),(0,b.jsx)("h4",{children:"100% Confidential"}),(0,b.jsx)("p",{children:"Your information is secure and never shared without your consent."})]}),(0,b.jsxs)(g.motion.div,{variants:i(.08),className:"calc-info-card",children:[(0,b.jsx)("div",{className:"calc-info-icon",children:(0,b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),(0,b.jsx)("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]})}),(0,b.jsx)("h4",{children:"No Cost to You"}),(0,b.jsx)("p",{children:"Our service is completely free. We're compensated by insurers, not you."})]}),(0,b.jsxs)(g.motion.div,{variants:i(.16),className:"calc-info-card",children:[(0,b.jsx)("div",{className:"calc-info-icon",children:(0,b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,b.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,b.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),(0,b.jsx)("h4",{children:"Licensed Advisors"}),(0,b.jsx)("p",{children:"Work with AMF-licensed professionals who prioritize your best interest."})]})]})]})})}),(0,b.jsx)(f.default,{}),(0,b.jsx)("style",{children:`
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
      `})]})}])}];

//# sourceMappingURL=app_quote-calculator_page_tsx_1autsfh._.js.map