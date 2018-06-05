<template>
  <div class="first">
    <category></category>
    <overview></overview>
    <!-- <topic></topic> -->
  </div>
</template>
<script>
import category from "@/components/category";
import overview from "@/components/overview";
import topic from "@/components/topic";

export default {
  components: {
    category,
    overview,
    topic
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
