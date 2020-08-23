(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=b(r),p=n,h=l["".concat(c,".").concat(p)]||l[p]||d[p]||a;return r?o.a.createElement(h,i(i({ref:t},u),{},{components:r})):o.a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),a=(r(0),r(106)),c={id:"devops",title:"DevOps",sidebar_label:"DevOps"},i={unversionedId:"devops",id:"devops",isDocsHomePage:!1,title:"DevOps",description:"At EOS Costa Rica we follow the DevOps principles to build and deploy software.",source:"@site/docs/devops.md",permalink:"/docs/devops",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/devops.md",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1598222203,sidebar_label:"DevOps",sidebar:"docs",previous:{title:"Agile methodologies",permalink:"/docs/agile-methodologies"},next:{title:"Our Favorite Tools",permalink:"/docs/developer-tools"}},s=[{value:"Infrastructure as Code ( IAC )",id:"infrastructure-as-code--iac-",children:[{value:"Introduction to Terraform",id:"introduction-to-terraform",children:[]},{value:"Introduction to HashiCorp Terraform",id:"introduction-to-hashicorp-terraform",children:[]}]},{value:"EOS Costa Rica Infrastructure as Code (IaC)",id:"eos-costa-rica-infrastructure-as-code-iac",children:[]},{value:"Introduction a Docker and Kubernetes",id:"introduction-a-docker-and-kubernetes",children:[{value:"What is a Container?",id:"what-is-a-container",children:[]},{value:"Containers 101",id:"containers-101",children:[]},{value:"What is Docker?",id:"what-is-docker",children:[]},{value:"Kubernetes in 5 mins",id:"kubernetes-in-5-mins",children:[]},{value:"Kubernetes vs. Docker: It&#39;s Not an Either/Or Question",id:"kubernetes-vs-docker-its-not-an-eitheror-question",children:[]}]},{value:"Kubernetes at EOS Costa Rica",id:"kubernetes-at-eos-costa-rica",children:[]}],u={rightToc:s};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"At EOS Costa Rica we follow the DevOps principles to build and deploy software. "),Object(a.b)("p",null,"Automation is at the top of our priorities, everything from scaffolding to code optimization, testing, deploy and delivery."),Object(a.b)("p",null,"Continuous integration allows us to detect problems early reducing costs and help us deliver robust software more rapidly."),Object(a.b)("p",null,"Continuous communication and frequent one-on-one calls as well as pair programming are essential part of our day to day work."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"infrastructure-as-code--iac-"},"Infrastructure as Code ( IAC )"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h3",{id:"introduction-to-terraform"},"Introduction to Terraform"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h3",{id:"introduction-to-hashicorp-terraform"},"Introduction to HashiCorp Terraform"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("h2",{id:"eos-costa-rica-infrastructure-as-code-iac"},"EOS Costa Rica Infrastructure as Code (IaC)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Openstack documentation")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs"}),"https://github.com/edenia/openstack-docs")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Kubernetes documentation")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md"}),"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md")),Object(a.b)("h2",{id:"introduction-a-docker-and-kubernetes"},"Introduction a Docker and Kubernetes"),Object(a.b)("h3",{id:"what-is-a-container"},"What is a Container?"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-EnJ7qX9fkcU",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h3",{id:"containers-101"},"Containers 101"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("p",null,"Watch the full intro to containers playlist here",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H"}),"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"what-is-docker"},"What is Docker?"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h3",{id:"kubernetes-in-5-mins"},"Kubernetes in 5 mins"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h3",{id:"kubernetes-vs-docker-its-not-an-eitheror-question"},"Kubernetes vs. Docker: It's Not an Either/Or Question"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{wwidth:"100%",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h2",{id:"kubernetes-at-eos-costa-rica"},"Kubernetes at EOS Costa Rica"),Object(a.b)("p",null,"Following you can find a set of very convenient tutorials for learning kubernetes from scratch:"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"}),"https://kubernetes.io/docs/tutorials/kubernetes-basics/")),Object(a.b)("p",null,"To be able to try these tutorials in a real environment, you could try our Kubernetes installation\nin Openstack. If you prefer so, you may also create a local setup in your own machine: "),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"}),"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"),". "),Object(a.b)("p",null,"Request to the administrators for access to our Openstack installation dashboard and the Sandbox\nproject. Then you can follow the next steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"First of all connect to the master node using the SSH tool:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"ssh -i key.pem user@master-sandbox\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Get information about the cluster:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl cluster-info\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Show the current available nodes in the cluster:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get nodes\n")))}b.isMDXComponent=!0}}]);