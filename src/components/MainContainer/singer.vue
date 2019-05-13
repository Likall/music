<template>
    <div class="singer-container">
        <div class="top-login-container">
            <p>欢迎登陆随听，enjoy music</p>
            <button class="login">用户登陆</button>
        </div>
        <div class="singer-content">
            <div class="singer-nav-title">
                <span>入驻歌手</span>
                <a href="#" class="all">查看全部> </a>
            </div>
            <div class="singer-list">
                <div class="singer-item">
                    <div class="image">
                    <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"/>
                    </div>
                    <div class="info">
                        <h4 class="name">张惠妹</h4>
                        <span class="description">台湾歌手张惠妹</span>
                    </div>
                </div>
                <div class="singer-item">
                    <div class="image">
                    <img src="http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62"/>
                    </div>
                    <div class="info">
                        <h4 class="name">Fine乐团</h4>
                        <span class="description">独立音乐人</span>
                    </div>
                </div>
                <div class="singer-item">
                    <div class="image">
                    <img src="http://p1.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62"/>
                    </div>
                    <div class="info">
                        <h4 class="name">赵雷</h4>
                        <span class="description">民谣歌手</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    

</template>
<script>
export default {
    
}
</script>
<style scoped>
.singer-container{
    width: 250px;
}
.top-login-container{
    width: 250px;
    height: 126px;
    border-right: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    background: -webkit-linear-gradient(white,#E1E1E1);
    background: linear-gradient(#ffffff,#E1E1E1);
    background: -moz-linear-gradient(#ffffff,#E1E1E1);
    background: -o-linear-gradient(#ffffff,#E1E1E1);
}
.top-login-container p{
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    height: 60px;
    line-height: 60px;
    text-align: center
}
.login{
    width: 85px;
    height: 30px;
    border: transparent;
    border-radius: 5px;
    color: #ffffff;
    background:-webkit-linear-gradient(#FD0000,#8a060b);
    background: -moz-linear-gradient(#FD0000,#8a060b);
    background: -o-linear-gradient(#FD0000,#8a060b);
    background: linear-gradient(#FD0000,#8a060b);
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 82px;
    text-shadow: 0 1px 0 #8a060b;
}
.login:hover{
    background:-webkit-linear-gradient(#FD0000,#FC0000);
    background: -moz-linear-gradient(#FD0000,#FC0000);
    background: -o-linear-gradient(#FD0000,#FC0000);
    background: linear-gradient(#FD0000,#FC0000);
}

.singer-content{
    width: 250px;
    height: 1217px;
    border-right: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
}
.singer-nav-title{
    margin: 0px 15px 15px 15px;
    height: 35px;
    border-bottom: 1px solid #d3d3d3;
}
.singer-nav-title span{
    font-size: 12px;
    color: #333333;
    font-weight: bold;
    line-height: 35px;
}
.singer-nav-title a{
    font-size: 12px;
    color: #666666;
    float: right;
    line-height: 35px;
}
.singer-item{
    width: 250px;
    height: 62px;
    margin-top: 15px;
}
.image{
    width: 62px;
    height: 62px;
    margin-left: 15px;
    cursor: pointer;
}
.image,.info{
    float: left;
    margin-left: 5px;
}
.info{
    border-top:1px solid #E9E9E9;
    border-right:1px solid #E9E9E9;
    border-bottom:1px solid #E9E9E9;
    width: 158px;
    height: 62px;
    cursor: pointer;
}
.name{
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    margin-top: 7px;
}
.description{
    font-size: 12px;
    color: #666666;
}
/* 动画 */
.singer-item:hover .info{
    background-color: #F5F5F0;
}
</style>
