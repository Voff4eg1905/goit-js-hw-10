!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return s.Date.now()};function m(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var f=u.test(t);return f||a.test(t)?c(t.slice(2),f?2:8):i.test(t)?NaN:+t}e=function(t,n,e){var o,r,i,u,a,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=o,i=r;return o=r=void 0,f=n,u=t.apply(i,e)}function h(t){return f=t,a=setTimeout(w,n),l?b(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=i}function w(){var t=g();if(j(t))return T(t);a=setTimeout(w,function(t){var e=n-(t-c);return s?v(e,i-(t-f)):e}(t))}function T(t){return a=void 0,d&&o?b(t):(o=r=void 0,u)}function O(){var t=g(),e=j(t);if(o=arguments,r=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(w,n),b(c)}return void 0===a&&(a=setTimeout(w,n)),u}return n=y(n)||0,m(e)&&(l=!!e.leading,i=(s="maxWait"in e)?p(y(e.maxWait)||0,n):i,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=r=a=void 0},O.flush=function(){return void 0===a?u:T(g())},O};var b=document.querySelector("#search-box"),h=document.querySelector(".country-info");b.addEventListener("input",e((function(t){var n,e=t.target.value.trim();e&&(console.log(e),(n=e,fetch("https://restcountries.com/v2/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){var n;console.log(t),n=t,h.innerHTML=' <img src="'.concat(n[0].flags.svg,'" alt=""> <h1>').concat(n[0].name,"</h1>\n<p>Capital: ").concat(n[0].capital," </p>\n<p>Population: ").concat(n[0].population," </p>\n<p>Languages: ").concat(n[0].languages[0].name,"</p>")})).catch((function(t){return console.log(t)})))}),300))}();
//# sourceMappingURL=index.de9df46f.js.map
