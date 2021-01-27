(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?o.a.createElement(b,s(s({ref:t},c),{},{components:a})):o.a.createElement(b,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(125)),l={id:"eosio-core",title:"EOSIO Core",sidebar_label:"EOSIO Core"},s={unversionedId:"eos-learn/eosio-core",id:"eos-learn/eosio-core",isDocsHomePage:!1,title:"EOSIO Core",description:"Nodeos",source:"@site/docs/eos-learn/eosio-core.md",slug:"/eos-learn/eosio-core",permalink:"/docs/eos-learn/eosio-core",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/eosio-core.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1611770267,sidebar_label:"EOSIO Core",sidebar:"docs",previous:{title:"Ricardian Contracts",permalink:"/docs/eos-learn/ricardian-contracts"},next:{title:"Getting Started",permalink:"/docs/tutorials/getting-started"}},i=[{value:"Nodeos",id:"nodeos",children:[]},{value:"Cleos",id:"cleos",children:[{value:"Cleos Commands",id:"cleos-commands",children:[]},{value:"Cleos Example",id:"cleos-example",children:[]}]},{value:"EOSIO.CDT",id:"eosiocdt",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Use Linux terminal",id:"use-linux-terminal",children:[]}]},{value:"Install binaries",id:"install-binaries",children:[]}],c={toc:i};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"nodeos"},"Nodeos"),Object(r.a)("p",null,Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eos/latest/nodeos/index"}),"Nodeos")," is the core service daemon that runs on every EOSIO node it can be configured with plugins to run a node. It also, connects to and syncs data with other nodes in the net via P2P.It can be configured to process:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Smart Contracts"),Object(r.a)("li",{parentName:"ul"},"Validate Transactions"),Object(r.a)("li",{parentName:"ul"},"Produce blocks containing valid transactions"),Object(r.a)("li",{parentName:"ul"},"Confirm blocks to record them on the blockchain")),Object(r.a)("h2",{id:"cleos"},"Cleos"),Object(r.a)("p",null,Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eos/latest/cleos/index"}),"Cleos")," is a command line tool that interfaces with Nodeos with a wallet utility (Keosd) responsible for managing keys and signing transactions. Developers can also use cleos to deploy and test EOSIO smart contracts."),Object(r.a)("p",null,"To use Cleos, you need the end point(IP address and port number) of a running nodeos instance."),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eos/latest/keosd/index"}),"Keosd"),": is a key manager service daemon for storing private keys and signing digital messages. ")),Object(r.a)("h3",{id:"cleos-commands"},"Cleos Commands"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$cleos --help\n$cleos create --help\n$cleos create account --help\n")),Object(r.a)("h3",{id:"cleos-example"},"Cleos Example"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ cleos wallet create -n mywallet --to-console\n")),Object(r.a)("h2",{id:"eosiocdt"},"EOSIO.CDT"),Object(r.a)("p",null,Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.cdt/latest/index"}),"EOSIO.CDT")," or ",Object(r.a)("strong",{parentName:"p"},"Contract Development Toolkit")," is a toolchain for WebAssembly(WASM) with tools to facilitate smart contracts development.C++ to WASM compiler and ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/v2.0/getting-started/smart-contract-development/understanding-ABI-files"}),Object(r.a)("strong",{parentName:"a"},"Aplication Binary Interface")),"(ABI) generator set of C/C++ libraries for smart contracts development."),Object(r.a)("h2",{id:"getting-started"},"Getting Started"),Object(r.a)("p",null,"As a way to help you start in EOSIO world, here is a guide on how to install the EOSIO Contract Development Toolkit.\nIf you are using a different OS rather than windows visit ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"}),"this site")," to see the prerequisites and skip to ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#install-binaries"}),"Install Binaries"),".\nThis installation guide will aim for Windows users, unfortunately, EOSIO does not provide PowerShell ports and instructions for this OS. As a developer you have two options ",Object(r.a)("em",{parentName:"p"},"one")," to use a Virtual Machine or, like in this case a Linux Terminal on Windows. Follow these steps:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Go to your Control Panel"),Object(r.a)("li",{parentName:"ul"},"Go to Programs -> Programs and Features"),Object(r.a)("li",{parentName:"ul"},"Then, click ",Object(r.a)("strong",{parentName:"li"},"Turn Windows features on or off")),Object(r.a)("li",{parentName:"ul"},"Search for the option and click ",Object(r.a)("strong",{parentName:"li"},"Windows Subsystem for Linux")," and press ",Object(r.a)("em",{parentName:"li"},"OK")),Object(r.a)("li",{parentName:"ul"},"Now you need to restart your Windows OS"),Object(r.a)("li",{parentName:"ul"},"Finally , go to your ",Object(r.a)("em",{parentName:"li"},"Microsoft Store")," and Search for whatever Linux OS you want, we recommend you install Ubuntu 18.04 LTS")),Object(r.a)("h3",{id:"use-linux-terminal"},"Use Linux terminal"),Object(r.a)("p",null,'It will ask for UNIX username and password, you can set it up as you wish.\nThis is a navigation example with a "C" Disk'),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ cd /mnt/c/\n")),Object(r.a)("p",null,"Here you are in your C disk where you can execute ",Object(r.a)("inlineCode",{parentName:"p"},"$ls -al")," to see your files."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ cd Users/"your_user_name"\n')),Object(r.a)("p",null,"After you are in your wish folder you can follow the next steps."),Object(r.a)("h2",{id:"install-binaries"},"Install binaries"),Object(r.a)("p",null,"This guide will be using ",Object(r.a)("strong",{parentName:"p"},"Ubuntu 18.04")," command install lines. For other OS and more information go to ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"}),"EOSIO Before You Begin"),"."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Step 1: Install binaries"))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ wget https://github.com/EOSIO/eos/releases/download/v2.0.0/eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ sudo apt install ./eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Step 2: Setup a development directory"))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ mkdir "your_development_directory_name"\n$ cd "your_development_directory_name"\n')),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Step 3: Enter your local directory"))),Object(r.a)("p",null,"Get your directory path with ",Object(r.a)("inlineCode",{parentName:"p"},"$ pwd"),", clone the EOSIO version from ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/blob/master/README.md"}),"GitHub")," in that directory path."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ git clone --recursive https://github.com/eosio/eosio.cdt --branch v1.6.3 --single-branch\n")),Object(r.a)("p",null,"It may take up to 30 minutes to clone the repository. After that, use ",Object(r.a)("inlineCode",{parentName:"p"},"$ cd eosio.cdt")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Step 4 : Build the EOSIO.CDT"))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ ./build.sh\n")),Object(r.a)("p",null,"Installing eosio.cdt will make the compiled binary global so, it can be accessible anywhere. For this tutorial, it is strongly suggested that you do not skip the install step for eosio.cdt."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ sudo ./install.sh\n")),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"For more information on how to Install the Contract DEV. Toolkit go to ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/install-the-CDT"}),"this page"))),Object(r.a)("p",null,"Now you are set for creating a development wallet with the help of Cleos. ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/create-development-wallet"}),"More information")))}p.isMDXComponent=!0}}]);