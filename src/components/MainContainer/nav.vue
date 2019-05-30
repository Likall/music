<template>
  <header class="header-topbar">
    <div class="lg-container">
      <!-- 第一个导航栏 -->
      <nav class="main-nav">
        <a class="navbar-brand" href="#">
          <Icon name="logo" class="navbar-logo"></Icon>
          <h5 class="navbar-logo-desc">随听</h5>
        </a>
        <ul class="nav justify-content-center navbar-nav-topbar">
          <li class="nav-item nav-active nav-item-topbar m1">
            <a class="nav-link nav-link-topbar" href="#">发现音乐</a>
            <Icon name="triangle" class="triangle-topbar"></Icon>
          </li>
          <li class="nav-item nav-item-topbar m1">
            <a class="nav-link nav-link-topbar" href="#">我的音乐</a>
          </li>
          <li class="nav-item nav-item-topbar m2">
            <a class="nav-link nav-link-topbar" href="#">朋友</a>
          </li>
          <li class="nav-item nav-item-topbar m2">
            <a class="nav-link nav-link-topbar" href="#">商城</a>
          </li>
          <li class="nav-item nav-item-topbar m3">
            <a class="nav-link nav-link-topbar" href="#">音乐人</a>
          </li>
        </ul>
        <form class="form-inline form-search">
          <div class="search-topbar">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="input-topbar" type="search" placeholder="音乐" aria-label="Search">
          </div>
        </form>
        <button class="btn btn-sm btn-topbar" type="button">创作中心</button>
        <div  class="login-topbar" v-show="false">
        <a class="link-login-topbar" style="color:#979797"  data-toggle="modal" data-target="#myModal"  >登录</a>
        <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <router-link to="/selfcenter" class="login-topbar"  style="background-color:transparent;">
          <img src="../../img/li/zhanghuimei.png" class="avater">
        </router-link>
        <!--<router-link to="/login" class="login-topbar" >-->
          <!--<a class="link-login-topbar" style="color:#979797"  data-toggle="modal" data-target="#myModal" >登录</a>-->
          <!--<i class="fa fa-caret-down" aria-hidden="true"></i>-->
        <!--</router-link>-->

      </nav>
    </div>
    <!-- 第二个导航栏 -->
    <div class="md-container">
      <nav class="md-topbar">
        <ul class="nav justify-content-center md-nav-topbar">
          <li class="nav-item md-nav-item-topbar s1" >
             <router-link to="/recommands" class="nav-link">
              <span>推荐</span>
            </router-link>
          </li>
          <li class="nav-item md-nav-item-topbar s2">
            <router-link to="/rakinglist" class="nav-link">
              <span>排行榜</span>
            </router-link>
          </li>
          <li class="nav-item md-nav-item-topbar s1">
            <router-link class="nav-link" to="/classfiy">
              <span>歌单</span>
            </router-link>
          </li>
          <!-- <li class="nav-item md-nav-item-topbar s3">
            <router-link class="nav-link" to="#">
              <span>主播电台</span>
            </router-link>
          </li> -->
          <li class="nav-item md-nav-item-topbar s1">
            <router-link class="nav-link" to="/singer">
              <span>歌手</span>
            </router-link>
          </li>
          <li class="nav-item md-nav-item-topbar s3">
            <router-link class="nav-link" to="/newmusic">
              <span>新碟上架</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <ModalMain></ModalMain>

  </header>
</template>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.header-topbar {
  position: absolute;
  width: 100%;
  padding-left: 0px;
  padding: right 0px;
}

/* 第一个导航 */

.lg-container {
  position: relative;
  width: 100%;
  background-color: #353c42;
  height: 70px;
}

.main-nav {
  width: 1100px;
  height: 70px;
  margin: 0 auto;
}

.navbar-logo {
  width: 40px;
  height: 40px;
}

.navbar-logo-desc {
  display: inline-block;
  color: white;
  margin-top: 20px;
}

/* .navbar-row {
    /* width: 1100px; */
/* margin: 0 auto;
} */

.navbar-brand {
  height: 70px;
  line-height: 50px;
  float: left;
  margin-left: 100px;
}

.navbar-nav-topbar,
.form-search,
.btn-topbar {
  float: left;
  margin-left: 15px;
}
.form-search {
  margin-top: 19px;
}
.nav-active {
  background-color: #000000;
}

.nav-active .nav-link-topbar {
  color: white;
}

.nav-link-topbar {
  color: white;
  font-size: 14px;
  height: 70px;
  line-height: 70px;
  color: #cccccc;
}

.nav-item-topbar:hover .nav-link-topbar {
  color: white;
  background-color: #000000;
  /* height: 70px; */
}

.m1 {
  width: 94px;
  height: 70px;
  text-align: center;
}

.m2 {
  width: 74px;
  height: 70px;
  text-align: center;
}

.m3 {
  width: 84px;
  height: 70px;
  text-align: center;
}

.fa-search {
  /* width: 50px;
    height: 50px; */
  color: #3e3e3e;
  margin-left: 8px;
  line-height: 32px;
}

.search-topbar {
  width: 158px;
  height: 32px;
  border: 1px solid #292929;
  background-color: white;
  border-radius: 32px;
}

.input-topbar {
  width: 115px;
  height: 20px;
  border: 1px solid transparent;
  opacity: 1;
  font-size: 12px;
}

.triangle-topbar {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 86%;
}

.input-topbar:focus {
  outline: none;
}

.btn-topbar {
  width: 90px;
  height: 32px;
  border: 1px solid #505050;
  color: #cccccc;
  background-color: #353c42;
  border-radius: 32px;
  margin-top: 19px;
  margin-left: 15px;
}

.btn-topbar:hover {
  border: 1px solid #cccccc;
  color: #cccccc;
}

.login-topbar {
  line-height: 70px;
  margin-left: 15px;
  cursor: pointer;
  float: left;
}

.link-login-topbar {
  text-decoration: none;
  color: #505050;
  font-size: 14px;
}

.fa-caret-down {
  color: #979797;
}

/* 第二个导航 */
.md-container {
  position: relative;
  width: 100%;
  height: 35px;
  background-color: #d80000;
  border-bottom: 1px solid #a40011;
}

.md-topbar {
  width: 1100px;
  margin: 0 auto;
}

.md-nav-topbar {
  float: left;
  margin-left: 185px;
}

/* .mdactive {
  background-color: #ac0000;
  border-radius: 20px;
} */
.nav-link {
  padding: 0px;
  /* margin-top: -2px; */
}
.s1 {
  width: 54px;
}
.s2 {
  width: 64px;
}
.s3 {
  width: 74px;
}
.md-nav-item-topbar {
  height: 22px;
}
.s1,
.s2,
.s3 {
  margin: 5px 9px;
  text-align: center;
}
.md-nav-topbar li span {
  color: #ffffff;
  font-size: 12px;
}
.md-nav-item-topbar :hover {
  background-color: #ac0000;
  border-radius: 20px;
  height: 24px;
}

/* 设置选中路由高亮 */
.router-link-active{
  background-color: #ac0000;
  border-radius: 20px;
}
  /*个人中心头像*/
  .avater{
    height: 30px;
    width: 30px;
    border-radius: 30px;
  }
</style>
<script>

  import ModalMain from "../LoginContainer/modalmain.vue"
export default {
  data(){
    return{
      type:'recommands'
    }
  },
  methods:{
    changeToRakingList(){
      this.type = 'rakinglist';
    }
  },
  components:{
    ModalMain
  }
};
</script>
