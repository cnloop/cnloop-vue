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
    <div class="nav-main">
      <div class="wrp">
        <div class="left">
          <router-link to="/">
            <span>所有分类</span>
            <span class="triangle"></span>
          </router-link>
          <router-link to="/">分类</router-link>
          <router-link to="/">最新</router-link>
          <router-link to="/">热门</router-link>
        </div>
        <div class="right">
          <router-link to="/">
            <span>+</span>
            <span>发表新主题</span>
          </router-link>
        </div>
      </div>
    </div>
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
export default {};
</script>
<style lang="less" scoped>
.home {
  overflow: hidden;
}
.home .nav {
  position: fixed;
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
.home .nav-main {
  margin-top: 88px;
  display: flex;
  justify-content: center;
}
.home .nav-main .wrp {
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 600px;
    height: 40px;
    display: flex;
    align-items: center;
    a {
      color: #000;
      padding: 5px 10px;
      font-size: 15px;
      margin-right: 15px;
      border-radius: 3px;
    }
    a:first-child {
      width: 80px;
      display: inline-flex;
      justify-content: space-between;
      background-color: #e9e9e9;
      align-items: center;
    }
    a:first-child .triangle {
      width: 0px;
      height: 0px;
      border-left: 6px solid #000;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
    }
    a:last-child {
      color: #fff;
      background-color: #34495e;
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
.home .content {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
.home .content .wrp {
  width: 1100px;
}
</style>

