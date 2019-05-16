<template>
  <div class="newmusic-container">
    <div class="newmusic-content">
      <!-- 上面部分 -->
      <div class="newmusic-top-nav">
        <i class="fa fa-stop-circle" aria-hidden="true"></i>
        <span class="title">新碟上架</span>
        <span class="more">
          <span>更多</span>
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </span>
      </div>

      <!-- 下面轮播具体内容 -->
      <div class="newmusic-list">
        <div id="demo" class="carousel slide">
          <!-- 指示符 -->
          <ul class>
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <!-- 轮播图片 -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="image">
                <a class="alumbs">
                  <img
                    src="http://p3.music.126.net/Otu98pBAFmTF1oZtpclyCA==/109951164053279186.jpg?param=100y100">
                  <i class="mask">
                    <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
                  </i>
                </a>

                <div class="desc">
                  <a href="#" class="music-title">路过人间</a>
                  <span class="singer">郁可唯</span>
                </div>
              </div>
              <div class="image">
                <a class="alumbs">
                  <img
                    src="http://p3.music.126.net/jBpXM2nlImE7GF7AgBkktQ==/109951164063410613.jpg?param=100y100"
                  >
                  <i class="mask">
                    <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
                  </i>
                </a>
                <div class="desc">
                  <a href="#" class="music-title">I Don't Care</a>
                  <span class="singer">Ed&nbsp;Sheeran&nbsp;/&nbsp;Jus</span>
                </div>
              </div>
              <div class="image">
                <a class="alumbs">
                  <img
                    src="http://p4.music.126.net/ARDzEUlZ8g9rEdrLKoeIMg==/109951164025958391.jpg?param=100y100">
                  <i class="mask">
                    <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
                  </i>
                </a>

                <div class="desc">
                  <a href="#" class="music-title">ME! (feat. Brendon Urie of Panic! At The Disco)</a>
                  <span class="singer">Taylor&nbsp;Swift&nbsp;/&nbsp;Br</span>
                </div>
              </div>
              <div class="image">
                <a class="alumbs">
                  <img
                    src="http://p3.music.126.net/abJdL1HMhjPn926-IyxzWQ==/109951164033936763.jpg?param=100y100">
                  <i class="mask">
                    <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
                  </i>
                </a>

                <div class="desc">
                  <a href="#" class="music-title">Dream&nbsp;Visit</a>
                  <span class="singer">李易峰</span>
                </div>
              </div>
              <div class="image">
                <a class="alumbs">
                  <img
                    src="http://p4.music.126.net/0KCMOKHHbimwfdVvPPBpTA==/109951164034526943.jpg?param=100y100">
                  <i class="mask">
                    <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
                  </i>
                </a>

                <div class="desc">
                  <a href="#" class="music-title">孤单心事</a>
                  <span class="singer">颜人中</span>
                </div>
              </div>
            </div>
            <!-- <div class="carousel-item">
              <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
            </div>
            <div class="carousel-item">
              <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
            </div>-->
          </div>

          <!-- 左右切换按钮 -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.newmusic-container {
  width: 688px;
  /* height: 523px; */
  /* border:1px solid red; */
}
.newmusic-top-nav {
  height: 38px;
  border-bottom: 2px solid #d00000;
}
.newmusic-content{
    width: 688px;
    margin-left: -20px;
}
.fa-stop-circle {
  color: #d00000;
  margin: 2px;
}
.title {
  font-size: 20px;
  margin: 0 5px;
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
.newmusic-list {
  width: 689px;
  height: 186px;
  border: 1px solid #d3d3d3;
  margin-top: 18px;
}
ul li {
  list-style-type: none;
}

.carousel-inner {
  width: 644px;
  margin-left: 25px;
}
.image {
  width: 128px;
  /* height: ; */
  /* border: 1px solid black; */
  position: relative;
  float: left;
}
.alumbs {
  width: 99px;
  height: 99px;
  margin-left: 10px;
  display: inline-block;
  overflow: hidden;
}
.mask {
  width: 99px;
  height: 99px;
  opacity: 0;
}
img:hover {
  transform: scale(1.1);
  cursor: pointer;
  opacity: 0.8;
}
.alumbs:hover .mask {
  opacity: 1;
}

.carousel-item img {
  width: 99px;
  height: 99px;
  display: inline-block;
  /* margin-left: 10px; */
  box-shadow: 0 5px 5px #c9c9c9;
  transition: all 0.6s;
}
.fa-play-circle {
  position: absolute;
  top: 55%;
  left: 70%;
  color: rgba(0, 0, 0, 0.8);
}
.desc {
  width: 99px;
  margin-left: 10px;
}
.desc a {
  display: block;
  color: black;
  margin-top: 5px;
}
.music-title,
.singer {
  font-size: 12px;
  overflow: hidden;
  height: 18px;
  margin-right: 0px;
}
.singer {
  display: block;
  color: #666666;
}
.carousel-control-prev,
.carousel-control-next {
  width: 20px;
}
.fa-chevron-left,
.fa-chevron-right {
  color: #888888;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 40%;
}
.fa-chevron-left {
  left: 10%;
}
.fa-chevron-right {
  right: 10%;
}
/* 动画 */
/* .carousel-item img{
    transition: all .6s;
}
.carousel-item img:hover{
    transform: scale(1) 
} */
</style>

