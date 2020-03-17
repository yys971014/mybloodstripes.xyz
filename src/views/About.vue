<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row>
      <!-- <el-button type="primary"><a  href="../hello">容器跳转</a></el-button> -->
      <el-button type="success" @click="toPage">{{title}}</el-button>
      <el-button type="info" @click="toF">父级方法</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "about",
  data(){
    return{
      title:'页面跳转'
    }
  },
  components: {
  },
  methods:{
    toPage(){
      alert("弹出")
      this.$router.push({
        path:'/hello'
      });
    },
    toF(){
      var num = 1;
      this.$emit("test01",num);
    }
  }
};
</script>
<style lang="stylus" scoped>
  $blue =  red;
  .about{
    border: solid $blue 2px
  }
</style>
