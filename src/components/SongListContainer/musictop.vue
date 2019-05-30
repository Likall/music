<template>
  <div class="musictop-container">
    <div class="left-container">
      <img
        src="http://p4.music.126.net/m_d8JztNNomCEir8LrD2oA==/109951164072139740.jpg?param=200y200"
      >
    </div>
    <div class="right-container">
      <div class="top-title">
        <i class="iconfont tag" v-html="iconfontIcon"></i>
        <span class="name">{{name}}</span>
        <h3>曾经的抱怨感慨，如今的满腔留恋</h3>
      </div>
      <MusicAction></MusicAction>
      <div class="belong-tag">
        <span>标签：</span>
        <a href class="tag-name">华语</a>
        <a href class="tag-name">华语</a>
        <a href class="tag-name">华语</a>
      </div>
      <div class="desc">
        <span class="desc-title">介绍：</span>
        <div class="desc-limit" ref="descs">
          <p>时光静走，清葱岁月，弹指间，昨夕稚气懵懂的样子也被时光淘洗的恍若两世。</p>
          <p>有人说，大学是梦想者的天堂，是无梦者的温床。也许，众生都有自己的生活轨迹与法则。</p>
          <p>成功与否，也都收拾行李，也收拾着心情。带走梦想，带走青涩，擦抹自己的足迹与回忆，在明天，继续谱写自己的剧本。</p>
          <p>曾经的抱怨，曾经的感慨，现在只剩下满腔留恋。</p>
           <p>有人说，大学是梦想者的天堂，是无梦者的温床。也许，众生都有自己的生活轨迹与法则。</p>
          <p>成功与否，也都收拾行李，也收拾着心情。带走梦想，带走青涩，擦抹自己的足迹与回忆，在明天，继续谱写自己的剧本。</p>
          <p>曾经的抱怨，曾经的感慨，现在只剩下满腔留恋。</p>
        </div>

        <span @click="showOrclose" class="showorclose">[{{datas}}]</span>
      </div>
    </div>
    <div class="bottom-container">
        <div class="bottom-title-box">
            <div class="left-title">
                <span class="title-list">歌曲列表</span>
                <span class="number">45</span>
                <span class="number">首歌</span>
            </div>
            <div class="right-title">
                <span>播放：</span>
                <span class="play-number">4152</span>
                <span>次</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import MusicAction from "./musicaction.vue";

export default {
  data() {
    return {
      iconfontIcon: "&#xe60d;",
      name: "歌单",
      datas: "展开",
      flag: true
    };
  },
  props:[
      'deliverId'
  ],
  methods: {
    showOrclose() {
      // 设置元素的高度
      if (this.flag) {
        this.$refs.descs.style.height = 100 + "%";
        this.flag = false;
        this.datas = "收起";
      } else {
        this.$refs.descs.style.height = 100 + "px";
        this.flag = true;
        this.datas = "展开";
      }
    }
  },
  components: {
    MusicAction
  }
};
</script>
<style scoped>
.musictop-container {
  width: 730px;
  display: flex;
  flex-wrap: wrap;
}
.left-container {
  width: 200px;
  height: 200px;
  border: 1px solid #d3d3d3;
}
.right-container {
  width: 510px;
  padding: 0 15px 0 15px;
}
.left-container img {
  width: 200px;
  height: 200px;
  padding: 5px 6px 6px 5px;
}
.tag {
  font-size: 45px;
  color: #d80000;
  margin-top: -12px;
}
.name {
  position: absolute;
  left: 8px;
  color: #ffffff;
  font-size: 14px;
}
.top-title {
  display: flex;
  position: relative;
  align-items: flex-start;
}
h3 {
  letter-spacing: 2px;
  color: #333333;
  font-size: 24px;
}
.belong-tag {
  height: 25px;
  margin: 25px 0 5px;
}
.belong-tag span,.desc-title {
  font-size: 12px;
  color: #777777;
}
.tag-name {
  display: inline-block;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  width: 55px;
  text-align: center;
  text-decoration: none;
  color: #777777;
  font-size: 12px;
  height: 23px;
  line-height: 23px;
  font-family: Arial, Helvetica, sans-serif;
}
.tag-name:hover {
  text-decoration: none;
  color: #777777;
}
.showorclose {
  color: #d80000;
  display: inline-block;
  margin-top: 15px;
  font-size: 12px;
}
.desc-title{
    display: inline-block;
    width: 55px;
}
.showorclose:hover {
  cursor: pointer;
  color: #8a060b;
}
.desc-limit {
  width: 468px;
  overflow: hidden;
  height: 100px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:4;
}
.desc-limit p{
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 18px;
    color: #777777;
}
.title-list{
    font-size: 20px;
    color:#333333;
}
.number{
    font-size: 12px;
    color:#777777;
}
.bottom-title-box{
    display: flex;
    justify-content: space-between;
    width: 686px;
    padding: 10px 0;
    align-items: center
}
.right-title span{
    font-size: 12px;
}
.play-number{
    color: #d80000;
    font-weight: bolder;
}
</style>
