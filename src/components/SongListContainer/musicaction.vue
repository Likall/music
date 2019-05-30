<template>
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
</style>
