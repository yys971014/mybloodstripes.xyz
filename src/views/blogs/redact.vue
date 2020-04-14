<!-- 
    博客模块：背板
    path:"/blogs/redact",
    name:"redact",
 -->
<template>
    <div class="redact">
        <el-input
            type="textarea"
            autosize
            placeholder="请输入标题"
            maxlength="100"
            v-model="title">
        </el-input>
        <mavon-editor v-model="textarea"/>
        <el-button type="primary" plain @click="test()">主要按钮</el-button>
    </div>
</template>

<script>
import readme from '../../assets/markdown/updateRecord.md';
export default{
    data () {
        return{
            readme: this.md2html(readme),
            title:'',       // 标题
            textarea:'',    // 文本
        }
    },
    mounted(){
    },
    methods:{

        /**
         * 测试方法
         */
        test(){
            console.log('MD文件=>',this.textarea)
            // var url = "/toBlogs/setBlogs.do";
            var url = "/toWeb/login2.do";
            this.$axios.post(url,{
                name:'张三',
                title:this.title,
                textarea:this.textarea,
            }).then((ret) =>{
                console.log(ret)
            })
            this.$message('点击按钮');
        }
    }
}
</script>

<style lang="stylus">
    @import '../../../src/assets/css/public/markdown.styl'; // .md样式
    .redact{
        border red 1px solid
    }
</style>