(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[536],{97:function(e,t,n){!function(e){"use strict";e.defineMode("ruby",(function(t){function n(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0;return t}var r,i=n(["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"]),a=n(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),o=n(["end","until"]),u={"[":"]","{":"}","(":")"},f={"]":"[","}":"{",")":"("};function l(e,t,n){return n.tokenize.push(e),e(t,n)}function s(e,t){if(e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(k),"comment";if(e.eatSpace())return null;var n,i,a,o=e.next();if("`"==o||"'"==o||'"'==o)return l(p(o,"string",'"'==o||"`"==o),e,t);if("/"==o)return function(e){for(var t,n=e.pos,r=0,i=!1,a=!1;null!=(t=e.next());)if(a)a=!1;else{if("[{(".indexOf(t)>-1)r++;else if("]})".indexOf(t)>-1){if(--r<0)break}else if("/"==t&&0==r){i=!0;break}a="\\"==t}return e.backUp(e.pos-n),i}(e)?l(p(o,"string-2",!0),e,t):"operator";if("%"==o){var f="string",s=!0;e.eat("s")?f="atom":e.eat(/[WQ]/)?f="string":e.eat(/[r]/)?f="string-2":e.eat(/[wxq]/)&&(f="string",s=!1);var d=e.eat(/[^\w\s=]/);return d?(u.propertyIsEnumerable(d)&&(d=u[d]),l(p(d,f,s,!0),e,t)):"operator"}if("#"==o)return e.skipToEnd(),"comment";if("<"==o&&(n=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return l((i=n[2],a=n[1],function(e,t){return a&&e.eatSpace(),e.match(i)?t.tokenize.pop():e.skipToEnd(),"string"}),e,t);if("0"==o)return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(o))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"==o){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}if(":"==o)return e.eat("'")?l(p("'","atom",!1),e,t):e.eat('"')?l(p('"',"atom",!0),e,t):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator";if("@"==o&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"variable-2";if("$"==o)return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variable-3";if(/[a-zA-Z_\xa1-\uffff]/.test(o))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"ident";if("|"!=o||!t.varList&&"{"!=t.lastTok&&"do"!=t.lastTok){if(/[\(\)\[\]{}\\;]/.test(o))return r=o,null;if("-"==o&&e.eat(">"))return"arrow";if(/[=+\-\/*:\.^%<>~|]/.test(o)){var c=e.eatWhile(/[=+\-\/*:\.^%<>~|]/);return"."!=o||c||(r="."),"operator"}return null}return r="|",null}function d(e){return e||(e=1),function(t,n){if("}"==t.peek()){if(1==e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);n.tokenize[n.tokenize.length-1]=d(e-1)}else"{"==t.peek()&&(n.tokenize[n.tokenize.length-1]=d(e+1));return s(t,n)}}function c(){var e=!1;return function(t,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)):(e=!0,s(t,n))}}function p(e,t,n,r){return function(i,a){var o,u=!1;for("read-quoted-paused"===a.context.type&&(a.context=a.context.prev,i.eat("}"));null!=(o=i.next());){if(o==e&&(r||!u)){a.tokenize.pop();break}if(n&&"#"==o&&!u){if(i.eat("{")){"}"==e&&(a.context={prev:a.context,type:"read-quoted-paused"}),a.tokenize.push(d());break}if(/[@\$]/.test(i.peek())){a.tokenize.push(c());break}}u=!u&&"\\"==o}return t}}function k(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}return{startState:function(){return{tokenize:[s],indented:0,context:{type:"top",indented:-t.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){r=null,e.sol()&&(t.indented=e.indentation());var n,u=t.tokenize[t.tokenize.length-1](e,t),f=r;if("ident"==u){var l=e.current();"keyword"==(u="."==t.lastTok?"property":i.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(l)?"tag":"def"==t.lastTok||"class"==t.lastTok||t.varList?"def":"variable")&&(f=l,a.propertyIsEnumerable(l)?n="indent":o.propertyIsEnumerable(l)?n="dedent":"if"!=l&&"unless"!=l||e.column()!=e.indentation()?"do"==l&&t.context.indented<t.indented&&(n="indent"):n="indent")}return(r||u&&"comment"!=u)&&(t.lastTok=f),"|"==r&&(t.varList=!t.varList),"indent"==n||/[\(\[\{]/.test(r)?t.context={prev:t.context,type:r||u,indented:t.indented}:("dedent"==n||/[\)\]\}]/.test(r))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine="\\"==r||"operator"==u),u},indent:function(n,r){if(n.tokenize[n.tokenize.length-1]!=s)return e.Pass;var i=r&&r.charAt(0),a=n.context,o=a.type==f[i]||"keyword"==a.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(r);return a.indented+(o?0:t.indentUnit)+(n.continuedLine?t.indentUnit:0)},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-ruby","ruby")}(n(39))}}]);
//# sourceMappingURL=536.c1286828.chunk.js.map