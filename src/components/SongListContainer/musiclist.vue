<template>
  <div class="musiclist-container">
    <div class="musiclist-content">
      <MusicTop :deliverId="id"></MusicTop>
      <MusicItem :deliverId="id"></MusicItem>
      <MusicReview></MusicReview>
    </div>
    <div class="right-container">
      <div class="like-container">
          <p>喜欢这些歌单的人</p>
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
import MusicTop from "./musictop.vue";
import MusicItem from "./musicitem.vue";
import MusicReview from "../ReviewContainer/musicreview.vue";
import LikeAlumb from "./likealumb.vue";
import HotAlumb from "./hotalumb.vue";
// import MusicTop from './musictop.vue'
export default {
  components: {
    MusicTop,
    MusicItem,
    MusicReview,
    LikeAlumb,
    HotAlumb
  },
  data(){
      return{
          id:this.$route.params.id
      }
  }
};
</script>

<style scoped>
.musiclist-container {
  width: 980px;
  margin: 0 auto;
  display: flex;
}
.musiclist-content {
  width: 730px;
  border: 1px solid #d3d3dd;
  padding: 50px 20px 10px;
}
.right-container {
  width: 250px;
  border-right: 1px solid #d3d3dd;
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
