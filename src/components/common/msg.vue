<template>
    <div class="alertMsg" v-show="alertShow">
        <div class="content">
            <div class="top">
                <span>消息</span>
                <span @click="close">×</span>
            </div>
            <div class="center">
                <slot>消息内容...</slot>
            </div>
            <div class="down">
                <span v-show="cancel" @click="msg('cancel')">取消</span>
                <span v-show="confirm" @click="msg('confirm')">确认</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    alertShow: {
      default: false
    },
    confirm: {
      default: true
    },
    cancel: {
      default: true
    }
  },
  data() {
    return {
      isShow: "alertShow"
    };
  },
  methods: {
    msg(info) {
      this.$emit("alertMsg", info);
    },
    close() {
      this.$emit("closeAlert");
    }
  }
};
</script>

<style lang="less" scoped>
.alertMsg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  .content {
    width: 350px;
    height: 120px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:first-child {
        font-size: 18px;
      }
      span:last-child {
        color: #909399;
        font-size: 25px;
        cursor: pointer;
      }
      span:last-child:hover {
        color: #409eff;
      }
    }
    .center {
      width: 100%;
      color: #606266;
    }
    .down {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      span {
        padding: 5px 20px;
        border-radius: 2px;
        font-size: 12px;
        cursor: pointer;
      }
      span:first-child {
        border: 1px solid #dcdfe6;
      }
      span:first-child:hover {
        background-color: #ecf5ff;
        border-color: #c6e2ff;
      }
      span:last-child {
        color: #fff;
        margin-left: 10px;
        background-color: #3a8ee6;
      }
      span:last-child:hover {
        background-color: #83b2e3;
      }
    }
  }
}
</style>
