webpackJsonp([12],{PkJA:function(t,e){},bk3n:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("g13R"),r=s("sXrZ"),a=s("vLgD"),n={name:"expertDetail",data:function(){return{expert:{}}},components:{ExpertHeader:i.a,ExpertFoot:r.a},computed:{},methods:{},created:function(){},mounted:function(){Object(a.b)(),this.expert=this.$store.state.expertList[this.$route.query.expertId]}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"expert-index"},[s("expert-header"),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"c-top"},[s("div",{staticClass:"expert-img"},[s("img",{attrs:{src:t.expert.experts_img,alt:""}})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"expert-name"},[t._v(t._s(t.expert.experts_name)+"  "+t._s(t.expert.experts_designation))]),t._v(" "),s("div",{staticClass:"expert-kind"},[t._v("医生专业  "+t._s(t.expert.experts_department))])])]),t._v(" "),s("div",{staticClass:"center"},[t._v("\n            "+t._s(t.expert.experts_description)+"\n        ")]),t._v(" "),s("div",{staticClass:"office-place"},[t._v("\n            出诊地点：门诊三楼多学科会诊中心\n        ")]),t._v(" "),s("div",{staticClass:"tel"},[t._v("\n            预约电话：96195\n        ")]),t._v(" "),t._m(0)]),t._v(" "),s("expert-foot")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"time"},[this._v("初诊安排:\n            "),e("div",{staticClass:"time-c"},[this._v("星期一上午，星期二下午")])])}]};var v=s("VU/8")(n,c,!1,function(t){s("PkJA")},"data-v-f40d470e",null);e.default=v.exports}});