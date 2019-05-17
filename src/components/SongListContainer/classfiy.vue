<template>
  <div class="classfiy-container">
    <div class="classfiy-content">
      <!-- 上面标题部分 -->
      <div class="classfiy-top-nav">
        <h3 class="title" >{{title}}</h3>
        <button class="btn-list" @click="popupVisible = !popupVisible">
          选择分类
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </button>
        <div class="popover-container" v-show="popupVisible">
          <div class="popover-box">
            <button class="btn-all">全部风格</button>
            <dl class="popover-type" style="margin-top:5px;border-top:1px solid #d3d3d3;">
              <!-- 标题 -->
              <dt class="popover-title">
                <Icon name="yuzhong" class="type-icon"></Icon>
                <span class="popover-name">语种</span>
              </dt>
              <!-- 内容 -->
              <dd>
                <ol>
                  <li>
                    <a href="#" class="popover-item" @click="title = '华语'">华语</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='欧美'">欧美</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='日语'">日语</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='汉语'">韩语</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='粤语'">粤语</a>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl class="popover-type">
              <!-- 标题 -->
              <dt class="popover-title">
                <Icon name="style" class="type-icon"></Icon>
                <span class="popover-name">风格</span>
              </dt>
              <!-- 内容 -->
              <dd>
                <ol>
                  <li>
                    <a href="#" class="popover-item" @click="title='流行'">流行</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='摇滚'">摇滚</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='民谣'">民谣</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='电子'">电子</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='说唱'">说唱</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='轻音乐'">轻音乐</a>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl class="popover-type">
              <!-- 标题 -->
              <dt class="popover-title">
                <Icon name="changjing" class="type-icon"></Icon>
                <span class="popover-name">场景</span>
              </dt>
              <!-- 内容 -->
              <dd>
                <ol>
                  <li>
                    <a href="#" class="popover-item" @click="title='清晨'">清晨</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='夜晚'">夜晚</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='学习'">学习</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='工作'">工作</a>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl class="popover-type">
              <!-- 标题 -->
              <dt class="popover-title">
                <Icon name="fellings" class="type-icon"></Icon>
                <span class="popover-name">心情</span>
              </dt>
              <!-- 内容 -->
              <dd>
                <ol>
                  <li>
                    <a href="#" class="popover-item" @click="title='伤感'">伤感</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='安静'">安静</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='快乐'">快乐</a>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl class="popover-type">
              <!-- 标题 -->
              <dt class="popover-title">
                <Icon name="music" class="type-icon"></Icon>
                <span class="popover-name">主题</span>
              </dt>
              <!-- 内容 -->
              <dd>
                <ol>
                  <li>
                    <a href="#" class="popover-item" @click="title='电影原声'">电影原声</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='网络歌曲'">网络歌曲</a>
                  </li>
                  <li>
                    <a href="#" class="popover-item" @click="title='经典'">经典</a>
                  </li>
                </ol>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="classfiy-list">
        <div class="classfiy-item">
          <a class="music-container">
            <img
              src="http://p2.music.126.net/yacgbi4paTbPI-GHA50RhA==/109951163666322440.jpg?param=140y140"
            >
            <i class="mask">
              <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
            </i>
          </a>
          <div class="desc">
            <a href="#" class="music-title">房东的猫</a>
            <span class="singer">
              <span class="extr">by&nbsp;</span>
              <span class="singer-name">陈粒</span>
            </span>
          </div>
        </div>
        <div class="classfiy-item">
          <a class="music-container">
            <img
              src="http://p2.music.126.net/yacgbi4paTbPI-GHA50RhA==/109951163666322440.jpg?param=140y140"
            >
            <i class="mask">
              <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
            </i>
          </a>
          <div class="desc">
            <a href="#" class="music-title">房东的猫</a>
            <span class="singer">
              <span class="extr">by&nbsp;</span>
              <span class="singer-name">陈粒</span>
            </span>
          </div>
        </div>
        <div class="classfiy-item">
          <a class="music-container">
            <img
              src="http://p2.music.126.net/yacgbi4paTbPI-GHA50RhA==/109951163666322440.jpg?param=140y140"
            >
            <i class="mask">
              <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
            </i>
          </a>
          <div class="desc">
            <a href="#" class="music-title">房东的猫</a>
            <span class="singer">
              <span class="extr">by&nbsp;</span>
              <span class="singer-name">陈粒</span>
            </span>
          </div>
        </div>
        <div class="classfiy-item">
          <a class="music-container">
            <img
              src="http://p2.music.126.net/yacgbi4paTbPI-GHA50RhA==/109951163666322440.jpg?param=140y140"
            >
            <i class="mask">
              <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
            </i>
          </a>
          <div class="desc">
            <a href="#" class="music-title">房东的猫</a>
            <span class="singer">
              <span class="extr">by&nbsp;</span>
              <span class="singer-name">陈粒</span>
            </span>
          </div>
        </div>
        <div class="classfiy-item">
          <a class="music-container">
            <img
              src="http://p2.music.126.net/yacgbi4paTbPI-GHA50RhA==/109951163666322440.jpg?param=140y140"
            >
            <i class="mask">
              <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
            </i>
          </a>
          <div class="desc">
            <a href="#" class="music-title">房东的猫</a>
            <span class="singer">
              <span class="extr">by&nbsp;</span>
              <span class="singer-name">陈粒</span>
            </span>
          </div>
        </div>
        <div class="pagination-box">
          <ul class="pagination pagination-sm">
            <li class="page-item">
              <a class="page-link" href="#"> 上一页</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">下一页</a>
            </li>
            <li class="page-item">
              <input type="number" placeholder="页码" style="width:55px;"/>
              <input type="submit" value="提交" class="submit">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupVisible: false,
      title:'全部'
    };
  },
  methods: {
    showpop() {
      this.popupVisible = true;
    }
  }
};
</script>
<style scoped>
.classfiy-container {
  width: 978px;
  margin: 0 auto;
  /* padding: 20px 20px 10px; */
}
.classfiy-content {
  position: absolute;
  width: 978px;
  border: 1px solid #d3d3dd;
  padding: 20px 20px 10px;
}
.classfiy-top-nav {
  height: 48px;
  border-bottom: 2px solid #d00000;
}
.title {
  display: inline-block;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.btn-list {
  /* padding: 5px 10px; */
  margin-left: 15px;
  height: 30px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 2px 2px gray;
  background: linear-gradient(#fdfdfd, #f1f1f1);
  background: -webkit-linear-gradient(#fdfdfd, #f1f1f1);
  background: -moz-linear-gradient(#fdfdfd, #f1f1f1);
  background: -o-linear-gradient(#fdfdfd, #f1f1f1);
  color: #007acc;
}
.btn-list:hover {
  background-color: #ffffff;
}
.mt-popup {
  left: 50%;
}
.up-icon {
  height: 35px;
  width: 35px;
  position: absolute;
  top: 15px;
  left: 75px;
}
.popover-box {
  width: 550px;
  height: 344px;
  border: 1px solid #d3d3d3;
  position: absolute;
  top: 20px;
  box-shadow: 5px 5px 10px #d3d3d3;
  z-index: 1000;
  background-color: #ffffff;
}
.popover-container {
  position: absolute;

  /* border: 1px solid black; */
}
.btn-all {
  height: 25px;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 2px 2px gray;
  color: #666666;
  background: linear-gradient(#fdfdfd, #f1f1f1);
  background: -webkit-linear-gradient(#fdfdfd, #f1f1f1);
  background: -moz-linear-gradient(#fdfdfd, #f1f1f1);
  background: -o-linear-gradient(#fdfdfd, #f1f1f1);
  margin: 10px;
}
.btn-all:hover {
  color: black;
}
.type-icon {
  width: 25px;
  height: 25px;
}
.popover-title {
  padding: 0px 15px 0px 15px;
  border-right: 1px solid #d3d3d3;
  height: 56.5px;
}
.popover-name {
  font-size: 14px;
}
dl {
  margin: 0px;
  padding: 0px;
  height: 56.5px;
  line-height: 56.5px;
  /* height: 24px; */
}
dt,
dd {
  display: inline-block;
}
dd {
  margin: 0;
}
ol {
  margin: 0;
  padding: 0;
}
ol li {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  padding: 0px 8px 0px 15px;
  font-size: 12px;
  border-right: 1px solid #d3d3d3;
  height: 15px;
  line-height: 15px;
}
li a {
  color: #666666;
}
li a:hover {
  color: black;
}
.music-container {
  width: 140px;
  height: 140px;
  display: inline-block;
  overflow: hidden;
  margin-top: 25px;
}
.classfiy-item {
  width: 187px;
  position: relative;
  float: left;
  margin-bottom: 25px;
}
.classfiy-item img {
  width: 140px;
  height: 140px;
  transition: all 0.5s;
  margin-left: 25px;
}
.classfiy-item img:hover {
  transform: scale(1.1);
  cursor: pointer;
  opacity: 0.7;
}
.mask {
  position: absolute;
  top: 65%;
  left: 62%;
  opacity: 0;
}
.music-container:hover .mask {
  opacity: 1;
}
.music-title,
.singer {
  display: block;
  margin-left: 25px;
  font-size: 14px;
}
.music-title {
  color: black;
}
.extr {
  color: #a6a6a6;
}
.singer-name {
  color: gray;
}
/* 分页 */
.pagination-box {
  clear: both;
  margin-left: 40%;
  margin-top: 15px;
  display: block;
  /* position: absolute; */
}
.submit{
  border-radius: 8px;
  border: transparent;
  font-size: 13px;
  color: #d00000;
  background-color: #f1f1f1;
}
</style>
