<template>
  <div class="login">
    <div class="login-wrp">
      <h1 @click="$router.push('/')">CNLOOP</h1>
      <div class="login-main">
        <div class="username">
          <span>账号</span>
          <input type="text" placeholder="Username" v-model="username">
        </div>
        <div class="password">
          <div class="title">
            <span>密码</span>
            <a href="#">忘记密码？</a>
          </div>
          <input type="password" placeholder="Password" v-model="password">
        </div>
        <a href="" @click.prevent="login" class="btnLogin">登陆</a>
      </div>
      <div class="login-register">
        没有账号？
        <router-link to="/register">点击注册</router-link>
      </div>
      <transition name="alertMsg">
        <div class="register-alertMsg" v-show="alertMsg">
          <span>{{alertMsg}}</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { saveUserInfo } from "@/assets/js/auth";
import { removeUserInfo } from "@/assets/js/auth";
export default {
  data() {
    return {
      username: "",
      password: "",
      alertMsg: ""
    };
  },
  created() {
    // axios拦截403 => 跳转到login => 目的是删除本地存储
    this.getCode();
    // github登陆 => 后台重定向到login => 并且携带用户信息包括token => 存储到本地
    this.github();
  },
  methods: {
    async login() {
      var result = await this.$http.post("/login", {
        username: this.username,
        password: this.password
      });
      if (result.data.code === 200) {
        saveUserInfo(result.data.data);
        this.$router.push("/");
      } else {
        this.alertMsg = "账号或密码错误，请确认后再次输入";
      }
    },
    getCode() {
      var code = this.$route.params.code;
      if (code && code == 1) {
        removeUserInfo();
        this.alertMsg = "您的账号需要重新登陆";
      }
    },
    github() {
      var data = this.$route.query.data;
      if (data) {
        saveUserInfo(JSON.parse(data));
        this.$router.push("/");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  overflow-y: hidden;
}

.login-wrp {
  margin-top: 100px;
  h1 {
    letter-spacing: 4px;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    cursor: pointer;
  }
}
.login-main {
  box-shadow: 0px 0px 2px #ccc;
  width: 358px;
  height: 235px;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  padding: 20px;
  .username,
  .password {
    width: 100%;
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
      font-weight: bold;
    }
    input {
      margin-top: 12px;
      margin-bottom: 12px;
      height: 34px;
      font-size: 14px;
      color: rgb(85, 85, 85);
      background-color: rgb(255, 255, 255);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(204, 204, 204);
      border-radius: 4px;
      padding-left: 5px;
    }
    input:focus {
      box-shadow: rgba(0, 0, 0, 0.075) 0px 0px 25px;
    }
  }

  .password {
    .title {
      display: flex;
      justify-content: space-between;
      a {
        font-size: 14px;
        color: rgb(51, 122, 183);
      }
    }
  }

  .btnLogin {
    margin-top: 20px;
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #fff;
    padding: 8px 0;
    background-color: #5db65d;
    border-radius: 2px;
  }
  .btnLogin:active {
    background-color: #3b8b16;
  }
}

.login-register {
  box-shadow: 0px 0px 2px #ccc;
  margin-top: 20px;
  width: 358px;
  padding: 10px 20px;
  border: 1px solid #a5acb1;
  border-radius: 2px;
  a {
    color: #1411b5e8;
  }
}

.register-alertMsg {
  margin-top: 15px;
  width: 358px;
  padding: 0px 21px;
  height: 40px;
  color: #f56c6c;
  background-color: #fef0f0;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
}
.alertMsg-enter-active,
.alertMsg-leave-active {
  transition: opacity 0.5s;
}
.alertMsg-enter, .alertMsg-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

