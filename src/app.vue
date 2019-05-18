<template>
  <div>
    <!-- 导航栏 -->
    <nav class="nav">
      <Nav></Nav>
    </nav>
    <transition>
        <router-view></router-view>
    </transition>
  </div>
</template>
<script>
// 导入组件
import Nav from "./components/MainContainer/nav.vue";
import Main from "./components/MainContainer/main.vue"

import Classfiy from "./components/SongListContainer/classfiy.vue"
export default {
  components: {
    Nav,
    
  },
};
</script>
<style scoped>
.nav {
  height: 105px;
}
.v-enter,.v-leave{
	opacity: 0;
	transform: translateX(300px)
}
.v-enter-active,
.v-leave-active{
	transition: all 0.2s;
}
</style>
