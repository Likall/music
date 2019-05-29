import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

import axios from 'axios'
// import Vueaxios from 'vue-axios'
// Vue.use(axios,Vueaxios)
// 配置入口
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios

// mint-ui
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
// 配置使用.svg格式的图片
import Icon from 'vue-svg-icon/Icon.vue'

Vue.component('Icon', Icon);   //引入svg-icon

// 导入路由js
import router from './router.js'
// 导入组件
import App from "./app.vue"

// 实例
var vm = new Vue({
    el:"#app",
    render:function(createElement){
        return createElement(App)
    },
    router:router
})