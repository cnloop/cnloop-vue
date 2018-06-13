<template>
  <div class="navtop">
    <div class="wrp">
      <h1 class="home-left">
        <router-link to="/">CNLOOP</router-link>
      </h1>
      <div class="home-right">
        <div v-if="$store.state.isLogin" class="userinfo">
          <div @click.stop="showTip" class="avaLogin">
            <avatar :size=32 username="Jane Doe"></avatar>
          </div>

          <div v-show="$store.state.isShowTip" class="tip">
            <div class="item" @click="jump('personal')">
              <span class="iconfont">&#xe622;</span>
              <span>主页</span>
            </div>
            <div class="item" @click="jump('setting')">
              <span class="iconfont">&#xe61e;</span>
              <span>设置</span>
            </div>
            <div class="item" @click="jump('search')">
              <span class="iconfont">&#xe651;</span>
              <span>搜索</span>
            </div>
            <div class="item" @click="jump('quit')">
              <span class="iconfont">&#xe60b;</span>
              <span>退出</span>
            </div>
          </div>
        </div>
        <router-link v-show="!$store.state.isLogin" to="/register" class="register">注册</router-link>
        <router-link v-show="!$store.state.isLogin" to="/login" class="login">登陆</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "vue-avatar";
export default {
  data() {
    return {
      isTip: false
    };
  },
  methods: {
    showTip() {
      this.$store.commit("changeShowTip", true);
    },
    jump(info) {
      switch (info) {
        case "personal":
          this.$router.push("/personal");
          break;
        case "setting":
          this.$router.push("/setting");
          break;
        case "search":
          this.$router.push("/search");
          break;
        case "quit":
          this.$router.push("/");
          break;
        default:
          this.$router.push("/");
      }
    }
  },
  components: {
    Avatar
  }
};
</script>
<style lang="less" scoped>
.navtop {
  position: fixed;
  z-index: 99;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
}
.navtop .wrp {
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
    .userinfo {
      position: relative;
      display: inline-flex;
      justify-content: space-between;
      .avaLogin {
        cursor: pointer;
      }
      .tip {
        position: absolute;
        top: 40px;
        left: -70px;
        width: 100px;
        height: 134px;
        background-color: #fff;
        box-shadow: 0px 1px 5px 0px #ccc;
        box-sizing: border-box;
        padding: 5px 0px;
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgb(119, 131, 156);
          padding: 5px 20px;
          cursor: pointer;
          span:nth-child(1) {
            margin-top: 2px;
          }
        }
        .item:nth-child(3),
        .item:nth-child(4) {
          span:nth-child(1) {
            font-weight: 600;
          }
        }
        .item:hover {
          background-color: #f6f6f6;
        }
      }
    }
  }
}
</style>
