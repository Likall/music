<template>
  <div class="recommend-containers">
    <div class="recommend-content">
      <div class="recommend-top-nav">
        <i class="fa fa-stop-circle" aria-hidden="true"></i>
        <span class="title">热门推荐</span>
        <nav class="breadcrumb">
          <a class="breadcrumb-item" href="#">华语</a>
          <a class="breadcrumb-item" href="#">流行</a>
          <a class="breadcrumb-item" href="#">摇滚</a>
          <a class="breadcrumb-item" href="#">民谣</a>
          <a class="breadcrumb-item" href="#">电子</a>
        </nav>
        <router-link class="more" to="/classfiy">
          <span>更多</span>
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </router-link>
      </div>
      <!-- 详情列表 -->
      <ul>
        <li>
          <div class="list-container">
            <img
              src="http://p1.music.126.net/_c03p4DINPzVvGFh2tKmEA==/109951164061344469.jpg?param=140y140"
            >
            <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">一周新歌推荐</a>
            </p>
          </div>
        </li>
        <li>
          <div class="list-container">
            <img
              src="http://p2.music.126.net/QkAXUWp9qubSQt3cjq9QEQ==/109951163294274521.jpg?param=140y140"
            >
             <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">总有一个人教会你成长</a>
            </p>
          </div>
        </li>
        <li>
          <div class="list-container">
            <img
              src="http://p2.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?param=140y140"
            >
             <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">超级好听的欧美良曲</a>
            </p>
            <p></p>
          </div>
        </li>
        <li>
          <div class="list-container">
            <img
              src="http://p2.music.126.net/XbSfDMz8Tnh102K_i6jtdA==/109951164053640019.jpg?param=140y140"
            >
             <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">69期 - 鲜香麻辣（ 结婚加长版 ）</a>
            </p>
          </div>
        </li>
        <li>
          <div class="list-container">
            <img
              src="http://p1.music.126.net/_c03p4DINPzVvGFh2tKmEA==/109951164061344469.jpg?param=140y140">
             <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">听完这些歌，我们就都放下吧。</a>
            </p>
          </div>
        </li>
        <li>
          <div class="list-container">
            <img
              src="http://p1.music.126.net/_c03p4DINPzVvGFh2tKmEA==/109951164061344469.jpg?param=140y140">
             <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">纪念Bob Marley雷鬼之父 | 来自第三世界的王者</a>
            </p>
          </div>
        </li>
        <li>
          <div class="list-container">
            <img
              src="http://p1.music.126.net/_c03p4DINPzVvGFh2tKmEA==/109951164061344469.jpg?param=140y140">
             <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">我的主要成分：2%的可爱+98%的单身</a>
            </p>
          </div>
        </li>
        <li>
          <div class="list-container">
            <img
              src="http://p1.music.126.net/_c03p4DINPzVvGFh2tKmEA==/109951164061344469.jpg?param=140y140">
             <div class="bottom">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                <span class="number">1086万</span>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            </div>
            <p class="desc">
              <a href="#">晚安(cover颜人中)</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    // data(){
    //   return {};
    // },
    // mounted(){
    //  this.$axios.get('/search?keywords=fakelove').then(function(response){
    //       console.log(response);
    //    })
    // }
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
.desc{
   
    font-size: 14px;
}
.list-container{
    width: 140px;
   float: right;
   position: relative;
    /* margin-left:40px;  */
}
.bottom{
    position: absolute;
    top: 115px;
    height: 25px;
    width: 140px;
    background-color: rgba(5, 5, 5, 0.7);
    color: #c1c1c1;
    font-size: 14px;
    line-height: 25px;
    background-position:0 -537px; 
}
.fa-headphones{
  margin-left: 10px;
}
.fa-play-circle-o{
  float: right;
  line-height: 25px;
  margin-right: 10px;
}
a{
  color: black;
}
</style>
