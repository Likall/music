<template>
    <div class="left">
        <div class="tuijian">
            <h5 class="ul-title"><strong>推荐</strong></h5>
            <nav class="navbar bg-light">
                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link " href="#">推荐歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">入驻歌手</a>
                    </li>
                </ul>

            </nav>
            <hr class="hr"/>
        </div>
        <div class="tuijian">
            <h5 class="ul-title"><strong>华语</strong></h5>
            <nav class="navbar bg-light">
                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link " href="#">华语男歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">华语女歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">华语组合乐队</a>
                    </li>
                </ul>

            </nav>
            <hr class="hr"/>
        </div>
        <div class="tuijian">
            <h5 class="ul-title"><strong>欧美</strong></h5>
            <nav class="navbar bg-light">
                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link " href="#">欧美男歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">欧美女歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">欧美组合/乐队</a>
                    </li>
                </ul>

            </nav>
            <hr class="hr"/>
        </div>
        <div class="tuijian">
            <h5 class="ul-title"><strong>日本</strong></h5>
            <nav class="navbar bg-light">
                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link " href="#">日本男歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">日本女歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">日本组合/乐队</a>
                    </li>
                </ul>

            </nav>
            <hr class="hr"/>
        </div>
        <div class="tuijian">
            <h5 class="ul-title"><strong>韩国</strong></h5>
            <nav class="navbar bg-light">
                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link " href="#">韩国男歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">韩国女歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">韩国组合/乐队</a>
                    </li>
                </ul>

            </nav>
            <hr class="hr"/>
        </div>
        <div class="tuijian">
            <h5 class="ul-title"><strong>其他</strong></h5>
            <nav class="navbar bg-light">
                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link " href="#">其他男歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">其他女歌手</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">其他组合/乐队</a>
                    </li>
                </ul>

            </nav>
        </div>
    </div>
</template>

<style>
    *{
        padding: 0;
    }
    a{
        color: #000;
    }
    .left{
        width: 180px;
        border: 1px lightgray solid;
        background-color: rgb(249,249,249);
        padding: 0px 10px 40px;
    }
    .ul-title{
        font-size: 16px;
        height: 25px;
        margin-left: 10px;
    }
    .navbar{
        padding: 0;
        padding-left: 14px;
    }
    .navbar-nav>li{
        list-style-type: square;
        font-size: 12px;
        line-height: 19px;
        margin-left: 10px;
    }
    .navbar-nav>li:hover{
        background-position: 0 0;
        text-decoration: none;
        color: #c20c0c;
    }
    .navbar-nav li a:hover{
        background-position: 0 0;
        text-decoration: none;
        color: #c20c0c;
    }

    /*推荐*/
    .tuijian{
        margin-top: 30px;

    }
    .nav-link{
        /*display:block;*/
    }
    .hr{
        margin-top: 20px;
        padding-left: 5px;
        padding-right: 5px;
        color: gray;
    }
</style>