(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),c=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,n=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=r,h=p["".concat(n,".").concat(m)]||p[m]||u[m]||o;return a?c.a.createElement(h,i(i({ref:t},s),{},{components:a})):c.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var s=2;s<o;s++)n[s]=a[s];return c.a.createElement.apply(null,n)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(2),c=a(6),o=(a(0),a(105)),n={id:"material-ui",title:"Material UI & Theme",sidebar_label:"Material UI Theme"},i={unversionedId:"material-ui",id:"material-ui",isDocsHomePage:!1,title:"Material UI & Theme",description:"Logo and visual assets",source:"@site/docs/material-ui.md",permalink:"/docs/material-ui",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/material-ui.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1597859182,sidebar_label:"Material UI Theme",sidebar:"docs",previous:{title:"Open Source Projects",permalink:"/docs/open-source-projects"},next:{title:"Our Favorite Tools",permalink:"/docs/developer-tools"}},l=[{value:"Logo and visual assets",id:"logo-and-visual-assets",children:[]},{value:"Color Palette",id:"color-palette",children:[]},{value:"Typography",id:"typography",children:[]},{value:"Material UI theme",id:"material-ui-theme",children:[{value:"Zeplin",id:"zeplin",children:[]},{value:"Material UI theme NPM package",id:"material-ui-theme-npm-package",children:[]},{value:"Theme exports",id:"theme-exports",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"logo-and-visual-assets"},"Logo and visual assets"),Object(o.b)("p",null,"In this link you have access to Logos and visual assets"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GitHub")," : ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/design-assets"}),"https://github.com/eoscostarica/design-assets"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"color-palette"},"Color Palette"),Object(o.b)("p",null,"In this link you can see the color palette that the company uses on its sites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/eoscr-mui-library/blob/master/exports/Color_Scheme.pdf"}),"Color Scheme"))),Object(o.b)("p",null,"Example:"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOSCR_Color_Scheme_Primary.PNG",alt:"Color Scheme Primary"}))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOSCR_Color_Scheme_Secondary.PNG",alt:"Color Scheme Segundary"}))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"typography"},"Typography"),Object(o.b)("p",null,"In this link you can see the typography styles that are used in the company sites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/eoscr-mui-library/blob/master/exports/Typography_Scale.pdf"}),"Typography")," ")),Object(o.b)("p",null,"Example:"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOSCR_Typography_Scale.PNG",alt:"Typography Scale"}))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"material-ui-theme"},"Material UI theme"),Object(o.b)("p",null,"Our own Material Design UI library."),Object(o.b)("h3",{id:"zeplin"},"Zeplin"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://zpl.io/brZKD4L"}),"Zeplin Project")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://scene.zeplin.io/project/5ea8f7f46cfde425751bc5ec"}),"Zeplin Scene"))),Object(o.b)("h3",{id:"material-ui-theme-npm-package"},"Material UI theme NPM package"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GitHub")," : ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/eoscr-theme"}),"https://github.com/eoscostarica/eoscr-theme")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NPM cloud")," : ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"}),"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"))),Object(o.b)("h3",{id:"theme-exports"},"Theme exports"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/eoscr-mui-library/blob/master/exports/Theme_UI.pdf"}),"Theme UI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/eoscr-mui-library/blob/master/exports/System_Icons.pdf"}),"Product Icons")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/eoscr-mui-library/blob/master/exports/Color_Scheme.pdf"}),"System Icons")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eoscostarica/eoscr-mui-library/blob/master/exports/Elevation.pdf"}),"Elevation"))))}b.isMDXComponent=!0}}]);