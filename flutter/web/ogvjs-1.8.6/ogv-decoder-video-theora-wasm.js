
var OGVDecoderVideoTheoraW = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(OGVDecoderVideoTheoraW) {
  OGVDecoderVideoTheoraW = OGVDecoderVideoTheoraW || {};


var a;a||(a=typeof OGVDecoderVideoTheoraW !== 'undefined' ? OGVDecoderVideoTheoraW : {});var ca=Object.assign,da,l;a.ready=new Promise(function(b,c){da=b;l=c});var ea=a,fa=ca({},a),ha="object"===typeof window,m="function"===typeof importScripts,t="",y,B,C,fs,D,E;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=m?require("path").dirname(t)+"/":__dirname+"/",E=function(){D||(fs=require("fs"),D=require("path"))},y=function(b,c){E();b=D.normalize(b);return fs.readFileSync(b,c?null:"utf8")},C=function(b){b=y(b,!0);b.buffer||(b=new Uint8Array(b));return b},B=function(b,c,e){E();b=D.normalize(b);fs.readFile(b,function(d,f){d?e(d):c(f.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),
process.on("unhandledRejection",function(b){throw b;}),a.inspect=function(){return"[Emscripten Module object]"};else if(ha||m)m?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),_scriptDir&&(t=_scriptDir),0!==t.indexOf("blob:")?t=t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1):t="",y=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},m&&(C=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);
c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),B=function(b,c,e){var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)};a.print||console.log.bind(console);var H=a.printErr||console.warn.bind(console);ca(a,fa);fa=null;var I;a.wasmBinary&&(I=a.wasmBinary);var noExitRuntime=a.noExitRuntime||!0;"object"!==typeof WebAssembly&&J("no native wasm support detected");
var K,ia=!1,ja,L;function ka(){var b=K.buffer;ja=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=new Int32Array(b);a.HEAPU8=L=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=new Float32Array(b);a.HEAPF64=new Float64Array(b)}var la,ma=[],na=[],oa=[];function pa(){var b=a.preRun.shift();ma.unshift(b)}var P=0,Q=null,R=null;a.preloadedImages={};a.preloadedAudios={};
function J(b){if(a.onAbort)a.onAbort(b);b="Aborted("+b+")";H(b);ia=!0;b=new WebAssembly.RuntimeError(b+". Build with -s ASSERTIONS=1 for more info.");l(b);throw b;}function qa(){return S.startsWith("data:application/octet-stream;base64,")}var S;S="ogv-decoder-video-theora-wasm.wasm";if(!qa()){var ra=S;S=a.locateFile?a.locateFile(ra,t):t+ra}function sa(){var b=S;try{if(b==S&&I)return new Uint8Array(I);if(C)return C(b);throw"both async and sync fetching of the wasm failed";}catch(c){J(c)}}
function ta(){if(!I&&(ha||m)){if("function"===typeof fetch&&!S.startsWith("file://"))return fetch(S,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+S+"'";return b.arrayBuffer()}).catch(function(){return sa()});if(B)return new Promise(function(b,c){B(S,function(e){b(new Uint8Array(e))},c)})}return Promise.resolve().then(function(){return sa()})}
function T(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var e=c.A;"number"===typeof e?void 0===c.o?ua(e)():ua(e)(c.o):e(void 0===c.o?null:c.o)}}}var U=[];function ua(b){var c=U[b];c||(b>=U.length&&(U.length=b+1),U[b]=c=la.get(b));return c}
var Ga={a:function(b,c,e){L.copyWithin(b,c,c+e)},b:function(b){var c=L.length;b>>>=0;if(2147483648<b)return!1;for(var e=1;4>=e;e*=2){var d=c*(1+.2/e);d=Math.min(d,b+100663296);d=Math.max(b,d);0<d%65536&&(d+=65536-d%65536);a:{try{K.grow(Math.min(2147483648,d)-ja.byteLength+65535>>>16);ka();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},c:function(b,c,e,d,f,g,q,n,z,p,u,F,M,N,Z,aa){function ba(A,h,v,va,wa,xa,Ia,Ja,O){A.set(new Uint8Array(Ka,h,v*va));var w,r;for(w=r=0;w<xa;w++,r+=v)for(h=
0;h<v;h++)A[r+h]=O;for(;w<xa+Ja;w++,r+=v){for(h=0;h<wa;h++)A[r+h]=O;for(h=wa+Ia;h<v;h++)A[r+h]=O}for(;w<va;w++,r+=v)for(h=0;h<v;h++)A[r+h]=O;return A}var Ka=K.buffer,k=a.videoFormat,ya=(M&-2)*z/q,za=(N&-2)*p/n,Aa=u*z/q,Ba=F*p/n;u===k.cropWidth&&F===k.cropHeight&&(Z=k.displayWidth,aa=k.displayHeight);for(var Ca=a.recycledFrames,x,Da=n*c,Ea=p*d,Fa=p*g;0<Ca.length;){var G=Ca.shift();k=G.format;if(k.width===q&&k.height===n&&k.chromaWidth===z&&k.chromaHeight===p&&k.cropLeft===M&&k.cropTop===N&&k.cropWidth===
u&&k.cropHeight===F&&k.displayWidth===Z&&k.displayHeight===aa&&G.y.bytes.length===Da&&G.u.bytes.length===Ea&&G.v.bytes.length===Fa){x=G;break}}x||(x={format:{width:q,height:n,chromaWidth:z,chromaHeight:p,cropLeft:M,cropTop:N,cropWidth:u,cropHeight:F,displayWidth:Z,displayHeight:aa},y:{bytes:new Uint8Array(Da),stride:c},u:{bytes:new Uint8Array(Ea),stride:d},v:{bytes:new Uint8Array(Fa),stride:g}});ba(x.y.bytes,b,c,n,M,N,u,F,0);ba(x.u.bytes,e,d,p,ya,za,Aa,Ba,128);ba(x.v.bytes,f,g,p,ya,za,Aa,Ba,128);
a.frameBuffer=x},d:function(b,c,e,d,f,g,q,n,z,p,u){a.videoFormat={width:b,height:c,chromaWidth:e,chromaHeight:d,cropLeft:n,cropTop:z,cropWidth:g,cropHeight:q,displayWidth:p,displayHeight:u,fps:f};a.loadedMetadata=!0}};
(function(){function b(f){a.asm=f.exports;K=a.asm.e;ka();la=a.asm.n;na.unshift(a.asm.f);P--;a.monitorRunDependencies&&a.monitorRunDependencies(P);0==P&&(null!==Q&&(clearInterval(Q),Q=null),R&&(f=R,R=null,f()))}function c(f){b(f.instance)}function e(f){return ta().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(f,function(g){H("failed to asynchronously prepare wasm: "+g);J(g)})}var d={a:Ga};P++;a.monitorRunDependencies&&a.monitorRunDependencies(P);if(a.instantiateWasm)try{return a.instantiateWasm(d,
b)}catch(f){return H("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return I||"function"!==typeof WebAssembly.instantiateStreaming||qa()||S.startsWith("file://")||"function"!==typeof fetch?e(c):fetch(S,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(c,function(g){H("wasm streaming compile failed: "+g);H("falling back to ArrayBuffer instantiation");return e(c)})})})().catch(l);return{}})();
a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.f).apply(null,arguments)};a._ogv_video_decoder_init=function(){return(a._ogv_video_decoder_init=a.asm.g).apply(null,arguments)};a._ogv_video_decoder_async=function(){return(a._ogv_video_decoder_async=a.asm.h).apply(null,arguments)};a._ogv_video_decoder_process_header=function(){return(a._ogv_video_decoder_process_header=a.asm.i).apply(null,arguments)};
a._ogv_video_decoder_process_frame=function(){return(a._ogv_video_decoder_process_frame=a.asm.j).apply(null,arguments)};a._ogv_video_decoder_destroy=function(){return(a._ogv_video_decoder_destroy=a.asm.k).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.l).apply(null,arguments)};a._free=function(){return(a._free=a.asm.m).apply(null,arguments)};var V;R=function Ha(){V||La();V||(R=Ha)};
function La(){function b(){if(!V&&(V=!0,a.calledRun=!0,!ia)){T(na);da(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();oa.unshift(c)}T(oa)}}if(!(0<P)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)pa();T(ma);0<P||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=La;
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();La();var W,Ma,X;"undefined"===typeof performance||"undefined"===typeof performance.now?X=Date.now:X=performance.now.bind(performance);function Y(b){var c=X();b=b();a.cpuTime+=X()-c;return b}a.loadedMetadata=!!ea.videoFormat;a.videoFormat=ea.videoFormat||null;a.frameBuffer=null;a.cpuTime=0;Object.defineProperty(a,"processing",{get:function(){return!1}});
a.init=function(b){Y(function(){a._ogv_video_decoder_init()});b()};a.processHeader=function(b,c){var e=Y(function(){var d=b.byteLength;W&&Ma>=d||(W&&a._free(W),Ma=d,W=a._malloc(Ma));var f=W;(new Uint8Array(K.buffer,f,d)).set(new Uint8Array(b));return a._ogv_video_decoder_process_header(f,d)});c(e)};a.s=[];
a.processFrame=function(b,c){function e(n){a._free(g);c(n)}var d=a._ogv_video_decoder_async(),f=b.byteLength,g=a._malloc(f);d&&a.s.push(e);var q=Y(function(){(new Uint8Array(K.buffer,g,f)).set(new Uint8Array(b));return a._ogv_video_decoder_process_frame(g,f)});d||e(q)};a.close=function(){};a.sync=function(){a._ogv_video_decoder_async()&&(a.s.push(function(){}),Y(function(){a._ogv_video_decoder_process_frame(0,0)}))};a.recycledFrames=[];
a.recycleFrame=function(b){var c=a.recycledFrames;c.push(b);16<c.length&&c.shift()};


  return OGVDecoderVideoTheoraW.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoTheoraW;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return OGVDecoderVideoTheoraW; });
else if (typeof exports === 'object')
  exports["OGVDecoderVideoTheoraW"] = OGVDecoderVideoTheoraW;
