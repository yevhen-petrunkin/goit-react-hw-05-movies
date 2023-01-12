(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[313],{5271:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(1087),o=n(184);var c=function(e){var t=e.id,n=e.movieName,c=e.location,a="";switch(c.state.page){case"home":a="/movies/".concat(t);break;case"movies":a="".concat(t);break;default:return}return(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:a,state:{from:c},children:n})})};var a=function(e){var t=e.movies,n=e.location;return(0,o.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.movieName;return(0,o.jsx)(c,{id:t,movieName:r,location:n},t)}))})}},2313:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return b}});var a=n(9439),u=n(2791),i=n(1087),s=n(7689),p=n(2007),f=n.n(p),l=n(3628),h=n(3240),m=n(184);var v=function(e){var t=e.onSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),o=r[0],c=r[1];return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o&&(c(o.trim().toLowerCase()),t(o),c(""))},children:[(0,m.jsx)("input",{type:"text",value:o,onChange:function(e){return c(e.target.value)}}),(0,m.jsx)("button",{type:"submit",children:"Search"})]})},d=n(5271);var b=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],r=t[1],o=(0,i.lr)(),p=(0,a.Z)(o,2),f=p[0],b=p[1],y=(0,u.useMemo)((function(){var e;return null!==(e=f.get("query"))&&void 0!==e?e:""}),[f]);(0,u.useEffect)((function(){y&&(0,l.oW)(y).then((function(e){r((0,h.Lu)(e.results))}))}),[y]);var x=(0,s.TH)();return x.state={page:"movies"},(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onSubmit:function(e){e&&(b((function(t){return c(c({},t),{},{query:e})})),(0,l.oW)(e).then((function(e){r((0,h.Lu)(e.results))})))}}),(0,m.jsx)(d.Z,{movies:n,location:x})]})};v.propTypes={onSubmit:f().func.isRequired},d.Z.propTypes={movies:f().arrayOf(f().shape({id:f().number.isRequired,movieName:f().string.isRequired})).isRequired,location:f().shape({state:f().shape({page:f().string.isRequired}).isRequired}).isRequired}},3240:function(e,t,n){"use strict";function r(e){return e.map((function(e){return{id:e.id,movieName:e.original_title}}))}function o(e){return e.map((function(e){return{id:e.id,profilePhoto:e.profile_path,actorName:e.name,charName:e.character}}))}function c(e){return e.map((function(e){return{id:e.id,author:e.author,content:e.content}}))}function a(e){return e.map((function(e){return e.name})).join(", ")}n.d(t,{Lu:function(){return r},WO:function(){return a},m5:function(){return o},tI:function(){return c}})},3628:function(e,t,n){"use strict";function r(e,t,n,r,o,c,a){try{var u=e[c](a),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function u(e){r(a,o,c,u,i,"next",e)}function i(e){r(a,o,c,u,i,"throw",e)}u(void 0)}))}}n.d(t,{Yc:function(){return v},Pg:function(){return h},oW:function(){return f},LP:function(){return x},fI:function(){return b},Df:function(){return s}});var c=n(7757),a=n.n(c),u="https://api.themoviedb.org/3",i="ae692f579055feb645577941bd67daeb";function s(){return p.apply(this,arguments)}function p(){return(p=o(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=o(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=o(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=o(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=o(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function x(e){return"".concat("https://image.tmdb.org/t/p/w500").concat(e)}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,c,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=313.477da59a.chunk.js.map