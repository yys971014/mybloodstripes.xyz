<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view @toPage="toPage"/>
  </div>
</template>
<script>
export default {
  methods:{

    /**页面跳转
     * 2020年3月18日 23:31:27
     */
    toPage(url){
      this.$router.push({path:url});
    },
  },
}
</script>
<style lang="stylus">
  body
    // 页面背景设置
    background-image: url(../static/image/301737.jpg);
    // background-image: url(https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584620599&di=61e36666f62104cc6ae086b4fa5a110e&src=http://01.minipic.eastday.com/20161213/20161213135128_5a29f92732d13a0461e09c15250d4cd5_9.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;

  #app
    // 大小相关设置
    width: 99vw;
    height: 97vh;
    // 字体相关设置
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // 布局相关设置
    display: flex;
    flex-direction: column;
    align-items: center;
</style>
