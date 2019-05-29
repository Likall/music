<template>
  <div class="recommend-containers">
    <div class="recommend-content">
      <div class="recommend-top-nav">
        <i class="fa fa-stop-circle" aria-hidden="true"></i>
        <span class="title">热门推荐</span>
        <nav class="breadcrumb">
          <a
            class="breadcrumb-item"
            href="#"
            v-for="navItem in recommandsNav"
            :key="navItem.id"
          >{{navItem.name}}</a>
        </nav>
        <router-link class="more" to="/classfiy">
          <span>更多</span>
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </router-link>
      </div>
      <!-- 详情列表 -->
      <ul>
        <li v-for="(items,index) in recommandsInfo" :key="items.id">
          <div class="list-container">
            <router-link to="">
              <img :src="items.coverImgUrl">
            </router-link>
            <div class="bottom">
              <i class="fa fa-headphones" aria-hidden="true"></i>
              <span class="number">{{items.playCount}}</span>
              <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">{{items.name}}</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommandsInfo: [],
      recommandsNav: []
    };
  },
  mounted() {
    // 获得热门推荐歌曲
    var _this = this;
    this.$axios.get("/top/playlist?limit=8&order=hot").then(function(response) {
      if (response.data.code == 200) {
        //请求成功
        // console.log(response.data.playlists);
        // var hotSheetsObj = [];
        for (var i = 0; i < response.data.playlists.length; i++) {
          _this.recommandsInfo.push(response.data.playlists[i]);
        }
        console.log(_this.recommandsInfo);
      }
    });

    //  获得热门的歌单分类
    this.$axios.get("/playlist/hot").then(function(response) {
      if (response.data.code == 200) {
        // console.log(response);
        for (var j = 0; j < 7; j++) {
          _this.recommandsNav.push(response.data.tags[j]);
        }
        console.log(_this.recommandsNav);
      }
    });
  }
};
</script>

<style scoped>
.recommend-container {
  width: 689px;
}
.recommend-top-nav {
  height: 38px;
  border-bottom: 2px solid #d00000;
  margin-top: 18px;
}
.fa-stop-circle {
  color: #d00000;
  margin: 2px;
}
.title {
  font-size: 20px;
  margin: 0 5px;
}
.breadcrumb {
  display: inline-block;
  background-color: #ffffff;
  height: 35px;
  padding: 0;
  margin: 0;
  position: relative;
  line-height: 35px;
}
.breadcrumb-item {
  color: #666666;
  font-size: 12px;
}
.more {
  float: right;
  color: #666666;
  font-size: 12px;
  line-height: 38px;
}
.fa-long-arrow-right {
  color: #d00000;
}
ul {
  height: 500px;
  padding: 0;
  margin: 0;
  margin-left: -40px;
}
ul li {
  list-style: none;
  width: 182px;
  display: inline-block;
  float: left;
  margin-top: 25px;
}
li img {
  width: 140px;
  height: 140px;
}
.desc {
  font-size: 14px;
  height: 45px;
  overflow: hidden;
}
.desc a{
  display: inline-block;
  height: 100%;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
}
.list-container {
  width: 140px;
  float: right;
  position: relative;
  /* margin-left:40px;  */
}
.bottom {
  position: absolute;
  top: 115px;
  height: 25px;
  width: 140px;
  background-color: rgba(5, 5, 5, 0.7);
  color: #c1c1c1;
  font-size: 14px;
  line-height: 25px;
  background-position: 0 -537px;
}
.fa-headphones {
  margin-left: 10px;
}
.fa-play-circle-o {
  float: right;
  line-height: 25px;
  margin-right: 10px;
}
a {
  color: black;
}
</style>
