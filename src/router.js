import VueRouter from 'vue-router'

// 导入对应的组件
import NavComponent from './components/MainContainer/nav.vue'
import Recommands from './components/MainContainer/main.vue'
import RakingList from './components/RakingContainer/rakinglist.vue'
import Classfiy from './components/SongListContainer/classfiy.vue'
// 创建路由对象，配置路由规则
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/recommands'},
        {path:'/recommands',component:Recommands},
        {path:'/rakinglist',component:RakingList},
        {path:'/classfiy',component:Classfiy}
    ]
})
export default router