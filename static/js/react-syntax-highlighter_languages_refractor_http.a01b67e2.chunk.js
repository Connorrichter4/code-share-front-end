(this["webpackJsonpsnippet-app"]=this["webpackJsonpsnippet-app"]||[]).push([[56],{255:function(t,a,e){"use strict";function p(t){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var a,e=t.languages,p={"application/javascript":e.javascript,"application/json":e.json||e.javascript,"application/xml":e.xml,"text/xml":e.xml,"text/html":e.html,"text/css":e.css},n={"application/json":!0,"application/xml":!0};function s(t){var a=t.replace(/^[a-z]+\//,"");return"(?:"+t+"|"+("\\w+/(?:[\\w.-]+\\+)+"+a+"(?![+\\w.-])")+")"}for(var i in p)if(p[i]){a=a||{};var r=n[i]?s(i):i;a[i]={pattern:RegExp("(content-type:\\s*"+r+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:p[i]}}}a&&t.languages.insertBefore("http","header-name",a)}(t)}t.exports=p,p.displayName="http",p.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_http.a01b67e2.chunk.js.map