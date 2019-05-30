<template>
    <div class="bg-singersong">
        <div class="singersong-container">
            <div class="container-left">
                <div class="singer-info">
                    <div class="singer-des">
                        <h2>张惠妹</h2>
                        <h3>aMEI;阿密特</h3>
                    </div>
                    <img src="http://p4.music.126.net/-JxOlVRUl3OFqNkCIu9dlw==/678398674363509.jpg?param=640y300" alt="">
                    <div class="input-container">
                       <button><i class="fa fa-user-o" aria-hidden="true"></i>个人主页</button>
                        <button><i class="fa fa-folder-o" aria-hidden="true"></i>收藏</button>
                    </div>
                </div>
                <div class="list-nav">
                    <ul class="nav-ul">
                        <li class="nav-li">
                            <router-link  class="nav-link" to="/singer/singersong/hotworks">热门作品</router-link>
                        </li>
                        <li class="nav-li">
                            <router-link class="nav-link" to="/singer/singersong/album" >所有专辑</router-link>
                        </li>
                        <li class="nav-li">
                            <router-link to="/singer/singersong/abomv" class="nav-link">相关MV</router-link>
                        </li>
                        <li class="nav-li">
                            <a class="nav-link" href="#">艺人介绍</a>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
            <div class="container-right">
                <div class="right-top">
                    <span>热门歌手</span>
                </div>
                <div class="right-bottom">
                    <div class="item-tuijian" v-for="(item,i) in tuijianSinger" :key="i">
                        <img :src=item.img alt="">
                        <span>{{item.singername}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                tuijianSinger:[
                    {img:"http://p3.music.126.net/t57DhLvsHGjCsJo46rgowQ==/109951164048587316.jpg?param=50y50",singername:"胜男"},
                    {img:"http://p3.music.126.net/t57DhLvsHGjCsJo46rgowQ==/109951164048587316.jpg?param=50y50",singername:"胜男"},
                    {img:"http://p3.music.126.net/t57DhLvsHGjCsJo46rgowQ==/109951164048587316.jpg?param=50y50",singername:"胜男"},
                    {img:"http://p3.music.126.net/t57DhLvsHGjCsJo46rgowQ==/109951164048587316.jpg?param=50y50",singername:"胜男"},
                    {img:"http://p3.music.126.net/t57DhLvsHGjCsJo46rgowQ==/109951164048587316.jpg?param=50y50",singername:"胜男"},
                    {img:"http://p3.music.126.net/t57DhLvsHGjCsJo46rgowQ==/109951164048587316.jpg?param=50y50",singername:"胜男"},

                ]
            }
        }
    }

</script>

<style type="text/css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .bg-singersong{
        background:rgb(245,245,245);
    }
    .singersong-container{
        margin: 0 auto;
        width: 980px;
        border: 1px lightgray solid;
        background: white;
        display: flex;

    }
    .container-left{
        width: 709px;
        padding: 30px 30px 40px 39px;
        border-right: 1px lightgray solid;
    }
    .container-right{
        width: 270px;
        padding: 30px 15px 20px 15px;

    }
    .singer-des{
        display: flex;
        align-items: baseline;
    }
    .singer-des h2{
         font-size: 24px;
     }
    .singer-des h3{
        font-size: 14px;
        margin-left: 10px;
        color: #999;
    }
    .singer-info{
        position: relative;
    }
    .singer-info img{
        width: 640px;
        height: 300px;
        margin-top: 10px;
    }
    .input-container{
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
    .input-container button{
        font-size: 12px;
        color: white;
        width: 96px;
        height: 32px;
        background: linear-gradient(to bottom,rgb(91,88,85),rgb(20,19,16));
        border: 0px;
        border-radius: 5px;
        margin-left: 10px;
    }
    .input-container i{
        margin-right: 5px;
    }
    .fa{
        font-size: 16px;
    }
    .fa-user-o{
        color: white;
    }
    .nav-li a{
        height: 39px;
        width: 100%;
    }
    .nav-ul{
        list-style: none;
        height: 39px;
        display: flex;
        border: 1px lightgray solid;
        background: linear-gradient(to bottom,#F9F9F9, #f6f6f6);
        justify-content: center;
        align-items: center;

    }
    .nav-li{
        flex-grow: 1;
        display: flex;
       text-align: center;
    }
    .nav-li a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 14px;
        color: black;
    }
    .router-link-active{
        border-top: 2px #D13030 solid;
        border-bottom: 0px;
        border-left: 1px lightgray solid;
        border-right: 1px lightgray solid;
        background: white;
    }
    .right-top span{
        font-weight: bold;
        font-size: 14px;
    }
    .right-top{
        border-bottom: 1px lightgray solid;
        padding-bottom: 10px;
    }
    .item-tuijian{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        margin-right: 5px;
        text-align: center;
        margin-bottom: 15px;
    }
    .right-bottom{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 20px;
    }
    .item-tuijian span{
        font-size: 12px;
    }
</style>