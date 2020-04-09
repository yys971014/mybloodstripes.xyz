<!-- 主页展示底板
 -->
<template>
    <div class="index">
        <!-- 顶部栏 -->
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
                    <el-menu-item index="0-1">欢迎</el-menu-item>
                    <el-menu-item index="0-2">其他主页</el-menu-item>
                    <el-menu-item index="0-3">网站功能</el-menu-item>
                    <el-menu-item index="0-4">我的连接</el-menu-item>
                    <el-menu-item index="0-5">更新记录</el-menu-item>
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
        <!-- 内容欢迎 -->
        <div class="index_x index_1_0" id="div_1">
            <h1>个人博客网站（开发中）</h1>
            <h2>本网站持续更新···</h2>
        </div>
        <!-- 其他主页 -->
        <div class="index_x index_2_0">
            <div class="page">
                <div class="page_top">
                    <font class="t_numb">02</font>
                    <font class="t_title">其他主页</font>
                    <div class="t_xian"></div>
                </div>
                <div class="page_bot">
                    <div class="page_2">
                        <div class="page_2_x">
                            <div class="page_2_img">
                                <img src="../../../src/assets/image/jt01.jpg" alt="百度">
                            </div>
                            <div class="page_2_tit">
                                <h1>百度</h1>
                            </div>
                        </div>
                        <div class="page_2_x">
                            <div class="page_2_img">
                                <img src="../../../src/assets/image/jt02.jpg" alt="CSDN博客">
                            </div>
                            <div class="page_2_tit">
                                <h1>我的博客</h1>
                            </div>
                        </div>
                        <div class="page_2_x">
                            <div class="page_2_img">
                                <img src="../../../src/assets/image/jt03.jpg" alt="GitHub">
                            </div>
                            <div class="page_2_tit">
                                <h1>GitHub</h1>
                            </div>
                        </div>
                        <div class="page_2_x">
                            <div class="page_2_img">
                                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3888737945,3658484475&fm=26&gp=0.jpg" alt="图片">
                            </div>
                            <div class="page_2_tit">
                                <h1>不知道放什么2-4</h1>
                            </div>
                        </div>
                        <div class="page_2_x">
                            <div class="page_2_img">
                                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2940079096,3732565385&fm=26&gp=0.jpg" alt="图片">
                            </div>
                            <div class="page_2_tit">
                                <h1>不知道放什么2-5</h1>
                            </div>
                        </div>
                        <div class="page_2_x">
                            <div class="page_2_img">
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=215477282,2196017897&fm=26&gp=0.jpg" alt="图片">
                            </div>
                            <div class="page_2_tit">
                                <h1>不知道放什么2-6</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 网站功能 -->
        <div class="index_x index_3_0">
            <div class="page">
                <div class="page_top">
                    <font class="t_numb">03</font>
                    <font class="t_title">网站功能</font>
                    <div class="t_xian"></div>
                </div>
                <!-- <div class="page_bot"></div> -->
            </div>
        </div>
        <!-- 我的连接 -->
        <div class="index_x index_4_0">
            <div class="page">
                <div class="page_top">
                    <font class="t_numb">04</font>
                    <font class="t_title">不知道写什么01</font>
                    <div class="t_xian"></div>
                </div>
            </div>
        </div>
        <!-- 更新记录 -->
        <div class="index_x index_5_0">
            <div class="page">
                <div class="page_top">
                    <font class="t_numb">05</font>
                    <font class="t_title">网站更新记录</font>
                    <div class="t_xian"></div>
                </div>
                <div class="page_bot updateRecord">
                    <div class="md" v-html="readme"></div>
                </div>
            </div>
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
import readme from '../../assets/markdown/updateRecord.md';
// import readme from '../../../static/markdown/test01.md';
export default {
    data () {
        return{
            activeIndex: '0-1', // 首页展示绑定
            pageInfo_h: '', // 页面高度数据（集合）
            readme: this.md2html(readme),
        }
    },
    mounted(){
        console.log('监听页面')
        this.pageInfo_h = this._getPageData();
        console.log(this.pageInfo_h)
        document.addEventListener("scroll",this._handleScroll);
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
                // case '2-2':
                //     console.log('留言')
                //     break;
                // case '2-3':
                //     this.toPage('/displayFunc/chatRoom');
                //     break;
                default:{
                    this.$message('功能未发布');
                }
            }
        },

        /**
         * 固有方法--获取页面高度数据
         */
        _getPageData(){
            var hei = document.getElementsByClassName('index_x')[0].offsetHeight;
            return {
                hei : hei,      // 页面单位高度754
                hei1 : 0,       // 0
                hei2 : hei,     // 754
                hei3 : hei * 2, // 1508
                hei4 : hei * 3, // 2262
                hei5 : hei * 4, // 3016
                hei1Sta: hei/2, // 377
                hei2Sta: hei/2 + hei,       // 1131
                hei3Sta: hei/2 + hei * 2,   // 1885
                hei4Sta: hei/2 + hei * 3,   // 2639
                hei5Sta: hei/2 + hei * 4,   // 3393
            };
        },
        
        /**
         * 公共方法--首页高度跳转
         * scroll => 目标高度（已封装）
         */
        _changeScroll(scroll){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 获取当前高度
            var boo = scroll >= scrollTop;          // 方向判断
            var speed = boo ? 10 : -10;             // 速度
            var diffe = Math.abs(scroll-scrollTop); // 高度差
            if(diffe <= this.pageInfo_h.hei/2){    // 当前页面不滚动
                return;
            };
            var time = Math.ceil(Math.abs( 800 / (diffe / speed) )); // 时间间隔
            var timer, that = this;    // 创建计时器、this引用
            var booS = (diffe >= this.pageInfo_h.hei*1.5);  // 高度差过高则执行降速
            timer = setInterval(function(){         // 开启计时器
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
         * 私有方法--监听页面滚动
         */
        _handleScroll(data_h){
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
         * 公共方法--toPage => 跳转页面路由
         * 公共方法--toPath => 跳转超链接
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
        document.removeEventListener("scroll", this._handleScroll);
    },
}
</script>

<style lang="stylus">
    // 全局样式
    @import '../../../src/assets/css/public/index.styl';
    // .md样式
    @import '../../../src/assets/css/public/markdown.styl';
    $url = "../../../src/assets/image/301737.jpg";
    // 整体背景
    body{
        background-image: url($url);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
    }
    // 页面样式
    .index{
        width 100%
        // 布局相关设置
        display flex
        flex-direction column
        align-items center
    }

    // 导航菜单
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
        border none!important
    }

    // 页面统一样式
    .index_x{
        width 100%
        height 100vh
        display flex
        flex-direction column
        align-items center
        justify-content center
    }
    // 页面展示容器
    .page{
        width 78%
        height 90%
        display flex
        flex-direction column
        align-items center
    }
    // 标题容器
    .page_top{
        height 25%
        display flex
        flex-direction column
        justify-content center
        align-items center
    }
    // 标题序号
    .t_numb{
        color #00C6D7
        font-size 60px
        font-weight 900
        font-family "楷体"
    }
    // 标题文本
    .t_title{
        font-size 30px
        font-family "楷体"
        margin-bottom 12px
    }
    // 标题线
    .t_xian{
        width 130%
        height 0.8px
        background-color #CCCCCC
    }
    // 内容框
    .page_bot{
        width 85%
        height 75%
    }

    // 各页面个性样式
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
        background-color #707171
        .page_2{
            width 100%
            height 100%
            display flex
            flex-direction row
            justify-content space-around
            flex-wrap wrap
            .page_2_x{
                // 体积容积等信息
                width 26%
                height 45%
                background-color #CBCECB
                display flex
                flex-direction column
                align-items center
                justify-content center
                border-radius 8px
                box-shadow 10px 10px 5px
                .page_2_img{
                    width 94%
                    height 75%
                    border-radius 8px
                    overflow hidden
                }
                .page_2_tit{
                    font-size 55%
                }
            }
        }
    }
    .index_3_0{
        background-color rgba(0,0,0,0)
    }
    .index_4_0{
        background-color #4C8CCA
    }
    .index_5_0{
        background-color rgba(0,0,0,0)
        .updateRecord{
            background-color #fff
            overflow hidden
        }
    }
    // 中部两栏
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