(function(){var g=void 0,h=true,i=null,j=false,l,m=this;function aa(a,b){function c(){}c.prototype=b.prototype;a.ha=b.prototype;a.prototype=new c;a.prototype.constructor=a};function n(a,b){var c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}function ba(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function ca(a,b){var c="",d=da(encodeURIComponent(a));d.splice(b||5,d.length);p(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function da(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,o=3285377520,r=[],k,w,u,G,H,U=Math.ceil((a.length/4+2)/16),N=[U],z=0,s;z<U;z++){N[z]=[];for(k=0;k<16;k++)N[z][k]=a.charCodeAt(z*64+k*4)<<24|a.charCodeAt(z*64+k*4+1)<<16|a.charCodeAt(z*64+k*4+2)<<8|a.charCodeAt(z*64+k*4+3)}z=(a.length-1)*8;a=U-1;N[a][14]=Math.floor(z/Math.pow(2,32));N[a][15]=z&4294967295;for(z=0;z<U;z++){for(s=0;s<16;s++)r[s]=N[z][s];
for(s=16;s<80;s++)r[s]=(r[s-3]^r[s-8]^r[s-14]^r[s-16])<<1|(r[s-3]^r[s-8]^r[s-14]^r[s-16])>>>31;a=c;k=d;w=e;u=f;G=o;for(s=0;s<80;s++)H=Math.floor(s/20),H=(a<<5|a>>>27)+(H==0?k&w^~k&u:H==1?k^w^u:H==2?k&w^k&u^w&u:k^w^u)+G+b[H]+r[s]&4294967295,G=u,u=w,w=k<<30|k>>>2,k=a,a=H;c=c+a&4294967295;d=d+k&4294967295;e=e+w&4294967295;f=f+u&4294967295;o=o+G&4294967295}return[c,d,e,f,o]}
function ea(a){var b=m.navigator,c=m.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];p(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=m.performance;d=d.concat([b&&b.now?b.now():"",document.title,m.location.href,q(),ba()]);return d.concat(a||[]).join()}function t(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}
function v(a){return typeof a!=="undefined"}function x(a){return a.replace(/^www\./,"")}function y(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function A(a){return typeof a==="number"}function B(a){return typeof a==="string"}function C(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function q(){return(new Date).getTime()}
function p(a,b){if((!!a&&a.constructor===Object)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===j)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===j)break}}function fa(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}
function ga(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var f=0,o=a.length;f<=o;f++)c[0][f]=f;for(var r,k,w,d=1;d<=e;d++)for(f=1;f<=o;f++)r=d-1,k=f-1,w=c[r][k],b.charAt(r)==a.charAt(k)?c[d][f]=w:(k=c[d][k]+1,r=c[r][f]+1,w+=2,c[d][f]=Math.min(k,r,w));return c[b.length][a.length]}var ha;function ia(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace("+"," "),p(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function ja(a,b){var c="",d=m.location.href.split("?");if(d.length){var d=ia(d[1]),e=b||a;d[e]&&(c=d[e])}return c}function ka(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function la(a){var b=[];p(ma,function(c){var d=a[c];v(d)&&(Object.prototype.toString.call(d)==="[object Array]"?p(d,function(a){b.push(c+"="+a)}):d&&d.constructor===Object?p(d,function(a,c){b.push(c+"="+a)}):((d+"").length||c=="r")&&b.push(c+"="+d))});b.push("_");return b.join("&")}
function D(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=m.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=ka(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",f);a=f===-1?"/"+a:e.substr(0,f)+"/"+
a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(ka(b.protocol,b.port)||b.port==="0")b.port="";return b}
function E(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function F(a,b,c){a[b]=a[b]||c}function na(a){p(document.getElementsByTagName("script"),function(b){if(b.src.match(/chartbeat.js/))return b=ia(b.src.split("?")[1]),F(a,"uid",b.uid),F(a,"domain",b.domain),j})}function I(a,b){return a[b]?encodeURIComponent(a[b]):""}function oa(a){var b={};p(a,function(a,d){d.charAt(0)=="_"&&(b[d]=a)});return b};var J={};J.q=function(a){var b=m._sf_async_config;if(!a&&b&&b.noCookies)return i;if(J.q.la!==g)return J.q.la;var a=q()+"",c,d;try{if((d=m.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return J.q.la=d}catch(e){}return J.q.la=i};J.k=function(a){var b=J.q();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&q()>c)?(J.remove(a),""):b.getItem(a)||""};
J.create=function(a,b,c){var d=J.q();if(d){var e=new Date;e.setTime(q()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};J.remove=function(a){var b=J.q();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function pa(){var a=document.createElement("script");a.async=h;a.src=(m.location.protocol||"http:")+"//static.chartbeat.com/js/inpage.js";var b=document.getElementsByTagName("head");b&&b.length&&b[0].appendChild(a)}function qa(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=J.q(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),pa())}};function ra(a){var b,c;b="pageYOffset";c="scrollTop";if(a){var d,e;d=d||"*";e=e||document;if("querySelectorAll"in e)a=e.querySelectorAll(d+"[data-cb-scroll-element]");else{a=[];d=e.getElementsByTagName(d);for(e=d.length;e--;)d[e].getAttribute("data-cb-scroll-element")&&a.push(d[e])}if(a&&a.length)return a[0][c]}if(A(m[b]))return m[b];else if(document.body&&document.body[c])return document.body[c];else if(document.documentElement[c])return document.documentElement[c];return 0}
function sa(){var a=document,a=a[a.compatMode==="CSS1Compat"?"documentElement":"body"].clientHeight||0;window.innerHeight&&(a=Math.min(window.innerHeight,a));return a}function K(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function ta(a,b,c){var d=a.ownerDocument.documentElement,e=0,f=v(c)?c+1:-1;B(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return i}
function ua(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function va(a){a=a||window.event;return!a?i:ta(a.target||a.srcElement,ua,10)};var L={},wa=1;function M(a,b,c){wa++;L[a]=L[a]||{};L[a][wa]=[b,c];return wa}function O(a){if(B(a))L[a]=g,delete L[a];else if(A(a)){var b=h;p(L,function(c){p(c,function(d,e){if(parseInt(e,10)===a)return c[e]=g,delete c[e],b=j});return b})}}function P(a,b){if(L[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];p(L[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};var Q={};
Q.B=function(){Q.ma?Q.da("pageload"):(Q.Sa=[{target:m,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:m,event:"resize"},{target:document.body,event:"mousedown"}],Q.ia=i,Q.wa=j,Q.Q=i,Q.Ga={},p(Q.Sa,function(a){var b=a.event;y(a.target,b,function(a){Q.da.call(Q,b,a)})}),M("f",function(){Q.da("focus")}),Q.da("pageload"),y(document.body,"click",function(a){(a=va(a))&&P("c",a)},h),y(document.body,"contextmenu",function(a){(a=va(a))&&P("r",a)}),Q.ma=
h)};Q.Xa=function(){var a,b=Q.Ga.keydown;if(b===g)return j;b=q()-b;return b<=(a||15E3)&&b>=0};Q.Aa=100;Q.da=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}Q.zb(a);Q.ia===i?Q.Oa():Q.wa=h};Q.zb=function(a){Q.Ga[a]=q()};Q.Oa=function(){Q.ia=m.setTimeout(Q.ab,Q.Aa);P("a");Q.Q!==i&&m.clearTimeout(Q.Q);Q.Q=m.setTimeout(function(){P("i");m.clearTimeout(Q.Q);Q.Q=i},5E3+Q.Aa)};
Q.ab=function(){m.clearTimeout(Q.ia);Q.ia=i;if(Q.wa)Q.wa=j,Q.Oa()};var xa,ya,R,za,Aa;(function(){var a,b;p(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof m.document[a]==="boolean")return b=c,j});b!==g&&(za=a,Aa=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),R=b+"visibilitychange")})();var S=j;function Ba(){S=Aa&&m.document[Aa]==="prerender"?h:j}function Ca(){ya=h;P("f")}function Da(){ya=j;P("b")}
function Ea(a,b,c){m.addEventListener?m.addEventListener(a,c,j):m.document.attachEvent&&m.document.attachEvent(b,c)}function Fa(){var a=h;m.document.hasFocus&&(a=m.document.hasFocus());var b=j;za&&(b=m.document[za]);return a&&!b}function Ga(){Fa()?Ca():Da()}function Ha(a){Ba();if(S){var b=j,c=function(){b||(Ba(),S||(b=h,a(),m.window.setTimeout(function(){m.document.removeEventListener(R,c,j)},100)))};m.document.addEventListener(R,c,j)}else a()};function Ia(){this.a=m._sf_async_config||{};this.$=t(this.Ka,this)}Ia.prototype.B=function(){this.La=0};Ia.prototype.Ka=function(){};var T={};T.$a=function(){try{T.create("_cb_test","1",1);var a=T.k("_cb_test");T.remove("_cb_test");return a==="1"}catch(b){return j}};T.k=function(a){a+="=";var b="";p(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),j});return b};
T.create=function(a,b,c){var d=m._sf_async_config;if(d&&d.noCookies)return"";d=new Date;d.setTime(q()+c*1E3);a=a+"="+b+("; expires="+d.toGMTString())+"; path=/";return document.cookie=a};T.remove=function(a){return T.k(a)?T.create(a,"",-86400):""};function Ja(a){this.fa=a||"";this.bb=J.q()!==i||T.$a();this.va=j;Ka(this)}l=Ja.prototype;l.isSupported=function(){return this.bb};
function Ka(a){if(!T.k("_cb_ls")){var b=J.q()!==i,c=T.k("_SUPERFLY_nosample");c&&p(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_nosample",c,600,h)});var d=T.k("_chartbeat3");d&&(a.create("_v__chartbeat3",d,2592E3,h),T.remove("_chartbeat3"));b&&((b=T.k("_chartbeat2"))&&a.create("_chartbeat2",b,94608E3,h),(b=T.k("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,94608E3,h),(b=T.k("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));T.create("_cb_ls","1",2592E3)}}
l.create=function(a,b,c,d){a=d?a:this.fa+a;(J.q()?J:T).create(a,b,c);J.q()&&T.create(a,b,c)};l.update=function(a,b,c,d,e,f,o){a=d?a:this.fa+a;e=B(e)?e:"::";d=(d=this.k(a,h))?d.split(e):[];if(o&&d.length){var r=o(b),k=fa(d,function(a){return o(a)===r});k!==-1&&d.splice(k,1)}A(f)&&d.length>=f&&d.splice(0,d.length-f+1);d.push(b);this.create(a,d.join(e),c,h)};
l.k=function(a,b){var a=b?a:this.fa+a,c=(J.q()?J:T).k(a);if(!c&&J.q()&&(c=T.k(a))&&T.k("_cb_ls")){this.va=h;var d;switch(a){case "_SUPERFLY_nosample":d=600;break;case "_chartbeat4":d=3600;break;case "_cb_cp":d=3600;break;case "_chartbeat3":d=2592E3;break;default:d=94608E3}J.create(a,c,d)}return c};l.remove=function(a,b){a=b?a:this.fa+a;(J.q()?J:T).remove(a);J.q()&&T.remove(a)};function La(a){var b=i;if(a&&(b=Ma()))return b;var c=m.location,b=V(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));return b+a}function Ma(){var a=i;p(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return b=D(b.href),a=V(b.pathname)+b.search+b.hash,j});return a}
for(var Na={},Oa=0;Oa<81;Oa++)Na["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Oa)]=h;function Pa(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return Na[c]?String.fromCharCode(c):"%"+b.toUpperCase()}function V(a){if(!B(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Pa);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};var W={Ua:{IDLE:0,Cb:1,Bb:2,Ta:3},F:0};W.B=function(){if(!W.ma)M("a",W.fb,W),M("i",W.ib,W),M("f",W.hb,W),M("b",W.gb,W),W.ma=h};W.eb=function(){return W.F};W.fb=function(){W.F===1?W.H(3):W.F===0&&W.H(2)};W.ib=function(){W.F===3?W.H(1):W.F===2&&W.H(0)};W.hb=function(){(W.F===0||W.F===2)&&W.H(3)};W.gb=function(){W.F===3?W.H(2):W.F===1&&W.H(0)};W.H=function(a){W.F=a;P("s",a)};function X(a,b){this.Ea=a||g;this.Ja=b||g;this.S=this.N=0}X.prototype.B=function(){this.S=this.N=0;this.Z=i;this.wb=M("s",this.Fa,this);this.Fa(W.eb())};X.prototype.Fa=function(a){m.clearInterval(this.Z);this.Z=i;if(a===W.Ua.Ta)this.Z=m.setInterval(t(this.lb,this),1E3)};X.prototype.lb=function(){if(this.Ea===g||this.Ea())this.N++,this.S++,this.Ja&&this.Ja()};X.prototype.terminate=function(){m.clearInterval(this.Z);this.Z=i;O(this.wb)};function Y(){Ia.call(this);this.O=[];this.D=new Ja(this.xb);this.G=new X;this.sb=t(this.ea,this);y(m,"unload",this.sb);Ha(t(this.B,this))}aa(Y,Ia);l=Y.prototype;l.ta=h;
l.B=function(){Y.ha.B.call(this);this.ba=this.M=0;this.Y=q();this.Na=ca(Qa(this));var a=(this.D.k("_chartbeat2",h)||"").split("."),b=q(),c=b-+(a[1]||0);b-=+(a[2]||0);this.ob=a[0]&&c>18E5&&b<2592E6?0:1;this.sa=h;this.ca=72E5;if(this.ta&&(a=+this.a.sessionLength,!isNaN(a)))this.ca=a*6E4;a=(this.D.k("_chartbeat2",h)||"").split(".");a.length>4&&(a=[]);var c=q(),d="1",e=a&&+a[2],b=a&&a[3];if(a&&e&&b)if(d=Math.abs((C(c)-C(e))/864E5)){d=Math.min(d,16)-1;for(e="";d--;)e+=0;d=(b+e+"1").slice(-16)}else d=b;
b=d;a[0]||(a[0]=this.a.utoken||ca(Qa(this),3),a[1]=c);a[2]=c;a[3]=b;this.ja=a[0];this.tb=a.join(".");this.D.create("_chartbeat2",this.tb,94608E3,h);this.a.utoken=this.ja;var f;c=+a[1];b=+a[2];if((a=a[3])&&c&&b)f=(Math.min((Math.abs((C(b)-C(c))/864E5)||0)+1,16,a.length)-1).toString(16),f+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.Da=f;this.G.B();W.B();Q.B();xa||(ya=Fa(),R&&m.document.addEventListener&&m.document.addEventListener(R,Ga,j),Ea("focus","onfocusin",Ca),Ea("blur","onfocusout",Da),
ya&&Ca(),xa=h);this.T=0;this.Wa=M("a",this.pb,this)};function Ra(a){if(!a.D.k("_SUPERFLY_nosample")&&!S)a.nb?a.ga():(a.nb=h,!m._sf_async_config&&!m._cbq?(a.qa=t(a.ga,a),y(m,"load",a.qa)):a.ga())}l.ga=function(){var a=m._sf_startpt,b=m._sf_endpt;if(A(a))this.ra=A(b)?b-a:q()-a;Q.B();this.na=setInterval(t(this.U,this),15E3);this.U()};
l.U=function(){var a=this.G.S,a=this.a.reading&&+this.a.reading||a>0;if(this.ba<this.M&&!a)this.ba++;else{var b;if(ha===g)b=m.navigator.userAgent,ha=b.indexOf("AppleWebKit")>0&&b.indexOf("FBIOS")>0;b=ha;b&&!a?this.ba++:(a?this.M=0:Sa(this),this.ba=0,this.O.push(0),this.O.length>18&&this.O.shift(),this.ta&&q()-this.Y>=this.ca?this.terminate():this.X())}};
l.Ka=function(){this.O.push(1);var a=0;p(this.O,function(b){a+=b});a<3?(this.sa=h,Sa(this)):(this.terminate(),this.D.create("_SUPERFLY_nosample","1",600))};l.ea=function(){};l.pb=function(){var a=Ta(this);this.T=Math.max(this.T,a)};function Ta(a){return ra(!!a.a.scrollElement)}function Sa(a){var b=a.M,b=b?Math.min(b*2,16):1;a.M=b}l.Ra=function(a,b){if(!S)this.ea(),this.terminate(),this.xa=m.location.protocol+"//"+this.a.domain+this.a.path,this.a.path=V(a),b&&(this.a.title=b),this.B(),Ra(this)};
function Ua(a){if(a.xa)return h;a=(document.referrer||"").indexOf("://"+m.location.hostname+"/");return a!=-1&&a<9}function Va(a){a=a.xa;if(!a&&(a=document.referrer||"")){var b=D(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=V(b.pathname),a=E(b)}return encodeURIComponent(a)}function Wa(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}function Qa(a){a=[Va(a),K("Width"),K("Height")];return ea(a)}
function Xa(a){var b=[],c=a.D.k("_chartbeat4");c&&(p(c.split("::"),function(a){b.push(encodeURIComponent(a))}),a.D.remove("_chartbeat4"));return b}l.terminate=function(){this.G.terminate();O(this.Wa);if(this.qa!==g){var a=this.qa,b=m;b.removeEventListener?b.removeEventListener("load",a,j):b.detachEvent&&b.detachEvent("onload",a)}clearInterval(this.na)};function Ya(a){for(var b=a.offsetLeft,c=a.offsetTop,d=j,e=a.offsetParent;a&&a!==g&&a!==document.body;){if(a===e)b+=a.offsetLeft,c+=a.offsetTop,e=a.offsetParent;var f=a,o=g;o=m.getComputedStyle?(f=m.getComputedStyle(f,i))&&(f.position||f.getPropertyValue("position")):f.currentStyle?f.currentStyle.position:f.style&&f.style.position;if((o||"")==="fixed"){d=h;break}a=a.parentElement}d&&(b+=0,c+=0);return{x:b,y:c}};function Za(a,b){for(var c=b||document.documentElement,d=[],e=i,f=a,o,r,k,w,u,G;f&&f!==c;){o=f.nodeName.toLowerCase();e=f;r=e.nodeName;if((f=f.parentNode)&&f!==document.documentElement){k=f.children;w=0;for(u=0,G=k.length;u<G;u++){if(e===k[u]){o+="["+(1+u-w)+"]";break}k[u].nodeName!==r&&w++}}d.unshift(o)}return d.join("/")};function Z(){"postMessage"in window&&y(m,"message",t(this.jb,this));Y.call(this);for(var a=t(this.Ma,this),b=m._cbq||[];b.length;)a(b.shift());m._cbq={push:a}}aa(Z,Y);
Z.prototype.B=function(){Z.ha.B.call(this);this.ka=i;na(this.a);var a=m.location;F(this.a,"pingServer","ping.chartbeat.net");F(this.a,"title",document.title);F(this.a,"domain",a.hostname);this.a.path=this.a.path?V(this.a.path):La(!!this.a.useCanonical);this.P=x(a.hostname);this.a.domain=x(this.a.domain);this.Ya=M("c",this.qb,this);this.Za=M("r",this.rb,this);this.J=i};Z.prototype.Va=function(a){this.ka=a};
Z.prototype.ea=function(){this.D.update("_chartbeat4",["t="+this.Na,"E="+this.G.N,"x="+Ta(this),"c="+Math.round((q()-this.Y)/600)/100,"y="+K("Height"),"w="+sa()].join("&"),3600,g,g,1)};var ma="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,t,V,z,i,L,tz,l,,sn,C".split(",");l=Z.prototype;
l.X=function(a){this.La++;var b={};b.g=this.a.uid;b.g0=I(this.a,"sections");b.g1=I(this.a,"authors");b.g2=I(this.a,"zone");b.g3=I(this.a,"sponsorName");b.g4=I(this.a,"type");!this.a.noCookies&&this.D.isSupported()?b.n=this.ob:b.nc=1;b.c=Math.round((q()-this.Y)/600)/100;b.E=this.G.N;var c=Ta(this);this.T=Math.max(this.T,c);b.x=c;b.m=this.T;b.y=K("Height");b.o=K("Width");b.w=sa();b.b=this.ra?this.ra:"";if(this.Da)b.f=this.Da;b[""]=oa(this.a);b.t=this.Na;b.V=50;b.tz=(new Date).getTimezoneOffset();b.sn=
this.La;c=this.G.S;b.h=encodeURIComponent(this.a.domain);b.p=encodeURIComponent(this.a.path);b.u=this.ja;b.d=encodeURIComponent(this.P);b.j=Math.round((this.M+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;Q.Xa()?b.W=1:this.a.reading&&+this.a.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=Ua(this);if(this.sa){this.sa=j;c?this.J=$a(this):b.r=Va(this);b.i=Wa(this);var d=this.a.hudTrackable;d!==g&&(b.L=d?"1":"0");this.a.alias&&(b.PA=encodeURIComponent(this.a.alias))}if(c){if(this.J){if(b.v=encodeURIComponent(this.J.path),
b.K=ab(this.J),this.J.pa>1)b.l1=this.J.pa}else b.v=Va(this);this.xa&&(b.vp=1)}b.A=this.ka?this.ka:"";b._c=ja("utm_campaign",this.a.campaignTag);b._m=ja("utm_medium",this.a.mediumTag);b.z=Xa(this);b.C=this.a.mobileApp?1:"";b.KK=a?ab(a,h):"";a=this.D;c=a.va;a.va=j;b.l=c?1:"";this.G.S=0;b=(m.location.protocol||"http:")+"//"+this.a.pingServer+"/ping?"+la(b);S||n(b,this.$)};
l.jb=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.P)){var c=a.data;B(c)&&c.indexOf("cbqpush::")===0?(a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.Ma(a))):c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b.path)+"&title="+Wa(this)+"&referrer="+Va(this)+"&internal="+(Ua(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.P)+"&utoken="+this.ja,a.source.postMessage(b,"*"))}};
l.Ma=function(a){this.a[a[0]]=a[1];this.M=0};function bb(a){a=a.replace(/-{2,}/g,"-");a=D(a);a.pathname=V(a.pathname);return a}l.qb=function(a){cb(this,a,"c")};l.rb=function(a){cb(this,a,"r")};
function cb(a,b,c){if(a.ta&&q()-a.Y>=a.ca)a.terminate();else{var d=b.href||"",d=bb(d);if(!(d.hostname!==m.location.hostname||d.protocol.indexOf("http")!==0)){var d=E(d),e=ta(b,function(a){return a.id}),f=Za(b,e);e&&(f&&(f="/"+f),f="*[@id='"+e.id+"']"+f);e=ca(f);b=Ya(b);c={left:b.x,top:b.y,path:a.a.path,href:d,za:e,ya:f,ua:c,pa:0};a.X(c);a.D.update("_chartbeat5",db(c),60,j,g,5,function(a){a=a.split(",");return a[2]+","+a[3]})}}}
function ab(a,b){var c=[a.left,a.top,a.za,encodeURIComponent(a.ya),a.ua];b&&c.push(encodeURIComponent(a.href));return c.join("::")}function db(a){var b=encodeURIComponent(a.ya),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.za,b,a.ua].join(",")}
function $a(a){var b=a.D.k("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,d,e;if(b===1)d=c[0].split(","),e=0;else{var f,o=bb(m.location.href),r=E(o);p(c,function(a,b){var c=a.split(","),o=ga(r,decodeURIComponent(c[3]));if(o===0)return d=c,e=b,j;if(f===g||o<f)f=o,d=c,e=b})}c.splice(e,1);a.D.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),za:d[4]||"",ya:a,ua:d.length>6?d[6]:"c",
pa:b}}l.terminate=function(){O(this.Ya);O(this.Za);Z.ha.terminate.call(this)};if(!m.pSUPERFLY){var eb=new Z;m.pSUPERFLY=eb;Z.prototype.virtualPage=Z.prototype.Ra;Z.prototype.activity=Z.prototype.Va;var $=m.pSUPERFLY_pub;$&&$.virtualPage&&(Z.prototype.virtualPage=function(){var a=arguments.length?Array.prototype.slice.call(arguments,0):[];$.virtualPage();Z.prototype.Ra.apply(eb,a);$.B();Ra($)});$&&$.addEngagedAdFilter&&(Z.prototype.addEngagedAdFilter=t($.addEngagedAdFilter,$));$&&$.refreshAd&&(Z.prototype.refreshAd=t($.refreshAd,$));Ra(eb);var fb=J.q(h);if(fb){y(m,"message",
qa);var gb;if(gb=fb.getItem("_cb_ip")){var hb=m.location;gb=!(!/^([^.]+[.])?chartbeat\.com$/.test(hb.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(hb.pathname))}gb&&pa()}};function ib(){v(m._cb_shared)||(m._cb_shared={});return m._cb_shared};function jb(){var a=m.location.href,a=a.replace(/-{2,}/g,"-"),a=D(a);a.pathname=V(a.pathname);return a}function kb(a){var b=T.k("_chartbeat6");if(!b)return i;var b=b.split("::"),c,d;if(b.length===1)c=b[0].split(","),d=0;else{var e,f=jb(),o=E(f);p(b,function(a,b){var f=a.split(","),u=ga(o,decodeURIComponent(f[0]));if(u===0)return c=f,d=b,j;if(e===g||u<e)e=u,c=f,d=b})}b.splice(d,1);a="_chartbeat6="+b.join("::")+lb(a);document.cookie=a;return{Db:c[0],cb:c[1],Ab:c[2],origin:c[3]}}
function lb(a){var b="",c;if(!(a&&a.constructor===Object))return b;a.Ha&&(c=new Date,c.setTime(c.getTime()+a.Ha),b+="; expires="+c.toGMTString());a.domain&&(b+="; domain="+a.domain);a.path&&(b+="; path="+a.path);return b}function mb(a,b){if(a===b)return h;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return j;if(c.pop()!==d.pop())return j}return h};function nb(){this.xb="_t_";Y.call(this)}aa(nb,Y);l=nb.prototype;
l.B=function(){nb.ha.B.call(this);na(this.a);var a=m.location;F(this.a,"mabServer","mabping.chartbeat.net");F(this.a,"title",document.title);F(this.a,"domain",a.hostname);F(this.a,"path",La(!!this.a.useCanonical));this.P=x(a.hostname);this.a.domain=x(this.a.domain);var b=this.a,a=b.rootDomain,b=b.domain,c=m.location.hostname;this.ub=a?a:mb(c,b)?b:c.replace(/^www\./,"");this.Qa=this.Ba=this.Ca="";this.aa=this.oa=j;a=kb({domain:"."+this.ub,Ha:6E4,path:"/"});if(a!==i)this.Ca=a.origin,this.Ba=a.cb,this.Qa=
a.Ab,this.oa=h;this.ca=6E4;this.Ia=0;a=t(this.kb,this);for(b=ib().m||[];b.length;)a(b.shift());a={push:a};ib().m=a};l.X=function(){var a=this.G.N,b=ob(this),c,d,e;if(this.oa)c=this.Ca,d=this.Ba,e=this.Qa,S||n(b+"&x="+d+"&v="+e+"&xo="+c+"&e="+a,this.$);!this.aa&&v(this.Pa)&&pb(this,this.Pa);this.aa=h};l.ga=function(){var a=m._sf_startpt,b=m._sf_endpt;if(A(a))this.ra=A(b)?b-a:q()-a;Q.B();if(this.oa)this.na=m.setInterval(t(this.U,this),500);this.U()};
l.U=function(){var a,b;this.aa?(a=this.G.N,b=this.Ia*15,a-b>=15&&(this.X(),this.Ia+=1),a>=45&&m.clearInterval(this.na)):this.X()};function ob(a){var b=a.a;return(m.location.protocol||"http:")+"//"+b.mabServer+"/ping/mab?h="+encodeURIComponent(b.domain)+"&p="+encodeURIComponent(b.path)+"&d="+encodeURIComponent(a.P)+"&u="+a.ja+"&c="+Math.round((q()-a.Y)/600)/100}l.ea=function(){};l.yb=function(a){var b=a.d,a={status:a.s,data:b===i?i:{vb:b.s,mb:b.l},code:a.c,message:a.m};this.aa?pb(this,a):this.Pa=a};
function pb(a,b){var c=ob(a),d=b.status,e=b.data;if(d=="s"&&e!==i){if(!e.mb){var d=e.vb,f;for(f in d)e=c+"&x="+f+"&v="+d[f]+"&e=-1",S||n(e,a.$)}}else d=="e"&&(S||n(c+"&type=error&te="+b.code,a.$))}l.kb=function(a,b){for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a.shift()==="t"&&this.yb.apply(this,a)};if(!m.pSUPERFLY_mab)m.pSUPERFLY_mab={},Ra(new nb);})();
