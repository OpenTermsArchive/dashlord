(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return a(15548)}])},15548:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var r=a(85893),l=a(9008),s=a.n(l),o=a(67294),n=a(45697),i=a.n(n);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=(0,o.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,s=void 0===l?24:l,n=d(e,["color","size"]);return o.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),o.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),o.createElement("polyline",{points:"17 6 23 6 23 12"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="TrendingUp";var h=c;function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var T=(0,o.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,s=void 0===l?24:l,n=p(e,["color","size"]);return o.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),o.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),o.createElement("polyline",{points:"17 18 23 18 23 12"}))}));T.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},T.displayName="TrendingDown";var Z=T,g=a(74041),f=a(68257),_=a(98473),m={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},G=[{name:"trend",label:"Trend",render:function(e){return function(e,t){var a=m[e],r=t[0],l=t[t.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(l)-(0,_.BE)(r):a.reverse?r-l:l-r}(e.key,e.values)>0?(0,r.jsx)(h,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,r.jsx)(Z,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return m[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,t,a){return 0===t||t===a.length-1})).join(" => ")}}],b=function(e){var t=e.trends,a=Object.keys(t);return a.sort(),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,r.jsx)("br",{}),a.map((function(e){var a=function(e){var t={};return Object.keys(e).filter((function(e){return e in m})).forEach((function(a){var r=e[a].map((function(e){return e.date,e.value}));if(r.length>1){var l=r[0],s=r[r.length-1],o=m[a].treshold;(!o||Math.abs(l-s)>(o||0))&&l!==s&&(t[a]=[l,s])}})),t}(t[e]);return Object.keys(a).length?(0,r.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,r.jsx)(g.Table,{columns:G,data:Object.keys(a).map((function(e){return{key:e,values:a[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2022-06-22T08:13:20.000Z","value":8}],"httpGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"dependabotGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"E"}],"dependabotCount":[{"date":"2022-06-22T08:13:20.000Z","value":14}],"testsslExpireSoon":[{"date":"2022-06-22T08:13:20.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:13:20.000Z","value":"2022-09-16T05:24:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:13:20.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:13:20.000Z","value":0.35}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:13:20.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:13:20.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:13:20.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-22T08:13:20.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D"}],"declaration-a11y":[{"date":"2022-06-22T08:13:20.000Z","value":"C"}]},"https://beta.gouv.fr":{"404":[{"date":"2022-06-22T08:13:20.000Z","value":7}],"httpGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D+"}],"nmapGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:13:20.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:13:20.000Z","value":"2022-08-27T07:18:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:13:20.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:13:20.000Z","value":0.91}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-22T08:13:20.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-06-22T08:13:20.000Z","value":"C"}]},"https://opentermsarchive.osc-fr1.scalingo.io":{"404":[{"date":"2022-06-22T08:46:02.222Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:46:02.222Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:46:02.222Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:46:02.222Z","value":"2023-05-09T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T08:46:02.222Z","value":0}],"trackersGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:46:02.222Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:46:02.222Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:46:02.222Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:46:02.222Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"C"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://opentermsarchive.osc-fr1.scalingo.io/fr":{"404":[{"date":"2022-06-22T08:46:02.222Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:46:02.222Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:46:02.222Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:46:02.222Z","value":"2023-05-09T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T08:46:02.222Z","value":0}],"trackersGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:46:02.222Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:46:02.222Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:46:02.222Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:46:02.222Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"C"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://opentermsarchive.org":{"404":[{"date":"2022-06-22T08:46:02.222Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:46:02.222Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-06-22T08:46:02.222Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:46:02.222Z","value":"2022-09-09T17:15:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"cookiesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:46:02.222Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:46:02.222Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:46:02.222Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:46:02.222Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:46:02.222Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://opentermsarchive.org/fr":{"404":[{"date":"2022-06-22T08:46:02.222Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:46:02.222Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-06-22T08:46:02.222Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:46:02.222Z","value":"2022-09-09T17:15:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"cookiesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:46:02.222Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:46:02.222Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:46:02.222Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:46:02.222Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:46:02.222Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:46:02.222Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:46:02.222Z","value":"B"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),k=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"DashLord - evolutions"})}),(0,r.jsx)(b,{trends:y})]})}},68257:function(e,t,a){"use strict";a.d(t,{s:function(){return v}});var r=a(85893),l=(a(67294),a(94184)),s=a.n(l),o=a(79223),n=a(73973),i=a(83206),u=a(41664),d=a.n(u),c=a(99522),h=a.n(c),v=function(e){var t=e.title,a=e.children,l=e.info,u=e.url,c=e.urlText,v=void 0===c?"":c,p=e.className,T=e.isExternal,Z=void 0!==T&&T;return(0,r.jsxs)("div",{className:s()(h().container,p),children:[(0,r.jsxs)("div",{className:h().banner,children:[(0,r.jsx)("h5",{className:h().mainTitle,children:t}),l&&(0,r.jsx)(o.Z,{overlay:l,children:(0,r.jsx)(n.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),u&&(Z?(0,r.jsx)("a",{style:{float:"right"},href:u,target:"_blank",rel:"noreferrer noopener",children:v}):(0,r.jsx)(d(),{prefetch:!1,href:u,children:(0,r.jsxs)("a",{style:{float:"right"},children:[v,(0,r.jsx)(i.Z,{})]})}))]}),(0,r.jsx)("div",{className:h().body,children:a})]})}},99522:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return t=21105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);