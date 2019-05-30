<template>
    <div class="album-container">
        <ul>
            <li v-for="(item,i) in albumList" :key="i">
                <div class="circle"></div>
                <div class="middle-div"></div>
                <div class="item-album">
                    <div class="img-container">
                        <img :src=item.img alt="">
                        <div class="play-album">
                            <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                        </div>
                    </div>

                    <span>{{item.albumName}}</span>
                    <span>{{item.albumTime}}</span>
                </div>

            </li>
        </ul>
        <div class="page-container">

            <a href="#" class="a-page after"> <上一页 </a>
            <a href="#" class="pagenum" v-for="i in pageNum">{{i}}</a>
            <a href="#" class="a-page next">下一页></a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                albumList:[
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p2.music.126.net/8OgokCKVR_0CXq968-KCrw==/109951163354580981.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p2.music.126.net/SbJdGLDz9V1_sLffpjMU8g==/109951163079119875.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},
                    {img:"http://p1.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120",albumName:"双影",albumTime:"2018.8.20"},

                ],
                pageNum:4
            }
        }
    }
</script>

<style type="text/css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .album-container{
        margin-top: 20px;
    }
    .item-album{
        display: flex;
        flex-direction: column;
        width: 145px;
        height: 205px;
    }
    .album-container ul{
        list-style: none;
        display: flex;
        width: 640px;
        flex-wrap: wrap;

        justify-content: left;
    }
    .album-container li{
        width: 120px;
        margin-right: 40px;
        position: relative;
    }
    .img-container img{
        height: 120px;
        width: 120px;
        z-index: 100;
    }
    .item-album span:nth-child(2){
        font-size: 14px;
    }
    .item-album span:nth-child(1){
        font-size: 10px;
    }
    .page-container{
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .a-page{
        display: block;
        color: black;
        font-size: 12px;
        width: 71px;
        height: 26px;
        line-height: 26px;
        border: 1px lightgray solid;
        text-decoration: none;

    }
    .pagenum{
        width: 26px;
        height: 26px;
        border: 1px lightgray solid;
        margin-left: 5px;
        margin-right: 5px;
        text-decoration: none;
        color: #000;
    }
    .circle{
        width: 100px;
        height: 100px;
        background:linear-gradient(to bottom,#111111,#171717);
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: 45px;
    }
    .play-album{
        position: absolute;
        color: white;
        right: 10px;
        bottom: 10px;
        font-size: 18px;
        display: none;
    }
    .img-container{
        position: relative;
        height: 120px;
        width: 120px;
        z-index: 100;
    }
    .img-container:hover .play-album{
        display: block;
    }
    .middle-div{
        position: absolute;
        width: 8px;
        height: 110px;
        background: #FCFCFC;
        z-index: 150;
        display: flex;
        margin-top: 5px;
        opacity: 0.3;
        left: 120px;
        border-right: 1px gray solid;
        border-top: 1px gray solid;
        border-bottom: 1px gray solid;
    }
</style>