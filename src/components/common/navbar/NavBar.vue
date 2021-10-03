<template>
  <div class="nav-bar">
    <!-- 布局加具名插槽的使用 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
/* 设置默认样式 */
  .nav-bar {
    display: flex;
    /* 一般导航的高度是44px */
    /* 垂直居中 */
    height: 44px;
    line-height: 44px;
    /* 文字居中 */
    text-align: center;
  }

  .left {
    width: 60px;
    /* background-color: red; */
  }

  .right {
    width: 60px;
    /* background-color: red; */

  }

  .center {
    /* 占据中间 */
    flex: 1;
    /* background-color: blue; */

  }
</style>
