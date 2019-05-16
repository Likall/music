import VueRouter from 'vue-router'

// 导入对应的组件
import NavComponent from './components/MainContainer/nav.vue'
import Recommands from './components/MainContainer/main.vue'
import RakingList from './components/RakingContainer/rakinglist.vue'
import Classfiy from './components/SongListContainer/classfiy.vue'
<<<<<<< HEAD
import Login from './components/Login/login.vue'
import Register from './components/Login/register.vue'
import Singer from './components/Singer/singer.vue'
=======
>>>>>>> ea2527d110dd573da7f300ee68ba24e783a058c5
// 创建路由对象，配置路由规则
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/recommands'},
        {path:'/recommands',component:Recommands},
        {path:'/rakinglist',component:RakingList},
<<<<<<< HEAD
        {path:"/register",component:Register},
        {path:"/login",component:Login},
        {path:"/singer",component:Singer}

=======
        {path:'/classfiy',component:Classfiy}
>>>>>>> ea2527d110dd573da7f300ee68ba24e783a058c5
    ]
})
export default router