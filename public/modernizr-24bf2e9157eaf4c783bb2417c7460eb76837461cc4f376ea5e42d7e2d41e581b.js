window.Modernizr=function(r,d,i){function o(e){b.cssText=e}function e(e,t){return o(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function c(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var n in e){var r=e[n];if(!c(r,"-")&&b[r]!==i)return"pfx"!=t||r}return!1}function u(e,t,n){for(var r in e){var o=t[e[r]];if(o!==i)return!1===n?e[r]:a(o,"function")?o.bind(n||t):o}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?s(o,t):u(o=(e+" "+T.join(r+" ")+r).split(" "),t,n)}function t(){p.input=function(e){for(var t=0,n=e.length;t<n;t++)j[e[t]]=!!(e[t]in E);return j.list&&(j.list=!(!d.createElement("datalist")||!r.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var t,n,r,o=0,a=e.length;o<a;o++)E.setAttribute("type",n=e[o]),(t="text"!==E.type)&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&E.style.WebkitAppearance!==i?(g.appendChild(E),t=(r=d.defaultView).getComputedStyle&&"textfield"!==r.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(n)||(t=/^(url|email)$/.test(n)?E.checkValidity&&!1===E.checkValidity():E.value!=x)),P[e[o]]=!!t;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var n,f,m="2.7.1",p={},h=!0,g=d.documentElement,v="modernizr",y=d.createElement(v),b=y.style,E=d.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,t,n,r){var o,a,i,c,s=d.createElement("div"),u=d.body,l=u||d.createElement("body");if(parseInt(n,10))for(;n--;)(i=d.createElement("div")).id=r?r[n]:v+(n+1),s.appendChild(i);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),s.id=v,(u?s:l).innerHTML+=o,l.appendChild(s),u||(l.style.background="",l.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(l)),a=t(s,e),u?s.parentNode.removeChild(s):(l.parentNode.removeChild(l),g.style.overflow=c),!!a},z=function(e){var t,n=r.matchMedia||r.msMatchMedia;return n?n(e).matches:(F("@media "+e+" { #"+v+" { position: absolute; } }",function(e){t="absolute"==(r.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),t)},A=function(){function e(e,t){t=t||d.createElement(r[e]||"div");var n=(e="on"+e)in t;return n||(t.setAttribute||(t=d.createElement("div")),t.setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=a(t[e],"function"),a(t[e],"undefined")||(t[e]=i),t.removeAttribute(e))),t=null,n}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;for(var H in f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function I(r){var o=this;if("function"!=typeof o)throw new TypeError;var a=D.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=o.prototype;var t=new e,n=o.apply(t,a.concat(D.call(arguments)));return Object(n)===n?n:t}return o.apply(r,a.concat(D.call(arguments)))};return i}),M.flexbox=function(){return l("flexWrap")},M.flexboxlegacy=function(){return l("boxDirection")},M.canvas=function(){var e=d.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(d.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!r.WebGLRenderingContext},M.touch=function(){var t;return"ontouchstart"in r||r.DocumentTouch&&d instanceof DocumentTouch?t=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!r.postMessage},M.websqldatabase=function(){return!!r.openDatabase},M.indexedDB=function(){return!!l("indexedDB",r)},M.hashchange=function(){return A("hashchange",r)&&(d.documentMode===i||7<d.documentMode)},M.history=function(){return!(!r.history||!history.pushState)},M.draganddrop=function(){var e=d.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in r||"MozWebSocket"in r},M.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),c(b.backgroundColor,"rgba")},M.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),c(b.backgroundColor,"rgba")||c(b.backgroundColor,"hsla")},M.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return l("backgroundSize")},M.borderimage=function(){return l("borderImage")},M.borderradius=function(){return l("borderRadius")},M.boxshadow=function(){return l("boxShadow")},M.textshadow=function(){return""===d.createElement("div").style.textShadow},M.opacity=function(){return e("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return l("animationName")},M.csscolumns=function(){return l("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return o((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),c(b.backgroundImage,"gradient")},M.cssreflections=function(){return l("boxReflect")},M.csstransforms=function(){return!!l("transform")},M.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},M.csstransitions=function(){return l("transition")},M.fontface=function(){var a;return F('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=d.getElementById("smodernizr"),r=n.sheet||n.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";a=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0])}),a},M.generatedcontent=function(){var t;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=3<=e.offsetHeight}),t},M.video=function(){var e=d.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return t},M.audio=function(){var e=d.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!r.Worker},M.applicationcache=function(){return!!r.applicationCache},M.svg=function(){return!!d.createElementNS&&!!d.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=d.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!d.createElementNS&&/SVGAnimate/.test(w.call(d.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!d.createElementNS&&/SVGClipPath/.test(w.call(d.createElementNS(N.svg,"clipPath")))},M)f(M,H)&&(n=H.toLowerCase(),p[n]=M[H](),$.push((p[n]?"":"no-")+n));return p.input||t(),p.addTest=function(e,t){if("object"==typeof e)for(var n in e)f(e,n)&&p.addTest(n,e[n]);else{if(e=e.toLowerCase(),p[e]!==i)return p;t="function"==typeof t?t():t,void 0!==h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},o(""),y=E=null,function(e,i){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function c(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function s(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function r(e,t,n){return t||(t=i),l?t.createElement(e):(n||(n=s(t)),!(r=n.cache[e]?n.cache[e].cloneNode():p.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||m.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function t(e,t){if(e||(e=i),l)return e.createDocumentFragment();for(var n=(t=t||s(e)).frag.cloneNode(),r=0,o=c(),a=o.length;r<a;r++)n.createElement(o[r]);return n}function o(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return y.shivMethods?r(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/[\w\-]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,n.frag)}function a(e){e||(e=i);var t=s(e);return!y.shivCSS||u||t.hasCSS||(t.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||o(e,t),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=i.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){i.createElement("a");var e=i.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){l=u=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:!1!==f.shivCSS,supportsUnknownElements:l,shivMethods:!1!==f.shivMethods,type:"default",shivDocument:a,createElement:r,createDocumentFragment:t};e.html5=y,a(i)}(this,d),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return s([e])},p.testAllProps=l,p.testStyles=F,p.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);