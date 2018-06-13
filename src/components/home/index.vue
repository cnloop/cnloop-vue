<template>
  <div class="home">
    <navtop></navtop>
    <navmain></navmain>
    <div class="content">
      <div class=".wrp">
        <router-view></router-view>
      </div>
    </div>
    <div class="wedge"></div>
  </div>
</template>
<script>
import navtop from "@/components/navtop";
import navmain from "@/components/navmain";
export default {
  components: {
    navtop,
    navmain
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeState", false);
      vm.$store.commit("changeRouteParams", to.params.oRn);
      vm.$store.commit("changeRoutePath", to.path);
    });
  }
};
</script>
<style lang="less" scoped>
.home {
  overflow: hidden;
}
.home .content {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
.home .content .wrp {
  width: 1100px;
}
.home .wedge {
  height: 100px;
}
</style>

