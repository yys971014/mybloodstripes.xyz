<template>
    <div class="index">
        <div class="page_0">
            <el-form class="form_0" label-position="left">
                <el-form-item>
                    <img class="ima_1" alt="登录 logo" src="../../assets/logo.png" />
                </el-form-item>
                <el-form-item label="用户名" label-width="70px">
                    <el-input placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" label-width="70px">
                    <el-input placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即注册</el-button>
                    <el-button type="primary" @click="toPage('/Home')">立即登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name:"index",
    components:{

    },
    data () {
        return{
        }
    },
    methods:{
        /**页面跳转
         * 2020年3月18日 23:33:25
         */
        toPage(url){
            this.$emit("toPage",url);
        }
    }
}
</script>

<style lang="stylus">
    .index
        width 100%
        height 100%
        // 布局
        display flex
        flex-direction row-reverse
        align-items center

    // 页面
    .page_0
        width 25%
        height 55%
        background-color rgba(246,245,245,0.4)
        margin-right 260px
        // 白色登录框布局
        display flex
        flex-direction column
        align-items center
    
    .form_0
        width 80%
        height 100%
        // color red
        display flex
        flex-direction column
        align-items center
        justify-content space-around

    // 改变label颜色及属性
    .el-form-item__label
        background linear-gradient(to top right, #409EFF, #0369D3)
        -webkit-background-clip text
        color transparent
        font-size 15px
        font-weight 550
        font-style italic

    // 登录logo
    .ima_1
        width 110px
    
</style>