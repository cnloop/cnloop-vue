<template>
    <div class="write">
        <div class="wrp">
            <div class="header">
                <div class="title">
                    <input type="text" placeholder="输入题目" maxlength="45">
                </div>
                <div class="category">
                    <div class="left">
                        <span></span>
                        <span>get help</span>
                    </div>
                    <span class="biaoji">
                        a
                    </span>
                </div>
            </div>
            <div class="mk">
                <mavon-editor :subfield='false' :boxShadow='false' :toolbars='toolbars' v-model="content" />
            </div>
            <span>点击</span>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
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
  methods: {}
};
</script>

<style lang="less">
.write {
  display: flex;
  justify-content: center;
}

.write .wrp {
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.write .wrp .header {
  margin-top: 20px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .title {
    width: 590px;
    height: 100%;
    border: 1px solid #d2cdcd;
    overflow-x: hidden;
    padding-left: 25px;

    input {
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      font-size: 18px;
      letter-spacing: 1px;
      font-weight: 400;
    }
  }
  .category {
    width: 260px;
    height: 100%;
    border: 1px solid #d2cdcd;
  }
}

.v-note-wrapper .v-note-op {
  border: 1px solid #ada8a8b0 !important;
}
.v-note-wrapper .v-note-panel {
  border: 1px solid #ada8a8b0 !important;
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
</style>


