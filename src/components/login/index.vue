<template>
    <div class="login">
        <div class="login-wrp">
            <h1>CNLOOP</h1>                    
            <div class="login-main">
                <div class="username">
                    <span>账号</span>
                    <input type="text" placeholder="Username">
                </div>
                <div class="password">
                    <div class="title">
                        <span>密码</span>
                        <a href="#">忘记密码？</a>
                    </div>
                    <input type="text" placeholder="Password">
                </div>
                <a href="#" class="btnLogin">登陆</a>
            </div>
            <div class="login-register">
                没有账号？
                <a href="#">点击注册</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.login {
  height: 100%;
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
}
</style>

