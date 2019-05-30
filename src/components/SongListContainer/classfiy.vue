<template>
  <div class="classfiy-container">
    <div class="classfiy-content">
      <!-- 上面标题部分 -->
      <div class="classfiy-top-nav">
        <h3 class="title">{{title}}</h3>
        <button class="btn-list" @click="popupVisible = !popupVisible">
          选择分类
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </button>
        <div class="popover-container" v-show="popupVisible">
          <div class="popover-box">
            <button class="btn-all" @click="getCatList('全部')">全部风格</button>
            <dl class="popover-type" style="margin-top:5px;border-top:1px solid #d3d3d3;">
              <!-- 标题 -->
              <dt class="popover-title">
                <Icon name="yuzhong" class="type-icon"></Icon>
                <span class="popover-name">语种</span>
              </dt>
              <!-- 内容 -->
              <dd>
                <ol>
                  <li v-for="(item1,index) in language" :key="item1.category+index">
                    <a href="#" class="popover-item" @click="getCatList(item1.name)">{{item1.name}}</a>
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
                  <li v-for="(item2,index) in style" :key="item2.category+index">
                    <a href="#" class="popover-item" @click="getCatList(item2.name)">{{item2.name}}</a>
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
                  <li v-for="(item3,index) in scence" :key="item3.category+index">
                    <a href="#" class="popover-item" @click="getCatList(item3.name)">{{item3.name}}</a>
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
                  <li v-for="(item4,index) in fellings" :key="item4.category+index">
                    <a href="#" class="popover-item" @click="getCatList(item4.name)">{{item4.name}}</a>
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
                  <li v-for="(item5,index) in theme" :key="item5.category+index">
                    <a href="#" class="popover-item" @click="getCatList(item5.name)">{{item5.name}}</a>
                  </li>
                </ol>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="classfiy-list">
        <div class="classfiy-item" v-for="items in playLists" :key="items.id">
          <a class="music-container">
            <img :src="items.coverImgUrl">
            <i class="mask">
              <i class="fa fa-play-circle fa-1g" aria-hidden="true"></i>
            </i>
          </a>
          <div class="desc">
            <router-link class="music-title" :to="'/playlist/'+items.id">{{items.name}}</router-link>
            <span class="singer">
              <span class="extr">by&nbsp;</span>
              <span class="singer-name">{{items.creator.nickname}}</span>
            </span>
          </div>
        </div>
        <div class="pagination-box">
          <ul class="pagination pagination-sm">
            <li class="page-item">
              <button
                type="button"
                :class="{'page-link':true,'disabled':dis}"
                @click="getBefore"
                :disabled="dis"
              >上一页</button>
            </li>
            <li class="page-item">
              <button class="page-link" @click="getAfter">下一页</button>
            </li>
            <!-- <li class="page-item">
              <input type="number" placeholder="页码" style="width:55px;"/>
              <input type="submit" value="提交" class="submit">
            </li>-->
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
      title: "全部",
      playLists: [], //歌单列表
      pageLastUpdateTime: null, //最后一次更新时间
      limitLength: 30, //请求的数据的个数
      pageCount: [],
      dis: true,
      language :[],
      style : [],
      scence :[],
      fellings : [],
      theme : []
    };
  },
  methods: {
    showpop() {
      this.popupVisible = true;
    },
    getAfter() {
      //下一页
      var _this = this;
      console.log(_this.title);
      this.$axios
        .get("/top/playlist/highquality", {
          params: { before: this.pageLastUpdateTime,
           limit: this.limitLength, 
           cat:_this.title}
        })
        .then(function(response) {
          if (response.data.code == 200) {
            //请求成功
            _this.playLists = response.data.playlists;
            console.log( _this.playLists);
            _this.pageLastUpdateTime =
            _this.playLists[_this.playLists.length - 1].updateTime;
          }
        });
    },
    getBefore() {
      console.log(this.pageCount);
    },
    judgePage() {
      if ((this.pageCount.length = 0)) {
        //页数判断，如果为0，按钮设置为不可点击
        this.dis = true;
      } else {
        this.dis = false;
      }
    },
    // 获得对应的歌单
    getCatList(name){
      var _this = this;
      this.$axios.get("/top/playlist/highquality",{
        params:{
          cat:name
        }
      }).then(function(response){
        _this.playLists = response.data.playlists;
        _this.title = name;
      })
    }
  },
  mounted() {
    var _this = this;
    // 获得全部歌单列表
    this.$axios
      .get("/top/playlist/highquality", {
        params: { limit: this.limitLength }
      })
      .then(function(response) {
        if (response.data.code == 200) {
          //请求成功
          _this.playLists = response.data.playlists;
          _this.pageLastUpdateTime =
            _this.playLists[_this.playLists.length - 1].updateTime;
        }
      });
    // 获得全部歌单分类
    this.$axios.get("/playlist/catlist").then(function(response) {
      if (response.data.code == 200) {
        // 获得categorys
        var categorys = response.data.categories;
        var subName = []; //存放所有分类
        // 语种数组
       
        subName = response.data.sub;
        for (var i = 0; i < subName.length; i++) {
          if(subName[i].category == 0){
            _this.language.push(subName[i]);
          }
          if(subName[i].category == 1){
           _this.style.push(subName[i])
          }
          if(subName[i].category == 2){
            _this.scence.push(subName[i]);
          }
          if(subName[i].category == 3){
            _this.fellings.push(subName[i])
          }
          if(subName[i].category == 4){
            _this.theme.push(subName[i]);
          }
        }
      }
    });
  }
};
</script>
<style scoped>
.classfiy-container {
  width: 980px;
  margin: 0 auto;
  /* padding: 20px 20px 10px; */
}
.classfiy-content {
  position: absolute;
  width: 980px;
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
  width: 650px;
  /* height: 344px; */
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
}
.popover-name {
  font-size: 14px;
}
dl {
  margin: 0px;
  padding: 0px;
  display: flex;
}

dt{
  width: 95px;
}

dt span{
   display: inline-block;
  margin-top: 10px;
}
dd {
  margin: 0;
  display: flex;
  width: 500px;
}
ol {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
ol li {
  list-style-type: none;
  padding: 0px;
  margin: 5px;
  display: inline-block;
  padding: 0px 8px 10px 15px;
  font-size: 12px;
  border-right: 1px solid #d3d3d3;
  /* height: 15px;
  line-height: 20px; */
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
  box-sizing: border-box;
  margin-left: 25px;
}
.classfiy-item {
  width: 187px;
  position: relative;
  float: left;
  margin-bottom: 25px;
  /* margin-left: 15px; */
}
.classfiy-item img {
  width: 140px;
  height: 140px;
  transition: all 0.5s;
}
.classfiy-item img:hover {
  transform: scale(1.1);
  cursor: pointer;
  opacity: 0.7;
}
.mask {
  position: absolute;
  top: 62%;
  left: 75%;
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
  width: 140px;
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.page-item {
  margin: 1px;
}
.disabled {
  background-color: #f4f4f4;
  color: #cacaca;
  border: 1px solid darkgray;
}
.submit {
  border-radius: 8px;
  border: transparent;
  font-size: 13px;
  color: #d00000;
  background-color: #f1f1f1;
}
</style>
