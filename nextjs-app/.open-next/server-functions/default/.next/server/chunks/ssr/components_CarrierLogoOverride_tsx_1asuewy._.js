module.exports=[71536,a=>{"use strict";var b=a.i(72131);a.s(["default",0,function({logoSrc:a,carrierName:c,theme:d="green",hideColorSwitcher:e=!1,logoSize:f="normal"}){return(0,b.useEffect)(()=>{let b="carrier-logo-override",c=document.getElementById(b);c&&c.remove();let g="purple"===d?`
        :root {
          --green: #572a4e !important;
          --green-dark: #462040 !important;
          --green-light: #f3e8f0 !important;
        }
      `:"",h=e?`
        .color-switcher-bar {
          display: none !important;
        }
      `:"",i=document.createElement("style");return i.id=b,i.textContent=`
      .logo-wrap img {
        content: url("${a}") !important;
        max-height: ${({normal:"45px",large:"60px",xlarge:"75px"})[f]} !important;
        width: auto !important;
      }
      ${g}
      ${h}
    `,document.head.appendChild(i),"purple"===d&&localStorage.setItem("brand-color","#572a4e"),()=>{let a=document.getElementById(b);a&&a.remove(),"purple"===d&&localStorage.removeItem("brand-color")}},[a,d,e,f]),null}])}];

//# sourceMappingURL=components_CarrierLogoOverride_tsx_1asuewy._.js.map