<template>
  <div id="app">
    <!-- 使用路由 -->
    <router-view/>
    <!-- 使用组件 -->
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/* 引用css文件 */
  @import "assets/css/base.css";
</style>
