<template>
    <div class="selfmain">
        <div class="top">
            <div class="self-avatar">
                <img class="avatar-img" src="http://p2.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=180y180">
            </div>
            <div class="self-info">
                <div class="user-name">
                    <h3>YLing1234<i class="fa fa-vimeo-square" aria-hidden="true"></i></h3>
                    <button class="btn btn-edit">编辑个人资料</button>
                </div>
                <div class="user-dynamic">
                    <ul>
                        <li>
                            <h4>0</h4>
                            <p class="span-dynamic">动态</p>
                        </li>
                        <li>
                            <h4>4</h4>
                            <span  class="span-dynamic">关注</span>
                        </li>
                        <li>
                            <h4>0</h4>
                            <span  class="span-dynamic">粉丝</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom">

        </div>
    </div>
</template>

<script>

</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    body{
        background-color: rgb(245,245,245);
    }
    .selfmain{
        width: 980px;
        border: 1px gray solid;
        margin: 0 auto;
        background-color: white;
    }
    .top{
        display: flex;
        border: 5px red solid;
        padding: 40px;
    }
    .self-avatar{
        border: 1px lightgray solid;
    }
    .avatar-img{
        padding: 2px;
    }
    .user-name{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px lightgray solid;
        padding-bottom: 5px;
    }
    .user-name h3{
        font-size: 22px;
    }
    .self-info{
        margin-left: 30px;
        width: 670px;
    }
    .fa-vimeo-square{
        color: #e03a24;
        margin-left: 10px;
    }
    .btn-edit{
        background-color: rgb(253,253,253);
        height: 31px;
        width: 112px;
        font-size: 12px;
        border: 1px lightgray solid;
        margin-right: 2px;
    }
    .user-dynamic ul{
        height: 52px;
    }
    .user-dynamic ul li{
        list-style: none;
        float: left;
        padding: 0;
        margin: 0;
        width: 66px;
        margin-right: 10px;

    }
    .user-dynamic{
        border: 1px lightgray solid;
        height: 52px;
    }
    .span-dynamic{
        font-size: 12px;
    }

</style>