<template>
  <div id="app">
    <transition name="fade-in" mode="out-in">
    <router-view/>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import './style/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
