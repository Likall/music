import VueRouter from 'vue-router'

// 导入对应的组件
import NavComponent from './components/MainContainer/nav.vue'
import Recommands from './components/MainContainer/main.vue'
import RakingList from './components/RakingContainer/rakinglist.vue'
import Classfiy from './components/SongListContainer/classfiy.vue'
import NewmusicList from './components/NewMusicContainer/newmusiclist.vue'
import MusicReview from './components/ReviewContainer/musicreview.vue'
import ReviewOfMusic from './components/MusicContainer/reviewofmusic.vue'
// 创建路由对象，配置路由规则
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/recommands'},
        {path:'/recommands',component:Recommands},
        {path:'/rakinglist',component:RakingList},
        {path:'/classfiy',component:Classfiy},
        {path:'/newmusic',component:NewmusicList},
        {path:'/musicreview',component:ReviewOfMusic}
    ]
})
export default router