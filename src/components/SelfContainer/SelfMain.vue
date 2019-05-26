<template>
    <div>
    <div class="selfmain">
        <div class="top">
            <div class="self-avatar">
                <img class="avatar-img" src="http://p2.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=180y180">
            </div>
            <div class="self-info">
                <div class="user-name">
                    <h3>yling1234<i class="fa fa-vimeo-square" aria-hidden="true"></i></h3>
                    <router-link to="/selfcenter/editselfinfo" class="btn btn-edit">编辑个人资料</router-link>
                </div>
                <div class="user-dynamic">
                    <ul>
                        <li>
                            <strong>0</strong>
                            <span  class="span-dynamic">动态</span>
                        </li>
                        <li>
                            <strong>4</strong>
                            <span  class="span-dynamic">关注</span>
                        </li>
                        <li>
                            <strong>0</strong>
                            <span  class="span-dynamic">粉丝</span>
                        </li>
                    </ul>

                </div>
                <div class="place">
                    <span>所在地区:北京市</span>
                </div>
                <div class="place">
                    <span>社交网络:<img src="../../svg/weibo.svg"><img src="../../svg/douban.svg"></span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="songlist-title">
                <span>我创建的歌单(2)</span>
            </div>
            <div class="songlist-main">
                <ul>
                    <li>
                        <div class="list-item">
                            <img src="https://p1.music.126.net/2h1uGGc_kXpVVcGz6pjUKA==/109951164053284523.jpg?param=140y140">
                            <span>yling1234喜欢的音乐</span>
                            <div class="item-bottom">
                                <div>
                                    <i class="fa fa-headphones" aria-hidden="true"></i>
                                    <span>0</span>
                                </div>
                                <div>
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="list-item">
                            <img src="https://p1.music.126.net/K_3KGTbKKb2j-YSyrlPq3Q==/1713039116096073.jpg?param=140y140">
                            <span>1</span>
                            <div class="item-bottom">
                                <div>
                                    <i class="fa fa-headphones" aria-hidden="true"></i>
                                    <span>0</span>
                                </div>
                                <div>
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer">
        <Footer></Footer>
    </div>
    </div>
</template>

<script>
    import Footer from "../../components/MainContainer/footer.vue"
    export default{
        components:{
            Footer
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    body{
        background-color: rgb(245,245,245);
    }
    .selfmain{
        width: 980px;
        border: 1px lightgray solid;
        margin: 0 auto;
        background-color: white;
    }
    .top{
        display: flex;
        padding: 40px;
    }
    .self-avatar{
        border: 1px lightgray solid;
    }
    .avatar-img{
        padding: 2px;
    }
    .user-name{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px lightgray solid;
        padding-bottom: 5px;
    }
    .user-name h3{
        font-size: 22px;
    }
    .self-info{
        margin-left: 30px;
        width: 670px;
    }
    .fa-vimeo-square{
        color: #e03a24;
        margin-left: 10px;
    }
    .btn-edit{
        background-color: rgb(253,253,253);
        height: 31px;
        width: 112px;
        font-size: 12px;
        margin-right: 2px;
        border: 1px lightgray solid;
    }
    .user-dynamic ul{
        height:60px;
        padding-top: 10px;
    }
    .user-dynamic ul li{
        list-style: none;
        float: left;
        padding: 0;
        margin: 0;
        width: 66px;
        margin-right: 10px;
        border-left: 1px #ddd solid;
       padding-left: 15px;


    }
    .user-dynamic ul li:nth-child(1){
        border-left: none;
    }
    .user-dynamic{
        height: 52px;
        line-height: 1;
    }
    .span-dynamic{
        font-size: 12px;
    }
    .user-dynamic ul li strong{
        display: block;
        font-size: 20px;
        font-weight: normal;
        color: #666;

    }
    .place{
        margin-top: 20px;
        font-size: 12px;
        color: #666;
    }
    .place img{
        margin-left: 10px;
    }
    .songlist-title{
        border-bottom: 2px #c20c0c solid;
        margin: 20px;
        font-size: 20px;
        padding-bottom: 10px;
    }
    .songlist-main ul{
        display: flex;
    }
    .songlist-main li{
        list-style: none;
        width: 140px;
        margin-left: 20px;
        position: relative;

    }
    .list-item span{
        font-size: 14px;
    }
    .item-bottom{
        display: flex;
        justify-content: space-between;
        width: 140px;
        height: 27px;
        position: absolute;
        top: 113px;
        background-color: rgb(5,5,5,0.7);
    }
    .fa-headphones{
        color: #ccc;
        margin-left: 10px;
        height: 11px;
        width: 14px;
    }
    .item-bottom span{
        color: #ccc;
        margin-left: 5px;
    }
    .fa-play-circle{
        color: #ccc;
        cursor: pointer;
        height: 11px;
        line-height: 11px;
        margin-right: 10px;
    }
    .footer{
        height: 100px;
    }
</style>