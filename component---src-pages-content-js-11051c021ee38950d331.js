(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return P});var n=r(0),a=r.n(n),o=(r(161),r(162),r(157)),l=r.n(o),i=r(163),u=r.n(i),c=r(164),s=r.n(c),f=r(165),d=r.n(f),p=r(159),v=r.n(p),m=r(166),g=r.n(m),h=r(203),y=r.n(h),b=r(167),w=r.n(b),x=r(168),O=r.n(x),j=r(155),_=r.n(j),E=r(156),k=r(174);t.default=function(e){var t=e.data,r=t.pages.edges,n=t.footerLinks.html,o=t.copyright.html,i=_.a.headerTitle,c=_.a.headerSubTitle,f=_.a.siteUrl,p=_.a.siteTitle,m=_.a.siteDescription,h=_.a.siteLanguage,b=r.map(function(e){return e.node});return a.a.createElement(g.a,null,a.a.createElement(d.a,null,a.a.createElement(u.a,{title:i,subTitle:c}),a.a.createElement(w.a,{items:E.a})),a.a.createElement(l.a,null,a.a.createElement(v.a,{title:"Table of content"}),a.a.createElement(y.a,{pages:b,categoryList:k.a})),a.a.createElement(s.a,{links:n,copyright:o}),a.a.createElement(O.a,{url:f,language:h,title:p,description:m}))};var P="3733346603"},155:function(e,t){var r="Gatsby Starter Kit",n={siteTitle:r+" - a set of starters for GatsbyJS",siteTitlePostfix:" - "+r,siteDescription:"This is Docs for gatsby-starter-kit, a series of starters for GatsbyJS.",siteImage:"preview.jpg",siteLanguage:"en",headerTitle:""+r,headerSubTitle:"a set of starters for Gatsby.js",siteUrl:"https://github.com/greglobinski/gatsby-starter-kit-docs"};e.exports=n},156:function(e,t,r){"use strict";var n=r(169),a=r.n(n),o=r(170),l=r.n(o),i=r(171),u=r.n(i),c=[{label:"Home",to:"/",icon:a.a,linkProps:{}},{label:"Menu",to:"/content",icon:l.a},{label:"About",to:"/about",icon:u.a}];t.a=c},157:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),a=i(r(1)),o=r(82),l=i(r(158));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.children,r=e.themeStyle,a=void 0===r?l.default:r,i=e.customStyle,u=void 0===i?"":i;return n.default.createElement("article",{className:(0,o.cx)(a,u)},t)};u.propTypes={children:a.default.node.isRequired,themeStyle:a.default.string,customStyle:a.default.string};var c=u;t.default=c},158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(82);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: 0 auto 30px;\n\n  ",";\n"]);return o=function(){return e},e}var l=(0,((n=r(154))&&n.__esModule?n:{default:n}).default)([1024,1280].map(function(e){return"@media (min-width: ".concat(e,"px)")})),i=(0,a.css)(o(),l({maxWidth:["500px","600px","700px"]}));t.default=i},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),a=i(r(1)),o=r(82),l=i(r(160));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.title,r=e.children,a=e.themeStyle,i=void 0===a?l.default:a,u=e.customStyle,c=void 0===u?"":u;return n.default.createElement("header",{className:(0,o.cx)(i,c)},t?n.default.createElement("h1",null,t):r)};u.propTypes={title:a.default.string,children:a.default.node,themeStyle:a.default.string,customStyle:a.default.string};var c=u;t.default=c},160:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(82);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  h1 {\n    letter-spacing: -0.03em;\n    margin-bottom: 1em;\n    line-height: 1.2;\n    border-left: 6px solid var(--firstActiveColor);\n    padding-left: 15px;\n    color: var(--lightTextColor);\n\n    ",";\n  }\n"]);return o=function(){return e},e}var l=(0,((n=r(154))&&n.__esModule?n:{default:n}).default)([768,1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),i=(0,a.css)(o(),l({fontSize:["1.8em","2em","2.2em"]}));t.default=i},174:function(e,t,r){"use strict";var n=r(175),a=r.n(n),o=r(176),l=r.n(o),i=r(177),u=r.n(i),c=r(178),s=r.n(c),f=r(179),d=r.n(f),p=[{name:"general",label:"Get started",icon:a.a},{name:"starter",label:"Default starters",icon:l.a},{name:"themed",label:"Themed starters",icon:u.a},{name:"guides",label:"Guides",icon:d.a},{name:"other",label:"Everything else",icon:s.a}];t.a=p},175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(0)),o=l(r(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.color,r=e.size,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size"]);return a.default.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),a.default.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))};i.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},i.defaultProps={color:"currentColor",size:"24"},t.default=i},176:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(0)),o=l(r(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.color,r=e.size,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size"]);return a.default.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("line",{x1:"6",y1:"3",x2:"6",y2:"15"}),a.default.createElement("circle",{cx:"18",cy:"6",r:"3"}),a.default.createElement("circle",{cx:"6",cy:"18",r:"3"}),a.default.createElement("path",{d:"M18 9a9 9 0 0 1-9 9"}))};i.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},i.defaultProps={color:"currentColor",size:"24"},t.default=i},177:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(0)),o=l(r(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.color,r=e.size,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size"]);return a.default.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.default.createElement("polyline",{points:"21 15 16 10 5 21"}))};i.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},i.defaultProps={color:"currentColor",size:"24"},t.default=i},178:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(0)),o=l(r(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.color,r=e.size,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size"]);return a.default.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}),a.default.createElement("line",{x1:"12",y1:"11",x2:"12",y2:"17"}),a.default.createElement("line",{x1:"9",y1:"14",x2:"15",y2:"14"}))};i.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},i.defaultProps={color:"currentColor",size:"24"},t.default=i},179:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(0)),o=l(r(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.color,r=e.size,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["color","size"]);return a.default.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.default.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))};i.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},i.defaultProps={color:"currentColor",size:"24"},t.default=i},203:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(0)),a=u(r(1)),o=r(37),l=r(82),i=u(r(204));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.pages,r=e.categoryList,a=e.themeStyle,u=void 0===a?i.default:a,c=e.customStyle,s=void 0===c?"":c,f=function(e,t){return e.reduce(function(e,r){var n=r.frontmatter.categories.reduce(function(e,r){return""===e&&t.find(function(e){return e.name===r})?r:e},"");return n&&e.find(function(e){return e.name===n}).pages.push(r),e},t.map(function(e){return e.pages=[],e}))}(t,r);return n.default.createElement("div",{className:(0,l.cx)(u,s)},f.map(function(e){var t=e.label,r=e.icon;return n.default.createElement(n.default.Fragment,{key:t},n.default.createElement("h3",null,n.default.createElement(r,null),t),n.default.createElement("ul",null,e.pages.map(function(e){var t=e.frontmatter,r=t.title,a=t.shortTitle,l=e.fields.slug;return n.default.createElement("li",{key:l},n.default.createElement(o.Link,{key:l,to:l},a||r))})))}))};c.propTypes={pages:a.default.array.isRequired,categoryList:a.default.array,themeStyle:a.default.string,customStyle:a.default.string};var s=c;t.default=s},204:function(e,t,r){"use strict";function n(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  & h3 {\n    font-size: 0.7em;\n    letter-spacing: 0.2em;\n    padding: 10px 0 0;\n    text-transform: uppercase;\n    font-weight: 300;\n    color: var(--lightTextColor);\n    display: flex;\n    align-items: center;\n\n    & svg {\n      width: 15px;\n      margin: 0 5px 0 -5px;\n      stroke: var(--superLightGray);\n    }\n  }\n\n  ul {\n    margin: 0 0 1.5em;\n    list-style: none;\n  }\n\n  li {\n    margin: 0.8em 0;\n    line-height: 1.4;\n    padding: 0 5px 0 20px;\n    position: relative;\n\n    &:before {\n      content: '';\n      width: 4px;\n      height: 4px;\n      background: var(--firstActiveColor);\n      position: absolute;\n      top: 0.45em;\n      left: 1px;\n    }\n  }\n\n  & a {\n    text-decoration: none;\n    color: #666;\n  }\n"]);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(82).css)(n());t.default=a}}]);
//# sourceMappingURL=component---src-pages-content-js-11051c021ee38950d331.js.map