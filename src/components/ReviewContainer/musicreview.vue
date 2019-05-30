<template>
  <div class="musicreview-container">
    <div class="musicreview-content">
      <div class="musicreview-list-top">
        <h4 class="musicreview-title">评论</h4>
        <span class="musicreview-total">
          共
          <span class="musicreview-flag">10</span>条评论
        </span>
      </div>
      <div class="postreview-box">
        <form>
          <textarea class="postreview-input" placeholder="期待你的评论哦" required></textarea>
          <span class="last">150</span>
          <input type="submit" class="submit" value="发表评论">
        </form>
        <div class="review-list">
          <div class="review-list-title">
            <span>精彩评论</span>
          </div>
          <ul class="review-list-box">
            <li class="review-item">
              <a href class="image">
                <img src="../../img/userhead.jpg" alt="name">
              </a>
              <h4>
                <a href="#" class="review-username">似水流年</a>
              </h4>
              <p class="review-content">走进你的故事 治愈我</p>
              <div class="review-bottom">
                <span class="review-time">2019年5月4日 11:00</span>
                <a href="#" class="give-thumbs-up" @click="addThumbsNumber">
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  <span>{{thumbsnumber}}</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="pagination-box">
          <ul class="pagination pagination-sm">
            <li class="page-item">
              <a class="page-link" href="#">上一页</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">下一页</a>
            </li>
            <li class="page-item">
              <input type="number" placeholder="页码" style="width:55px;">
              <input type="submit" value="提交" class="go">
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
      thumbsnumber: 0,
      flag: true
    };
  },
  methods: {
    addThumbsNumber() {
      this.thumbsnumber += 1;
    }
  }
};
</script>
<style scoped>
.musicreview-container {
  width: 100%;
  margin-top: 25px;
}
.musicreview-content {
  width: 100%;
}
.musicreview-list-top {
  height: 48px;
  border-bottom: 2px solid #d00000;
}
.musicreview-title{
  font-size: 20px;
}
.musicreview-list-top h4 {
  margin: 0;
  line-height: 48px;
  display: inline-block;
  margin: 0 10px 0 0;
  color: #333333;
}
.musicreview-total {
  color: #929292;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
}
.postreview-box {
  margin-top: 10px;
}
.postreview-input {
  width: 100%;
  height: 75px;
  font-size: 14px;
  border: 1px solid #d3d3d3;
}
.last {
  margin-left: 85%;
  margin-top: 5px;
  display: inline-block;
  color: #929292;
}
.submit {
  float: right;
  height: 30px;
  border: transparent;
  border-radius: 5px;
  color: #ffffff;
  background: -webkit-linear-gradient(#fd0000, #8a060b);
  background: -moz-linear-gradient(#fd0000, #8a060b);
  background: -o-linear-gradient(#fd0000, #8a060b);
  background: linear-gradient(#fd0000, #8a060b);
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0 1px 0 #8a060b;
}
.submit:hover {
  background: -webkit-linear-gradient(#fd0000, #fc0000);
  background: -moz-linear-gradient(#fd0000, #fc0000);
  background: -o-linear-gradient(#fd0000, #fc0000);
  background: linear-gradient(#fd0000, #fc0000);
}
.review-list-title {
  margin-top: 15px;
  height: 30px;
  border-bottom: 1px solid #d3d3d3;
}
.review-list-title span {
  font-size: 12px;
  font-weight: bold;
}
ul {
  margin: 15px 15px 0 0;
  padding: 0;
}
.review-item {
  list-style-type: none;
  border-bottom: 1px solid #d3d3d3;
}
.image {
  display: inline-block;
  width: 38px;
  height: 38px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.review-item h4 {
  height: 20px;
  margin-bottom: 6px;
  display: inline-block;
  margin-left: 2px;
}
.review-username {
  font-size: 12px;
}

.review-content {
  margin-left: 40px;
  font-size: 14px;
}
.review-bottom {
  margin-left: 40px;
}
.review-time {
  font-size: 12px;
  color: #929292;
}
.give-thumbs-up {
  float: right;
  color: black;
}
.give-thumbs-up:hover {
  color: #d00000;
}
.pagination-box {
  clear: both;
  margin-left: 40%;
  margin-top: 15px;
  display: block;
  /* position: absolute; */
}
.go {
  border-radius: 8px;
  border: transparent;
  font-size: 13px;
  color: #d00000;
  background-color: #f1f1f1;
}
</style>
