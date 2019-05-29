<template>
    <div class="hotworks-container">
        <div class="hotworks-top">
            <div class="hotworks-topleft">
                <div class="play">
                    <button><i class="fa fa-play-circle-o" aria-hidden="true"></i>播放</button>
                    <button><i class="fa fa-plus" aria-hidden="true"></i></button>
                </div>
                <div class="shoucang">
                    <button><i class="fa fa-folder-o" aria-hidden="true"></i>收藏热门50</button>
                </div>
            </div>
            <div class="hotworks-topright">
                <button>热门单曲
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <ul class="hot-ul">
                        <li >热门单曲</li>
                        <li>作词作品</li>
                        <li>作曲作品</li>
                    </ul>
                </button>

            </div>
        </div>
        <div class="songdes">
            <table>
                <tr v-for="(item,i) in songlist" :key="i+1">
                    <td>
                        <span class="order">{{i+1}}</span>
                        <i class="fa fa-play-circle-o play-icon" aria-hidden="true"></i>
                    </td>
                    <td>
                        <span>{{item.songname}}</span>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </td>
                    <td>
                        <span class="songtime">{{item.songtime}}</span>
                        <div class="hover-icon">
                            <i class="fa fa-plus hover-add" aria-hidden="true"></i>
                            <i class="fa fa-folder" aria-hidden="true"></i>
                            <i class="fa fa-reply" aria-hidden="true"></i>
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </div>
                    </td>
                    <td>
                        <span>{{item.albumname}}</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                songlist: [
                    {id:1,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:2,songname:"真实",songtime:"03:48",albumname:"我要快乐"},
                    {id:3,songname:"如果你也听说",songtime:"03:48",albumname:"我要快乐"},
                    {id:4,songname:"听海",songtime:"03:48",albumname:"我要快乐"},
                    {id:5,songname:"血腥爱情故事",songtime:"03:48",albumname:"我要快乐"},
                    {id:6,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:7,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:8,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:1,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:2,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:3,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:4,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:5,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:6,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:7,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
                    {id:8,songname:"人质",songtime:"03:48",albumname:"我要快乐"},
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
    .hotworks-container{
        margin-top: 20px;
    }
    .fa-play-circle-o{
        color: white;
        margin-right: 5px;
        font-size: 18px;
    }
    .play{
        display: flex;
    }
    .play button{
        background: linear-gradient(to bottom ,#4DA1E0,#1F7AC5);
        height: 31px;
        border: 0px;
        color: white;
        font-size: 14px;
    }
    .hotworks-topleft{
        display: flex;
    }
    .play button:nth-child(1) {
        width: 66px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-right: 1px #2D69A2 solid;
    }
    .play button:nth-child(2) {
        width: 31px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .fa-plus{
        color: white;
    }
    .hotworks-top{
        display: flex;
        justify-content: space-between;
    }
    .shoucang button{
        height: 31px;
        width: 95px;
        border-radius: 5px;
        border: 1px lightgray solid;
        background: linear-gradient(to bottom,#FFFFFF,#F8F8F8);
        font-size: 12px;
        margin-left: 10px;
    }
    .hotworks-topright{
        position: relative;
    }
    .hotworks-topright button{
        border: 1px lightgray solid;
        height: 31px;
        width: 95px;
        border-radius: 5px;
        background: linear-gradient(to bottom,#FFFFFF,#F8F8F8);
        font-size: 12px;
    }
    .hotworks-topright button:hover  .hot-ul{
          display: flex;
      }
    .hotworks-topright button:hover{
        background: white;
    }
    .hot-ul{
        border: 1px lightgray solid;
        position: absolute;
        display:none;
        flex-direction: column;
        list-style: none;
        width: 95px;
        top: 31px;
    }
    .hot-ul li{
        height: 30px;
        line-height:30px;
        border: 1px whitesmoke solid;
        background: whitesmoke;

    }
    .play-icon {
        color: lightgray;
    }
    .songdes table{
        width: 100%;
        margin-top: 15px;
    }
    .songdes table tr{
        display: flex;
    }
    .songdes table tr span{
        font-size: 12px;
    }
    .songdes table td{
        height: 30px;
        line-height: 30px;
        padding: 0px 10px;
    }
    .songdes table td:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 94px;
        /*flex-grow:1 ;*/

    }
    .songdes table td:nth-child(2){
        width: 320px;
    }
    .songdes table td:nth-child(3){
        display: flex;
        align-items: center;
        color: #666;
        width: 98px;
    }
    .songdes table td:nth-child(4){
    }
    .fa-youtube-play{
        color: #B50B0C;
        margin-left: 5px;
    }
    .songdes table tr:nth-child(2n+1){
        background: #F7F7F7;
    }
    .songdes table tr:nth-child(2n){
        background: white;
    }
    .order{
        color: gray;
    }
    .play-icon:hover{
        color: #636363;
    }
    .hover-icon{
        display: none;
    }

    .hover-icon .fa{

        color: lightgray;
        margin-left: 3px;
    }
    .hover-add{
        color: lightgray;
    }
    .songdes tr:hover .hover-icon{
        display: flex;

    }
    .songdes tr:hover .songtime{
        display: none;
    }
</style>