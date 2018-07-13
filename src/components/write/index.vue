<template>
  <div class="write">
    <preview @closePreview='closePreview' :isPreview='isPreview' :previewContent='content'></preview>
    <msg @alertMsg='msg' @closeAlert='closeAlert' :alertShow="isConfirm">确认离开吗？</msg>
    <msg @alertMsg='tip' @closeAlert='closeAlert' :cancel='false' :alertShow="isTip">帮您保存到了本地！</msg>
    <msg @alertMsg='tipErr' @closeAlert='closeAlert' :cancel='false' :alertShow="isTipErr">项目不能为空</msg>
    <div class="done" v-if="isDone">
      <div class="done-wrp">
        <span>上传成功，即将跳转到首页</span>
      </div>
    </div>
    <div class="wrp">
      <div class="header">
        <div class="title">
          <input type="text" placeholder="输入标题" maxlength="45" v-model="title">
        </div>
        <div class="category" @click.stop="showAllCategory">
          <div class="left">
            <span :style="{'background-color':sel.bgc}"></span>
            <span>{{sel.text}}</span>
          </div>
          <span class="right" v-rotate></span>
          <div class="samllCategory" v-show="$store.state.isShow">
            <div class="item" v-for="item in smallSel" :key="item.text" @click.stop="selectCategory(item)">
              <span :style="{'background-color':item.bgc}"></span>
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mk">
        <mavon-editor :codeStyle='codeStyle' :subfield='false' :boxShadow='false' :toolbars='toolbars' v-model="content" />
      </div>
      <div class="submit">
        <span @click="preview">预览</span>
        <span @click="save">保存</span>
        <span @click="submit">提交</span>
      </div>
    </div>
  </div>
</template>
<script>
import msg from "@/components/common/msg";
import preview from "@/components/preview";
import { mavonEditor } from "mavon-editor";
export default {
  data() {
    return {
      title: "",
      codeStyle: "atom-one-dark",
      fromPath: "/",
      content: ``,
      isConfirm: false,
      isTip: false,
      isTipErr: false,
      isPreview: false,
      isDone: false,
      sel: { bgc: "rgb(18,168,157)", text: "General Discussion" },
      smallSel: [
        { bgc: "rgb(18,168,157)", text: "General Discussion" },
        {
          bgc: "rgb(101,45,144)",
          text: "Get Help"
        },
        {
          bgc: "rgb(247,148,29)",
          text: "Show & Vue.js"
        },
        {
          bgc: "rgb(191,30,46)",
          text: "Show & CSS"
        },
        {
          bgc: "rgb(179,181,180)",
          text: "Show & JS"
        },
        {
          bgc: "rgb(37,170,226)",
          text: "Show & Node.js"
        }
      ],
      bgcStyle: {
        "background-color": "rgb(101, 45, 144)"
      },
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        code: true,
        table: true,
        help: true,
        undo: true,
        redo: true,
        trash: true,
        alignleft: true,
        aligncenter: true,
        alignright: true
      }
    };
  },
  mounted() {
    this.back();
    this.close();
    this.getSave();
  },
  methods: {
    closeAlert() {
      this.isConfirm = false;
      this.isTip = false;
      this.isTipErr = false;
    },
    closePreview() {
      this.isPreview = false;
    },
    selectCategory(item) {
      this.sel = item;
      this.$store.commit("changeState", false);
    },
    showAllCategory() {
      this.$store.commit("changeState", true);
    },
    msg(info) {
      if (info === "cancel") {
        this.isConfirm = false;
      } else {
        window.onbeforeunload = null;
        this.$router.push(this.fromPath);
      }
    },
    back() {
      var _this = this;
      window.history.pushState("123", null, document.URL);
      window.addEventListener("popstate", function() {
        _this.isConfirm = true;
        history.pushState("123", null, document.URL);
      });
    },
    close() {
      window.onbeforeunload = function(ev) {
        return true;
      };
    },
    tip(info) {
      if (info === "confirm") {
        this.isTip = false;
      }
    },
    tipErr(info) {
      if (info === "confirm") {
        this.isTipErr = false;
      }
    },
    preview() {
      this.isPreview = true;
    },
    getSave() {
      var content = `${localStorage.getItem("cnloop-mkcontent")}`;
      if (content === "null" || !content) return;
      this.content = content;
    },
    save() {
      if (!this.content) {
        this.isTipErr = true;
        return;
      }
      this.isTip = true;
      localStorage.setItem("cnloop-mkcontent", this.content);
    },
    async submit() {
      var title = this.title;
      var content = this.content;
      var category = this.sel.text;
      var user_id = this.$store.state.user.id;
      if (title && content && category) {
        var result = await this.$http.post("/topic", {
          title,
          content,
          category,
          user_id
        });
        if (result.data.code === 200) {
          localStorage.removeItem("cnloop-mkcontent");
          this.isDone = true;
          setTimeout(() => {
            this.$router.push("/all/new");
          }, 3000);
        }
      } else {
        this.isTipErr = true;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$data.fromPath = from.path;
    });
  },
  directives: {
    rotate(el, binding, vnode) {
      if (!vnode.context.$store.state.isShow) {
        el.style.transform = "rotateZ(0deg)";
      } else {
        el.style.transform = "rotateZ(90deg)";
      }
    }
  },
  components: {
    msg,
    preview
  }
};
</script>

<style lang="less">
.write {
  display: flex;
  justify-content: center;
}
.write .done {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  .done-wrp {
    width: 300px;
    height: 60px;
    border-radius: 3px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      letter-spacing: 1px;
    }
  }
}
.write .wrp {
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.write .wrp .header {
  margin-top: 20px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .title {
    width: 550px;
    height: 100%;
    border: 1px solid #d2cdcd;
    overflow-x: hidden;
    padding-left: 25px;

    input {
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      font-size: 15px;
      letter-spacing: 1px;
    }
  }
  .category {
    width: 255px;
    height: 100%;
    border: 1px solid #d2cdcd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    cursor: pointer;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:first-child {
        margin-left: 15px;
        font-size: 16px;
        background-color: #8b8ba2;
        width: 8px;
        height: 8px;
      }
      span:last-child {
        font-size: 12px;
        font-weight: bold;
        margin-left: 10px;
      }
    }
    .right {
      width: 0px;
      height: 0px;
      border-left: 6px solid #000;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      transition: all 0.2s;
      margin-right: 15px;
    }
    .samllCategory {
      position: absolute;
      top: 37px;
      left: 0px;
      width: 255px;
      z-index: 99;
      background-color: #fff;
      box-shadow: 0px 1px 5px 0px #ccc;
      .item {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        span:first-child {
          font-size: 16px;
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
}

.write .wrp .mk {
  .markdown-body {
    z-index: 98;
  }

  .v-note-wrapper .v-note-op {
    border: 1px solid #ccc !important;
  }
  .v-note-wrapper .v-note-panel {
    border: 1px solid #ccc !important;
    border-top: none !important;
  }

  .v-note-wrapper .v-note-op.shadow {
    box-shadow: none;
  }

  .v-note-wrapper .v-note-op .v-left-item {
    box-sizing: border-box !important;
  }

  .v-note-wrapper .v-note-op .v-right-item {
    box-sizing: border-box !important;
  }

  .v-note-wrapper .v-note-op .v-left-item .op-icon {
    font-size: 11px !important;
  }
  .v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-edit {
    min-height: 400px;
  }
}

.write .wrp .submit {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;
  span {
    cursor: pointer;
    border-radius: 1px;
    padding: 5px 20px;
  }
  span {
    margin-left: 20px;
    border: 1px solid #dcdfe6;
  }
  span:hover {
    background-color: #ecf5ff;
    border-color: #c6e2ff;
  }
  span:last-child {
    color: #fff;
    background-color: #42b983;
  }
  span:last-child:hover {
    background-color: #7adeb1;
  }
}
</style>


