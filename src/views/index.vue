<template>
    <div class="index">
        <ul class="layui-nav">
            <li class="layui-nav-item"><a href="">最新活动</a></li>
            <li class="layui-nav-item layui-this">
                <a href="javascript:;">产品</a>
                <dl class="layui-nav-child">
                    <dd><a href="">选项1</a></dd>
                    <dd><a href="">选项2</a></dd>
                    <dd><a href="">选项3</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item"><a href="">大数据</a></li>
            <li class="layui-nav-item">
                <a href="javascript:;">解决方案</a>
                <dl class="layui-nav-child">
                    <dd><a href="">移动模块</a></dd>
                    <dd><a href="">后台模版</a></dd>
                    <dd class="layui-this"><a href="">选中项</a></dd>
                    <dd><a href="">电商平台</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item"><a href="">社区</a></li>
        </ul>
        首页内容
        <button type="button" class="layui-btn layui-btn-normal">百搭按钮</button>
    </div>
</template>

<script>
export default {
    data () {
        return{

        }
    },
    mounted(){
    },
    methods:{

    }
}
</script>

<style lang="stylus" >
    .index
        width 100%
        height 100%
</style>