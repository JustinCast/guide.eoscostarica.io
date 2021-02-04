(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{128:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||a;return o?n.a.createElement(m,s(s({ref:t},c),{},{components:o})):n.a.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},131:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var r=o(22),n=o(135);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,l=a.absolute,c=void 0!==l&&l;if(!o)return o;if(o.startsWith("#"))return o;if(Object(n.b)(o))return o;if(s)return t+o;var d=o.startsWith(t)?o:t+o.replace(/^\//,"");return c?e+d:d}(a,o,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},135:function(e,t,o){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return n}))},92:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(7),a=(o(0),o(128)),i=o(131),s={id:"agile-methodologies",title:"Agile Methodologies",sidebar_label:"Agile Methodologies"},l={unversionedId:"agile-methodologies",id:"agile-methodologies",isDocsHomePage:!1,title:"Agile Methodologies",description:"What are agile methodologies?",source:"@site/docs/agile-methodologies.md",slug:"/agile-methodologies",permalink:"/docs/agile-methodologies",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/agile-methodologies.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1612455030,sidebar_label:"Agile Methodologies",sidebar:"docs",previous:{title:"Open Source Contributing Guidelines",permalink:"/docs/open-source-guidelines"},next:{title:"Software Development in Pair or Mob",permalink:"/docs/pair-mob-programming"}},c=[{value:"What are agile methodologies?",id:"what-are-agile-methodologies",children:[{value:"Modern Agile",id:"modern-agile",children:[]}]},{value:"Types of agile methodologies?",id:"types-of-agile-methodologies",children:[{value:"Scrum",id:"scrum",children:[]},{value:"Kanban",id:"kanban",children:[]},{value:"Extreme programming (XP)",id:"extreme-programming-xp",children:[]}]},{value:"Agile project management",id:"agile-project-management",children:[{value:"User Stories",id:"user-stories",children:[]}]},{value:"Work meetings",id:"work-meetings",children:[{value:"Planning Session",id:"planning-session",children:[]},{value:"Grooming Session",id:"grooming-session",children:[]},{value:"Stand-up Session",id:"stand-up-session",children:[]},{value:"Retrospective Session",id:"retrospective-session",children:[]},{value:"Demo Session",id:"demo-session",children:[]}]}],d={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-are-agile-methodologies"},"What are agile methodologies?"),Object(a.b)("p",null,"These are work methodologies that allow adaptation to the circumstances of the projects and reduce the documentation processes, they are generally used in projects that do not have a defined scope with certainty, which causes them to be very prone to change, because in these methodologies deliveries of functional products in a short time (2 to 4 weeks) allow the process of changes and correction of errors to be fast and not have a very high cost for the project in general."),Object(a.b)("h3",{id:"modern-agile"},"Modern Agile"),Object(a.b)("p",null,"Modern Agile is far broader than the Agile Manifesto for Software Development. Modern Agile is a concept that is taking many different areas into account, not just software development. It can even be applied in organizations without software development.  "),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/47RN5F525PA",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("p",null,"To clarify how Modern Agile came to be here\u2019s a snippet from the website: Over the past decade, innovative companies, software industry thought leaders and lean/agile pioneers have discovered simpler, sturdier, more streamlined ways to be agile. These modern approaches share a focus on producing exceptional outcomes and growing an outstanding culture. Today, it makes far more sense to bypass antiquated agility in favor of modern approaches.  "),Object(a.b)("p",null,"Modern Agile methods are defined by four guiding principles:"),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"Modern Agile Image",src:Object(i.a)("img/ModernAgile.jpg")})),Object(a.b)("h2",{id:"types-of-agile-methodologies"},"Types of agile methodologies?"),Object(a.b)("p",null,"Some of the best known and used agile methodologies in the industry are:"),Object(a.b)("h3",{id:"scrum"},"Scrum"),Object(a.b)("p",null,"It is an agile methodology that is based on constant communication and review of the tasks performed (sprints), for each sprint the planning, quality assurance, development, quality inspection and feedback processes are carried out, this reduces the cost in the correction of errors because a sprint is terminated until the client accepts all the ",Object(a.b)("strong",{parentName:"p"}," acceptance criteria "),". The base values \u200b\u200bof this methodology are innovation, flexibility, competitiveness and productivity."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/9TycLR0TqFA",frameborder:"0",allowfullscreen:"true"}),Object(a.b)("h3",{id:"kanban"},"Kanban"),Object(a.b)("p",null,"It consists of the elaboration of a table or diagram in which three columns of tasks are reflected; pending, in process and finished. This table should be available to all team members, thus avoiding the repetition of tasks or the possibility of forgetting any of them. Therefore, it helps to improve the productivity and efficiency of the work team. Among its objectives is to improve work planning, improve performance, define continuous delivery times."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/jf0tlbt9lx0",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h3",{id:"extreme-programming-xp"},"Extreme programming (XP)"),Object(a.b)("p",null,"It is a methodology based on a set of rules and good practices for software development in highly changing environments with imprecise requirements, therefore, it is focused on continuous feedback between the development team and the client. XP is based on simplicity and aims at customer satisfaction."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/hbFOwqYIOcU",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h2",{id:"agile-project-management"},"Agile project management"),Object(a.b)("h3",{id:"user-stories"},"User Stories"),Object(a.b)("p",null,"A user story is a lightweight method for quickly capturing the ",Object(a.b)("strong",{parentName:"p"},"who"),", ",Object(a.b)("strong",{parentName:"p"},"what")," and ",Object(a.b)("strong",{parentName:"p"},"why")," of a product requirement. In simple terms, user stories are stated ideas of requirements that express what users need. User stories are brief, with each element often containing fewer than 10 or 15 words each.",Object(a.b)("br",{parentName:"p"}),"\n","The purpose of a user story is to articulate how a piece of work will deliver a particular value back to the customer. Note that ",Object(a.b)("strong",{parentName:"p"},"customers")," don't have to be external end users in the traditional sense, they can also be internal customers or colleagues within your organization who depend on your team."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/apOvF9NVguA",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h4",{id:"how-to-write-user-stories"},"How to write user stories?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Definition of Done:")," The story is generally \u201cdone\u201d when the user can complete the outlined task."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Outline subtasks or tasks:")," Decide which specific steps need to be completed and who is responsible for each of them."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"User:")," For Whom? If there are multiple end users, consider making multiple stories."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Ordered Steps:")," Write a story for each step in a larger process."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Listen to feedback:")," Talk to your users and capture the problem or need in their words."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Time:"),"  Since stories should be completable in one sprint, stories that might take weeks or months to complete should be broken up into smaller stories or should be considered their own epic.")),Object(a.b)("h4",{id:"examples"},"Examples:"),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"As  ",Object(a.b)("strong",{parentName:"li"},"manager"),", I want to ",Object(a.b)("strong",{parentName:"li"},"be able to understand my colleagues progress"),", so I ",Object(a.b)("strong",{parentName:"li"},"can better report our success and failures"),". "),Object(a.b)("li",{parentName:"ul"},"As  ",Object(a.b)("strong",{parentName:"li"},"customer")," , I want ",Object(a.b)("strong",{parentName:"li"},"shopping cart feature")," so that ",Object(a.b)("strong",{parentName:"li"},"I can easily purchase items online"),"."),Object(a.b)("li",{parentName:"ul"},"As  ",Object(a.b)("strong",{parentName:"li"},"manager"),", I want to ",Object(a.b)("strong",{parentName:"li"},"generate a report")," so that ",Object(a.b)("strong",{parentName:"li"},"I can understand which departments need more resources"),"."))),Object(a.b)("h2",{id:"work-meetings"},"Work meetings"),Object(a.b)("h3",{id:"planning-session"},"Planning Session"),Object(a.b)("p",null,"Sprint planning is a timeboxed working session that lasts roughly 1 hour for every week of a sprint.\nIs an event in the Scrum framework where the team determines the product backlog items they will work on during that sprint and discusses their initial plan for completing those product backlog items.  "),Object(a.b)("p",null,"This agreement defines the sprint backlog and is based on the team\u2019s velocity or capacity and the length of the sprint."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/2A9rkiIcnVI",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h4",{id:"who-is-involved"},"Who is involved?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Product Owner:")," Identifies the candidate product backlog items and their relative priorities, as well as proposes a sprint goal.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Team Members:")," Determine how many of the product backlog items they forecast they will be able to complete and determine how they will deliver those product backlog items.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Scrum Master:")," Typically facilitates sprint planning in order to ensure that the discussion is effective and that there is agreement to the sprint goal and that the appropriate product backlog items are included in the sprint backlog."))),Object(a.b)("h4",{id:"planning-steps"},"Planning steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Discuss any new information that may impact the plan."),Object(a.b)("li",{parentName:"ol"},"Confirm any currently known issues and concerns and record as appropriate."),Object(a.b)("li",{parentName:"ol"},"Review the definition of ",Object(a.b)("strong",{parentName:"li"},"Done")," and make any appropriate updates based on technology, skill, or team member changes since the last sprint."),Object(a.b)("li",{parentName:"ol"},"Present proposed product backlog items to consider for the sprint backlog."),Object(a.b)("li",{parentName:"ol"},"Determine the needs, sign up for work, and estimate the work owned."),Object(a.b)("li",{parentName:"ol"},"Product Owner answers clarifying questions and elaborates acceptance criteria."),Object(a.b)("li",{parentName:"ol"},"Confirm any new issues and concerns raised during meeting and record."),Object(a.b)("li",{parentName:"ol"},"Confirm any assumptions or dependencies discovered during planning and record."),Object(a.b)("li",{parentName:"ol"},"ScrumMaster calls for a group consensus on the plan."),Object(a.b)("li",{parentName:"ol"},"Team and Product Owner point out if this is the best plan they can make given what they know right now."),Object(a.b)("li",{parentName:"ol"},"Get back to work.")),Object(a.b)("h3",{id:"grooming-session"},"Grooming Session"),Object(a.b)("p",null,"Backlog grooming, also referred to as backlog refinement or story time, is a recurring event for agile product development teams. The primary purpose of a backlog grooming session is to ensure the next few sprints worth of user stories in the product backlog are prepared for sprint planning. Regular backlog grooming sessions also help ensure the right stories are prioritized."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/UpEBfS9SZGM",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h4",{id:"who-is-involved-1"},"Who is involved?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Product Owner:")," Is tasked with facilitating backlog refinement sessions. However, that doesn\u2019t mean they are solely responsible for holding backlog grooming sessions."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Team Members:")," These events are meant to be collaborative. That means the entire cross-functional team should be represented at refinement sessions."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"QA representatives:")," You need the combined expertise of the various functions on your team to effectively flesh out your user stories.")),Object(a.b)("h4",{id:"grooming-steps"},"Grooming steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Removing user stories that no longer appear relevant."),Object(a.b)("li",{parentName:"ol"},"Creating new user stories in response to newly discovered needs."),Object(a.b)("li",{parentName:"ol"},"Re-assessing the relative priority of stories."),Object(a.b)("li",{parentName:"ol"},"Assigning estimates to stories which have yet to receive one\ncorrecting estimates in light of newly discovered information."),Object(a.b)("li",{parentName:"ol"},"Splitting user stories which are high priority."),Object(a.b)("li",{parentName:"ol"},"Get back to work.")),Object(a.b)("h3",{id:"stand-up-session"},"Stand-up Session"),Object(a.b)("p",null,"A daily stand-up meeting is an opportunity for the project team to discuss a project\u2019s progress at a high level. These meetings last approximately 15 minutes and allow each contributor to report on their accomplishments since the last stand-up meeting."),Object(a.b)("p",null,"True to its name, all participants in stand-ups usually remain standing to keep the meetings short and on-topic. However, virtual stand-ups are also possible. "),Object(a.b)("p",null,"In Agile project management, daily stand-up meetings are essential. These meetings allow project members to share critical information, openly discuss issues, and hold themselves and each other accountable."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/YHMw3CL5cXE",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h4",{id:"benefits-of-daily-agile-stand-ups"},"Benefits of daily Agile stand-ups"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Daily stand-ups allow team members to work collaboratively toward project goals. "),Object(a.b)("li",{parentName:"ul"},"Daily stand-up meetings are important for keeping Agile teams focused and on-task while providing quick, project-level updates to the rest of the team. "),Object(a.b)("li",{parentName:"ul"},"The Agile methodology is all about versatility and flexibility, it\u2019s important to make tweaks and improvements to your meetings to fit your team\u2019s needs. "),Object(a.b)("li",{parentName:"ul"},"Your daily stand-up should inform and draw out issues so that you can keep your project on track and get ahead of issues before they pop up.")),Object(a.b)("h3",{id:"retrospective-session"},"Retrospective Session"),Object(a.b)("p",null,"Is a meeting held after a product ships to discuss what happened during the product development and release process, with the goal of improving things in the future based on those learnings and conversations.",Object(a.b)("br",{parentName:"p"}),"\n","An agile retrospective forces the entire team to pause and reflect on what transpired and discuss what worked and what didn\u2019t during a particular project."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/MiaZhJyYUj0",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h4",{id:"how-often-should-you-hold-retrospectives"},"How often should you hold retrospectives?"),Object(a.b)("p",null,"Retrospectives can be held more frequently, including for minor releases, each sprint or even at daily or weekly standups."),Object(a.b)("h3",{id:"demo-session"},"Demo Session"),Object(a.b)("p",null,"The sprint demo is invaluable for keeping stakeholders up to speed with the progress of product development. It allows them to feedback and discuss with the Product Owner and Scrum team any possible amendments to the Product Backlog which would help to maximize value.",Object(a.b)("br",{parentName:"p"}),"\n","The sprint demo shouldn\u2019t take up too much of a Scrum team\u2019s time. Ensuring that the sprint review meeting is an informal affair where questions, feedback and discussion are welcome \u2013 allows for prep time to be kept to a minimum."),Object(a.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/Njxek3s3Shs",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(a.b)("h4",{id:"demo-steps"},"Demo steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Tell a story:")," This is one of the most important factors for a great demo, and also the most overlooked. Given the structured nature of Agile stories and epics, it\u2019s easy to fall into the trap of simply enumerating the work that you\u2019ve done. This isn\u2019t necessarily bad, but it\u2019s unlikely to excite non-technical stakeholders."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Let developers brag:")," Whenever possible, it\u2019s great to allow developers to present their own work, which helps to build confidence, morale, and a sense of ownership. A good compromise can be to have one organizing speaker with a different \u201cguest\u201d developer showing off their work each week."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Set expectations:")," Setting expectations and providing context are critical for a successful demo. "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Action items:")," List all completed stories in your agenda, weed out any stories that shouldn\u2019t be demoed, organize the remaining stories roughly into scenarios or topics, decide whether to have developers help give parts of the demo and always set expectations and give context throughout the demo.")))}p.isMDXComponent=!0}}]);