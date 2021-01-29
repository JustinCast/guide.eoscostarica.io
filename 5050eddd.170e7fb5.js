(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(a),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(125)),i={id:"devops",title:"DevOps",sidebar_label:"DevOps"},l={unversionedId:"devops",id:"devops",isDocsHomePage:!1,title:"DevOps",description:"DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging people, processes, & tools.",source:"@site/docs/devops.md",slug:"/devops",permalink:"/docs/devops",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/devops.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1611948648,sidebar_label:"DevOps",sidebar:"docs",previous:{title:"Software Development in Pair or Mob",permalink:"/docs/pair-mob-programming"},next:{title:"Our Favorite Tools",permalink:"/docs/developer-tools"}},s=[{value:"Key Definitions",id:"key-definitions",children:[]},{value:"Why Implement DevOps?",id:"why-implement-devops",children:[]},{value:"Areas of Emphasis",id:"areas-of-emphasis",children:[]},{value:"What Is the Goal of DevOps?",id:"what-is-the-goal-of-devops",children:[]},{value:"CI Systems - Examples",id:"ci-systems---examples",children:[]},{value:"CD Systems - Examples",id:"cd-systems---examples",children:[]},{value:"Infrastructure as Code ( IAC )",id:"infrastructure-as-code--iac-",children:[{value:"Introduction to Terraform",id:"introduction-to-terraform",children:[]},{value:"Introduction to HashiCorp Terraform",id:"introduction-to-hashicorp-terraform",children:[]}]},{value:"Introduction to Docker and Kubernetes",id:"introduction-to-docker-and-kubernetes",children:[{value:"Docker",id:"docker",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}]},{value:"Kubernetes at EOS Costa Rica",id:"kubernetes-at-eos-costa-rica",children:[]},{value:"References",id:"references",children:[]}],c={toc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging ",Object(o.a)("em",{parentName:"p"},"people, processes, & tools.")),Object(o.a)("p",null,"It focuses on unifying Development & IT Operations through the principles of flow, feedback, & experimentation."),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OOGFxVzW35w",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("h2",{id:"key-definitions"},"Key Definitions"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Continuous Integration (CI)"),": Addresses building software from contributions of individual developers in a controlled, agile way. (Checking all code into centralized repo daily)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Continuous Deployment (CD)"),": Automated Deployment (or transport) of code to production with no manual steps required. This will not be the plan with all applications."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Continuous Delivery (CD)"),": Automation that ensures deployment is validated, however manual step still required to deploy to production."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Deployment"),": The deployment (or transport) of code to a higher-level environment, up to & including production."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Release"),": The defined scope and business objective for a set of features to be delivered in a certain timeline.")),Object(o.a)("h2",{id:"why-implement-devops"},"Why Implement DevOps?"),Object(o.a)("p",null,"In 2012, Puppet Labs \u201cstate of DevOps report\u201d benchmarked 4,039 IT orgs using DevOps and found:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"30x more frequent code deployments"),Object(o.a)("li",{parentName:"ul"},"8,000x faster code deployment lead time"),Object(o.a)("li",{parentName:"ul"},"2x the change success rate"),Object(o.a)("li",{parentName:"ul"},"12x faster MTTR (mean time to repair)")),Object(o.a)("hr",null),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},"\u201c",Object(o.a)("em",{parentName:"p"},"The competitive advantage this capability creates is enormous, enabling faster feature time to market, increased customer satisfaction, market share, employee productivity, and happiness.\u201d"),Object(o.a)("br",{parentName:"p"}),"\n",Object(o.a)("strong",{parentName:"p"},"-Phoenix Project"))),Object(o.a)("hr",null),Object(o.a)("p",null,Object(o.a)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/5632966/105532539-95abdd00-5cb0-11eb-81ff-b854c4ec1784.png",alt:null}))),Object(o.a)("h2",{id:"areas-of-emphasis"},"Areas of Emphasis"),Object(o.a)("p",null,"DevOps principles are applied to and assisted by the following 3 Key areas all working together:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"People")," - DevOps relies on strong people & a strong culture of experimentation, learning, collaboration, and shared goals between Development, QA & IT Operations."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Processes")," \u2013 DevOps builds further upon Lean Agile, applying concepts of lean manufacturing to IT value streams."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Tools")," \u2013 DevOps relies on enhanced tools & technologies, including automation, telemetry, & collaboration tools.")),Object(o.a)("h2",{id:"what-is-the-goal-of-devops"},"What Is the Goal of DevOps?"),Object(o.a)("p",null,"Improve collaboration between all stakeholders from planning through delivery and automation of the delivery process in order to:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Improve deployment frequency"),Object(o.a)("li",{parentName:"ul"},"Achieve faster time to market"),Object(o.a)("li",{parentName:"ul"},"Lower failure rate of new releases"),Object(o.a)("li",{parentName:"ul"},"Shorten lead time between fixes"),Object(o.a)("li",{parentName:"ul"},"Improve mean time to recovery")),Object(o.a)("h2",{id:"ci-systems---examples"},"CI Systems - Examples"),Object(o.a)("p",null,Object(o.a)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/5632966/105532576-a0ff0880-5cb0-11eb-99fb-5176d5b823e4.png",alt:null}))),Object(o.a)("h2",{id:"cd-systems---examples"},"CD Systems - Examples"),Object(o.a)("p",null,Object(o.a)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png",alt:null}))),Object(o.a)("hr",null),Object(o.a)("h2",{id:"infrastructure-as-code--iac-"},"Infrastructure as Code ( IAC )"),Object(o.a)("p",null,"The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h3",{id:"introduction-to-terraform"},"Introduction to Terraform"),Object(o.a)("p",null,"Terraform is an infrastructure software as code, developed by HashiCorp. It enables users to define and configure the infrastructure of a data center in a high-level language."),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h3",{id:"introduction-to-hashicorp-terraform"},"Introduction to HashiCorp Terraform"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("h2",{id:"introduction-to-docker-and-kubernetes"},"Introduction to Docker and Kubernetes"),Object(o.a)("h3",{id:"docker"},"Docker"),Object(o.a)("p",null,"Docker is an open source project that automates the deployment of applications within software containers, providing an additional layer of abstraction and application virtualization automation across multiple operating systems."),Object(o.a)("h4",{id:"containers-101"},Object(o.a)("strong",{parentName:"h4"},"Containers 101")),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("p",null,Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCdkGV51Nu0unDNT58bHt9bg/search?query=containers"}),"More information about containers")),Object(o.a)("hr",null),Object(o.a)("h4",{id:"what-is-docker"},Object(o.a)("strong",{parentName:"h4"},"What is Docker?")),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h3",{id:"kubernetes"},"Kubernetes"),Object(o.a)("p",null,"Kubernetes is an open source system for automating the deployment, scaling, and handling of containerized applications that was originally designed by Google and donated to the Cloud Native Computing Foundation. It supports different environments for running containers, including Docker."),Object(o.a)("p",null,"Following you can find a set of very convenient tutorials for learning kubernetes from scratch:"),Object(o.a)("h4",{id:"kubernetes-in-5-mins"},Object(o.a)("strong",{parentName:"h4"},"Kubernetes in 5 mins")),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h4",{id:"kubernetes-vs-docker-its-not-an-eitheror-question"},Object(o.a)("strong",{parentName:"h4"},"Kubernetes vs. Docker: It's Not an Either/Or Question")),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{wwidth:"100%",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h2",{id:"kubernetes-at-eos-costa-rica"},"Kubernetes at EOS Costa Rica"),Object(o.a)("p",null,Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"}),"Learn Kubernetes Basics")),Object(o.a)("p",null,"To be able to try these tutorials in a real environment, you could try our Kubernetes installation\nin Openstack. If you prefer so, you may also create a local setup in your own machine: "),Object(o.a)("p",null,Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"}),"Install Minikube")," "),Object(o.a)("p",null,"Request to the administrators for access to our Openstack installation dashboard and the Sandbox\nproject. Then you can follow the next steps:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"First of all connect to the master node using the SSH tool:")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"ssh -i key.pem user@master-sandbox\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Get information about the cluster:")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"kubectl cluster-info\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Show the current available nodes in the cluster:")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"kubectl get nodes\n")),Object(o.a)("h2",{id:"references"},"References"),Object(o.a)("p",null,Object(o.a)("em",{parentName:"p"},"\u201cThe principles behind DevOps are the same that transformed manufacturing. Instead of optimizing how raw materials are transformed into finished goods, DevOps shows how we optimize the IT value stream..\u201d")," - Phoenix Project"),Object(o.a)("p",null,Object(o.a)("em",{parentName:"p"},"\u201cImagine living in a DevOps world, where product owners, Development, QA, IT Ops, and InfoSec work together relentlessly to help each other and the overall organization win. They are enabling fast flow of planned work into production, while preserving world-class stability, reliability, availability, and security.\u201d")," - Phoenix Project"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68"}),"Periodic Table of DevOps Tools")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f"}),"Automation")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://lab.github.com/githubtraining/devops-with-github-actions"}),"DevOps with GitHub"))))}u.isMDXComponent=!0}}]);