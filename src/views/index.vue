<template>
    <div class="index">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgba(84,92,100,0.8)"
            text-color="#fff"
            active-text-color="#24ADF3">
            <el-submenu index="1">
                <template slot="title">样式</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
                <template slot="title">
                    <router-link to="/lll">关于</router-link>
                </template>
            </el-menu-item>
        </el-menu>
        <el-button type="warning" round>首页内容</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return{
            activeIndex: '',
        }
    },
    mounted(){
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="stylus" >
    // 页面样式
    .index
        width 100%
        height 100%
        // 布局相关设置
        display flex
        flex-direction column
        align-items center
    
    // 顶部菜单栏样式
    .el-menu-demo
        width 100%
        background-color rgba(255,255,255,1)
        display flex
        flex-direction row
        justify-content flex-end
        // padding-right 50px

    .el-menu-item
        // background-color rgba(255,255,255,1)
        background-color red
        display flex
        flex-direction column
</style>