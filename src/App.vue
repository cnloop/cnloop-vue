<template>
  <div id="app">
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
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
      this.$store.commit("changeSmallCategory", false);
      this.$store.commit("changeRouteParams", newVal.params.oRn);
      this.$store.commit("changeRoutePath", newVal.path);
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
</style>
