<template>
    <div class="index">
        <div class="index_0_0">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="rgba(84,92,100,0.8)"
                text-color="#fff"
                active-text-color="#24ADF3">
                <el-submenu index="1">
                    <template slot="title">我的页面</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                    <template slot="title">
                        <div @click="test()">我的设置</div>
                        <!-- <router-link to="/lll">我的设置</router-link> -->
                    </template>
                </el-menu-item>
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
                <div class="index_2_t">
                    是打发点深Vvaasvafsv
                    asfdasvasvabb
                    svafsdv
                    imgfasdfadsfadsfjadslkf是大饭店深V啦发是阿深VAV vafvasvva是大V啊发送方法vasdfva
                </div>
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
                fdasdfadsfa
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
                说法放假啦是顶峰
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
                发电部
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
         * 固有方法--菜单栏选择
         */
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },

        /**
         * 测试方法
         */
        test(){
            alert('点击了测试方法')
            this.$axios({
                method:"get",
                url:"/api/toWeb/hhh.do",
                params:{name:123}
            }).
            then((ok)=>{
                console.log(ok)
            },(err)=>{
                console.log(err)
            })
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
        width 84%
        display flex
        flex-direction row
        justify-content flex-end
    }

    // 中部两栏
    .index_0{
        width 84%
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