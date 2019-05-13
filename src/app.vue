<template>
  <div>
    <!-- 导航栏 -->
    <nav class="nav">
      <Nav></Nav>
    </nav>
    <!-- 轮播图 -->
    <section class="carousel">
      <Carousel></Carousel>
    </section>
    <!-- 列表 -->
    <section class="main-list">
      <section class="main-content">
        <section class="main-left-content">
          <!-- 热门推荐  -->
          <article class="recommend-container">
             <Recommend></Recommend>
          </article>
          <!-- 新碟上架 -->
          <article class="newmusic-container">
            <Newmusic></Newmusic>
          </article>
          <!-- 榜单 -->
          <article class="toplist-container">
            <Toplist></Toplist>
          </article>
        </section>
        <!-- 右边部分 -->
        <section class="main-right-container">
          <aside class="singer-container">
            <Singer></Singer>
          </aside>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
// 导入组件
import Nav from "./components/MainContainer/nav.vue";
import Carousel from "./components/MainContainer/carousel.vue";
import Recommend from "./components/MainContainer/recommend.vue";
import Newmusic from "./components/MainContainer/newmusic.vue";
import Toplist from "./components/MainContainer/toplist.vue";
import Singer from "./components/MainContainer/singer.vue";
export default {
  components: {
    Nav,
    Carousel,
    Recommend,
    Newmusic,
    Toplist,
    Singer
  }
};
</script>
<style scoped>
.nav {
  height: 105px;
}
.carousel {
  height: 336px;
}
.main-list {
  width: 100%;
  /* border: 1px solid blue; */
}
.main-content {
  width: 980px;
  /* border: 1px solid gray; */
  margin: 0 auto;
}
.main-left-content {
  width: 730px;
  border: 1px solid #D3D3D3;
  float: left;
}
.main-right-container{
   width: 250px;
   /* border: 1px solid gold; */
   float: right;
   height: 20px;
}
.recommend-container,.newmusic-container,.toplist-container{
   padding: 20px 20px 10px;
}

</style>
