<template>
  <div class="musicdetails-container">
    <div class="musicdetails-content">
      <div class="musicdetails-top">
        <div class="img-box">
          <img
            src="//y.gtimg.cn/music/photo_new/T002R300x300M000001XtUYp1tUAny.jpg?max_age=2592000"
            alt="歌曲图片"
          >
        </div>
        <div class="data-content">
          <h2 title="歌曲标题">时光正好 (《夏有乔木雅望天堂》电影推广曲)时光正好 (《夏有乔木雅望天堂》电影推广曲)</h2>
          <p class="singer-desc">
            <span class="singer-title">歌手：</span>
            <a class="singer-name" href="">郁可唯</a>
          </p>
          <p class="alumbs-desc">
            <span class="alumbs-title">所属专辑：</span>
            <a class="alumbs-name" href="">时光正好</a>
          </p>

          <div class="data-action">
            <button class="play">
              <i class="fa fa-play" aria-hidden="true"></i>
              <span>播放</span>
            </button>
            <button class="add" title="添加到播放列表">
              <i class="fa fa-plus" aria-hidden="true" ></i>
            </button>
            <button class="connect">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              <span>收藏</span>
            </button>
            <button class="comment">
              <i class="fa fa-commenting-o" aria-hidden="true"></i>
              <span>(</span>
              <span>1455</span>
              <span>)</span>
            </button>
            <button class="download">
              <i class="fa fa-download" aria-hidden="true"></i>
              <span>下载</span>
            </button>
          </div>
        </div>
      </div>
      <div class="lyric-box">
          <h4>歌词</h4>
          <div class="lyric-limit">
              <div class="lyric" ref="lyric">
                  <p>
                  时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)
              </p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              <p>时光正好 (《夏有乔木雅望天堂》电影推广曲) - 郁可唯 (Yisa Yu)</p>
              </div>
              
              <span @click="showOrclose" class="showorclose">
                [{{datas}}]
              </span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
            return{
                flag:true,
                datas:'展开'
            }
        },
    methods:{
        
        showOrclose(){
            // 设置元素的高度
            if(this.flag){
                this.$refs.lyric.style.height = 100+"%";
                this.flag = false;
                this.datas = '收起';
            }else{
                this.$refs.lyric.style.height = 150+"px";
                this.flag = true;
                this.datas = '展开';
            }
        }
    }
};
</script>
<style scoped>
.musicdetails-container {
  width: 978px;
  margin: 0 auto;
  border-left: 1px solid #d3d3dd;
  border-right: 1px solid #d3d3d3;
}
.musicdetails-content {
  /* position: absolute; */
  width: 978px;
  padding: 20px 20px 10px;
}
.musicdetails-top{
    height: 250px;
}
.img-box {
  width: 250px;
  height: 250px;
  float: left;
}
img {
  width: 100%;
  height: 100%;
}
h2 {
  display: inline-block;
  width: 670px;
  height: 38px;
  font-size: 26px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0 10px 0;
}
.data-content{
    display: inline-block;
    width: 670px;
    margin-left: 10px;
}
.singer-title,.alumbs-title{
    color: #999999;
    font-size: 13px;
}
.singer-name,
.alumbs-name {
  font-size: 13px;
  color: black;
}
.singer-name:hover{
    color: #d80000;
    cursor: pointer;
}
.alumbs-name:hover{
    color: #d80000;
    cursor: pointer;
}
.data-action{
    margin-top: 20px;
}
.play,.connect,.comment,.download{
    width: 100px;
    height: 35px;
}
.connect,.comment,.download{
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    background:linear-gradient(#ffffff,#F1F1F1);
    background: -webkit-linear-gradient(#ffffff,#F1F1F1);
    background: -o-linear-gradient(#ffffff,#F1F1F1);
    background: -moz-linear-gradient(#ffffff,#F1F1F1);
}
.play{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.add,.play{
    background: linear-gradient(#FD0000,#8a060b);
    background: -webkit-linear-gradient(#FD0000,#8a060b);
    background:-o-linear-gradient(#FD0000,#8a060b);
    background: -moz-linear-gradient(#FD0000,#8a060b);
    border:1px solid #d3d3d3;
}
.add{
    width: 35px;
    height: 35px;
    margin-left: -5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    
}
.fa-play,.fa-plus{
    color: #ffffff;
}
.play span{
    color: #ffffff;
}
.play:hover{
    background: #FD0000;
}
.add:hover{
    background: #FD0000;
}
.connect:hover{
    background: #F1F1F1;
}
.comment:hover{
    background: #F1F1F1;
}
.download:hover{
    background: #F1F1F1;
}
.lyric-box{
    margin-top: 20px;
}
.lyric{
    height: 150px;
    overflow: hidden;
}
.showorclose{
  color: #d80000;
}
.showorclose:hover{
  cursor: pointer;
  color: #8a060b;
}
.lyric-limit{
  margin-top: 20px;
}
.lyric p{
  font-size: 14px;
}
</style>
