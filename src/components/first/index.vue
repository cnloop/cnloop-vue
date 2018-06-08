<template>
  <div class="first">
    <category></category>
    <overview></overview>
  </div>
</template>
<script>
import category from "@/components/category";
import overview from "@/components/overview";

export default {
  components: {
    category,
    overview
  }
};
</script>
<style lang="less" scoped>
.first {
  width: 1100px;
  display: flex;
  justify-content: space-between;
}
</style>
