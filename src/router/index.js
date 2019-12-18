//引入vue
import Vue from 'vue';
//引入vue-router
import Router from 'vue-router';
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};
//使用vue-router
Vue.use(Router);


//引入页面组件
import home from '../pages/home.vue';
import notfound from '../pages/notfound.vue';





//实例化router并配置参数
let router = new Router({
    routes: [{
        name: 'home',
        path: '/Home',
        component: home

    },
    {
        path: '/',
        redirect: 'home'
    },
    {

        path: '/404',
        component: notfound

    },
    {

        path: '*',
        redirect: '/404'

    }

    ]


});


export default router;