(function(t){function e(e){for(var s,a,l=e[0],c=e[1],i=e[2],m=0,p=[];m<l.length;m++)a=l[m],o[a]&&p.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},o={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/< Vue - CommentBox>/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),o=n.n(s);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("router-view")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-12 header text-center"},[n("h2",[t._v("Vue CommentBox")])])])}],a=(n("034f"),n("2877")),l={},c=Object(a["a"])(l,o,r,!1,null,null,null),i=c.exports,u=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-gutters justify-content-center"},[n("div",{staticClass:"col-12 col-md-6"},[n("CommentForm")],1)])},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-3 offset-md-9"},[n("b",[t._v(t._s(t.comments.length)+" comments")])])]),n("hr"),n("form",[n("div",{staticClass:"form-group row no-gutters"},[t._m(0),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newComment,expression:"newComment"}],staticClass:"form-control",attrs:{placeholder:"Enter your comment here ..."},domProps:{value:t.newComment},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postComment(e)},input:function(e){e.target.composing||(t.newComment=e.target.value)}}}),n("button",{staticClass:"btn replybtn",attrs:{type:"submit"},on:{click:t.postComment}},[t._v("Send")])])]),n("br"),n("div",{staticClass:"filter"},[n("filterby")],1),n("div",{staticClass:"posts"},[n("div",{staticClass:"messages"},[n("div",{staticClass:"card"},t._l(t.comments,function(e,s){return n("div",{key:e,staticClass:"card-body"},[n("p",{staticClass:"card-text comment"},[t._v(t._s(e))]),n("button",{staticClass:"btn btn-sm red",attrs:{type:"button"},on:{click:function(e){return t.deleteComment(t.index)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"trash-alt"}}),t._v("Delete\n          ")],1),n("button",{staticClass:"btn btn-sm",attrs:{type:"button"},on:{click:t.toogleReply}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"reply"}}),t._v("\n            Reply "+t._s(t.replies.length)+"\n          ")],1)])}),0)]),n("div",{staticClass:"reply"},[n("div",{staticClass:"col-11 offset-md-1"},t._l(t.replies,function(e,s){return n("div",{key:e,staticClass:"card"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v("\n              "+t._s(e)+"\n            ")]),n("button",{staticClass:"btn btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteReply(t.index)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"trash-alt"}}),t._v("Delete\n            ")],1)])])}),0)]),n("form",{directives:[{name:"show",rawName:"v-show",value:t.OpenReply,expression:"OpenReply"}],staticClass:"col-6 offset-md-1"},[n("div",{staticClass:"form-group row no-gutters"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newReply,expression:"newReply"}],staticClass:"form-control",attrs:{placeholder:"Reply here ..."},domProps:{value:t.newReply},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postReply(e)},input:function(e){e.target.composing||(t.newReply=e.target.value)}}}),n("button",{staticClass:"btn post",attrs:{type:"submit"},on:{click:t.postReply}},[t._v("Post")])])])]),n("hr"),n("div",{staticClass:"col-12 col-md-3 offset-md-9",attrs:{disabled:!t.canUndo},on:{click:function(e){return t.undo()}}},[t._v("Undo changes")])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("h3",[t._v("Leave a comment")])])}],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"form-group col-12 col-md-3"},[n("select",{staticClass:"form-control",attrs:{id:"inputState","data-role":"sort"}},[n("option",{attrs:{selected:""}},[t._v("sort by recent")]),n("option",[t._v("sort by Oldest")])])])])}],h={},b=Object(a["a"])(h,v,y,!1,null,null,null),C=b.exports,g={name:"home",components:{filterby:C},data:function(){return{comments:[{}],replies:[{}],newComment:null,OpenReply:!1,newReply:null}},mounted:function(){if(localStorage.getItem("comments"))try{this.comments=JSON.parse(localStorage.getItem("comments"))}catch(t){localStorage.AddItem("comments")}if(localStorage.getItem("replies"))try{this.replies=JSON.parse(localStorage.getItem("replies"))}catch(t){localStorage.AddItem("replies")}},methods:{postComment:function(){this.newComment&&(this.comments.push(this.newComment),this.newComment="",this.saveComments())},deleteComment:function(t){this.comments.splice(t,1),this.saveComments()},saveComments:function(){var t=JSON.stringify(this.comments);localStorage.setItem("comments",t)},postReply:function(){this.newReply&&(this.replies.push(this.newReply),this.newReply="",this.saveReply())},deleteReply:function(t){this.replies.splice(t,1),this.saveReply()},saveReply:function(){var t=JSON.stringify(this.replies);localStorage.setItem("replies",t)},toogleReply:function(){this.OpenReply=!this.OpenReply}}},w=g,_=(n("a9e2"),Object(a["a"])(w,d,f,!1,null,null,null)),x=_.exports,O={name:"home",components:{CommentForm:x}},R=O,k=(n("cccb"),Object(a["a"])(R,m,p,!1,null,null,null)),S=k.exports;s["a"].use(u["a"]);var j=new u["a"]({mode:"history",base:"/< Vue - CommentBox>/",routes:[{path:"/",name:"home",component:S}]}),E=n("2f62");s["a"].use(E["a"]);var P=new E["a"].Store({state:{},mutations:{},actions:{}}),I=(n("4989"),n("ab8b"),n("ecee")),$=n("c074"),N=n("ad3d");I["c"].add($["a"]),I["c"].add($["b"]),I["c"].add($["c"]),s["a"].component("font-awesome-icon",N["a"]),s["a"].config.productionTip=!1,new s["a"]({router:j,store:P,render:function(t){return t(i)}}).$mount("#app")},"64a9":function(t,e,n){},"77b3":function(t,e,n){},a9e2:function(t,e,n){"use strict";var s=n("77b3"),o=n.n(s);o.a},cccb:function(t,e,n){"use strict";var s=n("d563"),o=n.n(s);o.a},d563:function(t,e,n){}});
//# sourceMappingURL=app.1a595100.js.map