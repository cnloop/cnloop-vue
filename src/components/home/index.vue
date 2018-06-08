<template>
  <div class="home">
    <div class="nav">
      <div class="wrp">
        <h1 class="home-left">CNLOOP</h1>
        <div class="home-right">
          <router-link to="/register" class="register">注册</router-link>
          <router-link to="/login" class="login">登陆</router-link>
        </div>
      </div>
    </div>
    <navmain></navmain>
    <div class="content">
      <div class=".wrp">
        <router-view></router-view>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
import navmain from "@/components/navmain";
export default {
  components: {
    navmain
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeSmallCategory", false);
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
.home .nav {
  position: fixed;
  z-index: 99;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
}
.home .nav .wrp {
  width: 1100px;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  .home-left {
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: 700;
  }
  .home-right {
    .login,
    .register {
      font-size: 12px;
      color: #fff;
      padding: 5px 10px;
      background-color: #42b983;
      border-radius: 2px;
    }
    .register {
      margin-right: 20px;
    }
  }
}

.home .content {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
.home .content .wrp {
  width: 1100px;
}
</style>

