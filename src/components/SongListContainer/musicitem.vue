<template>
    <div class="musicitem-container">
        <div class="musicitem-content">
            <table border="1">
                <thead>
                    <tr>
                        <th class="left-th">
                            <div>&nbsp;</div>
                        </th>
                        <th class="head-title">
                            <div>歌曲标题</div>
                        </th>
                        <th class="time-th">
                            <div>时长</div>
                        </th>
                        <th class="singer-th">
                            <div>歌手</div>
                        </th>
                        <th class="alumb-th">
                            <div>所属专辑</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="body-tr" @mouseenter="show(index)" @mouseleave="disappear(index)" v-for="(items,index) in musicList" :key="items.id">
                        <td class="body-td">
                            <div class="left">
                                <span class="number">{{index+1}}</span>&nbsp;
                                <i class="iconfont play">&#xe606;</i>
                            </div>
                        </td>
                        <td class="body-td" >
                            <div class="musicname">
                                <router-link to="/song" class="music-title">{{items.title}}</router-link>
                            </div>
                        </td>
                        <td class="body-td body-time-box">
                            <div class="body-time" v-show="index!=current">
                                04:25
                            </div>
                            <div class="action-icon" v-show="index==current">
                                <a href="" class="iconfont add" title="添加到播放列表">
                                    &#xe620;
                                </a>
                                <a href="" class="iconfont connect" title="收藏">
                                   &#xe6cf;
                                </a>
                                <a href="" class="iconfont share" title="分享">
                                    &#xe655;
                                </a>
                                <a href="" class="iconfont download" title="下载">
                                    &#xe638;
                                </a>
                            </div>
                        </td>
                        <td class="body-td">
                            <div class="singer-box">
                            <a href="" class="singer-name">{{items.singername}}</a>

                            </div>
                        </td>
                        <td class="body-alumb">
                            <div class="alumb-box">
                                <a href="" class="alumb-name">{{items.alumbname}}</a>

                            </div>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ishover:true,
            current:null,
            length:null,
            musicList:[]
        }
    },
    props:[
        'deliverId'
    ],
    methods:{
        show(index){
            this.ishover = true;
            this.current = index;
        },
        disappear(index){
            this.ishover = true;
            this.current = null;
        }
    },
    created(){
        // 获得歌单列表
        var _this = this;
        this.$axios.get('/playlist/detail',{
            params:{
                id:_this.deliverId
            }
        }).then(function(response){
            console.log(response.data.playlist.tracks)
            var tracks = response.data.playlist.tracks;
            var ar = [];
            
            for(var i=0;i<tracks.length;i++){
                var list = tracks[i].ar;
                    var obj = new Object();
                    obj["title"] = tracks[i].name;
                    obj['id'] = tracks[i].id;
                    obj["alumbname"] = tracks[i].al.name;
                    obj["singername"] = tracks[i].ar[0].name;
                    _this.musicList.push(obj);
               
            }
            console.log(_this.musicList)
        })
    }
    
}
</script>
<style scoped>
th div{
    font-size: 13px;
    color: #777777;
    font-weight: normal;
    
}
tbody{
    border: 1px solid #d3d3d3;
}
th{
    border-left: 1px solid #d3d3d3;
    padding:10px;
}
.musicitem-container{
    width: 730px;
    padding-right: 20px;
}
table{
    border-top: 2px solid #C20C0C;
    border-right: 1px solid #d3d3d3;
    background-color: #f7f7f7;
    width: 686px;
}
tbody .body-tr{
    border: 1px solid #d3d3d3;
    margin-right: 1px;
}
.left-th{
    width: 75px;
}
.body-td{
    /* padding: 5px; */
    font-size: 13px;
    color: #272120;
    line-height: 32px;
    border-right: 1px solid transparent;
    /* margin: 10px; */
}
.singer-th{
    width: 110px;
}
.alumb-th{
    width: 120px;
    margin-right: 1px;
}
.time-th{
    width: 120px;
}
.body-alumb{
    font-size: 13px;
    color: #272120;
    line-height: 35px;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 120px;
}
.number{
    color: #777777;
    display: inline-block;
    padding: 0 10px;
}
.musicname{
    width: 80%;
    overflow: hidden;
    height: 35px;
}
.alumb-box,.singer-box{
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.singer-box{
    width: 80%;
}
.alumb-box{
    width: 90%;
}
.body-tr{
    height: 35px;
    overflow: hidden;
}

.head-title{
    width: 237px;
}
.music-title,.singer-name,.alumb-name{
    color: #272120;
}
.play{
    color: #777777;
}
.play:hover{
    color: #272120;
    cursor: pointer;
}
.body-time-box{
    position: relative;
}
.action-icon{
    position: absolute;
    top: 0
}
.action-icon a{
    text-decoration: none;
}
.add,.connect,.share,.download{
    color: #777777;
}
.add:hover,
.connect:hover,
.share:hover,
.download:hover{
    color: #272120;
}
</style>
