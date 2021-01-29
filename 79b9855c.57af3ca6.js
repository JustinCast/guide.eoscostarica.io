(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return a?o.a.createElement(m,s(s({ref:t},l),{},{components:a})):o.a.createElement(m,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(125)),i={id:"accounts-and-permissions",title:"Accounts And Permissions",sidebar_label:"Accounts And Permissions"},s={unversionedId:"eos-learn/accounts-and-permissions",id:"eos-learn/accounts-and-permissions",isDocsHomePage:!1,title:"Accounts And Permissions",description:"Accounts",source:"@site/docs/eos-learn/accounts-and-permissions.md",slug:"/eos-learn/accounts-and-permissions",permalink:"/docs/eos-learn/accounts-and-permissions",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/accounts-and-permissions.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1611948648,sidebar_label:"Accounts And Permissions",sidebar:"docs",previous:{title:"System Resources",permalink:"/docs/eos-learn/system-resources"},next:{title:"Important Functions in EOSIO",permalink:"/docs/eos-learn/important-functions"}},c=[{value:"Accounts",id:"accounts",children:[]},{value:"Account Permissions",id:"account-permissions",children:[]},{value:"Authorizations",id:"authorizations",children:[]},{value:"Authenticators (Wallets)",id:"authenticators-wallets",children:[]},{value:"Transit Wallet Access Layer",id:"transit-wallet-access-layer",children:[]},{value:"Universal Authenticator Library",id:"universal-authenticator-library",children:[]},{value:"Available Authenticators:",id:"available-authenticators",children:[]},{value:"KEOSD",id:"keosd",children:[]},{value:"EOSIO permissions",id:"eosio-permissions",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"accounts"},"Accounts"),Object(r.a)("p",null,"An ",Object(r.a)("strong",{parentName:"p"},"account")," on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain."),Object(r.a)("p",null,"The account name must comply with certain requirements: characters from ",Object(r.a)("inlineCode",{parentName:"p"},"a")," to ",Object(r.a)("inlineCode",{parentName:"p"},"z")," in lower case, numbers from ",Object(r.a)("inlineCode",{parentName:"p"},"1")," to ",Object(r.a)("inlineCode",{parentName:"p"},"5")," and have 12 characters length. E. g. ",Object(r.a)("inlineCode",{parentName:"p"},"eosioaccount")),Object(r.a)("p",null,"Read more on ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions#2-accounts"}),"EOSIO accounts")),Object(r.a)("h2",{id:"account-permissions"},"Account Permissions"),Object(r.a)("p",null,"EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform."),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("strong",{parentName:"p"},"For example:")," Any account can create a custom permission with its unique key pair to solely interact with a single contract.")),Object(r.a)("p",null,"In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol."),Object(r.a)("p",null,"Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute."),Object(r.a)("h2",{id:"authorizations"},"Authorizations"),Object(r.a)("p",null,"Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain."),Object(r.a)("p",null,"In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied"),Object(r.a)("p",null,"To get more information about these concepts, see ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions"}),"accounts and permissions documentation"),"."),Object(r.a)("h2",{id:"authenticators-wallets"},"Authenticators (Wallets)"),Object(r.a)("p",null,"The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password."),Object(r.a)("h2",{id:"transit-wallet-access-layer"},"Transit Wallet Access Layer"),Object(r.a)("p",null,"This library is a small abstraction layer on top of ",Object(r.a)("inlineCode",{parentName:"p"},"eosjs")," which aims to assist EOS dApp (decentralized app) developers with wallet communication (signature verification and acceptance) by providing a simple and intuitive API."),Object(r.a)("p",null,"Instead of focusing on supporting specific signature providers one by one, developers can support every one that has built a Transit plugin, allowing the user to use their signature provider of choice. This way, the best UX for signature providers wins and the developers can focus on building their dApp instead of setting up ",Object(r.a)("inlineCode",{parentName:"p"},"eosjs")," and wallet connections."),Object(r.a)("p",null,'Please see the "Quick Start" and thorough guide in the ',Object(r.a)("inlineCode",{parentName:"p"},"eos-transit")," ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eosnewyork/eos-transit"}),"package docs")),Object(r.a)("h2",{id:"universal-authenticator-library"},"Universal Authenticator Library"),Object(r.a)("p",null,"A library exists that allows apps to easily use different auth providers. App Developers need to support many authentication providers (wallets) in order to maximize user reach and permit user choice."),Object(r.a)("p",null,"The ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/EOSIO/universal-authenticator-library"}),"Universal Authenticator Library (UAL)")," achieves this goal by abstracting the internal business logic of many authentication providers and exposing a single universal API."),Object(r.a)("h2",{id:"available-authenticators"},"Available Authenticators:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-scatter"}),"UAL for Scatter")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-lynx"}),"UAL for Lynx")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-ledger"}),"UAL for Ledger")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/EOSIO/ual-token-pocket"}),"UAL for Token Pocket")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/meet-one/ual-meetone"}),"UAL for MEET.ONE")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/greymass/ual-anchor"}),"UAL for Anchor"))),Object(r.a)("h2",{id:"keosd"},"KEOSD"),Object(r.a)("p",null,"In the EOSIO's distribution comes included a CLI client called ",Object(r.a)("inlineCode",{parentName:"p"},"cleos")," that interacts with lite client called ",Object(r.a)("inlineCode",{parentName:"p"},"keosd")," which provides a secure wallet service and API endpoint for applications that require back-end integration with a signature provider."),Object(r.a)("h2",{id:"eosio-permissions"},"EOSIO permissions"),Object(r.a)("p",null,"EOSIO's permissions make it possible to strengthen account security to the point where the loss or theft of keys is nothing more than minor inconveniences. This weekly EOS episode covers what EOSIO permissions are on a conceptual level and the trend towards strong interconnected account networks."),Object(r.a)("figure",{class:"video_container"},Object(r.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameborder:"0",allowfullscreen:"true"}," ")))}u.isMDXComponent=!0}}]);