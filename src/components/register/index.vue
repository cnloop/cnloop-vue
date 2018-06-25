<template>
  <div class="register">
    <div class="register-wrp">
      <h1 @click="$router.push('/')">CNLOOP</h1>
      <div class="register-main">
        <div class="username">
          <span>账号</span>
          <input type="text" placeholder="Username" v-model="username">
        </div>
        <div class="password">
          <span>密码</span>
          <input type="password" placeholder="Password" v-model="password_one">
        </div>
        <div class="password">
          <span>确认密码</span>
          <input type="password" placeholder="Password" v-model="password_two">
        </div>
        <a href="#" @click.prevent="register" class="btnregister">注册</a>
      </div>
      <div class="register-login">
        已有账号？
        <router-link to="/login">点击登陆</router-link>
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
export default {
  data() {
    return {
      alertMsg: "",
      username: "",
      password_one: "",
      password_two: ""
    };
  },
  methods: {
    async register() {
      try {
        var result = await this.$http.post("/register", {
          username: this.username,
          password: this.password_one
        });
        // console.log(result);
        saveUserInfo(result.data.data);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  display: flex;
  justify-content: center;
  overflow-y: hidden;
}

.register-wrp {
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
.register-main {
  width: 358px;
  height: 300px;
  box-shadow: 0px 0px 2px #ccc;
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

  .btnregister {
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
  .btnregister:active {
    background-color: #3b8b16;
  }
}

.register-login {
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

