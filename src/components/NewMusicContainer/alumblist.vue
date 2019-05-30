<template>
    <div class="alumblist-container">
        <div class="left-container">
            <AlumbList></AlumbList>
            <MusicItem></MusicItem>
            <MusicReview></MusicReview>
        </div>
        <div class="right-container">
            <div class="like-container">
          <p>喜欢这张专辑的人</p>
            <LikeAlumb></LikeAlumb>
        </div>
        <div class="hot-container">
            <p>热门歌单</p>
            <HotAlumb></HotAlumb>
        </div>
        </div>
    </div>
</template>
<script>
import AlumbList from './alumbtop.vue'
import MusicItem from "../SongListContainer/musicitem.vue";
import MusicReview from "../ReviewContainer/musicreview.vue";
import LikeAlumb from "../SongListContainer/likealumb.vue";
import HotAlumb from "../SongListContainer/hotalumb.vue";
export default {
    components:{
        AlumbList,
        MusicItem,
        MusicReview,
        LikeAlumb,
        HotAlumb
    }
}
</script>

<style scoped>
.alumblist-container{
    width: 980px;
    margin: 0 auto;
    display: flex;
    border:1px solid #d3d3dd;
}
.left-container{
    width: 730px;
    padding: 50px 20px 10px;
    
}
.right-container{
    width: 250px;
    border-left: 1px solid #d3d3dd;
    padding: 0 15px 0 15px;
}
.hot-container p,.like-container p{
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #d3d3dd;
    font-size:14px;
    font-weight: bolder;
}
.like-container{
    margin-top: 10px;
}
.hot-container{
    margin-top: 25px;
}
</style>
