(this["webpackJsonpvodworks-test"]=this["webpackJsonpvodworks-test"]||[]).push([[0],{37:function(n,e,t){n.exports=t(64)},42:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),a=t(29),o=t.n(a),i=(t(42),t(7)),u=t(2),l=t(1);function s(){var n=Object(u.a)(["\n        background-color: ",";\n        width: 100%;\n        min-height: 100%;\n      "]);return s=function(){return n},n}var f=function(n){var e=n.children;return Object(l.b)("div",{css:Object(l.a)(s(),"#1A1A1A")},e)};function b(){var n=Object(u.a)(["\n          color: #fff;\n          border-bottom: 1px solid #fff;\n          display: inline;\n          font-size: 1.25em;\n        "]);return b=function(){return n},n}function d(n){var e=n.shift;return Object(l.b)("header",{"data-testid":"header",css:{padding:" 5.188em 5.625em",transform:"translateX(".concat(e?"-70%":0,")")}},Object(l.b)("h2",{css:Object(l.a)(b())},"FILMER"))}function m(){var n=Object(u.a)(["\n        display: flex;\n        transform: translateX(",");\n      "]);return m=function(){return n},n}function v(n){var e=n.children,t=n.shift,r=void 0!==t&&t;return Object(l.b)("div",{css:Object(l.a)(m(),r?"-70%":"0")},e)}function j(){return(j=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function O(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var p=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:"#FF7F00"})))),g=function(n){var e=n.svgRef,t=n.title,r=O(n,["svgRef","title"]);return c.a.createElement("svg",j({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004",style:{enableBackground:"new 0 0 492.004 492.004"},xmlSpace:"preserve",width:"512px",height:"512px",className:"hovered-paths",ref:e},r),t?c.a.createElement("title",null,t):null,p)},h=c.a.forwardRef((function(n,e){return c.a.createElement(g,j({svgRef:e},n))}));t.p;function w(){var n=Object(u.a)(["\n          margin-right: 5px;\n          text-transform: capitalize;\n        "]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n        color: ",";\n        padding: 1em 0 1em 0.938em;\n        border: 2px solid ",";\n        border-radius: 6px;\n        font-size: 1em;\n        display: flex;\n        align-items: center;\n      "]);return y=function(){return n},n}function x(n){var e=n.active,t=void 0!==e&&e,r=n.name;return Object(l.b)("li",{css:Object(l.a)(y(),t?"#fff":"#757575",t?"#FF7F00":"transparent")},Object(l.b)("span",{css:Object(l.a)(w())},r),t&&Object(l.b)(h,{width:"10px",height:"10px"}))}function E(n){var e=n.genres,t=n.activeIndex;return c.a.createElement("ul",null,e.map((function(n,e){return c.a.createElement(x,{active:t===e,key:n,name:n})})))}function k(n){var e=n.itemsLength,t=n.walkType,c=void 0===t?"column":t,a=n.goBy,o=void 0===a?1:a,u=Object(r.useState)(0),l=Object(i.a)(u,2),s=l[0],f=l[1];return{cursorPositionIndex:s,onKeyDown:function(n){var t=n.keyCode;"column"===c&&function(n){38===n&&s>0&&f(s-o),40===n&&s<e-1&&f(s+o)}(t),"row"===c&&function(n){39===n&&s<e-1&&f(s+o),37===n&&s>0&&f(s-o)}(t),"grid"===c&&function(n){39===n&&s<e-1&&f(s+1),37===n&&s>0&&f(s-1),40===n&&s+o<=e-1&&f(s+o),38===n&&s-o>=0&&f(s-o)}(t)}}}function F(){var n=Object(u.a)(["\n        position: absolute;\n        height: 0;\n        width: 0;\n        background-color: transparent;\n        border: 0;\n      "]);return F=function(){return n},n}var S=c.a.forwardRef((function(n,e){return Object(l.b)("input",Object.assign({},n,{ref:e,css:Object(l.a)(F())}))}));var I=function(n){var e=n.onSubmit,t=void 0===e?function(){}:e,a=n.onKeyDown,o=n.children,i=n.controlled,u=n.autoFocus,l=void 0!==u&&u,s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n,e;i?null===(n=s.current)||void 0===n||n.focus():null===(e=s.current)||void 0===e||e.blur()}),[i]),c.a.createElement(r.Fragment,null,c.a.createElement("form",{onSubmit:t},c.a.createElement(S,{ref:s,autoFocus:l,onKeyDown:a,onBlur:function(){s.current&&i&&s.current.focus()}})),o)};function B(){var n=Object(u.a)(["\n        padding: 0 6.9em 0 4.5em;\n        flex: 1 1;\n        position: relative;\n      "]);return B=function(){return n},n}function L(n){var e=n.genres,t=n.onGenreChange,c=n.onGenreSubmit,a=n.controlled,o=k({itemsLength:e.length}),i=o.cursorPositionIndex,u=o.onKeyDown;return Object(r.useEffect)((function(){t(e[i])}),[i,t,e]),Object(l.b)("div",{css:Object(l.a)(B())},Object(l.b)(I,{autoFocus:!0,controlled:a,onSubmit:c,onKeyDown:u},Object(l.b)(E,{genres:e,activeIndex:i})))}function _(){var n=Object(u.a)(["\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n          "]);return _=function(){return n},n}function D(){var n=Object(u.a)(["\n        width: calc(20% - 12px);\n        display: inline-block;\n        min-height: 120px;\n        max-height: calc(20% * 5);\n        margin-bottom: 10px;\n        border: 2px solid ",";\n        transform: ",";\n\n        &:not(:nth-of-type(5n + 5)) {\n          margin-right: 10px;\n        }\n      "]);return D=function(){return n},n}function P(n){var e=n.imageSrc,t=n.name,r=n.active,c=void 0!==r&&r;return Object(l.b)("li",{css:Object(l.a)(D(),c?"#FF7F00":"transparent",c?"scale(1.03)":"scale(1)")},e&&Object(l.b)("img",{src:e,css:Object(l.a)(_()),alt:"".concat(t,"'s poster")}))}function z(){var n=Object(u.a)(["\n          display: flex;\n          flex-wrap: wrap;\n          width: 100%;\n          height: 90%;\n          overflow: auto;\n          padding: 12px;\n          padding-right: 20px;\n        "]);return z=function(){return n},n}function G(){var n=Object(u.a)(["\n        overflow: hidden;\n        height: 100%;\n        padding-right: 12px;\n      "]);return G=function(){return n},n}function K(n){var e=n.films,t=n.activeIndex;return Object(l.b)("div",{css:Object(l.a)(G())},Object(l.b)("ul",{css:Object(l.a)(z())},e.map((function(n,e){return Object(l.b)(P,{key:n.id,name:n.original_title,imageSrc:n.poster_path,active:t===e})}))))}function R(){var n=Object(u.a)(["\n        flex: 3 1;\n        padding-right: 5.625em;\n      "]);return R=function(){return n},n}function C(n){var e=n.films,t=n.controlled,r=n.onFilmSubmit,c=k({itemsLength:e.length,walkType:"grid",goBy:5}),a=c.cursorPositionIndex,o=c.onKeyDown;return Object(l.b)("div",{css:Object(l.a)(R())},Object(l.b)(I,{autoFocus:!0,controlled:t,onSubmit:function(n){n.preventDefault(),r(e[a].id)},onKeyDown:o},Object(l.b)(K,{activeIndex:t?a:null,films:e})))}var T=t(31),J=t(32),M=t(33),N=t.n(M),A={},W=function(){function n(){Object(T.a)(this,n)}return Object(J.a)(n,null,[{key:"getGenres",value:function(n){return n.flatMap((function(n){return n.genre_ids})).filter((function(n,e,t){return t.indexOf(n)===e}))}},{key:"getFilmsByGenre",value:function(n,e){return A[n]||(A[n]=e.filter((function(e){return e.genre_ids.includes(n)}))),A[n]}},{key:"getFilmById",value:function(n,e){return n.find((function(n){return n.id===e}))}},{key:"films",get:function(){return N.a.get("https://raw.githubusercontent.com/roman-curse/videoJson/master/videoJson.json")}}]),n}(),X=t(8);function V(){var n=Object(u.a)(["\n        width: calc(33.33% - 5px);\n        border-top: 2px solid;\n        padding-top: 10px;\n      "]);return V=function(){return n},n}function $(){var n=Object(u.a)(["\n  ","\n  color:#fff;\n"]);return $=function(){return n},n}function q(){var n=Object(u.a)(["\n  ",";\n  color: ",";\n  text-transform: uppercase;\n  width: 100%;\n  margin-bottom: 10px;\n"]);return q=function(){return n},n}function H(){var n=Object(u.a)(["\n  font-size: 1em;\n  font-weight: 400;\n  display:block;\n"]);return H=function(){return n},n}var Q=Object(X.a)(H()),U=X.b.span(q(),Q,"#757575"),Y=X.b.span($(),Q);function Z(n){var e=n.name,t=n.value;return Object(l.b)("li",{css:Object(l.a)(V())},Object(l.b)(U,{"data-testid":"option-name"},e),Object(l.b)(Y,{"data-testid":"option-value"},t))}function nn(){var n=Object(u.a)(["\n        display: flex;\n        justify-content: space-between;\n      "]);return nn=function(){return n},n}function en(n){var e=n.popularity,t=n.vote_count,r=n.language;return Object(l.b)("ul",{css:Object(l.a)(nn())},Object(l.b)(Z,{name:"Popularity",value:e}),Object(l.b)(Z,{name:"Vote count",value:t}),Object(l.b)(Z,{name:"Language",value:r}))}function tn(){var n=Object(u.a)(["\n        color: ",";\n        font-size: 1em;\n        line-height: 20px;\n        flex: 1 1;\n      "]);return tn=function(){return n},n}function rn(n){var e=n.descirption;return Object(l.b)("p",{css:Object(l.a)(tn(),"#c5c2c2")},e)}function cn(){var n=Object(u.a)(["\n        color: #fff;\n        font-size: 1em;\n        text-transform: uppercase;\n        border-radius: 5px;\n        padding: 22px 0;\n        background-color: ",";\n        border: none;\n        width: calc(33.33% - 5px);\n\n        &:hover {\n          background-color: ",";\n        }\n      "]);return cn=function(){return n},n}function an(n){var e=n.active,t=void 0!==e&&e,r=n.children,c=n.className;return Object(l.b)("button",{className:c,css:Object(l.a)(cn(),t?"#FF7F00":"transparent","#FF7F00")},r)}function on(){var n=Object(u.a)(["\n        display: flex;\n        justify-content: space-between;\n      "]);return on=function(){return n},n}function un(n){var e=n.activeButtonIndex;return Object(l.b)("ul",{css:Object(l.a)(on())},Object(l.b)(an,{active:0===e},"Play"),Object(l.b)(an,{active:1===e},"Trailer"),Object(l.b)(an,{active:2===e},"To saved"))}function ln(){var n=Object(u.a)(["\n          height: 100%;\n          object-fit: cover;\n          width: 100%;\n        "]);return ln=function(){return n},n}function sn(){var n=Object(u.a)(["\n        height: 60%;\n      "]);return sn=function(){return n},n}function fn(n){var e=n.imageSrc,t=n.name;return Object(l.b)("div",{css:Object(l.a)(sn())},Object(l.b)("img",{src:e,alt:"".concat(t,"'s poster"),css:Object(l.a)(ln())}))}function bn(){var n=Object(u.a)(["\n            flex: 2 1;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            margin-right: 15px;\n          "]);return bn=function(){return n},n}function dn(){var n=Object(u.a)(["\n          display: flex;\n          height: 100%;\n        "]);return dn=function(){return n},n}function mn(){var n=Object(u.a)(["\n        width: 70%;\n        height: 80%;\n        position: absolute;\n        top: 10%;\n        right: 5%;\n      "]);return mn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  color: #fff;\n  font-size: 1.8em;\n  margin-bottom: 20px;\n"]);return vn=function(){return n},n}var jn=X.b.h2(vn());function On(n){var e=k({itemsLength:3,walkType:"row"}),t=e.cursorPositionIndex,c=e.onKeyDown;return Object(r.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[c]),Object(l.b)("section",{css:Object(l.a)(mn())},Object(l.b)(jn,null,n.title),Object(l.b)("div",{css:Object(l.a)(dn())},Object(l.b)("div",{css:Object(l.a)(bn())},Object(l.b)(en,{popularity:n.popularity,vote_count:n.vote_count,language:n.original_language}),Object(l.b)(fn,{imageSrc:n.poster_path,name:n.title}),Object(l.b)(un,{activeButtonIndex:t})),Object(l.b)(rn,{descirption:n.overview})))}var pn=t(3);var gn=function(){var n=Object(r.useState)([]),e=Object(i.a)(n,2),t=e[0],a=e[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),l=u[0],s=u[1],b=Object(r.useState)(null),m=Object(i.a)(b,2),j=m[0],O=m[1],p=Object(r.useState)([]),g=Object(i.a)(p,2),h=g[0],w=g[1],y=Object(r.useState)([]),x=Object(i.a)(y,2),E=x[0],k=x[1],F=Object(r.useState)("menu"),S=Object(i.a)(F,2),I=S[0],B=S[1],_=Object(pn.g)().params,D=Object(pn.f)(),P=function(n){var e=W.getFilmById(h,n);e&&O(e)};return Object(r.useEffect)((function(){W.films.then((function(n){w(n.data.results);var e=W.getGenres(n.data.results);a(e),s(e[0])}))}),[]),Object(r.useEffect)((function(){_.filmId&&P(+_.filmId);var n=function(n){if(66===n.keyCode){if(_.filmId)return D.push("/"),O(null),B("films");if("menu"===I)return;B("menu")}};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[I,_.filmId,P]),Object(r.useEffect)((function(){k(W.getFilmsByGenre(l,h))}),[l,h]),c.a.createElement(f,null,c.a.createElement(r.Fragment,null,c.a.createElement(d,{shift:Boolean(j)}),c.a.createElement(v,{shift:Boolean(j)},t.length&&c.a.createElement(L,{onGenreSubmit:function(n){n.preventDefault(),B("films")},onGenreChange:function(n){s(n)},genres:t,controlled:"menu"===I&&!_.filmId}),c.a.createElement(C,{controlled:"films"===I&&!_.filmId,onFilmSubmit:function(n){D.push("/".concat(n)),P(n)},films:E})),j?c.a.createElement(On,j):""))},hn=t(36);var wn=function(){return c.a.createElement(hn.a,{basename:"/"},c.a.createElement(pn.c,null,c.a.createElement(pn.a,{path:"/:filmId?"},c.a.createElement(gn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b39701d8.chunk.js.map