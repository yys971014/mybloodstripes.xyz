<!-- 主页展示底板
 -->
<template>
    <div class="index">
        <div class="index_0_0">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="rgba(84,92,100,0.8)"
                text-color="#fff"
                active-text-color="#24ADF3">
                <el-submenu index="1">
                    <template slot="title">页面设计</template>
                    <el-menu-item index="1-1">个性设置</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">功能展示</template>
                    <el-menu-item index="2-0">后台管理</el-menu-item>
                    <el-menu-item index="2-1">CSDN博客</el-menu-item>
                    <el-menu-item index="2-2">网页留言板</el-menu-item>
                    <el-menu-item index="2-3">网页聊天室</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="index_0">
            <div class="index_1">
                <el-col>
                    <el-menu
                    default-active=""
                    class="el-menu-vertical-demo"
                    background-color="rgba(255,255,255,0.1)"
                    text-color="#fff">
                        <el-menu-item index="1">
                            <!-- <i class="el-icon-menu"></i> -->
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <!-- <i class="el-icon-menu"></i> -->
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <!-- <i class="el-icon-document"></i> -->
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <!-- <i class="el-icon-setting"></i> -->
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </div>
            <div class="index_2">
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
                <router-view/>
            </div>
        </div>
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
        /**
         * 固有方法--菜单栏功能
         */
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            switch(key){
                case '2-1':
                    this.toPath('https://me.csdn.net/yys190418');
                    break;
                case '2-2':
                    console.log('留言',this.activeIndex)
                    break;
                case '2-3':
                    this.toPage('/displayFunc/chatRoom');
                    break;
                default:{
                    console.log('未匹配功能')
                }
            }
        },

        /**
         * 测试方法
         */
        test(){
            this.$axios.post('/toWeb/login2.do',{
                name:'张三'
            }).then((ret) =>{
                console.log(ret)
            })
        },

        /**
         * toPage => 跳转页面路由
         * toPath => 跳转超链接
         * url => 跳转路径
         */
        toPage(url = ''){
            this.$router.push({path:url});
        },
        toPath(url = ''){
            window.location.href = url;
        }
    }
}
</script>

<style lang="stylus" scoped>
    // 页面样式
    .index{
        width 100%
        // height 100%
        // 布局相关设置
        display flex
        flex-direction column
        align-items center
    }

    .index_0_0{
        width 100%
        background-color #545D65
        display flex
        flex-direction column
        align-items center
        margin-bottom 20px
    }
    
    // 顶部菜单栏样式
    .el-menu-demo{
        width 78%
        display flex
        flex-direction row
        justify-content flex-end
    }

    // 中部两栏
    .index_0{
        width 78%
        display flex
        flex-direction row
        justify-content space-between
        // 左侧目录
        .index_1{
            width 15%
            display flex
            flex-direction column
        }
        // 右侧内容
        .index_2{
            width 65%
            display flex
            flex-direction column
            align-items flex-start
            color #ffffff
            font-size 16px
            background-color rgba(84,92,100,0.6)
            div {
                margin-top 20px
            }
            img {
                margin-top 20px
                align-self center
            }
            text {
                text-align left
            }
        }
    }
</style>