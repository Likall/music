import VueRouter from 'vue-router'

// 导入对应的组件
import NavComponent from './components/MainContainer/nav.vue'
import Recommands from './components/MainContainer/main.vue'
import RakingList from './components/RakingContainer/rakinglist.vue'
import Classfiy from './components/SongListContainer/classfiy.vue'
import Login from './components/Login/login.vue'
import Register from './components/Login/register.vue'
import Singer from './components/Singer/singer.vue'
// 创建路由对象，配置路由规则
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/recommands'},
        {path:'/recommands',component:Recommands},
        {path:'/rakinglist',component:RakingList},
        {path:'/classfiy',component:Classfiy},
        {path:"/register",component:Register},
        {path:"/login",component:Login},
        {path:"/singer",component:Singer}

    ]
})
export default router