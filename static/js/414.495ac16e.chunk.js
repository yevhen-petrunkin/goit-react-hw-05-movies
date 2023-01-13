(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{4853:function(e,n,t){"use strict";t.d(n,{M:function(){return o},G:function(){return c}});var r=t(9039),a=t(184);function c(){return(0,a.jsx)(r.Z,{style:{height:300,width:200,position:"absolute",borderRadius:"10px"},children:(0,a.jsx)(r.Z.Image,{})})}function o(){return(0,a.jsx)(r.Z,{style:{height:240,width:160,borderRadius:"10px"},children:(0,a.jsx)(r.Z.Image,{})})}},6414:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r,a,c,o,s=t(9439),i=t(2791),u=t(7689),p=t(2007),l=t.n(p),f=t(7616),h=t(168),d=t(6444),m=d.ZP.ul(r||(r=(0,h.Z)(["\n  margin: 0;\n  padding: 5px 0;\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 20px;\n  font-size: 22px;\n  list-style: none;\n"]))),v=d.ZP.li(a||(a=(0,h.Z)(["\n  width: 260px;\n"]))),x=d.ZP.img(c||(c=(0,h.Z)(["\n  width: 160px;\n  height: 240px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n"]))),g=d.ZP.p(o||(o=(0,h.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),y=t(4853),Z=t(184);var k=function(e){var n=e.data,t=(0,i.useState)(!1),r=(0,s.Z)(t,2),a=r[0],c=r[1],o=n.profilePhoto,u=n.actorName,p=n.charName,l=(0,f.LP)(o);return(0,Z.jsxs)(v,{children:[!a&&(0,Z.jsx)(y.M,{}),(0,Z.jsx)(x,{src:l,alt:u,onLoad:function(){return c(!0)}}),(0,Z.jsx)(g,{children:u}),(0,Z.jsxs)(g,{children:["Character: ",p]})]})},b=t(1087);var w=function(){var e=(0,i.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,u.UO)().movieId;return(0,i.useEffect)((function(){a&&(0,f.Yc)(a).then((function(e){return r((0,f.m5)(e.cast))}))}),[a]),(0,Z.jsx)(m,{children:t.length?t.map((function(e){var n=e.id;return(0,Z.jsx)(k,{data:e},n)})):(0,Z.jsx)(b.Z,{})})};k.propTypes={data:l().shape({id:l().number.isRequired,profilePhoto:l().string,actorName:l().string.isRequired,charName:l().string.isRequired}).isRequired}},7616:function(e,n,t){"use strict";function r(e){return e.map((function(e){return{id:e.id,movieName:e.original_title}}))}function a(e){return e.map((function(e){return{id:e.id,profilePhoto:e.profile_path,actorName:e.name,charName:e.character}}))}function c(e){return e.map((function(e){return{id:e.id,author:e.author,content:e.content}}))}function o(e){return e.map((function(e){return e.name})).join(", ")}t.d(n,{Yc:function(){return g},Pg:function(){return v},oW:function(){return d},LP:function(){return b},fI:function(){return Z},Df:function(){return f},m5:function(){return a},Lu:function(){return r},tI:function(){return c},WO:function(){return o}});var s=t(5861),i=t(7757),u=t.n(i),p="https://api.themoviedb.org/3",l="ae692f579055feb645577941bd67daeb";function f(){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/trending/movie/day?api_key=").concat(l));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/search/movie?api_key=").concat(l,"&query=").concat(n));case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/movie/").concat(n,"?api_key=").concat(l));case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/movie/").concat(n,"/credits?api_key=").concat(l));case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function Z(e){return k.apply(this,arguments)}function k(){return(k=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/movie/").concat(n,"/reviews?api_key=").concat(l));case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw new Error("Not Found");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function b(e){return"".concat("https://image.tmdb.org/t/p/w500").concat(e)}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,c,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:c,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9039:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(7462),a=t(8182),c=t(2791),o=t(2190),s=t(6755),i=t(6246),u=t(5831);function p(e){var n=e.children,t=e.className,l=e.content,f=e.image,h=(0,a.Z)((0,o.lG)(f,"image"),"header",t),d=(0,s.Z)(p,e),m=(0,i.Z)(p,e);return c.createElement(m,(0,r.Z)({},d,{className:h}),u.kK(n)?l:n)}p.handledProps=["as","children","className","content","image"],p.propTypes={};var l=p;function f(e){var n=e.className,t=e.square,u=e.rectangular,p=(0,a.Z)((0,o.lG)(t,"square"),(0,o.lG)(u,"rectangular"),"image",n),l=(0,s.Z)(f,e),h=(0,i.Z)(f,e);return c.createElement(h,(0,r.Z)({},l,{className:p}))}f.handledProps=["as","className","rectangular","square"],f.propTypes={};var h=f;function d(e){var n=e.className,t=e.length,o=(0,a.Z)("line",t,n),u=(0,s.Z)(d,e),p=(0,i.Z)(d,e);return c.createElement(p,(0,r.Z)({},u,{className:o}))}d.handledProps=["as","className","length"],d.propTypes={};var m=d;function v(e){var n=e.children,t=e.className,o=e.content,p=(0,a.Z)("paragraph",t),l=(0,s.Z)(v,e),f=(0,i.Z)(v,e);return c.createElement(f,(0,r.Z)({},l,{className:p}),u.kK(n)?o:n)}v.handledProps=["as","children","className","content"],v.propTypes={};var x=v;function g(e){var n=e.children,t=e.className,p=e.content,l=e.fluid,f=e.inverted,h=(0,a.Z)("ui",(0,o.lG)(l,"fluid"),(0,o.lG)(f,"inverted"),"placeholder",t),d=(0,s.Z)(g,e),m=(0,i.Z)(g,e);return c.createElement(m,(0,r.Z)({},d,{className:h}),u.kK(n)?p:n)}g.handledProps=["as","children","className","content","fluid","inverted"],g.propTypes={},g.Header=l,g.Image=h,g.Line=m,g.Paragraph=x;var y=g},5861:function(e,n,t){"use strict";function r(e,n,t,r,a,c,o){try{var s=e[c](o),i=s.value}catch(u){return void t(u)}s.done?n(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,c){var o=e.apply(n,t);function s(e){r(o,a,c,s,i,"next",e)}function i(e){r(o,a,c,s,i,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=414.495ac16e.chunk.js.map