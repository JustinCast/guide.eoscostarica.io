(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(129)),i=t(132),c={id:"docker",title:"Docker",sidebar_label:"Docker"},s={unversionedId:"tutorials/docker",id:"tutorials/docker",isDocsHomePage:!1,title:"Docker",description:"Docker is a tool that allows you to quickly create, test, and deploy applications. The idea behind Docker is to create \u201ccontainers\u201d that are lightweight and portable so that applications can run on any machine with Docker installed, regardless of the operating system.",source:"@site/docs/tutorials/docker.md",slug:"/tutorials/docker",permalink:"/docs/tutorials/docker",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/docker.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1612582508,sidebar_label:"Docker",sidebar:"docs",previous:{title:"React JS",permalink:"/docs/tutorials/react-tutorial"},next:{title:"Glossary",permalink:"/docs/tools/glossary"}},l=[{value:"Docker Engine",id:"docker-engine",children:[]},{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Project Structure",id:"project-structure",children:[]},{value:"Code Breakdown",id:"code-breakdown",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Docker Compose Example",id:"docker-compose-example",children:[]},{value:"Run multiple Containers",id:"run-multiple-containers",children:[]}]}],d={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Docker is a tool that allows you to quickly create, test, and deploy applications. The idea behind Docker is to create \u201ccontainers\u201d that are lightweight and portable so that applications can run on any machine with Docker installed, regardless of the operating system."),Object(a.b)("p",null,"For example, each node of the blockchain network or service / application developed will be compiled into a docker image that contains all of its dependencies and is deployed to one of several infrastructure providers with docker available."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"Docker vs. Traditional VMs",src:Object(i.a)("/img/documentation-images/Docker-containerized-and-vm-transparent-bg.png")})),Object(a.b)("p",null,"In addition to Docker we use a container \u201corchestrator\u201d tool called Kubernetes (K8s)."),Object(a.b)("p",null,"Kubernetes helps you manage the containers in which your applications are hosted in an easy, fast, and scalable way. In addition, it also has load monitoring and balancing. About virtual servers. ",Object(a.b)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/devops#introduction-to-kubernetes-and-docker"},"More information"),"."),Object(a.b)("h2",{id:"docker-engine"},"Docker Engine"),Object(a.b)("p",null,"Docker Engine is an open source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A server with a long-running daemon process ",Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd"},"dockerd"),"."),Object(a.b)("li",{parentName:"ul"},"APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon."),Object(a.b)("li",{parentName:"ul"},"A command line interface (CLI) client ",Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/cli/"},"docker"),".")),Object(a.b)("p",null,"The CLI uses ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/api/"},"Docker APIs")," to control or interact with the Docker daemon through scripting or direct CLI commands. Many other Docker applications use the underlying API and CLI. The daemon creates and manage Docker objects, such as images, containers, networks, and volumes."),Object(a.b)("p",null,"For more details, see ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/#docker-architecture"},"Docker Architecture"),"."),Object(a.b)("p",null,"To have an initial docker configuration, we need to set up three main thing:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Dockerfile"),": Define the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Image"),": An image is a read-only template with instructions for creating a Docker container."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Container"),": A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.")),Object(a.b)("h2",{id:"docker-compose"},"Docker Compose"),Object(a.b)("p",null,"Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application\u2019s services. Then, with a single command, you create and start all the services from your configuration."),Object(a.b)("p",null,"Using Compose is basically a three-step process:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Define your app\u2019s environment with a Dockerfile so it can be reproduced anywhere."),Object(a.b)("li",{parentName:"ol"},"Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment."),Object(a.b)("li",{parentName:"ol"},"Run docker-compose up and Compose starts and runs your entire app.")),Object(a.b)("p",null,"A docker-compose.yml looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"  # optional since v1.27.0\nservices:\n  web:\n    build: .\n    ports:\n      - "5000:5000"\n    volumes:\n      - .:/code\n      - logvolume01:/var/log\n    links:\n      - redis\n  redis:\n    image: redis\nvolumes:\n  logvolume01: {}\n')),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"To start our first Docker project, we are going to create the needed configuration to make it start and says ",Object(a.b)("inlineCode",{parentName:"p"},"Hello world, we are EOS Costa Rica \ud83e\udd8b"),". First of all, we need the main configuration, so follow next steps to get it."),Object(a.b)("h3",{id:"project-structure"},"Project Structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500  node_modules\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 .dockerignore\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 yarn.lock\n")),Object(a.b)("h3",{id:"code-breakdown"},"Code Breakdown"),Object(a.b)("h4",{id:"dockerfile"},"Dockerfile"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:12\n\nWORKDIR /app\n\nCOPY package*.json ./\n\nRUN yarn\n\nCOPY . .\n\nENV PORT=8080\n\nEXPOSE 8080\n\nCMD [ "yarn", "start" ]\n')),Object(a.b)("h4",{id:"dockerignore"},".dockerignore"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"node_modules")),Object(a.b)("h4",{id:"gitignore"},".gitignore"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"node_modules")),Object(a.b)("h4",{id:"srcindexjs"},"src/index.js"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const app = require('express')();\n \napp.get('/', (req, res ) => \n    res.json({ message: 'Hello world, we are EOS Costa Rica \ud83e\udd8b' }) \n);\n \nconst port = process.env.PORT || 8080;\n \napp.listen(port, () => console.log(`app listening on http://localhost:${port}`) );\n")),Object(a.b)("h4",{id:"packagejson"},"package.json"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "docker-demo",\n  "version": "1.0.0",\n  "description": "Hello world, we are EOS Costa Rica \ud83e\udd8b",\n  "main": "index.js",\n  "scripts": {\n    "start": "node src/index.js"\n  },\n  "keywords": [],\n  "author": "EOS Costa Rica",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),Object(a.b)("h3",{id:"commands"},"Commands"),Object(a.b)("h4",{id:"build-the-image"},"Build the Image"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker build -t eoscostarica/helloworld:1.0 .")),Object(a.b)("h4",{id:"run-the-container"},"Run the Container"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker run -p 5000:8080 <image-id>")),Object(a.b)("h3",{id:"docker-compose-example"},"Docker Compose Example"),Object(a.b)("h4",{id:"docker-composeyml"},"docker-compose.yml"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\nservices:\n  web:\n    build: .\n    ports:\n      - "8080:8080"\n  db:\n    image: "mysql"\n    environment: \n      MYSQL_ROOT_PASSWORD: password\n    volumes:\n      - db-data:/foo\n\nvolumes:\n  db-data:\n')),Object(a.b)("h3",{id:"run-multiple-containers"},"Run multiple Containers"),Object(a.b)("h4",{id:"command-line"},"command line"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up")))}p.isMDXComponent=!0},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},132:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t(22),o=t(134);function a(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+d:d}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},134:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))}}]);