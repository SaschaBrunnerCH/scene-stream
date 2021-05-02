var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a=!1;const s=new Set;function c(t,e){a&&s.delete(e),e.parentNode!==t&&t.appendChild(e)}function u(t,e,n){a&&s.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function h(t){a?s.add(t):t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function l(){return p(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function y(t){g=t}function w(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const v=[],b=[],O=[],k=[],$=Promise.resolve();let _=!1;function S(t){O.push(t)}let T=!1;const E=new Set;function N(){if(!T){T=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];y(e),q(e.$$)}for(y(null),v.length=0;b.length;)b.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];E.has(e)||(E.add(e),e())}O.length=0}while(v.length);for(;k.length;)k.pop()();_=!1,T=!1,E.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const x=new Set;function R(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,$.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(i,c,u,f,p,l,d=[-1]){const m=g;y(i);const w=i.$$={fragment:null,ctx:null,props:l,update:t,not_equal:p,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:c.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let v=!1;if(w.ctx=u?u(i,c.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return w.ctx&&p(w.ctx[t],w.ctx[t]=r)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](r),v&&R(i,t)),e})):[],w.update(),v=!0,r(w.before_update),w.fragment=!!f&&f(w.ctx),c.target){if(c.hydrate){a=!0;const t=function(t){return Array.from(t.childNodes)}(c.target);w.fragment&&w.fragment.l(t),t.forEach(h)}else w.fragment&&w.fragment.c();c.intro&&((b=i.$$.fragment)&&b.i&&(x.delete(b),b.i(O))),function(t,n,i,a){const{fragment:s,on_mount:c,on_destroy:u,after_update:h}=t.$$;s&&s.m(n,i),a||S((()=>{const n=c.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]})),h.forEach(S)}(i,c.target,c.anchor,c.customElement),function(){a=!1;for(const t of s)t.parentNode.removeChild(t);s.clear()}(),N()}var b,O;y(m)}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
var j=function(t,e){return(j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var P=function(){return(P=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function G(t){return Object.keys(t).some((function(e){var n=t[e];if(!n)return!1;switch(n&&n.toParam&&(n=n.toParam()),n.constructor.name){case"Array":case"Object":case"Date":case"Function":case"Boolean":case"String":case"Number":return!1;default:return!0}}))}function M(t){var e={};return Object.keys(t).forEach((function(n){var r,o,i=t[n];if(i&&i.toParam&&(i=i.toParam()),i||0===i||"boolean"==typeof i||"string"==typeof i){var a;switch(i.constructor.name){case"Array":var s=null===(o=null===(r=i[0])||void 0===r?void 0:r.constructor)||void 0===o?void 0:o.name;a="Array"===s?i:"Object"===s?JSON.stringify(i):i.join(",");break;case"Object":a=JSON.stringify(i);break;case"Date":a=i.valueOf();break;case"Function":a=null;break;case"Boolean":a=i+"";break;default:a=i}(a||0===a||"string"==typeof a||Array.isArray(a))&&(e[n]=a)}})),e}function C(t,e){return Array.isArray(e)&&e[0]&&Array.isArray(e[0])?e.map((function(e){return C(t,e)})).join("&"):encodeURIComponent(t)+"="+encodeURIComponent(e)}function D(t){var e=M(t);return Object.keys(e).map((function(t){return C(t,e[t])})).join("&")}var I=function(t,e,n,r,o){t=t||"UNKNOWN_ERROR",e=e||"UNKNOWN_ERROR_CODE",this.name="ArcGISRequestError",this.message="UNKNOWN_ERROR_CODE"===e?t:e+": "+t,this.originalMessage=t,this.code=e,this.response=n,this.url=r,this.options=o};function U(t){console&&console.warn&&console.warn.apply(console,[t])}I.prototype=Object.create(Error.prototype),I.prototype.constructor=I;var W={httpMethod:"POST",params:{f:"json"}},F=function(t){function e(e,n,r,o,i){void 0===e&&(e="AUTHENTICATION_ERROR"),void 0===n&&(n="AUTHENTICATION_ERROR_CODE");var a=t.call(this,e,n,r,o,i)||this;return a.name="ArcGISAuthError",a.message="AUTHENTICATION_ERROR_CODE"===n?e:n+": "+e,a}return function(t,e){function n(){this.constructor=t}j(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.retry=function(t,e){var n=this;void 0===e&&(e=3);var r=0,o=function(i,a){t(n.url,n.options).then((function(t){var e=P(P({},n.options),{authentication:t});return r+=1,Y(n.url,e)})).then((function(t){i(t)})).catch((function(t){"ArcGISAuthError"===t.name&&r<e?o(i,a):"ArcGISAuthError"===t.name&&r>=e?a(n):a(t)}))};return new Promise((function(t,e){o(t,e)}))},e}(I);function Y(t,e){void 0===e&&(e={params:{f:"json"}});var n=P(P(P({httpMethod:"POST"},W),e),{params:P(P({},W.params),e.params),headers:P(P({},W.headers),e.headers)}),r=[],o=[];if(n.fetch||"undefined"==typeof fetch?(r.push("`fetch`"),o.push("`node-fetch`")):n.fetch=fetch.bind(Function("return this")()),"undefined"==typeof Promise&&(r.push("`Promise`"),o.push("`es6-promise`")),"undefined"==typeof FormData&&(r.push("`FormData`"),o.push("`isomorphic-form-data`")),!n.fetch||"undefined"==typeof Promise||"undefined"==typeof FormData)throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing "+r.join(", ")+". We recommend installing the "+o.join(", ")+" modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");var i=n.httpMethod,a=n.authentication,s=n.rawResponse,c=P({f:"json"},n.params),u=null,h={method:i,credentials:"same-origin"};return n.headers&&n.headers["X-Esri-Auth-Client-Id"]&&t.indexOf("/oauth2/platformSelf")>-1&&(h.credentials="include"),(a?a.getToken(t,{fetch:n.fetch}).catch((function(e){return e.url=t,e.options=n,u=e,Promise.resolve("")})):Promise.resolve("")).then((function(e){e.length&&(c.token=e);var r={};if("GET"===h.method){c.token&&n.hideToken&&"undefined"==typeof window&&(r["X-Esri-Authorization"]="Bearer "+c.token,delete c.token);var o=""===D(c)?t:t+"?"+D(c);n.maxUrlLength&&o.length>n.maxUrlLength||c.token&&n.hideToken?(h.method="POST",e.length&&n.hideToken&&(c.token=e,delete r["X-Esri-Authorization"])):t=o}var i=new RegExp("/items/.+/updateResources").test(t);return"POST"===h.method&&(h.body=function(t,e){var n=G(t)||e,r=M(t);if(n){var o=new FormData;return Object.keys(r).forEach((function(t){if("undefined"!=typeof Blob&&r[t]instanceof Blob){var e=r.fileName||r[t].name||t;o.append(t,r[t],e)}else o.append(t,r[t])})),o}return D(t)}(c,i)),h.headers=P(P({},r),n.headers),"undefined"!=typeof window||h.headers.referer||(h.headers.referer="@esri/arcgis-rest-js"),G(c)||i||(h.headers["Content-Type"]="application/x-www-form-urlencoded"),n.fetch(t,h)})).then((function(e){if(!e.ok){var r=e.status,o=e.statusText;throw new I(o,"HTTP "+r,e,t,n)}if(s)return e;switch(c.f){case"json":case"geojson":return e.json();case"html":case"text":return e.text();default:return e.blob()}})).then((function(e){if("json"!==c.f&&"geojson"!==c.f||s)return e;var r=function(t,e,n,r,o){if(t.code>=400){var i=t.message,a=t.code;throw new I(i,a,t,e,r)}if(t.error){var s=t.error,c=(i=s.message,a=s.code,s.messageCode),u=c||a||"UNKNOWN_ERROR_CODE";if(498===a||499===a||"GWM_0003"===c||400===a&&"Unable to generate token."===i)throw o||new F(i,u,t,e,r);throw new I(i,u,t,e,r)}if("failed"===t.status||"failure"===t.status){i=void 0,a="UNKNOWN_ERROR_CODE";try{i=JSON.parse(t.statusMessage).message,a=JSON.parse(t.statusMessage).code}catch(e){i=t.statusMessage||t.message}throw new I(i,a,t,e,r)}return t}(e,t,0,n,u);if(u){var o=t.toLowerCase().split(/\/rest(\/admin)?\/services\//)[0];n.authentication.trustedServers[o]={token:[],expires:new Date(Date.now()+864e5)},u=null}return r}))}var B=function(){function t(t){void 0===t&&(t=""),this.termStack=[],this.rangeStack=[],this.openGroups=0,this.q=t}return t.prototype.match=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.termStack=this.termStack.concat(t),this},t.prototype.in=function(t){var e="`in("+(t?'"'+t+'"':"")+")`";return this.hasRange||this.hasTerms?(t&&"*"!==t&&(this.q+=t+":"),this.commit()):(U(e+" was called with no call to `match(...)` or `from(...)`/`to(...)`. Your query was not modified."),this)},t.prototype.startGroup=function(){return this.commit(),this.openGroups>0&&(this.q+=" "),this.openGroups++,this.q+="(",this},t.prototype.endGroup=function(){return this.openGroups<=0?(U("`endGroup(...)` was called without calling `startGroup(...)` first. Your query was not modified."),this):(this.commit(),this.openGroups--,this.q+=")",this)},t.prototype.and=function(){return this.addModifier("and")},t.prototype.or=function(){return this.addModifier("or")},t.prototype.not=function(){return this.addModifier("not")},t.prototype.from=function(t){return this.hasTerms?(U("`from(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Your query was not modified."),this):(this.rangeStack[0]=t,this)},t.prototype.to=function(t){return this.hasTerms?(U("`to(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Your query was not modified."),this):(this.rangeStack[1]=t,this)},t.prototype.boost=function(t){return this.commit(),this.q+="^"+t,this},t.prototype.toParam=function(){return this.commit(),this.cleanup(),this.q},t.prototype.clone=function(){return this.commit(),this.cleanup(),new t(this.q+"")},t.prototype.addModifier=function(t){return this.currentModifer?(U("You have called `"+this.currentModifer+"()` after `"+t+"()`. Your current query was not modified."),this):(this.commit(),""===this.q&&"not"!==t?(U("You have called `"+t+"()` without calling another method to modify your query first. Try calling `match()` first."),this):(this.currentModifer=t,this.q+=""===this.q?"":" ",this.q+=t.toUpperCase()+" ",this))},t.prototype.hasWhiteSpace=function(t){return/\s/g.test(t)},t.prototype.formatTerm=function(t){return t instanceof Date?t.getTime():"string"==typeof t&&this.hasWhiteSpace(t)?'"'+t+'"':t},t.prototype.commit=function(){var t=this;return this.currentModifer=void 0,this.hasRange&&(this.q+="["+this.formatTerm(this.rangeStack[0])+" TO "+this.formatTerm(this.rangeStack[1])+"]",this.rangeStack=[void 0,void 0]),this.hasTerms&&(this.q+=this.termStack.map((function(e){return t.formatTerm(e)})).join(" "),this.termStack=[]),this},Object.defineProperty(t.prototype,"hasTerms",{get:function(){return this.termStack.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasRange",{get:function(){return this.rangeStack.length&&this.rangeStack[0]&&this.rangeStack[1]},enumerable:!1,configurable:!0}),t.prototype.cleanup=function(){if(this.openGroups>0)for(U("Automatically closing "+this.openGroups+" group(s). You can use `endGroup(...)` to remove this warning.");this.openGroups>0;)this.q+=")",this.openGroups--;var t=this.q;this.q=t.replace(/( AND ?| NOT ?| OR ?)*$/,""),t!==this.q&&U("`startGroup(...)` was called without calling `endGroup(...)` first. Your query was not modified."),this.q=this.q.replace(/(\(\))*/,"")},t}();function K(t,e){var n,r;switch(n="string"==typeof t||t instanceof B?{httpMethod:"GET",params:{q:t}}:function(t,e,n){var r=P(P({params:{}},n),t);return r.params=e.reduce((function(e,n){return(t[n]||"boolean"==typeof t[n])&&(e[n]=t[n]),e}),r.params),["params","httpMethod","rawResponse","authentication","portal","fetch","maxUrlLength","headers"].reduce((function(t,e){return r[e]&&(t[e]=r[e]),t}),{})}(t,["q","num","start","sortField","sortOrder"],{httpMethod:"GET"}),e){case"item":r="/search";break;case"group":r="/community/groups";break;case"groupContent":if("string"==typeof t||t instanceof B||!t.groupId)return Promise.reject(new Error("you must pass a `groupId` option to `searchGroupContent`"));r="/content/groups/"+t.groupId+"/search";break;default:r="/portals/self/users/search"}return Y(function(t){return void 0===t&&(t={}),t.portal?("string"!=typeof(e=t.portal)||"/"===(e=e.trim())[e.length-1]&&(e=e.slice(0,-1)),e):t.authentication?t.authentication.portal:"https://www.arcgis.com/sharing/rest";var e}(n)+r,n).then((function(n){return n.nextStart&&-1!==n.nextStart&&(n.nextPage=function(){var r;return"string"==typeof t||t instanceof B?r={q:t,start:n.nextStart}:(r=t).start=n.nextStart,K(r,e)}),n}))}function J(t,e,n){const r=t.slice();return r[2]=e[n],r}function H(t){let e,n,r,o,i,a,s,g,y,w,v,b,O,k,$,_,S,T,E=t[2].title+"",N=t[2].owner+"",q=new Date(t[2].modified)+"";return{c(){e=f("div"),n=f("a"),r=f("img"),a=p("\n\n        Title:\n        "),s=f("a"),g=p(E),w=f("br"),v=p("\n        Owner: "),b=p(N),O=f("br"),k=p("\n        Modified: "),$=p(q),_=l(),S=f("div"),T=l(),r.src!==(o=`https://www.arcgis.com/sharing/rest/content/items/${t[2].id}/info/${t[2].thumbnail}`)&&d(r,"src",o),d(r,"alt","Map thumbnail"),d(r,"class","svelte-1o6gqv1"),d(n,"href",i=`https://www.arcgis.com/apps/mapviewer/index.html?webmap=${t[2].id}`),d(n,"target","_blank"),d(s,"href",y=`https://www.arcgis.com/apps/mapviewer/index.html?webmap=${t[2].id}`),d(s,"target","_blank"),d(S,"class","clear svelte-1o6gqv1"),d(e,"class","item svelte-1o6gqv1")},m(t,o){u(t,e,o),c(e,n),c(n,r),c(e,a),c(e,s),c(s,g),c(e,w),c(e,v),c(e,b),c(e,O),c(e,k),c(e,$),c(e,_),c(e,S),c(e,T)},p(t,e){1&e&&r.src!==(o=`https://www.arcgis.com/sharing/rest/content/items/${t[2].id}/info/${t[2].thumbnail}`)&&d(r,"src",o),1&e&&i!==(i=`https://www.arcgis.com/apps/mapviewer/index.html?webmap=${t[2].id}`)&&d(n,"href",i),1&e&&E!==(E=t[2].title+"")&&m(g,E),1&e&&y!==(y=`https://www.arcgis.com/apps/mapviewer/index.html?webmap=${t[2].id}`)&&d(s,"href",y),1&e&&N!==(N=t[2].owner+"")&&m(b,N),1&e&&q!==(q=new Date(t[2].modified)+"")&&m($,q)},d(t){t&&h(e)}}}function L(e){let n,r,o,i,a=e[0],s=[];for(let t=0;t<a.length;t+=1)s[t]=H(J(e,a,t));return{c(){n=f("main"),r=f("h1"),r.textContent="Map Stream",o=l(),i=f("div");for(let t=0;t<s.length;t+=1)s[t].c()},m(t,e){u(t,n,e),c(n,r),c(n,o),c(n,i);for(let t=0;t<s.length;t+=1)s[t].m(i,null)},p(t,[e]){if(1&e){let n;for(a=t[0],n=0;n<a.length;n+=1){const r=J(t,a,n);s[n]?s[n].p(r,e):(s[n]=H(r),s[n].c(),s[n].m(i,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},i:t,o:t,d(t){t&&h(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function z(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};let o;return w((()=>r(void 0,void 0,void 0,(function*(){const t=yield(e={q:'((type: "Web Map")) AND NOT type:"Web Mapping Application"',sortField:"modified",sortOrder:"desc"},K(e,"item"));var e;n(0,o=t.results),console.log("items",o)})))),n(0,o=[]),[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,z,L,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
