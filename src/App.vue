<template>
  <div id="app" @click="changestate">
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { getUserInfo } from "@/assets/js/auth";
export default {
  name: "App",
  created() {
    
    // 对本地存储信息加载到vuex
    if (getUserInfo()) {
      var user = JSON.parse(getUserInfo()).user;
      this.$store.commit("changeUser", user);
    }


    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (getUserInfo()) {
        var user = JSON.parse(getUserInfo()).user;
        this.$store.commit("changeUser", user);
      }

      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }

      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });

    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
  mounted() {
    this.$Progress.finish();
  },
  watch: {
    $route(newVal) {
      this.$store.commit("changeShowTip", false);
      this.$store.commit("changeState", false);
      this.$store.commit("changeRouteParams", newVal.params.oRn);
      this.$store.commit("changeRoutePath", newVal.path);
    }
  },
  methods: {
    changestate() {
      this.$store.commit("changeState", false);
      this.$store.commit("changeShowTip", false);
    }
  }
};
</script>

<style>
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
body,
form,
fieldset,
input,
textarea,
blockquote,
p {
  padding: 0;
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
li {
  list-style-type: none;
}
img {
  vertical-align: top;
  border: 0;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 0px;
}

/* html,body{
  height: 100%;
}
#app{
  height: 100%;
} */
</style>
