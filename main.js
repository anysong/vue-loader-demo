import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './router.config';
import App from './App.vue';

Vue.use(VueRouter);

//配置路由
const router = new VueRouter();

router.map(routerConfig)
router.redirect({
    '/': '/home'
})
router.start(App, '#nav')
// new Vue({
//     el: 'body',
//     components: {
//         app: App
//     }
// })