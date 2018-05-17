webpackJsonp([15],{276:function(n,t,e){"use strict";function a(n){l||(e(892),e(894))}Object.defineProperty(t,"__esModule",{value:!0});var s=e(501),c=e.n(s);for(var i in s)"default"!==i&&function(n){e.d(t,n,function(){return s[n]})}(i);var r=e(896),o=e.n(r),l=!1,p=e(2),d=a,u=p(c.a,o.a,!1,d,null,null);u.options.__file="src\\views\\access\\access.vue",t.default=u.exports},501:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(8),s=function(n){return n&&n.__esModule?n:{default:n}}(a);t.default={name:"access_index",data:function(){return{accessCode:parseInt(s.default.get("access")),switchValue:1===parseInt(s.default.get("access"))}},computed:{avatorPath:function(){return localStorage.avatorImgPath}},methods:{changeAccess:function(n){n?(this.accessCode=1,s.default.set("access",1)):(this.accessCode=0,s.default.set("access",0)),this.$store.commit("updateMenulist")}}}},892:function(n,t,e){var a=e(893);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(16)("53984eb6",a,!1)},893:function(n,t,e){t=n.exports=e(15)(!1),t.push([n.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.access-user-con {\n  height: 200px;\n}\n.access-current-user-con {\n  text-align: center;\n  padding-top: 10px;\n}\n.access-current-user-con img {\n  display: block;\n  width: 100px;\n  height: 100px;\n  border: 2px solid #dddde2;\n  border-radius: 50%;\n  margin: 0px auto 10px;\n}\n.access-current-user-con p {\n  display: block;\n  padding: 20px 0 0;\n}\n.access-current-user-con p b {\n  margin: 0 10px;\n  color: #2d8cf0;\n}\n.access-change-access-con-row {\n  height: 200px;\n}\n",""])},894:function(n,t,e){var a=e(895);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(16)("268c536c",a,!1)},895:function(n,t,e){t=n.exports=e(15)(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},896:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"access"},[e("Row",[e("Col",{attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-contact"}}),n._v("\n                    当前用户\n                ")],1),n._v(" "),e("div",{staticClass:"access-user-con access-current-user-con"},[e("img",{attrs:{src:n.avatorPath,alt:""}}),n._v(" "),e("p",[n._v("当前用户权限值:"),e("b",[n._v(n._s(n.accessCode))])])])])],1),n._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-contacts"}}),n._v("\n                    不同权限用户的不同菜单\n                ")],1),n._v(" "),e("div",{staticClass:"access-user-con access-change-access-con"},[e("Col",{attrs:{span:"8"}},[e("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("i-switch",{attrs:{value:n.switchValue,size:"large"},on:{"on-change":n.changeAccess}})],1)],1),n._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("p",[n._v("您可以通过左侧的开关来切换当前用户的权限值，然后您可以观察左侧菜单栏的变化，如果当前用户的权限值是"),e("b",[n._v(" 0 ")]),n._v("，则左侧菜单栏会显示’权限测试页‘这一项('权限测试页'只用于测试，点击不会跳转)。")])])],1)],1)])],1)],1)],1)},s=[];a._withStripped=!0;var c={render:a,staticRenderFns:s};t.default=c}});