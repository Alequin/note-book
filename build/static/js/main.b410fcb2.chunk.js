(window["webpackJsonpnote-book"]=window["webpackJsonpnote-book"]||[]).push([[0],{181:function(e,n,t){(function(n,r){var a=t(182),o=(t(10).get,"".concat(n,"/..")),c=Object({NODE_ENV:"production",PUBLIC_URL:"./build"}).IS_TEST,i="browser"===r.title,s=function(e){var n=e.forTests,t=e.standardPath;return c&&n?a.resolve("".concat(o,"/").concat(n)):a.resolve("".concat(o,"/").concat(t))},u=s({forTests:"./mock-dirs/test-raw-notes",standardPath:"./raw-notes"}),l=s({forTests:"./mock-dirs/test-raw-flash-cards",standardPath:"./raw-flash-cards"}),d=s({forTests:"./mock-dirs/test-routes.json",standardPath:"./src/routes.json"}),f=s({forTests:"./mock-dirs/test-assets",standardPath:"./assets"}),m=s({forTests:"./mock-dirs/images.json",standardPath:"./assets/images.json"}),p=s({forTests:"./mock-dirs/flash.json",standardPath:"./src/flash-cards.json"});e.exports=Object.freeze({RAW_NOTES_DIRECTORY:u,RAW_FLASH_CARDS_DIRECTORY:l,ROUTES_JSON_FILE:d,ASSETS_DIRECTORY:f,IMAGES_JSON_FILE:m,FLASH_CARDS_JSON_FILE:p,isReactApp:i})}).call(this,"/",t(43))},183:function(e){e.exports=JSON.parse('{"file":"data:image/png;base64,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","folder":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACZUlEQVR4nO3dvW7TUABH8RNAMLCXpgOCmYGJB2LgQ6q68ADsPAjMFWVCfExQMlQMPAMCCcFA0xkGkyE3hjrIdv52zk+6Q6Qktu+pbLmRfEGSJEmSckyAB8AMmAO/WhrfgGfAzf4OZfj2gDe0F6FufAXu9HVAQ3YBeEu3MRbjB3Cjl6MasIf0E2Mx3gEXezmygZqxPGEvgGstfv9jVqM8avH7R+eU5cnabfn7J8BhsY0zvMj/VfnX24Vd4HuxnddU1y8V+ggCcLdmW0863N5g9RVkArys2d5Yxxw4Bg6Ay+tMVF9BoDp1fanZ5tjHR6p7vUb6DAJwG/hcs92xj1dUZ4lz9R0E4DrwlOrfKpueqD7H/SaTs4kg22AHOGJ5bo+bfNAg3ZmyPLc/yzfUncPKCI3Oc2rsn/PrjVgYg4QxSJhLDd4zA24BVzvel7E7Az6d96YmF3V1y4t6MoMMQHlj2PYvhttqB3jOf9x4lx9o+xfDbVbeqa8E8U69f96pD4lBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCSMQcIYJIxBwhgkjEHCGCRMXZB58dpn9rZnWrxeWdClzgeWnyt7hM/ubcOU1Qcpv2/ywQNWH/br6GbsNwlyhWqdvU3v7NjHCWssMLlHtc7epnd6rOOENRaWXJgA96jOc+UK0o71x+mfudxnzaVXJUmSJKlLvwGoxyMlZkSDcQAAAABJRU5ErkJggg=="}')},184:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=184},188:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(66),c=t.n(o),i=t(11),s=t(12),u=t(1),l=t(31),d=t(14),f=t(2),m=t(67),p=t.n(m);function h(){var e=Object(u.a)(["\n  border: 0;\n  padding: 0;\n  background: transparent;\n"]);return h=function(){return e},e}var g=f.b.button(h());function b(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2vw;\n  grid-row-gap: 2vw;\n"]);return b=function(){return e},e}var E=f.b.section(b());function w(){var e=Object(u.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  &:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n  }\n  &:active {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n  }\n"]);return w=function(){return e},e}var v=Object(f.a)(w());function O(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background: transparent;\n  font-size: 1rem;\n  ",";\n"]);return O=function(){return e},e}var C=Object(f.b)(g)(O(),v),A=function(e){var n=e.name,t=e.onClick,r=e.image;return a.a.createElement(C,{onClick:t},a.a.createElement("img",{src:r,alt:n}),a.a.createElement("p",null,"Name: ",n))},k=t(30),R=t.n(k),S=function(e){var n=e.name,t=e.onClick;return a.a.createElement(A,{name:n,onClick:t,image:R()("folder")})},j=function(e){var n=e.name,t=e.to;return a.a.createElement(i.b,{to:t},a.a.createElement(A,{name:n,image:R()("file")}))},T=t(72),x=t.n(T),I=t(73),q=t.n(I),y=t(9);function L(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"]);return L=function(){return e},e}var H=function(e){var n=e.currentRoute,t=e.stepCurrentRouteBackBy;return a.a.createElement(M,null,"Current Path: /",n.map((function(e,n){return a.a.createElement(g,{onClick:function(){return t(-n)}},e,"/")})))},M=f.b.p(L()),F=function(){var e=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],a=n[1];return{currentRoute:t,addToCurrentRoute:function(e){return a([].concat(Object(l.a)(t),[e]))},resetToInitialRoute:function(){return a([])},stepCurrentRouteBackBy:function(e){return a(t.slice(0,-e))}}}(),n=e.currentRoute,t=e.addToCurrentRoute,o=e.resetToInitialRoute,c=e.stepCurrentRouteBackBy,i=q()(x()(n,y),n.length);return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:o},"Return to route directory"),a.a.createElement(H,{currentRoute:n,stepCurrentRouteBackBy:c}),a.a.createElement(E,null,p()(i,(function(e){return!e.isDirectory})).map((function(e,n){var r=e.isDirectory,o=e.name,c=e.to;return r?a.a.createElement(S,{key:n+o,name:o,onClick:function(){return t(o)}}):a.a.createElement(j,{key:n+o,name:o,to:c})}))))},B=function(){var e=Object(s.g)().search;return Object(r.useMemo)((function(){return new URLSearchParams(e).get("tags")}),[e])},J=function(e){return e?e.split("~"):[]},Q=function(e){return e?e.join("~"):""},N=function(){var e=Object(s.f)(),n=J(B()),t=Object(r.useCallback)((function(n){e.push({search:n.length>0?"?".concat("tags","=").concat(Q(n)):""})})),a=Object(r.useCallback)((function(e){var r=e.trim();r&&t([].concat(Object(l.a)(n),[r]))}),[n,t]),o=Object(r.useCallback)((function(){return t([])}),[]),c=Object(r.useCallback)((function(e){return t(n.filter((function(n){return n!==e})))}),[n,o]);return{tagsList:n,addTag:a,clearAllTags:o,removeTag:c}};function Y(){var e=Object(u.a)(["\n  text-decoration: none;\n"]);return Y=function(){return e},e}var U=Object(f.b)(i.b)(Y());function P(){var e=Object(u.a)(["\n  display: block;\n  width: 100%;\n  font-size: 1rem;\n  padding: 0.5rem 0;\n  ",";\n"]);return P=function(){return e},e}var D=Object(f.b)(g)(P(),v);function Z(){var e=Object(u.a)(["\n  padding: 0.5rem;\n  margin: 0.1rem;\n  border: 1px solid black;\n\n  ","\n\n  ","\n"]);return Z=function(){return e},e}var G=Object(f.b)(g)(Z(),(function(e){return e.large&&"\n    font-size: 1rem;\n    padding: 0.75rem;\n    margin: 0.3rem;\n  "}),(function(e){return e.highlight&&"text-decoration: underline"})),W=function(e){var n=e.children,t=e.onClick,r=e.large,o=e.highlight;return a.a.createElement(G,{large:r,highlight:o,onClick:t},o?a.a.createElement("strong",null,n):n)};function z(){var e=Object(u.a)(["\n  margin: 1rem 0;\n"]);return z=function(){return e},e}function K(){var e=Object(u.a)(["\n  display: inline;\n  width: 50%;\n"]);return K=function(){return e},e}function V(){var e=Object(u.a)(["\n  display: block;\n  width: 100%;\n  margin: 1rem 0;\n  font-size: 1.2rem;\n  border: 1px solid black;\n"]);return V=function(){return e},e}function X(){var e=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return X=function(){return e},e}var _=function(e){var n=e.tags,t=e.removeTag;return a.a.createElement($,null,n.map((function(e,n){return a.a.createElement(W,{key:n+e,onClick:function(){return t(e)}},e)})))},$=f.b.section(X()),ee=f.b.input(V()),ne=Object(f.b)(D)(K()),te=f.b.hr(z()),re=function(e){var n=e.tagsList,t=e.addTag,o=e.clearAllTags,c=e.removeTag,i=function(){var e=Object(r.useState)(""),n=Object(d.a)(e,2),t=n[0],a=n[1];return{tagInputText:t,clearTagInputText:Object(r.useCallback)((function(){return a("")}),[a]),updateTagInputText:Object(r.useCallback)((function(e){var n=e.target.value;return a(n)}),[a])}}(),s=i.tagInputText,u=i.clearTagInputText,l=i.updateTagInputText,f=B(),m=f?"?".concat("tags","=").concat(f):"";return a.a.createElement(a.a.Fragment,null,a.a.createElement(ee,{type:"search",value:s,onChange:l,on:!0}),a.a.createElement(ne,{onClick:Object(r.useCallback)((function(){t(s),u()}),[s,t])},"Add Tag"),a.a.createElement(U,{to:"browse-tags".concat(m)},a.a.createElement(ne,null,"Browse Tags")),a.a.createElement(D,{onClick:o},"Clear Tags"),a.a.createElement(_,{tags:n,removeTag:c}),a.a.createElement(te,null))};function ae(){var e=Object(u.a)(["\n  margin: auto;\n  width: 90%;\n"]);return ae=function(){return e},e}var oe=f.b.section(ae()),ce=function(){var e=N(),n=e.tagsList,t=e.addTag,r=e.clearAllTags,o=e.removeTag,c=n.length>0?y.filter((function(e){var t=e.tags;return n.every((function(e){return t.includes(e)}))})):y;return a.a.createElement(oe,null,a.a.createElement(re,{tagsList:n,addTag:t,clearAllTags:r,removeTag:o}),a.a.createElement(E,null,c.map((function(e){var n=e.name,t=e.path;return a.a.createElement(j,{key:t,name:n,to:t})}))))},ie=t(48),se=t.n(ie),ue=t(49);function le(){var e=Object(u.a)(["\n  display: flex;\n  width: 90%;\n  height: 8.2rem;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  ",";\n"]);return le=function(){return e},e}function de(){var e=Object(u.a)(["\n  ",";\n  padding: 0.5rem;\n"]);return de=function(){return e},e}function fe(){var e=Object(u.a)(["\n  margin: 2rem;\n"]);return fe=function(){return e},e}function me(){var e=Object(u.a)(["\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return me=function(){return e},e}var pe=f.b.div(me()),he=f.b.section(fe()),ge=Object(f.b)(g)(de(),v),be=Object(f.b)(g)(le(),v),Ee=function(){var e=function(){var e=Object(r.useState)(se()(ue)),n=Object(d.a)(e,2),t=n[0],a=n[1];return{currentFlashCard:t,nextRandomFlashCard:function(){return a(se()(ue))}}}(),n=e.currentFlashCard,t=(e.nextRandomFlashCard,function(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1];return{shouldShowAnswer:t,setShowAnswer:Object(r.useCallback)((function(){return a(!0)}),[]),setHideAnswer:Object(r.useCallback)((function(){return a(!1)}),[])}}()),o=t.shouldShowAnswer,c=t.setShowAnswer,i=t.setHideAnswer;return a.a.createElement(pe,null,a.a.createElement(he,{dangerouslySetInnerHTML:{__html:n.question}}),a.a.createElement(he,null,o?a.a.createElement(a.a.Fragment,null,a.a.createElement(ge,{onClick:i},"Hide Answer"),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.answer}})):a.a.createElement(be,{onClick:c},a.a.createElement("strong",null,"Show Answer"))))},we=t(10),ve=Object(we.flow)((function(){return Object(we.flatMap)(y,(function(e){return e.tags}))}),(function(e){return Object(we.uniq)(e)}),(function(e){return e.filter(we.identity)}),(function(e){return Object(we.sortBy)(e,we.identity)}));function Oe(){var e=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return Oe=function(){return e},e}function Ce(){var e=Object(u.a)(["\n  padding: 1rem;\n  width: 80%;\n  margin: auto;\n"]);return Ce=function(){return e},e}var Ae=f.b.div(Ce()),ke=f.b.div(Oe()),Re=function(){var e=N(),n=e.tagsList,t=e.addTag,r=e.removeTag,o=n.length>0?"?".concat("tags","=").concat(Q(n)):"";return a.a.createElement(Ae,null,a.a.createElement(U,{to:"tag-explorer".concat(o)},a.a.createElement(D,null,"Search with selected tags")),a.a.createElement(ke,null,ve().map((function(e,o){var c=n.includes(e);return a.a.createElement(W,{key:o+e,large:!0,highlight:c,onClick:function(){return c?r(e):t(e)}},e)}))))},Se=function(){return a.a.createElement(i.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/route-explorer"},a.a.createElement(F,null)),a.a.createElement(s.a,{exact:!0,path:"/tag-explorer"},a.a.createElement(ce,null)),a.a.createElement(s.a,{exact:!0,path:"/flash-cards"},a.a.createElement(Ee,null)),a.a.createElement(s.a,{exact:!0,path:"/browse-tags"},a.a.createElement(Re,null)),y.map((function(e,n){var t=e.path,r=e.content;return a.a.createElement(s.a,{key:n,exact:!0,path:t},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))})),a.a.createElement(s.a,{path:"*"},"Route does not exist")))};c.a.render(a.a.createElement(Se,null),document.getElementById("root"))},30:function(e,n,t){var r=t(181),a=r.IMAGES_JSON_FILE,o=r.isReactApp;e.exports=function(e){var n=c(e);if(!n)throw Error("No image by the name ".concat(e," exists"));return n};var c=function(e){return o?t(183)[e]:t(184)(a)[e]}},49:function(e){e.exports=JSON.parse('[{"question":"<h1 id=\\"question\\">Question</h1>\\n<ol>\\n<li><p>In Javascript Which operation is faster</p>\\n<ul>\\n<li>String concatination</li>\\n</ul>\\n<pre><code> const x = &quot;good&quot;\\n const y = &quot;morning&quot;\\n const result = x + &quot; &quot; + y</code></pre><ul>\\n<li>String interpolation </li>\\n</ul>\\n<pre><code> const x = &quot;good&quot;\\n const y = &quot;morning&quot;\\n const result = `${x} ${y}`</code></pre></li>\\n<li><p>Which is the preferred method</p>\\n</li>\\n</ol>","answer":"<h1 id=\\"answer\\">Answer</h1>\\n<ol>\\n<li>String concatenation is more performant than interpolation by a small margin</li>\\n<li>As the efficiency gain of concatenation is only minor in most cases using interpolation to improve readability would be prefered</li>\\n</ol>"},{"question":"<h1 id=\\"question\\">Question</h1>\\n<p>In PSQL when aliasing is the operator <code>AS</code> required?</p>","answer":"<h1 id=\\"question\\">Question</h1>\\n<p>No, the following two examples are just as valid</p>\\n<pre><code>select tb.id as member_id from (\\n select member_id as id from member\\n) as tb</code></pre><pre><code>select tb.id member_id from (\\n select member_id id from member\\n) tb</code></pre>"},{"question":"<h1 id=\\"question\\">Question</h1>\\n<p>In PSQL how do you concatenate the values from two columns?</p>","answer":"<h1 id=\\"answer\\">Answer</h1>\\n<p>By using the string concatenation operator <code>||</code></p>\\n<p>This requires at least one of the values to be a string</p>\\n<pre><code>SELECT first_name || last_name AS full_name FROM people;</code></pre><pre><code>SELECT first_name || &quot; - &quot; ||  age AS person_with_age FROM people;</code></pre>"},{"question":"<h1 id=\\"question\\">Question</h1>\\n<p>In PSQL what is the difference between <code>limit</code> and <code>fetch</code>?</p>","answer":"<h1 id=\\"answer\\">Answer</h1>\\n<p>There is no performance difference between the two. The only difference is syntactic.\\nFetch is included to as it is apart of the SQL standard.</p>\\n<p>For more details view <a href=\\"../raw-notes/database/psql/returning-a-set-amount-of-results.md\\">returning-a-set-amount-of-results.md</a></p>"},{"question":"<h1 id=\\"question\\">Question</h1>\\n<p>In PSQL when using the operator <code>LIKE</code> What two characters are used to create patterns to match against and what does each do.</p>","answer":"<h1 id=\\"answer\\">Answer</h1>\\n<ul>\\n<li><p><code>%</code>: match against 0 or more characters</p>\\n</li>\\n<li><p><code>_</code>: match against a single character</p>\\n</li>\\n</ul>"},{"question":"<h1 id=\\"question\\">Question</h1>\\n<p>In PSQL what is the difference between <code>LIKE</code> and <code>ILIKE</code></p>","answer":"<h1 id=\\"answer\\">Answer</h1>\\n<ul>\\n<li><code>LIKE</code> is a case sensitive matcher</li>\\n<li><code>ILIKE</code> is a case insensitive matcher</li>\\n</ul>"}]')},72:function(e,n){var t=function(e,n){return e.length<=n.length},r=function(e,n){return e.every((function(e,t){return e===n[t]}))};e.exports=function(e,n){return e.length<=0?n:n.filter((function(n){var a=n.pathSegments;return t(e,a)&&r(e,a)}))}},73:function(e,n,t){var r=t(10),a=r.uniqBy,o=r.flow;e.exports=o((function(e,n){return e.map((function(e){var t=e.name,r=e.pathSegments,a=e.path,o=n<r.length-1;return o?{isDirectory:o,name:r[n]}:{isDirectory:o,name:t,to:a}}))}),(function(e){return a(e,"name")}))},76:function(e,n,t){e.exports=t(188)},9:function(e){e.exports=JSON.parse('[{"path":"/database/psql/returning-a-set-amount-of-results","content":"<h1 id=\\"returning-a-set-amount-of-results\\">Returning a Set Amount of Results</h1>\\n<p>In psql the two ways to return a specific number of results</p>\\n<p><code>limit</code> and <code>fetch</code></p>\\n<h2 id=\\"use-of-limit\\">Use of Limit</h2>\\n<p><code>SELECT * FROM table ORDER BY id LIMIT 100</code>\\n<code>SELECT * FROM table ORDER BY id LIMIT 100 OFFSET 50</code></p>\\n<h2 id=\\"use-of-fetch\\">Use of Fetch</h2>\\n<p><code>SELECT * FROM table ORDER BY id FETCH NEXT 100 ROWS ONLY</code>\\n<code>SELECT * FROM table ORDER BY id OFFSET 50 FETCH NEXT 100 ROWS ONLY</code></p>\\n<h2 id=\\"what-is-the-difference\\">What is the difference</h2>\\n<p>There is no performance difference between the two. The only difference is syntactic.</p>\\n<h1 id=\\"references\\">References</h1>\\n<p><a href=\\"http://www.postgresqltutorial.com/postgresql-fetch/\\">postgresql-fetch (http://www.postgresqltutorial.com)</a>\\n<a href=\\"https://www.postgresql.org/docs/10/sql-fetch.html\\">sql-fetch (www.postgresql.org)</a>\\n<a href=\\"https://docs.snowflake.net/manuals/sql-reference/constructs/limit.html\\">LIMIT / FETCH (docs.snowflake.net)</a></p>\\n<p>|-/|Tags|-/|-psql,postgres,database,pagination,limit,fetch,offset-|-/|Tags|-/|</p>","pathSegments":["database","psql","returning-a-set-amount-of-results"],"name":"Returning A Set Amount Of Results","tags":["psql","postgres","database","pagination","limit","fetch","offset"],"lastModified":"2019-10-16"},{"path":"/database/psql/the-like-operator","content":"<h1 id=\\"the-like-operator\\">The LIKE operator</h1>\\n<p>This operator performs queries using patterns to match against a range of results</p>\\n<p><code>%</code> - matches any sequence of characters\\n<code>_</code> - matches any single character</p>\\n<p><code>SELECT * FROM table WHERE text LIKE &#39;_search_&#39;</code>\\n<code>SELECT * FROM table WHERE text LIKE &#39;text-%&#39;</code></p>\\n<h2 id=\\"ilike\\">ILIKE</h2>\\n<p><code>ILIKE</code> can be used in the same way as <code>LIKE</code> only it match is case insensitive.</p>\\n<p>|-/|Tags|-/|-psql,postgres,database,like,pattern,match-|-/|Tags|-/|</p>\\n<h1 id=\\"references\\">References</h1>\\n<p><a href=\\"http://www.postgresqltutorial.com/postgresql-like/\\">postgresql-like (http://www.postgresqltutorial.com/postgresql-like/)</a></p>","pathSegments":["database","psql","the-like-operator"],"name":"The Like Operator","tags":["psql","postgres","database","like","pattern","match"],"lastModified":"2019-10-16"},{"path":"/database/psql/window-functions","content":"\x3c!-- TOC --\x3e\\n\\n<ul>\\n<li><a href=\\"#window-functions\\">Window Functions</a></li>\\n</ul>\\n\x3c!-- /TOC --\x3e\\n\\n\\n<h1 id=\\"window-functions\\">Window Functions</h1>\\n<p>|-/|Tags|-/|-psql,postgres,database,-|-/|Tags|-/|</p>","pathSegments":["database","psql","window-functions"],"name":"Window Functions","tags":["psql","postgres","database",""],"lastModified":"2019-10-16"}]')}},[[76,1,2]]]);
//# sourceMappingURL=main.b410fcb2.chunk.js.map