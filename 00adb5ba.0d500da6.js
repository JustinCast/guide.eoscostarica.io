(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return a?o.a.createElement(h,c(c({ref:t},l),{},{components:a})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(128)),i={id:"react-tutorial",title:"React JS",sidebar_label:"React JS"},c={unversionedId:"tutorials/react-tutorial",id:"tutorials/react-tutorial",isDocsHomePage:!1,title:"React JS",description:"React is a JavaScript library that will be used to build web interfaces and mobile applications with an extension called React Native. React works with units of code that work independently. React also uses a tool called JSX that allows a very simple interaction with JavaScript, that is, it can also be used with HTML in a simple way.",source:"@site/docs/tutorials/react-tutorial.md",slug:"/tutorials/react-tutorial",permalink:"/docs/tutorials/react-tutorial",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/react-tutorial.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1612409805,sidebar_label:"React JS",sidebar:"docs",previous:{title:"GitHub Keys",permalink:"/docs/tutorials/github-keys"},next:{title:"Glossary",permalink:"/docs/tools/glossary"}},s=[{value:"Tools",id:"tools",children:[]},{value:"Extensions",id:"extensions",children:[]},{value:"Recommendations",id:"recommendations",children:[{value:"JavaScript Standards",id:"javascript-standards",children:[]}]},{value:"Virtual DOM",id:"virtual-dom",children:[{value:"How does it work?",id:"how-does-it-work",children:[]}]},{value:"Check Versions",id:"check-versions",children:[]},{value:"Start the First Application with React",id:"start-the-first-application-with-react",children:[]},{value:"First steps",id:"first-steps",children:[]},{value:"What are Components?",id:"what-are-components",children:[{value:"Components",id:"components",children:[]},{value:"Component Life Cycle",id:"component-life-cycle",children:[]},{value:"Higher Order Component (HoC)",id:"higher-order-component-hoc",children:[]}]},{value:"Components in EOS Costa Rica",id:"components-in-eos-costa-rica",children:[{value:"Storybook",id:"storybook",children:[]}]},{value:"Main Concepts",id:"main-concepts",children:[]},{value:"What&#39;s new in react?",id:"whats-new-in-react",children:[{value:"Hooks",id:"hooks",children:[]}]},{value:"React Cleaner with Hooks",id:"react-cleaner-with-hooks",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React is a JavaScript library that will be used to build web interfaces and mobile applications with an extension called ",Object(r.b)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),". React works with units of code that work independently. React also uses a tool called JSX that allows a very simple interaction with JavaScript, that is, it can also be used with HTML in a simple way."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://reactjs.org"},"More Information"),"  ")),Object(r.b)("h2",{id:"tools"},"Tools"),Object(r.b)("p",null,"For React the following tools are suggested, tools with * are required:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Web Browser (Google Chorme, Moxilla Firefox)*"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node JS"),"*"),Object(r.b)("li",{parentName:"ul"},"Package Managers (",Object(r.b)("a",{parentName:"li",href:"https://brew.sh/index_es"},"Brew"),", ",Object(r.b)("a",{parentName:"li",href:"https://chocolatey.org/"},"Chocolatey")," )."),Object(r.b)("li",{parentName:"ul"},"Terminal, it can be used with the native terminal but we recommend ",Object(r.b)("a",{parentName:"li",href:"https://iterm2.com/"},"iTerm2"),", ",Object(r.b)("a",{parentName:"li",href:"https://hyper.is/"},"Hyper"),", ",Object(r.b)("a",{parentName:"li",href:"https://cmder.net/"},"cmder"),"."),Object(r.b)("li",{parentName:"ul"},"Code editor, it is suggested to use ",Object(r.b)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),".  ")),Object(r.b)("h2",{id:"extensions"},"Extensions"),Object(r.b)("p",null,"These extensions are a recommendation to improve your experience in developing with React."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install ",Object(r.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es"},"React Developer Tools"),",",Object(r.b)("br",{parentName:"li"}),"this is in the chrome web store (Web Navigator)"),Object(r.b)("li",{parentName:"ul"},"Debugger for Chrome (Visual Studio Code)"),Object(r.b)("li",{parentName:"ul"},"React Extension Pack (Visual Studio Code)"),Object(r.b)("li",{parentName:"ul"},"Auto Close Tag (Visual Studio Code)"),Object(r.b)("li",{parentName:"ul"},"Prettier - Code Formatter (Visual Studio Code)"),Object(r.b)("li",{parentName:"ul"},"ESLint - JavaScript standards (Visual Studio Code)")),Object(r.b)("h2",{id:"recommendations"},"Recommendations"),Object(r.b)("p",null,"It is important for the development of a good project to organize the different components of the work, for this reason it is recommended to generate folders that have similar content, some examples are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Components")," folder, where the necessary components are stored."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Styles")," folder, where the project styles are stored, for example the ",Object(r.b)("inlineCode",{parentName:"li"},".css")," files."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Assets")," folder, where the application static resources such as images are stored.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Remember to change the references once your project is ordered and not make changes, unless it is really necessary, in the index.js ")),Object(r.b)("h3",{id:"javascript-standards"},"JavaScript Standards"),Object(r.b)("p",null,"It is important to follow the JavaScript standards, it is recommended to use the ",Object(r.b)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," library to help you follow these ",Object(r.b)("a",{parentName:"p",href:"https://standardjs.com/rules.html"},"JavaScript standards"),"."),Object(r.b)("h2",{id:"virtual-dom"},"Virtual DOM"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Document Object Model for Document Representation")," (Document Object Model) is essentially a platform interface that provides a standard set of objects to represent HTML, XHTML and XML documents. A standard model on how these objects can be combined, and a standard interface to access and manipulate them."),Object(r.b)("p",null,"React realized that updating the full screen is a task that can be costly in performance and time. Then a virtual DOM is created. This virtual DOM object is identical to the JavaScript DOM object."),Object(r.b)("h3",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The entire virtual DOM is updated."),Object(r.b)("li",{parentName:"ul"},"Virtual DOM is compared to a version prior to upgrade. React notices which objects have changed."),Object(r.b)("li",{parentName:"ul"},"The updated object and only that object is updated in the actual DOM."),Object(r.b)("li",{parentName:"ul"},"Changes to the actual DOM cause the screen to change.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This process is known as reconciliation.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"check-versions"},"Check Versions"),Object(r.b)("p",null,"Verify Node js, with these commands you can verify the version and also if they are installed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ node -v\n#v14.15.2\n$ npm -v\n#6.14.9\n")),Object(r.b)("h2",{id:"start-the-first-application-with-react"},"Start the First Application with React"),Object(r.b)("p",null,'We are going to create a first application with React where some of React\'s functionalities will be reflected, in this case you must change "name_of_your_application" to the name you want, to make it easier to read from now on my- app.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ npx create-react-app "name_of_your_application"\n')),Object(r.b)("p",null,"Now you must enter your my-app directory and start your application."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cd my-app\n$ yarn start\n")),Object(r.b)("p",null,"To see your code you must use, duplicating your terminal, the following: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ code .\n")),Object(r.b)("h2",{id:"first-steps"},"First steps"),Object(r.b)("p",null,"Once the code has been opened in your editor, in this case recommended Visual Studio Code, you can navigate until you find inside the ",Object(r.b)("em",{parentName:"p"},"src")," folder the ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," file with a content equal to this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'import logo from \'./logo.svg\';\n\nimport \'./App.css\';\n\nfunction App() {\n     return (\n    <div className="App">\n      <header className="App-header">\n        <img src={logo} className="App-logo" alt="logo" />\n        <p>\n          Editar <code>src/App.js</code> and save to reload.\n        </p>\n        <a\n          className="App-link"\n          href="https://reactjs.org"\n          target="_blank"\n          rel="noopener noreferrer"\n        >\n          Learn React\n        </a>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(r.b)("p",null,"You can change the content to the following and make the changes you want as the first steps for your adventure in React. In addition, you can see the changes in your browser, for this you must keep your terminal with the server open."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { Component } from 'react';\n\nimport logo from './logo.svg';\n\nimport './App.css';\n\nclass App extends Component{\n  render(){\n    return (\n      <div className=\"App\">\n        <p>Hola Mundo</p>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),Object(r.b)("h2",{id:"what-are-components"},"What are Components?"),Object(r.b)("p",null,"Components are defined as a single unit of code that will have a specifically assigned responsibility that certain behaviors can be encapsulated in components."),Object(r.b)("p",null,"This is an example of a component. Create a new file inside your ",Object(r.b)("inlineCode",{parentName:"p"},"components")," folder with the name of ",Object(r.b)("inlineCode",{parentName:"p"},"header.js")," and in this way you can use it later. This type of component is no longer used in EOS Costa Rica, however it is important to understand its definition and use."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { Component } from "react";\n\nclass Header extends Component{\n    render(){\n        return(\n            <div>\n                <h1>Ejemplo </h1>\n            </div>\n        );\n    }\n}\n\nexport default Header;\n')),Object(r.b)("p",null,"This component can be used as follows inside the ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { Component } from 'react';\n\nimport './styles/App.css';\n\nimport Header from \"./components/header\" //Se debe agregar el import del componente\n\nclass App extends Component{\n  render(){\n    return (\n      <div className=\"App\">\n        <Header />  /*Se agrega el componente*/\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),Object(r.b)("h3",{id:"components"},"Components"),Object(r.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/Y2hgEGPzTZY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(r.b)("h3",{id:"component-life-cycle"},"Component Life Cycle"),Object(r.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/qnN_FuFNq2g",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(r.b)("h3",{id:"higher-order-component-hoc"},"Higher Order Component (HoC)"),Object(r.b)("hr",null),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},'"A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API. They are a pattern that arises from the compositional nature of React."'),"  ")),Object(r.b)("hr",null),Object(r.b)("p",null,"For more information on ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html#:~:text=Un%20componente%20de%20orden%20superior,de%20la%20l%C3%B3gica%20de%20componentes.&text=En%20concreto%2C%20un%20componente%20de,y%20devuelve%20un%20nuevo%20componente."},"HoC"),"."),Object(r.b)("h2",{id:"components-in-eos-costa-rica"},"Components in EOS Costa Rica"),Object(r.b)("p",null,"React uses reusable components for all applications, these components can have several versions, which can generate conflicts when making small changes. ",Object(r.b)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is an opensource tool that is used to create visual components in isolation where the components and their versions can be organized in stories."),Object(r.b)("p",null,"EOS Costa Rica uses ",Object(r.b)("a",{parentName:"p",href:"https://components.eosio.cr/?path=/story/issuanceverifier--issuance-verifier-wrapper"},"Storybook EOS Costa Rica")," for the creation of its components. To use these ",Object(r.b)("inlineCode",{parentName:"p"},"eoscr-components")," components we leave you the installation guide in ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components#installation"},"this site"),"."),Object(r.b)("h3",{id:"storybook"},"Storybook"),Object(r.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/BySFuXgG-ow",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(r.b)("h2",{id:"main-concepts"},"Main Concepts"),Object(r.b)("p",null,"Next, we give you a list of elements that are taken from the official React documentation to apply in your project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/rendering-elements.html"},"Rendering Elements")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/components-and-props.html"},"Components and Properties")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"Status and Life Cycle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/handling-events.html"},"Handling Events")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/conditional-rendering.html"},"Conditional Rendering")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/lists-and-keys.html"},"Lists and Keys")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/forms.html"},"Forms")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/lifting-state-up.html"},"Raising the State")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/composition-vs-inheritance.html"},"Composition vs. Heritage"))),Object(r.b)("h2",{id:"whats-new-in-react"},"What's new in react?"),Object(r.b)("h3",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"Hooks are a new feature in React 16.8. These allow you to use the state and other features of React without writing a class."),Object(r.b)("p",null,"Hooks are functions that allow you to \"hook\" React state and lifecycle from functional components. Hooks don't work inside classes they allow you to use React without classes. (We don't recommend rewriting your existing components overnight, but you can start using Hooks on new ones if you want)."),Object(r.b)("p",null,"It has:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-state.html"},"State Hook")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-effect.html"},"Effect Hook")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecontext"},"Context Hook"))),Object(r.b)("p",null,"Other types:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usereducer"},"useReducer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},"useCallback")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usememo"},"useMemo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"useRef")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#useimperativehandle"},"useImperativeHandle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#uselayouteffect"},"useLayoutEffect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usedebugvalue"},"useDebugValue"))),Object(r.b)("p",null,"This is an example of use, you can replace the code of your ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," to test it. In this example they show the dimensions of the screen even when it is resized."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'import React , { useState, useEffect } from "react";\n\nimport "./styles/App.css"\n\nconst App = () => {\n  const [width,setWidth] = useState(window.innerWidth);\n  const [height, setHeight]= useState(window.innerHeight);\n\n  const updateDimensions = () => {\n    setWidth(window.innerWidth);\n    setHeight(window.innerHeight);\n  }\n\n  useEffect( () => {\n    window.addEventListener(\'resize\', updateDimensions);\n\n    return() => {\n      window.removeEventListener(\'resize\',updateDimensions);\n    }\n  }\n  )\n\n  return(\n    <div className="App">\n      Width = {width}\n      <br/>\n      Height = {height}\n    </div>\n  );\n}\n\nexport default App;\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html"},Object(r.b)("strong",{parentName:"a"},"Recommended Rules"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"More Information"),"  ")),Object(r.b)("h2",{id:"react-cleaner-with-hooks"},"React Cleaner with Hooks"),Object(r.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/dpw9EHDh2bM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);