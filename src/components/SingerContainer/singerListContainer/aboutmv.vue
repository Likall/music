<template>
    <div class="aboutmv-container">
        <ul>
            <li v-for="(item,i) in mvList" :key="i">
                <div class="item-mv" >
                    <div class="img-mv">
                        <img :src=item.img alt="">
                        <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                    </div>

                    <span >{{item.mvname}}</span>
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
                mvList:[
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                    {img:"http://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103",mvname:"If Only"},
                ],
                pageNum:9
            }
        }
    }
</script>

<style type="text/css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .aboutmv-container{
        display: flex;
        flex-wrap: wrap;
        /*justify-content: left;*/
        justify-content: space-between;
    }
    .item-mv{
        display: flex;
        flex-direction: column;
        /*width: 159px;*/
        height: 170px;
        margin-top: 30px;
        /*justify-content: left;*/
    }
    .img-mv{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 103px;
        width: 137px;
    }
    .fa-play-circle-o{
        position: absolute;
        color: lightgray;
        font-size: 44px;


    }
    .fa-play-circle-o:hover{
        color: white;
    }
    .item-mv span{
        font-size: 14px;
        margin-top: 10px;
    }
    .img-mv img{
        height: 103px;
        width: 137px;
    }
    .aboutmv-container ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;

    }

    .aboutmv-container ul li{
        margin-left: 10px;
        margin-right: 10px;

    }
    .page-container{
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: 100%;
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
</style>