(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(15548)}])},15548:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return A}});var r=t(85893),l=t(9008),s=t.n(l),o=t(67294),u=t(45697),i=t.n(u);function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=(0,o.forwardRef)((function(e,a){var t=e.color,r=void 0===t?"currentColor":t,l=e.size,s=void 0===l?24:l,u=n(e,["color","size"]);return o.createElement("svg",d({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),o.createElement("polyline",{points:"17 6 23 6 23 12"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="TrendingUp";var h=c;function v(){return v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function p(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var T=(0,o.forwardRef)((function(e,a){var t=e.color,r=void 0===t?"currentColor":t,l=e.size,s=void 0===l?24:l,u=p(e,["color","size"]);return o.createElement("svg",v({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),o.createElement("polyline",{points:"17 18 23 18 23 12"}))}));T.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},T.displayName="TrendingDown";var Z=T,g=t(74041),f=t(68257),_=t(98473),G={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=G[e],r=a[0],l=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(l)-(0,_.BE)(r):t.reverse?r-l:l-r}(e.key,e.values)>0?(0,r.jsx)(h,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,r.jsx)(Z,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return G[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],b=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,r.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in G})).forEach((function(t){var r=e[t].map((function(e){return e.date,e.value}));if(r.length>1){var l=r[0],s=r[r.length-1],o=G[t].treshold;(!o||Math.abs(l-s)>(o||0))&&l!==s&&(a[t]=[l,s])}})),a}(a[e]);return Object.keys(t).length?(0,r.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,r.jsx)(g.Table,{columns:m,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2022-06-22T08:13:20.000Z","value":8}],"httpGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"dependabotGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"E"}],"dependabotCount":[{"date":"2022-06-22T08:13:20.000Z","value":14}],"testsslExpireSoon":[{"date":"2022-06-22T08:13:20.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:13:20.000Z","value":"2022-09-16T05:24:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:13:20.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:13:20.000Z","value":0.35}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:13:20.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:13:20.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:13:20.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-22T08:13:20.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D"}],"declaration-a11y":[{"date":"2022-06-22T08:13:20.000Z","value":"C"}]},"https://beta.gouv.fr":{"404":[{"date":"2022-06-22T08:13:20.000Z","value":7}],"httpGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"D+"}],"nmapGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:13:20.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:13:20.000Z","value":"2022-08-27T07:18:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:13:20.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:13:20.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:13:20.000Z","value":0.91}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:13:20.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-06-22T08:13:20.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:13:20.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-06-22T08:13:20.000Z","value":"C"}]},"https://opentermsarchive.osc-fr1.scalingo.io":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2023-05-09T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"C"}]},"https://opentermsarchive.osc-fr1.scalingo.io/fr":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2023-05-09T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"C"}]},"https://opentermsarchive.org":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2022-09-09T17:15:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"apdex":[{"date":"2022-06-22T11:49:06.832Z","value":1}],"apdexGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"uptime":[{"date":"2022-06-22T11:49:06.832Z","value":100}],"uptimeGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://opentermsarchive.org/fr":{"404":[{"date":"2022-06-22T08:47:40.000Z","value":"A+"}],"httpGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2022-06-22T08:47:40.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-06-22T08:47:40.000Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T08:47:40.000Z","value":"2022-09-09T17:15:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"cookiesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"cookiesCount":[{"date":"2022-06-22T08:47:40.000Z","value":2}],"trackersGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T08:47:40.000Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T08:47:40.000Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T08:47:40.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T08:47:40.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T08:47:40.000Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-06-22T08:47:40.000Z","value":"B"}],"apdex":[{"date":"2022-06-22T11:49:06.832Z","value":1}],"apdexGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"uptime":[{"date":"2022-06-22T11:49:06.832Z","value":100}],"uptimeGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://opentermsarchive-org.osc-secnum-fr1.scalingo.io":{"404":[{"date":"2022-06-22T11:49:06.832Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T11:49:06.832Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T11:49:06.832Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T11:49:06.832Z","value":"2023-02-11T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T11:49:06.832Z","value":0}],"trackersGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T11:49:06.832Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T11:49:06.832Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T11:49:06.832Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T11:49:06.832Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T11:49:06.832Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T11:49:06.832Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"C"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://opentermsarchive-org.osc-secnum-fr1.scalingo.io/fr":{"404":[{"date":"2022-06-22T11:49:06.832Z","value":"A+"}],"nmapGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-06-22T11:49:06.832Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-06-22T11:49:06.832Z","value":false}],"testsslExpireDate":[{"date":"2022-06-22T11:49:06.832Z","value":"2023-02-11T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"cookiesGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"cookiesCount":[{"date":"2022-06-22T11:49:06.832Z","value":0}],"trackersGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"trackersCount":[{"date":"2022-06-22T11:49:06.832Z","value":0}],"lighthouse_performance":[{"date":"2022-06-22T11:49:06.832Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-06-22T11:49:06.832Z","value":0.87}],"lighthouse_accessibilityGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-06-22T11:49:06.832Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"A"}],"lighthouse_seo":[{"date":"2022-06-22T11:49:06.832Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"B"}],"lighthouse_pwa":[{"date":"2022-06-22T11:49:06.832Z","value":0.58}],"lighthouse_pwaGrade":[{"date":"2022-06-22T11:49:06.832Z","value":"C"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),A=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"DashLord - evolutions"})}),(0,r.jsx)(b,{trends:y})]})}},68257:function(e,a,t){"use strict";t.d(a,{s:function(){return v}});var r=t(85893),l=(t(67294),t(94184)),s=t.n(l),o=t(79223),u=t(73973),i=t(83206),d=t(41664),n=t.n(d),c=t(99522),h=t.n(c),v=function(e){var a=e.title,t=e.children,l=e.info,d=e.url,c=e.urlText,v=void 0===c?"":c,p=e.className,T=e.isExternal,Z=void 0!==T&&T;return(0,r.jsxs)("div",{className:s()(h().container,p),children:[(0,r.jsxs)("div",{className:h().banner,children:[(0,r.jsx)("h5",{className:h().mainTitle,children:a}),l&&(0,r.jsx)(o.Z,{overlay:l,children:(0,r.jsx)(u.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),d&&(Z?(0,r.jsx)("a",{style:{float:"right"},href:d,target:"_blank",rel:"noreferrer noopener",children:v}):(0,r.jsx)(n(),{prefetch:!1,href:d,children:(0,r.jsxs)("a",{style:{float:"right"},children:[v,(0,r.jsx)(i.Z,{})]})}))]}),(0,r.jsx)("div",{className:h().body,children:t})]})}},99522:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);