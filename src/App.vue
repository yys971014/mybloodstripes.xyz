<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view @test01="test02"/>
  </div>
</template>
<script>
import about from "./views/About.vue"
export default {
  methods:{
    test02(){
      this.$router.push({
        path:'/hello'
      });
    }
  },
}
</script>
<style lang="scss">
body{
  background-image: url(./assets/301737.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // 布局相关设置
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app {
  // 大小相关设置
  width: 96vw;
  height: 96vh;
  // 字体相关设置
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: gray;
  opacity:0.4;
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
