<!-- 主页展示底板
 -->
<template>
    <div class="index">
        <div class="index_0_0">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="_handleSelect"
                :default-active="activeIndex"
                background-color="rgba(0,0,0,0)"
                text-color="#fff"
                active-text-color="#24ADF3">
                <el-submenu index="0">
                    <template slot="title">首页</template>
                    <el-menu-item index="0-1">页面1</el-menu-item>
                    <el-menu-item index="0-2">选项2</el-menu-item>
                    <el-menu-item index="0-3">选项3</el-menu-item>
                    <el-menu-item index="0-4">选项4</el-menu-item>
                    <el-menu-item index="0-5">选项5</el-menu-item>
                </el-submenu>
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
        <div class="index_x index_1_0" id="div_1">
            <h1>欢迎来到我的主页</h1>
            <h2>本网站目前仅用于练习web项目</h2>
        </div>
        <div class="index_x index_2_0">
            <h1>已开发功能</h1>
        </div>
        <div class="index_x index_3_0"></div>
        <div class="index_x index_4_0"></div>
        <div class="index_x index_5_0">
            <h1>最后一页</h1>
        </div>
        <!-- <div class="index_0">
            <div class="index_1">
                <el-col>
                    <el-menu
                    default-active=""
                    class="el-menu-vertical-demo"
                    background-color="rgba(255,255,255,0.1)"
                    text-color="#fff">
                        <el-menu-item index="1">
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </div>
            <div class="index_2">
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机"
                    id="imm">
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
                <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" alt="飞机">
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data () {
        return{
            activeIndex: '0-1', // 首页展示绑定
            pageInfo_h: '', // 页面高度数据
        }
    },
    mounted(){
        this.pageInfo_h = this._getPageData();
        console.log('监听页面滚动',this.pageInfo_h)
        document.addEventListener("scroll",this.handleScroll);
    },
    methods:{
        /**
         * 固有方法--菜单栏功能
         */
        _handleSelect(key, keyPath) {
            console.log(key, keyPath);
            switch(key){
                case '0-1':
                    this._changeScroll(this.pageInfo_h.hei1);
                    break;
                case '0-2':
                    this._changeScroll(this.pageInfo_h.hei2);
                    break;
                case '0-3':
                    this._changeScroll(this.pageInfo_h.hei3);
                    break;
                case '0-4':
                    this._changeScroll(this.pageInfo_h.hei4);
                    break;
                case '0-5':
                    this._changeScroll(this.pageInfo_h.hei5);
                    break;
                case '2-1':
                    this.toPath('https://me.csdn.net/yys190418');
                    break;
                case '2-2':
                    console.log('留言')
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
         * 固有方法--获取页面高度数据
         */
        _getPageData(){
            var hei = document.getElementsByClassName('index_x')[0].offsetHeight;
            return {
                hei1 : 0,
                hei2 : hei,
                hei3 : hei * 2,
                hei4 : hei * 3,
                hei5 : hei * 4,
                hei1Sta: hei/2,
                hei2Sta: hei/2 + hei,
                hei3Sta: hei/2 + hei * 2,
                hei4Sta: hei/2 + hei * 3,
                hei5Sta: hei/2 + hei * 4,
            };
        },
        
        /**
         * 首页高度跳转
         * scroll => 目标高度（已封装）
         */
        _changeScroll(scroll){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 获取当前高度
            var boo = scroll >= scrollTop; // 方向判断
            var speed = boo ? 10 : -10; // 速度
            var diffe = Math.abs(scroll-scrollTop); // 高度差
            var time = Math.ceil(Math.abs( 800 / (diffe / speed) )); // 时间间隔
            var timer, that = this, booS = true; // 创建计时器、this引用、booS降速校验
            timer = setInterval(function(){ // 开启计时器
                scrollTop = scrollTop + speed;
                if(Math.abs(scroll-scrollTop) <= 1000 && booS){ // 降速校验
                    speed = speed /2;
                    booS = false;
                }
                that.$(document).scrollTop(scrollTop);
                if((boo&&scrollTop >= scroll)||(!boo&&scrollTop <= scroll)){ // 关闭计时器
                    clearInterval(timer);
                }
            },time);
        },

        /**
         * 监听页面滚动
         */
        handleScroll(data_h){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let hei1 = this.pageInfo_h.hei1Sta;
            let hei2 = this.pageInfo_h.hei2Sta;
            let hei3 = this.pageInfo_h.hei3Sta;
            let hei4 = this.pageInfo_h.hei4Sta;
            let hei5 = this.pageInfo_h.hei5Sta;
            // 判断是否开始拖动
            if(scrollTop == 0){
                this.$('.index_0_0').css("background-color","rgba(255,255,255,0)");
            }else{
                this.$('.index_0_0').css("background-color","#545D65");
            }
            // 首页滚动位置判断
            if(scrollTop >= 0 && scrollTop <= hei1){
                this.activeIndex = '0-1';
            }
            if(scrollTop >= hei1 && scrollTop <= hei2){
                this.activeIndex = '0-2';
            }
            if(scrollTop >= hei2 && scrollTop <= hei3){
                this.activeIndex = '0-3';
            }
            if(scrollTop >= hei3 && scrollTop <= hei4){
                this.activeIndex = '0-4';
            }
            if(scrollTop >= hei4 && scrollTop <= hei5){
                this.activeIndex = '0-5';
            }

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
    },
    destroyed(){
        // 销毁监听高度变化
        document.removeEventListener("scroll", this.handleScroll);
    },
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
        // background-color #545D65
        background-color rgba(255,255,255,0)
        display flex
        flex-direction column
        align-items center
        position fixed
        // margin-bottom 20px
    }
    
    // 顶部菜单栏样式
    .el-menu-demo{
        width 78%
        display flex
        flex-direction row
        justify-content flex-end
        border none
    }

    .index_x{
        width 100%
        height 100vh
        display flex
        flex-direction column
        align-items center
        justify-content center
    }

    .index_1_0{
        background-color rgba(0,0,0,0)
        h1{
            color #ffffff
            font-size 45px
            font-family "楷体"
        }
        h2{
            color #ffffff
            font-size 35px
            font-family "楷体"
        }
    }
    .index_2_0{
        background-color #4C8CCA
    }
    .index_3_0{
        background-color rgba(0,0,0,0)
    }
    .index_4_0{
        background-color #4C8CCA
    }
    .index_5_0{
        background-color rgba(0,0,0,0)
    }

    // // 中部两栏
    // .index_0{
    //     width 78%
    //     display flex
    //     flex-direction row
    //     justify-content space-between
    //     background-color #ffffff
    //     // 左侧目录
    //     .index_1{
    //         width 15%
    //         display flex
    //         flex-direction column
    //     }
    //     // 右侧内容
    //     .index_2{
    //         width 65%
    //         display flex
    //         flex-direction column
    //         align-items flex-start
    //         color #ffffff
    //         font-size 16px
    //         background-color rgba(84,92,100,0.6)
    //         div {
    //             margin-top 20px
    //         }
    //         img {
    //             margin-top 20px
    //             align-self center
    //         }
    //         text {
    //             text-align left
    //         }
    //     }
    //     .index_3{
    //         height 100vh
    //         width 100%
    //     }
    // }
</style>