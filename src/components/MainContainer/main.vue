<template>
  <div>
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
    <!-- 底部 -->
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>
<script>
import Carousel from "./carousel.vue";
import Recommend from "./recommend.vue";
import Newmusic from "./newmusic.vue";
import Toplist from "./toplist.vue";
import Singer from "./singer.vue";
import Footer from "./footer.vue";
export default {
  components: {
    Carousel,
    Recommend,
    Newmusic,
    Toplist,
    Singer,
    Footer
  }
};
</script>
<style scoped>
.carousel {
  height: 336px;
}
.main-list {
  width: 100%;
  height: 1343px;
}
.main-content {
  width: 980px;
  margin: 0 auto;
}
.main-left-content {
  width: 730px;
  border: 1px solid #d3d3d3;
  float: left;
}
.main-right-container {
  width: 250px;
  float: right;
  height: 20px;
}
.recommend-container,
.newmusic-container,
.toplist-container {
  padding: 20px 20px 10px;
}
footer {
  width: 100%;
  background-color: #f3f3f3;
  height: 100px;
  border: 1px solid #d3d3d3;
}
</style>
