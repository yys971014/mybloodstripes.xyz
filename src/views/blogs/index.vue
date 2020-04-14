<!-- 
    博客模块：背板
    path:"/blogs",
    name:"indexBlogs",
 -->
<template>
    <div class="index">
        <router-view class="blogs_router" />
    </div>
</template>

<style lang="stylus">
    @import '../../../src/assets/css/public/index.styl';    // 全局样式
    .index{
        width 100%
        min-height 100vh
        // 布局相关设置
        display flex
        flex-direction column
        align-items center
        background-image: url($blogs_url);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
    }
    .blogs_router{
        width 72%
    }
</style>