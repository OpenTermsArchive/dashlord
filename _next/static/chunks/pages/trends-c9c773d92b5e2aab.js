(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return y}});var l=t(85893),r=t(9008),u=t.n(r),s=t(67294),d=t(45697),o=t.n(d);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},i.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=(0,s.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=n(e,["color","size"]);return s.createElement("svg",i({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},v.displayName="TrendingUp";var T=v;function Z(){return Z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Z.apply(this,arguments)}function h(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,s.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=h(e,["color","size"]);return s.createElement("svg",Z({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),s.createElement("polyline",{points:"17 18 23 18 23 12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="TrendingDown";var p=c,g=t(74041),G=t(18121),_=t(49384),f={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=f[e],l=a[0],r=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(r)-(0,_.BE)(l):t.reverse?l-r:r-l}(e.key,e.values)>0?(0,l.jsx)(T,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return f[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],A=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in f})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var r=l[0],u=l[l.length-1],s=f[t].treshold;(!s||Math.abs(r-u)>(s||0))&&r!==u&&(a[t]=[r,u])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(G.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,l.jsx)(g.Table,{columns:m,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},b=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2022-06-22T08:13:20.000Z","value":8}],"httpGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"dependabotGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"E"}],"dependabotCount":[{"date":"2022-06-22T08:13:20.000Z","value":14}],"testsslExpireSoon":[{"date":"2022-06-22T08:13:20.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:13:20.000Z","value":"2022-09-16T05:24:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:13:20.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:13:20.000Z","value":0.35}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:13:20.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:13:20.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:13:20.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-22T08:13:20.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D"}],"declaration-a11y":[{"date":"2022-06-22T08:13:20.000Z","value":"C"}]},"https://beta.gouv.fr":{"404":[{"date":"2022-06-22T08:13:20.000Z","value":7}],"httpGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D+"}],"nmapGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:13:20.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:13:20.000Z","value":"2022-08-27T07:18:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:13:20.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:13:20.000Z","value":0.91}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-22T08:13:20.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-06-22T08:13:20.000Z","value":"C"}]},"https://opentermsarchive.osc-fr1.scalingo.io":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2023-05-09T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"C"}]},"https://opentermsarchive.osc-fr1.scalingo.io/fr":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2023-05-09T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"C"}]},"https://opentermsarchive.org":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"},{"date":"2022-06-30T10:40:11.000Z","value":"B"},{"date":"2022-07-04T09:45:45.000Z","value":"A"},{"date":"2022-07-07T13:31:42.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"},{"date":"2022-06-26T02:16:08.000Z","value":"D"},{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":3},{"date":"2022-06-28T12:19:03.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"},{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2022-09-09T17:15:00.000Z"},{"date":"2022-06-28T12:19:03.000Z","value":"2022-09-26T03:36:00.000Z"},{"date":"2022-08-28T02:21:50.000Z","value":"2022-11-25T03:37:00.000Z"},{"date":"2022-10-30T02:17:02.000Z","value":"2023-01-24T03:40:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"},{"date":"2022-06-28T12:19:03.000Z","value":"A"},{"date":"2022-06-30T10:40:11.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"},{"date":"2022-07-03T02:15:33.000Z","value":"A"},{"date":"2022-07-04T09:45:45.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":2},{"date":"2022-07-03T02:15:33.000Z","value":0},{"date":"2022-07-04T09:45:45.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87},{"date":"2022-09-25T02:21:50.000Z","value":0.88}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1},{"date":"2022-06-28T12:19:03.000Z","value":0.93},{"date":"2022-06-30T10:40:11.000Z","value":0.87},{"date":"2022-07-03T02:15:33.000Z","value":0.93},{"date":"2022-09-25T02:21:50.000Z","value":1},{"date":"2022-12-11T01:34:08.766Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.75},{"date":"2022-06-28T12:19:03.000Z","value":0.58},{"date":"2022-06-30T10:40:11.000Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"},{"date":"2022-06-28T12:19:03.000Z","value":"C"},{"date":"2022-06-30T10:40:11.000Z","value":"B"}],"apdex":[{"date":"2022-06-22T11:50:42.000Z","value":1},{"date":"2022-06-28T12:19:03.000Z","value":0.923},{"date":"2022-06-30T10:40:11.000Z","value":1}],"apdexGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"},{"date":"2022-06-28T12:19:03.000Z","value":"F"},{"date":"2022-06-30T10:40:11.000Z","value":"A"}],"uptime":[{"date":"2022-06-22T11:50:42.000Z","value":100}],"uptimeGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"declaration-a11y":[{"date":"2022-06-26T02:16:08.000Z","value":"C"}],"declaration-rgpd":[]},"https://opentermsarchive.org/fr":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"},{"date":"2022-06-30T10:40:11.000Z","value":"B"},{"date":"2022-07-04T09:45:45.000Z","value":"A"},{"date":"2022-07-07T13:31:42.000Z","value":"B"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"},{"date":"2022-06-26T02:16:08.000Z","value":"D"},{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":3},{"date":"2022-06-28T12:19:03.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"},{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2022-09-09T17:15:00.000Z"},{"date":"2022-06-28T12:19:03.000Z","value":"2022-09-26T03:36:00.000Z"},{"date":"2022-08-28T02:21:50.000Z","value":"2022-11-25T03:37:00.000Z"},{"date":"2022-10-30T02:17:02.000Z","value":"2023-01-24T03:40:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"},{"date":"2022-06-28T12:19:03.000Z","value":"A"},{"date":"2022-06-30T10:40:11.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"},{"date":"2022-09-11T02:16:47.000Z","value":"A"},{"date":"2022-09-18T02:33:25.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":2},{"date":"2022-09-11T02:16:47.000Z","value":0},{"date":"2022-09-18T02:33:25.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87},{"date":"2022-09-25T02:21:50.000Z","value":0.88}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1},{"date":"2022-06-28T12:19:03.000Z","value":0.93},{"date":"2022-06-30T10:40:11.000Z","value":0.87},{"date":"2022-07-03T02:15:33.000Z","value":0.93},{"date":"2022-09-25T02:21:50.000Z","value":1},{"date":"2022-12-11T01:34:08.766Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.75},{"date":"2022-06-28T12:19:03.000Z","value":0.58},{"date":"2022-06-30T10:40:11.000Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"},{"date":"2022-06-28T12:19:03.000Z","value":"C"},{"date":"2022-06-30T10:40:11.000Z","value":"B"}],"apdex":[{"date":"2022-06-22T11:50:42.000Z","value":1}],"apdexGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"uptime":[{"date":"2022-06-22T11:50:42.000Z","value":100}],"uptimeGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"declaration-a11y":[{"date":"2022-06-26T02:16:08.000Z","value":"C"}],"declaration-rgpd":[]},"https://opentermsarchive-org.osc-secnum-fr1.scalingo.io":{"404":[{"date":"2022-06-22T11:50:42.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T11:50:42.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T11:50:42.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T11:50:42.000Z","value":"2023-02-11T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T11:50:42.000Z","value":0}],"trackersGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T11:50:42.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T11:50:42.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T11:50:42.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T11:50:42.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T11:50:42.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T11:50:42.000Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"C"}],"httpGrade":[{"date":"2022-06-26T02:16:08.000Z","value":"F"}],"apdex":[{"date":"2022-06-26T02:16:08.000Z","value":1}],"apdexGrade":[{"date":"2022-06-26T02:16:08.000Z","value":"A"}],"uptime":[{"date":"2022-06-26T02:16:08.000Z","value":97.368}],"uptimeGrade":[{"date":"2022-06-26T02:16:08.000Z","value":"C"}],"declaration-a11y":[{"date":"2022-06-26T02:16:08.000Z","value":"C"}]},"https://opentermsarchive-org.osc-secnum-fr1.scalingo.io/fr":{"404":[{"date":"2022-06-22T11:50:42.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T11:50:42.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T11:50:42.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T11:50:42.000Z","value":"2023-02-11T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T11:50:42.000Z","value":0}],"trackersGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T11:50:42.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T11:50:42.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T11:50:42.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T11:50:42.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T11:50:42.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T11:50:42.000Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T11:50:42.000Z","value":"C"}],"httpGrade":[{"date":"2022-06-26T02:16:08.000Z","value":"F"}],"apdex":[{"date":"2022-06-26T02:16:08.000Z","value":1}],"apdexGrade":[{"date":"2022-06-26T02:16:08.000Z","value":"A"}],"uptime":[{"date":"2022-06-26T02:16:08.000Z","value":97.37}],"uptimeGrade":[{"date":"2022-06-26T02:16:08.000Z","value":"C"}],"declaration-a11y":[{"date":"2022-06-26T02:16:08.000Z","value":"C"}]},"https://contribute.opentermsarchive.org":{"404":[{"date":"2022-06-28T12:19:03.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"D"},{"date":"2022-07-14T09:58:09.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2022-06-28T12:19:03.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-06-28T12:19:03.000Z","value":false},{"date":"2022-09-11T02:16:47.000Z","value":true},{"date":"2022-10-16T02:26:36.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-28T12:19:03.000Z","value":"2022-08-11T12:31:00.000Z"},{"date":"2022-07-14T09:58:09.000Z","value":"2022-10-10T10:14:00.000Z"},{"date":"2022-10-16T02:26:36.000Z","value":"2023-01-08T10:31:00.000Z"},{"date":"2022-12-11T01:34:08.766Z","value":"2023-03-09T18:38:00.000Z"}],"testsslGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"B"},{"date":"2022-07-14T09:58:09.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-28T12:19:03.000Z","value":0}],"trackersGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-28T12:19:03.000Z","value":0}],"declaration-a11y":[{"date":"2022-06-28T12:19:03.000Z","value":"F"}],"lighthouse_performance":[{"date":"2022-09-04T02:14:10.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-09-04T02:14:10.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-09-04T02:14:10.000Z","value":0.95},{"date":"2022-10-16T02:26:36.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-09-04T02:14:10.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-09-04T02:14:10.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-09-04T02:14:10.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-09-04T02:14:10.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-09-04T02:14:10.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-09-04T02:14:10.000Z","value":null}],"lighthouse_pwaGrade":[{"date":"2022-09-04T02:14:10.000Z","value":"F"}],"declaration-rgpd":[]},"https://contribute.opentermsarchive.org/fr":{"404":[{"date":"2022-06-28T12:19:03.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"D"},{"date":"2022-07-14T09:58:09.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2022-06-28T12:19:03.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-06-28T12:19:03.000Z","value":false},{"date":"2022-09-11T02:16:47.000Z","value":true},{"date":"2022-10-16T02:26:36.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-28T12:19:03.000Z","value":"2022-08-11T12:31:00.000Z"},{"date":"2022-07-14T09:58:09.000Z","value":"2022-10-10T10:14:00.000Z"},{"date":"2022-10-16T02:26:36.000Z","value":"2023-01-08T10:31:00.000Z"},{"date":"2022-12-11T01:34:08.766Z","value":"2023-03-09T18:38:00.000Z"}],"testsslGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"B"},{"date":"2022-07-14T09:58:09.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-28T12:19:03.000Z","value":0}],"trackersGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-28T12:19:03.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-28T12:19:03.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-28T12:19:03.000Z","value":0.95},{"date":"2022-10-16T02:26:36.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-28T12:19:03.000Z","value":0.93},{"date":"2022-07-06T06:45:57.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-28T12:19:03.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-28T12:19:03.000Z","value":0.75},{"date":"2022-07-14T09:58:09.000Z","value":null}],"lighthouse_pwaGrade":[{"date":"2022-06-28T12:19:03.000Z","value":"B"},{"date":"2022-07-14T09:58:09.000Z","value":"F"}],"declaration-a11y":[{"date":"2022-06-28T12:19:03.000Z","value":"F"}],"declaration-rgpd":[]},"https://contributenew.opentermsarchive.org":{"404":[{"date":"2022-07-07T13:31:42.000Z","value":"A+"}],"httpGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"F"}],"nmapGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2022-07-07T13:31:42.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-07-07T13:31:42.000Z","value":false}],"testsslExpireDate":[{"date":"2022-07-07T13:31:42.000Z","value":"2022-10-05T09:34:00.000Z"}],"testsslGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"cookiesCount":[{"date":"2022-07-07T13:31:42.000Z","value":0}],"trackersGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"trackersCount":[{"date":"2022-07-07T13:31:42.000Z","value":0}],"declaration-a11y":[{"date":"2022-07-07T13:31:42.000Z","value":"F"}]},"https://contributenew.opentermsarchive.org/fr":{"404":[{"date":"2022-07-07T13:31:42.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2022-07-07T13:31:42.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-07-07T13:31:42.000Z","value":false}],"testsslExpireDate":[{"date":"2022-07-07T13:31:42.000Z","value":"2022-10-05T09:34:00.000Z"}],"testsslGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"cookiesCount":[{"date":"2022-07-07T13:31:42.000Z","value":0}],"trackersGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"trackersCount":[{"date":"2022-07-07T13:31:42.000Z","value":0}],"lighthouse_performance":[{"date":"2022-07-07T13:31:42.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-07-07T13:31:42.000Z","value":0.95}],"lighthouse_accessibilityGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-07-07T13:31:42.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-07-07T13:31:42.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-07-07T13:31:42.000Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-07-07T13:31:42.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-07-07T13:31:42.000Z","value":"F"}],"httpGrade":[{"date":"2022-07-10T02:15:56.000Z","value":"F"}]}}'),y=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:"Evolutions - Dashlord"})}),(0,l.jsx)(A,{trends:b})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return Z}});var l=t(85893),r=(t(67294),t(94184)),u=t.n(r),s=t(659),d=t(73973),o=t(83206),i=t(41664),n=t.n(i),v=t(75670),T=t.n(v),Z=function(e){var a=e.title,t=e.children,r=e.info,i=e.url,v=e.urlText,Z=void 0===v?"":v,h=e.className,c=e.isExternal,p=void 0!==c&&c;return(0,l.jsxs)("div",{className:u()(T().container,h),children:[(0,l.jsxs)("div",{className:T().banner,children:[(0,l.jsx)("h5",{className:T().mainTitle,children:a}),r&&(0,l.jsx)(s.Z,{overlay:r,children:(0,l.jsx)(d.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),i&&(p?(0,l.jsx)("a",{style:{float:"right"},href:i,target:"_blank",rel:"noreferrer noopener",children:Z}):(0,l.jsx)(n(),{prefetch:!1,href:i,children:(0,l.jsxs)("a",{style:{float:"right"},children:[Z,(0,l.jsx)(o.Z,{})]})}))]}),(0,l.jsx)("div",{className:T().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);