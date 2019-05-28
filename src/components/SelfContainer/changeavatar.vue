<template>
    <div class="changebg">
        <div class="change-container">
            <div class="change-head">
                <router-link to="/selfcenter/editselfinfo">个人设置</router-link>
                <span> ></span>
                <span>更换头像</span>
            </div>
            <div class="changecontent-container">
                <div class="change-top-container">
                    <input type="file" class="upload">
                    <input type="button" value="上传头像">
                    <span>支持jpg、png、bmp格式的图片，且文件小于20M</span>
                </div>
                <div class="change-middle-container">
                    <div class="middle-left">
                        <img src="../../img/selfcenter/upload.png" alt="">
                    </div>
                    <div class="middle-right">
                        <span>头像预览</span>
                        <div class="big-avatar">
                            <img src="http://p1.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=180y180" alt="">
                            <p>大尺寸头像（180x180像素）</p>
                        </div>
                        <div class="small-avatar">
                            <img src="http://p1.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=180y180" alt="">
                            <p>小尺寸头像（40x40像素）</p>
                        </div>

                    </div>
                </div>
                <div class="change-bottom-container">
                    <input type="button" value="保存" disabled="disabled">
                    <input type="button" value="取消">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style type="text/css" scoped>
    *{
        padding: 0;
        margin: 0;

    }
    .changebg{
        background-color: rgb(245,245,245);
    }
    .change-container {
        background-color: white;
        width: 980px;
        margin: 0 auto;
        border: 1px lightgray solid;
        padding: 40px;
    }
    .change-head{
        border-bottom: 2px #d13030 solid;
        padding-bottom: 10px;
    }
    .change-head a:nth-child(1){
        color: #0c73c2;
    }
    a{
        color: black;
    }
    .change-head span:nth-child(2){
        text-decoration: none;

    }
    .change-top-container{
        padding: 26px 0px 10px 0px;
    }
    .change-top-container input{
        width: 95px;
        height: 31px;
        border-radius: 5px;
        border: 1px lightgray solid;
        font-size: 12px;
        background:  linear-gradient(to bottom,rgb(255,255,255),rgb(241,241,241));
    }
    .change-top-container span {
        font-size: 12px;
        color: gray;
        margin-left: 20px;
    }
    .upload{
        display: none;
    }
    .change-middle-container{
        display: flex;
        margin-top: 20px;
    }
    .middle-left{
        border-right: 1px lightgray solid;
        padding-right: 40px;
    }
    .middle-left img{
        border: 1px lightgray solid;
        width: 322px;
        height: 322px;
    }
    .middle-right{
        padding-left: 40px;
    }
    .middle-right span{
        display: block;
        font-size: 12px;
    }
    .small-avatar{
        margin-top: 20px;
    }
    .big-avatar >img {
        width: 180px;
        height: 180px;
        margin-top: 20px;
    }
    .small-avatar >img{
        width: 40px;
        height: 40px;
    }
    .middle-right p{
        font-size: 12px;
        color: gray;
        margin-top: 10px;
    }
    .change-bottom-container{
        margin-top: 40px;
        padding-bottom: 80px;
    }
    .change-bottom-container input{
        width: 80px;
        height: 31px;
        background: linear-gradient(to bottom,rgb(255,255,255),rgb(241,241,241));
        border: 1px lightgray solid;
        border-radius: 5px;
        margin-left: 20px;

    }

</style>