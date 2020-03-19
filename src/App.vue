<template>
  <div id="app">
    <!-- <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- 顶部header -->
    <el-header style="height:40px">
      <div class="item" @mouseenter="mouse()">关于1</div>
      <div class="item">关于2</div>
      <div class="item">关于3</div>
    </el-header>
    <!-- 内容main -->
    <router-view @test01="test02" @toPage="toPage"/>
  </div>
</template>
<script>
// import about from "./views/About.vue"
export default {
  methods:{
    test02(){
      this.$router.push({
        path:'/hello'
      });
    },

    /**页面跳转
     * 2020年3月18日 23:31:27
     */
    toPage(url){
      this.$router.push({path:url});
    },
    mouse(){
      console.log('鼠标移入 关于1')
      alert('鼠标移入')
    }
  },
}
</script>
<style lang="stylus">
  body
    // 页面背景设置
    background-image: url(./assets/image/301737.jpg);
    // background-image: url(https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584620599&di=61e36666f62104cc6ae086b4fa5a110e&src=http://01.minipic.eastday.com/20161213/20161213135128_5a29f92732d13a0461e09c15250d4cd5_9.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;

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

  // 布局容器-顶部
  .el-header
    width 100%
    height 40px
    background-color rgba(47,38,33,0.5)
    display flex
    flex-direction row
    justify-content flex-end
    align-items center

  // 顶部框
  .item
    width 60px
    height 100%
    // 布局
    display flex
    flex-direction column
    justify-content center
    // 字体
    color #FFFFDC
    font-weight 550

  // 居左边距
  .top_item_left
    padding-right 10px
</style>
