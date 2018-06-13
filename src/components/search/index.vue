<template>
    <div class="search">
        <navtop></navtop>
        <div class="wrp">
            <div class="top">
                <input type="text" placeholder="搜索...">
                <span class="iconfont">&#xe651;</span>
            </div>
            <div class="bottom"></div>
        </div>

    </div>
</template>
<script>
import navtop from "@/components/navtop";
export default {
  components: {
    navtop
  }
};
</script>
<style lang="less" scoped>
.search {
  display: flex;
  justify-content: center;
  .wrp {
    width: 1100px;
    margin-top: 100px;
  
    .top{
        display: flex;
        align-items: center;
        input{
            outline: none;
            width: 500px;
            padding: 8px 15px;
            border-radius: 2px;
            letter-spacing: 1px;
            border: 1px solid #ccc;
        }
        span{
            margin-left: 20px;
            font-size: 20px;
            padding: 6px 8px;
            background-color: #42b983;
            font-weight: 800;
            cursor: pointer;
            color: #fff;
            border-radius: 2px;
        }
    }
  }
}
</style>
