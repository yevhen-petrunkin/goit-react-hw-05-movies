"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[136],{6470:function(n,e,t){t.d(e,{Z:function(){return p}});var r,o,c,i,a=t(168),l=t(4313),u=l.ZP.div(r||(r=(0,a.Z)(["\n  ","\n"])),(function(n){var e=n.theme.space;return"\n  position: fixed;\n  top: ".concat(e[0],";\n  left: ").concat(e[0],";\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(1, 1, 1, 0.3);\n  ")})),s=l.ZP.div(o||(o=(0,a.Z)(["\n  ","\n"])),(function(n){var e=n.theme,t=(e.space,e.radii),r=e.shadows;e.mediaQueries;return"\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 90vw;\n  width: 100%;\n  background-color: transparent;\n  border-radius: ".concat(t[2],"px;\n  box-shadow: ").concat(r.minimum,";\n  overflow: hidden;\n\n\n  ")})),d=l.ZP.div(c||(c=(0,a.Z)(["\n  height: 90vh;\n  overflow-y: auto;\n"]))),h=l.ZP.button(i||(i=(0,a.Z)(["\n  ","\n"])),(function(n){var e=n.theme,t=e.colors,r=e.sizes,o=e.borders,c=e.zIndices,i=e.shadows,a=e.mediaQueries,l=n.top,u=n.right;return"\n  position: absolute;\n  z-index: ".concat(c[2],";\n  top: ").concat(l,"px;\n  right: ").concat(u,"px;\n  width: ").concat(7*r[1],"px;\n  height: ").concat(7*r[1],"px;\n  color: ").concat(t.defaultWeak,";\n  background-color: rgba(0, 0, 0, 0.5);\n  border: ").concat(o.heroBtnSmall,";\n  border-radius: 50%;\n  box-shadow: ").concat(i.elevated,";\n  cursor: pointer;\n  transition: color 300ms ease, border 300ms ease;\n\n  &:hover,\n  &:focus {\n    color: ").concat(t.accent,";\n    border: ").concat(o.heroBtnSmallHover,";\n  }\n\n  ").concat(a.large," {\n    top: ").concat(l-12,"px;\n    right: ").concat(u-24,"px;\n  }\n\n  ").concat(a.small," {\n    top: ").concat(l-20,"px;\n    right: ").concat(u-28,"px;\n  }\n\n  ").concat(a.tiny," {\n    top: ").concat(l-16,"px;\n    right: ").concat(u-24,"px;\n    width: ").concat(6*r[1],"px;\n    height: ").concat(6*r[1],"px;\n  }\n  ")})),f=t(2791),m=t(4164),g=t(9434),v=t(9337),x=t(860),b=t(184);var p=function(n){var e=n.children,t=(0,g.I0)(),r=document.querySelector("#picboard-root");return(0,f.useEffect)((function(){window.addEventListener("keydown",(function(n){"Escape"===n.code&&(console.log("Close the board please"),t((0,v.SB)()),t((0,v.UZ)()))}))}),[t]),(0,m.createPortal)((0,b.jsx)(u,{children:(0,b.jsx)(s,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(h,{type:"button",title:"Close",top:32,right:40,onClick:function(){t((0,v.SB)()),t((0,v.UZ)())},children:(0,b.jsx)(x.u5Z,{style:{width:"100%",height:"100%"}})}),e]})})}),r)}},1332:function(n,e,t){t.d(e,{MR:function(){return R},_H:function(){return $},mC:function(){return z},HI:function(){return P},GQ:function(){return F},$P:function(){return B},mp:function(){return H},Jt:function(){return M},XP:function(){return C},g8:function(){return W}});var r,o,c,i,a,l,u,s=t(168),d=t(4313),h=d.ZP.div(r||(r=(0,s.Z)(["\n  ","\n"])),(function(n){var e=n.theme,t=e.space,r=e.mediaQueries;return"\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: ".concat(t[3],"px;\n  height: 100%;\n\n\n  ").concat(r.large," {\n    padding: ").concat(t[2],"px; \n  }\n\n  ")})),f=d.ZP.div(o||(o=(0,s.Z)(["\n  ","\n"])),(function(n){var e=n.theme,t=e.sizes,r=e.mediaQueries;return"\n    max-width: ".concat(100*t[1],"px;\n    max-height: ").concat(100*t[1],"px;\n\n  ").concat(r.medium," {\n    max-width: ").concat(54*t[1],"px;\n    max-height: ").concat(54*t[1],"px;  \n  }\n\n  ").concat(r.small," {\n    max-width: ").concat(100*t[1],"px;\n    max-height: ").concat(100*t[1],"px; \n  }\n\n  ").concat(r.lowerSmall," {\n    max-width: ").concat(65*t[1],"px;\n    max-height: ").concat(65*t[1],"px;   \n  }\n\n  ").concat(r.tiny," {\n    max-width: ").concat(36*t[1],"px;\n    max-height: ").concat(36*t[1],"px; \n  }\n\n  ")})),m=d.ZP.h2(c||(c=(0,s.Z)(["\n  ","\n"])),(function(n){var e=n.theme,t=e.space,r=e.fontSizes,o=e.mediaQueries;return"\n  margin: ".concat(t[0],";\n  font-size: ").concat(r[3],"px;\n\n  ").concat(o.medium," {\n    font-size: ").concat(r[2],"px;\n  }\n\n  ").concat(o.small," {\n    font-size: ").concat(r[1],"px;\n  }\n\n  ").concat(o.lowerSmall," {\n    font-size: ").concat(r[1],"px;\n  }\n  \n  ")})),g=d.ZP.p(i||(i=(0,s.Z)(["\n  ","\n"])),(function(n){var e=n.theme,t=e.space,r=e.fontSizes,o=e.mediaQueries;return"\n  margin: ".concat(t[0],";\n  font-size: ").concat(r[6],"px;\n  \n  ").concat(o.medium," {\n    font-size: ").concat(r[4],"px;\n  }\n\n  ").concat(o.small," {\n    font-size: ").concat(r[3],"px;\n  }\n\n  ").concat(o.lowerSmall," {\n    font-size: ").concat(r[3],"px;\n  }\n\n  ").concat(o.tiny," {\n    font-size: ").concat(r[2],"px;\n  }\n  ")})),v=d.ZP.ul(a||(a=(0,s.Z)(["\n  ","\n"])),(function(n){var e=n.theme.space;return"\n  padding: ".concat(e[0],";\n  margin: ").concat(e[0],";\n  display: flex;\n  list-style: none;\n  width: 100%;\n   \n  ")})),x=d.ZP.li(l||(l=(0,s.Z)(["\n  ","\n"])),(function(n){var e=n.theme.colors,t=n.number;return"\n    width: 20%;\n    \n  &:nth-child(1) {\n    color: ".concat(Number(t)>=50?e.star:e.defaultStrong,";\n  }\n\n  &:nth-child(2) {\n    color: ").concat(Number(t)>=100?e.star:e.defaultStrong,";\n  }\n\n  &:nth-child(3) {\n    color: ").concat(Number(t)>=200?e.star:e.defaultStrong,";\n  }\n\n  &:nth-child(4) {\n    color: ").concat(Number(t)>=500?e.star:e.defaultStrong,";\n  }\n\n  &:nth-child(5) {\n    color: ").concat(Number(t)>=900?e.star:e.defaultStrong,";\n  }\n  ")})),b=d.ZP.li(u||(u=(0,s.Z)(["\n  ","\n"])),(function(n){var e=n.theme.colors,t=n.number;return"\n    width: 20%;\n    \n  &:nth-child(1) {\n    color: ".concat(Number(t)>=1?e.alert:e.defaultStrong,";\n  }\n\n  &:nth-child(2) {\n    color: ").concat(Number(t)>=3?e.alert:e.defaultStrong,";\n  }\n\n  &:nth-child(3) {\n    color: ").concat(Number(t)>=5?e.alert:e.defaultStrong,";\n  }\n\n  &:nth-child(4) {\n    color: ").concat(Number(t)>=7?e.alert:e.defaultStrong,";\n  }\n\n  &:nth-child(5) {\n    color: ").concat(Number(t)>=9?e.alert:e.defaultStrong,";\n  }\n  ")})),p=t(9434),j=t(6351),w=t(1413),y=t(2151),Z=t(4310);function L(n,e){return n&&n[e].length||0}function S(n){var e,t=function(n){if(!n)return[];return n.favList.flatMap((function(n){return n.genres.map((function(n){return n.name.toLowerCase()}))}))}(n),r=t.filter((function(n,e,t){return t.indexOf(n)===e})),o=function(n){return n.map((function(n){var e=y.k.find((function(e){return n.genre===e.genre.toLowerCase()}));return(0,w.Z)((0,w.Z)({},n),{},{genre:e.genre,color:e.color})})).sort((function(n,e){return e.number-n.number}))}((e=t,r.map((function(n){var t=e.reduce((function(e,t){return n===t?e+1:e}),0);return{genre:n,number:t}}))));return o}var k=t(184);function W(){var n=L((0,p.v9)(j.ib),"seenList");return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"Total Movies Watched"}),(0,k.jsx)(g,{children:n})]})}function M(){var n,e=(0,p.v9)(j.ib),t=(n=e)?L(n,Z.e[0].listId)+L(n,Z.e[1].listId)+L(n,Z.e[2].listId):0;return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"Total Movies"}),(0,k.jsx)(g,{children:t})]})}function C(){var n,e=(0,p.v9)(j.ib),t=(n=e)?(n.seenList.reduce((function(n,e){var t=e.runtime;return n+Number(t)}),0)/60).toFixed(2):0;return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"Time Spent Watching"}),(0,k.jsxs)(g,{children:[t," hrs"]})]})}function z(){var n=function(n){if(!n)return 0;var e=L(n,Z.e[0].listId),t=n.favList.reduce((function(n,e){var t=e.budget;return n+Number(t)}),0);return(e?t/e:0).toFixed(0)}((0,p.v9)(j.ib));return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"Average Favorites Budget"}),(0,k.jsxs)(g,{children:[Number(n).toLocaleString("en-EN")," USD"]})]})}function P(){var n=function(n){if(!n)return 0;var e=L(n,Z.e[0].listId),t=n.favList.reduce((function(n,e){var t=e.popularity;return n+Number(t)}),0);return(e?t/e:0).toFixed(2)}((0,p.v9)(j.ib));return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"Average Favorites Hype"}),(0,k.jsx)(g,{children:n})]})}function F(){var n=function(n){if(!n)return 0;var e=L(n,Z.e[0].listId),t=n.favList.reduce((function(n,e){var t=e.score;return n+Number(t)}),0);return(e?t/e:0).toFixed(2)}((0,p.v9)(j.ib));return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"Average Favorites Score"}),(0,k.jsxs)(g,{children:[n," out of 10.00"]})]})}var N=t(3433),I=t(5967),A=t(3623),T=t(5703);function H(){var n=function(n){if(!n)return[];var e=L(n,Z.e[0].listId),t=L(n,Z.e[1].listId),r=L(n,Z.e[2].listId);return Z.e.map((function(n,o){return{list:n.caption,total:0===o?e:1===o?t:r}}))}((0,p.v9)(j.ib)),e=n.map((function(n){return n.list})),t=n.map((function(n){return n.total})),r=T.$g.colors,o=r.accentWeak,c=r.success,i={labels:e,datasets:[{data:t,backgroundColor:[o,r.secondaryWeak,c],borderColor:["transparent"],minBarLength:2,borderRadius:4}]};return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"My Lists"}),n.length>0&&(0,k.jsx)(f,{children:(0,k.jsx)(A.$Q,{redraw:!0,options:{maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{display:!1}}},data:i})})]})}function R(){var n=S((0,p.v9)(j.ib)),e={labels:n.map((function(n){return n.genre})),datasets:[{data:n.map((function(n){return n.number})),backgroundColor:n.map((function(n){return n.color})),borderColor:["transparent"]}]};return(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{children:"Favorite Genres"}),n.length>0&&(0,k.jsx)(f,{children:(0,k.jsx)(A.by,{redraw:!0,options:{plugins:{legend:{display:!0}}},data:e})})]})}I.kL.register.apply(I.kL,(0,N.Z)(I.zX)),I.kL.defaults.color=T.$g.colors.defaultWeak,I.kL.register.apply(I.kL,(0,N.Z)(I.zX)),I.kL.defaults.color=T.$g.colors.defaultWeak;var Q=t(1213);function B(n){var e=n.size,t=n.number;return(0,k.jsxs)(v,{size:e,number:t,children:[(0,k.jsx)(x,{number:t,children:(0,k.jsx)(Q.P0C,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(x,{number:t,children:(0,k.jsx)(Q.P0C,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(x,{number:t,children:(0,k.jsx)(Q.P0C,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(x,{number:t,children:(0,k.jsx)(Q.P0C,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(x,{number:t,children:(0,k.jsx)(Q.P0C,{style:{width:"100%",height:"100%"}})})]})}function $(n){var e=n.size,t=n.number;return(0,k.jsxs)(v,{size:e,number:t,children:[(0,k.jsx)(b,{number:t,children:(0,k.jsx)(Q.WW7,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(b,{number:t,children:(0,k.jsx)(Q.WW7,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(b,{number:t,children:(0,k.jsx)(Q.WW7,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(b,{number:t,children:(0,k.jsx)(Q.WW7,{style:{width:"100%",height:"100%"}})}),(0,k.jsx)(b,{number:t,children:(0,k.jsx)(Q.WW7,{style:{width:"100%",height:"100%"}})})]})}},5703:function(n,e,t){t.d(e,{$g:function(){return c.$},CL:function(){return o.CL},LP:function(){return o.LP},Mc:function(){return o.Mc},RW:function(){return o.RW},WO:function(){return r.WO},b5:function(){return o.b5},m5:function(){return r.m5},tI:function(){return r.tI},wH:function(){return o.wH}});var r=t(7692),o=t(7589),c=t(7156)},5221:function(n,e,t){t.d(e,{h:function(){return r}});var r={loadingMessage:"Loading...",errorMessage:"Oops... Something went wrong!",alreadyOnTheListMessage:"This movie is already on the list.",movieAddedToListMessage:"Movie added to the list successfully.",errorAddingMovieToListMessage:"Error adding movie to the list.",movieRemovedFromListMessage:"Movie removed from the list successfully.",errorRemovingMovieFromListMessage:"Error removing movie from the list."}},2151:function(n,e,t){t.d(e,{k:function(){return o},s:function(){return r}});var r=[{value:28,label:"Action"},{value:12,label:"Adventure"},{value:16,label:"Animation"},{value:35,label:"Comedy"},{value:80,label:"Crime"},{value:99,label:"Documentary"},{value:18,label:"Drama"},{value:10751,label:"Family"},{value:14,label:"Fantasy"},{value:36,label:"History"},{value:27,label:"Horror"},{value:10402,label:"Music"},{value:9648,label:"Mystery"},{value:10749,label:"Romance"},{value:878,label:"Science Fiction"},{value:10770,label:"TV Movie"},{value:53,label:"Thriller"},{value:10752,label:"War"},{value:37,label:"Western"}],o=[{color:"#f9f871",genre:"Action"},{color:"#ffBe4d",genre:"Adventure"},{color:"#ff8051",genre:"Animation"},{color:"#f44169",genre:"Comedy"},{color:"#00c6b3",genre:"Crime"},{color:"#0096e2",genre:"Documentary"},{color:"#0053ca",genre:"Drama"},{color:"#ffe8ff",genre:"Family"},{color:"#c2fcf3",genre:"Fantasy"},{color:"#8a6b9a",genre:"History"},{color:"#d24717",genre:"Horror"},{color:"#930100",genre:"Music"},{color:"#e8d5b5",genre:"Mystery"},{color:"#8bafce",genre:"Romance"},{color:"#fffade",genre:"Science Fiction"},{color:"#8bafce",genre:"TV Movie"},{color:"#ffaaff",genre:"Thriller"},{color:"#6e5e00",genre:"War"},{color:"#954f00",genre:"Western"}]},6543:function(n,e,t){n.exports=t.p+"static/media/photoholder.bc7debfc682a5ddc60bf.jpg"}}]);
//# sourceMappingURL=136.ee08fb1f.chunk.js.map