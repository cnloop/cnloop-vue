<template>
  <div class="nav-main">
    <div class="wrp">
      <div class="left">
        <a href="#" tag="a" @click.prevent.stop="showAllCategory">
          <span>{{val}}</span>
          <span class="triangle" id="triangle" ref="triangle"></span>
          <div class="samllCategory" v-show="$store.state.smallCategory">
            <router-link class="item" to="/general/new" tag="div">
              <span></span>
              <span>General Discussion</span>
            </router-link>
            <router-link class="item" to="/help/new" tag="div">
              <span></span>
              <span>Get Help</span>
            </router-link>
            <router-link class="item" to="/vue/new" tag="div">
              <span></span>
              <span>Show & Vue.js</span>
            </router-link>
            <router-link class="item" to="/css/new" tag="div">
              <span></span>
              <span>Show & CSS</span>
            </router-link>
            <router-link class="item" to="/js/new" tag="div">
              <span></span>
              <span>Show & JS</span>
            </router-link>
            <router-link class="item" to="/node/new" tag="div">
              <span></span>
              <span>Show & Node.js</span>
            </router-link>
          </div>
        </a>
        <router-link to="/" :class="{changeBgc:!$store.state.routeParams}">首页</router-link>
        <a href="#" @click.prevent="toNew" :class="{changeBgc:$store.state.routeParams==='new'}">最新</a>
        <a href="#" @click.prevent="toHot" :class="{changeBgc:$store.state.routeParams==='hot'}">热门</a>
      </div>
      <div class="right">
        <router-link to="/write">
          <span>+</span>
          <span>发表新主题</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    val() {
      var path = this.$store.state.routePath;
      var arr = path.split("/");
      var category = "";
      switch (arr[1]) {
        case "":
          category = "所有分类";
          break;
        case "all":
          category = "所有分类";
          break;
        case "general":
          category = "General Discussion";
          break;
        case "help":
          category = "Get Help";
          break;
        case "vue":
          category = "Show & Vue.js";
          break;
        case "css":
          category = "Show & CSS";
          break;
        case "js":
          category = "Show & JS";
          break;
        case "node":
          category = "Show & Node.js";
          break;
      }
      return category;
    }
  },
  mounted() {
    this.registerDomShow();
  },
  watch: {
    "$store.state.smallCategory"(newVal) {
      if (!newVal) {
        // var triangle = document.getElementById("triangle");
        // triangle.style.transform = "rotateZ(0deg)";
        this.$refs.triangle.style.transform = "rotateZ(0deg)";
      }
    }
  },
  methods: {
    registerDomShow() {
      document.addEventListener("click", ev => {
        var targetName = ev.target.className;
        if (targetName !== "samllCategory") {
          this.$store.commit("changeSmallCategory", false);
          var triangle = document.getElementById("triangle");
          triangle.style.transform = "rotateZ(0deg)";
        }
      });
    },
    showAllCategory() {
      this.$refs.triangle.style.transform = "rotateZ(90deg)";
      this.$store.commit("changeSmallCategory", true);
    },
    toNew() {
      var path = this.$store.state.routePath;
      var arr = path.split("/");
      if (!arr[1]) {
        this.$router.push(`/all/new`);
      } else {
        this.$router.push(`/${arr[1]}/new`);
      }
    },
    toHot() {
      var path = this.$store.state.routePath;
      var arr = path.split("/");
      if (!arr[1]) {
        this.$router.push(`/all/hot`);
      } else {
        this.$router.push(`/${arr[1]}/hot`);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.nav-main {
  margin-top: 88px;
  display: flex;
  justify-content: center;
}
.nav-main .wrp {
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 600px;
    height: 40px;
    display: flex;
    align-items: center;
    .changeBgc {
      color: #fff;
      background-color: #34495e;
    }
    a {
      color: #000;
      padding: 5px 10px;
      font-size: 15px;
      margin-right: 15px;
      border-radius: 3px;
    }
    a:first-child {
      display: inline-flex;
      justify-content: space-between;
      background-color: #e9e9e9;
      align-items: center;
      position: relative;
      span:nth-child(2) {
        margin-left: 10px;
      }
    }
    a:first-child .triangle {
      width: 0px;
      height: 0px;
      border-left: 6px solid #000;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      transition: all 0.2s;
    }
    a:first-child .samllCategory {
      position: absolute;
      top: 35px;
      left: 0px;
      width: 230px;
      background-color: #fff;
      box-shadow: 0px 1px 5px 0px #ccc;
      .item {
        display: flex;
        align-items: center;
        padding: 12px 10px;
        span:first-child {
          font-size: 16px;
          color: #8b8ba2;
          width: 8px;
          height: 8px;
        }
        span:last-child {
          font-size: 12px;
          font-weight: bold;
          margin-left: 10px;
        }
      }
      .item:hover {
        background-color: #e2f5ec;
      }
      .item:nth-child(1) {
        margin-top: 0px;
        span:first-child {
          background-color: rgb(18, 168, 157);
        }
      }
      .item:nth-child(2) {
        span:first-child {
          background-color: rgb(101, 45, 144);
        }
      }
      .item:nth-child(3) {
        span:first-child {
          background-color: rgb(247, 148, 29);
        }
      }
      .item:nth-child(4) {
        span:first-child {
          background-color: rgb(191, 30, 46);
        }
      }
      .item:nth-child(5) {
        span:first-child {
          background-color: rgb(179, 181, 180);
        }
      }
      .item:nth-child(6) {
        span:first-child {
          background-color: rgb(37, 170, 226);
        }
      }
    }
  }

  .right {
    a {
      border-radius: 3px;
      width: 100px;
      color: #000;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      background-color: #e9e9e9;
    }
  }
}
</style>
