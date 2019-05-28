<template>
    <div class="edtibg">
        <div class="editselfinfo">
            <div class="head-container">
                <h3>个人设置</h3>
            </div>
            <div class="info-container">
                <div class="left-container">
                    <div class="item">
                        <label class="lab">昵称:</label>
                        <input type="text" class="input-info">
                    </div>
                    <div class="item item-introduce">
                        <label class="lab introduce-lab">介绍:</label>
                        <textarea class="tarea" ></textarea>
                        <span>300</span>
                    </div>
                    <div class="item sex">
                        <label class="lab ">性别:</label>
                        <input type="radio"value="men">男
                        <input type="radio"value="women">女
                        <input type="radio"value="screat">保密
                    </div>
                    <div class="item select-container">
                        <label class="lab">生日:</label>
                        <select name="" >
                            <option value="">1991</option>
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                        </select>年
                        <select name="" >
                            <option value="">1991</option>
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                        </select>月
                        <select name="" >
                            <option value="">1991</option>
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                        </select>日
                    </div>
                    <div class="item select-container">
                        <label class="lab">地区:</label>
                        <select name="" >
                            <option value="">直辖市</option>
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                        </select>
                        <select name="" >
                            <option value="">北京市</option>
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                        </select>

                    </div>
                    <div class="item btn-container">
                        <button class="btn-save">保存</button>
                    </div>

                </div>
                <div class="right-container">
                    <img src="http://p2.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=140y140" alt="">
                    <div class="right-bottom">
                        <router-link to="/selfcenter/editselfinfo/changeavatar" >更换头像</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

</script>

<style lang="css" scoped>
    *{
        padding: 0;
        margin: 0;

    }
   .edtibg{
       background-color: rgb(245,245,245);
   }
    .editselfinfo{
        width: 980px;
        background-color: white;
        border: 1px lightgray solid;
        margin: 0 auto;
        padding: 40px;

    }
    .head-container{
        border-bottom: 2px #d13030 solid;
        padding-bottom: 10px;
    }
    .info-container{
        margin-top: 30px;
        display: flex;


    }
    .input-info{
        width: 292px;
    }
    .lab{
        line-height: 32px;
        text-align: right;
        width: 38px;
        font-size: 14px;
        color: gray;
    }
    .left-container{
        width: 340px;

    }
    .right-container{
        width: 140px;
        height: 140px;
        margin-left: 20px;
        position: relative;
    }
    .item{
        width: 340px;
        margin-top: 20px;
    }
    .tarea{
        height: 122px;
        width: 292px;
    }
    .introduce-lab{
        vertical-align: top;
    }
    .item-introduce{
        position: relative;
    }
    .item-introduce span{
        position: absolute;
        bottom: 8px;
        right: 15px;
        font-size: 10px;
        color: gray;
    }
   .item select{
        margin-left: 20px;
    }
    .select-container{
        font-size: 12px;
        color: gray;
    }
    .btn-save{
        width: 80px;
        height: 31px;
        border-radius: 5px;
        background-color: #3988d3;
        color: white;
        border: 0px;
        ;
    }
    .btn-container{
        margin-top: 40px;
        padding-left:50px
    }
    .sex{
        font-size: 12px;
        color: gray;
    }
    .sex input{
        margin-left: 10px;

    }
    .right-container img{
        height: 100%;
        width: 100%;
    }
    .right-bottom{
        height: 26px;
        width: 140px;
        background-color: #8e8e8e;
        position: absolute;
        bottom: 0;

        text-align: center;
        font-size: 12px;
        line-height: 26px;
        opacity: 0.8;
    }
    .right-bottom a{
        color: #fff;
        text-decoration: none;
    }
</style>