<template>
  <div id="mycarousel" class="carousel slide" data-ride="carousel"> 
    <!-- 指示符 -->
    <ul class="carousel-indicators">
      <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
      <li data-target="#mycarousel" data-slide-to="1"></li>
      <li data-target="#mycarousel" data-slide-to="2"></li>
    </ul>

    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item carousel-item-first active ">
        <img src="http://p1.music.126.net/QYws_q5R66G6JwdcaZw6sw==/109951164062261611.jpg">
      </div>
      <div class="carousel-item carousel-item-second">
        <img src="http://p1.music.126.net/BawhhpvcNuaMUR1E08B_Iw==/109951164064920394.jpg">
      </div>
      <div class="carousel-item carousel-item-third">
        <img src="http://p1.music.126.net/SMcO8l89IcUbeR126ujJSQ==/109951164063413801.jpg">
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <a class="carousel-control-prev" href="#mycarousel" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#mycarousel" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
  
</template>
<script>
export default {};
</script>
<style scoped>
/* #mycarousel{
    position: absolute;
} */
.carousel-inner img {
      width: 900px;
      height: 336px;
      display: block;
      margin: 0 auto;
  }
.carousel-item-first{
    background-color: #000000;
}
.carousel-item-second{
    background-color: #5A5A5A;
}
.carousel-item-third{
    background-color: #F2F1EF;
}
</style>
