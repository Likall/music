import VueRouter from 'vue-router'

// 导入对应的组件
import NavComponent from './components/MainContainer/nav.vue'
import Recommands from './components/MainContainer/main.vue'
import RakingList from './components/RakingContainer/rakinglist.vue'
import Classfiy from './components/SongListContainer/classfiy.vue'
import Login from './components/LoginContainer/login.vue'
import Register from './components/LoginContainer/register.vue'
import Singer from './components/SingerContainer/singer.vue'
import SelfMain from './components/SelfContainer/SelfMain.vue'
import NewmusicList from './components/NewMusicContainer/newmusiclist.vue'
import MusicReview from './components/ReviewContainer/musicreview.vue'
import ReviewOfMusic from './components/MusicContainer/reviewofmusic.vue'
// 创建路由对象，配置路由规则
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/recommands'},
        {path:'/recommands',component:Recommands},
        {path:'/rakinglist',component:RakingList},
        {path:"/register",component:Register},
        {path:"/login",component:Login},
        {path:"/singer",component:Singer},
        {path:'/classfiy',component:Classfiy},
        {path:'/selfcenter',component:SelfMain}，
        {path:'/newmusic',component:NewmusicList},
        {path:'/musicreview',component:ReviewOfMusic}
    ]
})
export default router