<template>
    <div class="topic">
        <table>
            <thead>
                <tr>
                    <th>主题</th>
                    <th>分类</th>
                    <th>用户</th>
                    <th>回复</th>
                    <th>浏览</th>
                    <th>活动</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>V-for with simple arrays: what key to use?</td>
                    <td>
                        <span></span>
                        <span>Get Help</span>
                    </td>
                    <td>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                    </td>
                    <td>10</td>
                    <td>31.3K</td>
                    <td>4月20日</td>
                </tr>
                <tr>
                    <td>V-for with simple arrays: what key to use?</td>
                    <td>
                        <span></span>
                        <span>Get Help</span>
                    </td>
                    <td>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                    </td>
                    <td>10</td>
                    <td>31.3K</td>
                    <td>4月20日</td>
                </tr>
                <tr>
                    <td>V-for with simple arrays: what key to use?</td>
                    <td>
                        <span></span>
                        <span>Get Help</span>
                    </td>
                    <td>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                    </td>
                    <td>10</td>
                    <td>31.3K</td>
                    <td>4月20日</td>
                </tr>
                <tr>
                    <td>V-for with simple arrays: what key to use?</td>
                    <td>
                        <span></span>
                        <span>Get Help</span>
                    </td>
                    <td>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                    </td>
                    <td>10</td>
                    <td>31.3K</td>
                    <td>4月20日</td>
                </tr>
                <tr>
                    <td>V-for with simple arrays: what key to use?</td>
                    <td>
                        <span></span>
                        <span>Get Help</span>
                    </td>
                    <td>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                    </td>
                    <td>10</td>
                    <td>31.3K</td>
                    <td>4月20日</td>
                </tr>
                <tr>
                    <td>V-for with simple arrays: what key to use?</td>
                    <td>
                        <span></span>
                        <span>Get Help</span>
                    </td>
                    <td>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                        <avatar username="Jane Doe" :size=25 class="td-ava"></avatar>
                    </td>
                    <td>10</td>
                    <td>31.3K</td>
                    <td>4月20日</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Avatar from "vue-avatar";
export default {
  components: {
    Avatar
  }
};
</script>
<style lang="less" scoped>
.topic {
  width: 1100px;
}
.topic table {
  width: 1100px;
}
.topic table thead {
  width: 1100px;
  tr {
    width: 1100px;
    border-bottom: 2px solid rgb(233, 233, 233);
    th {
      font-size: 14px;
      text-align: left;
      color: #919191;
      font-weight: normal;
      padding-bottom: 18px;
      width: auto;
    }
    th:nth-child(1) {
      padding-left: 10px;
    }
    th:nth-child(2) {
    }
    th:nth-child(3) {
    }
    th:nth-child(4) {
      text-align: center;
    }
    th:nth-child(5) {
      text-align: center;
    }
    th:nth-child(6) {
      text-align: center;
    }
  }
}
.topic table tbody {
  width: 1100px;
  tr {
    width: 1100px;
    border-bottom: 1px solid rgb(233, 233, 233);
    td {
      padding: 14px 0px;
    }
    td:nth-child(1) {
      max-width: 300px;
      line-height: 1.6;
      padding-left: 10px;
      font-size: 16px;
      color: #575050;
    }
    td:nth-child(2) {
      span:nth-child(1) {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: yellow;
      }
      span:nth-child(2) {
        font-size: 12px;
        font-weight: bold;
        margin-left: 3px;
      }
    }
    td:nth-child(3) {
      .td-ava {
        display: inline-block;
      }
    }
    td:nth-child(4) {
      color: #919191;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
    }
    td:nth-child(5) {
      color: #fe7a15;
      font-size: 14px;
      text-align: center;
    }
    td:nth-child(6) {
      color: #919191;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
