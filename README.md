# vue-loader-demo
vue-loader

================
vur-router 配合 vue-loader使用
main.js
================
1 install vue-router
2 import VueRouter from 'vue-router'
3 Vue.use(Vue.router)
4 配置路由 var router = new VueRouter(); router.map({路由规则})
5 开启 router.start(App, '#box');
        1) index.html =>  <div id="nav"></div>
        2) App.vue =>    <template><div id="nav">内容</div></template>
6 router.redirect({ 
    '/': '/home'  //配置初始化路由
  }) 
=================
打包并压缩
     "build": "webpack -p"
