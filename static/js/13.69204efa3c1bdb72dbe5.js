webpackJsonp([13],{"/H8x":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("g13R"),c=n("sXrZ"),i=n("P9l9"),a=n("vLgD"),o={data:function(){return{news:{title:"",author:"",publish_time:"",content:""}}},components:{Myheader:s.a,Myfoot:c.a},methods:{getNewsDetail:function(){var t=this;Object(i.k)(this.$route.query.newsID).then(function(e){t.news=e,Object(a.b)()}).catch(function(t){Object(a.b)()})}},mounted:function(){Object(a.c)(),this.getNewsDetail()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outer"},[n("Myheader"),t._v(" "),n("div",{staticClass:"content"},[n("h2",{staticClass:"title"},[t._v(t._s(t.news.title))]),t._v(" "),n("p",{staticClass:"date"},[t._v(t._s(t.news.publish_time))]),t._v(" "),n("p",{staticClass:"articleContent",domProps:{innerHTML:t._s(t.news.content)}})]),t._v(" "),n("Myfoot")],1)},staticRenderFns:[]};var u=n("VU/8")(o,r,!1,function(t){n("0Ayf")},"data-v-5dc7873c",null);e.default=u.exports},"0Ayf":function(t,e){}});