<!-- 聊天室
    创建时间：2020年3月26日
    路由：/displayFunc/chatRoom
 -->
<template>
    <div class="chatRoom">
        <!-- <div>
            <el-input v-model="input" placeholder="请输入ID" clearable></el-input>
        </div>
        <div>
            <el-button type="primary" @click="connect()">连接</el-button>
        </div>
        <div>
            <el-button type="primary" @click="close()">断开</el-button>
        </div>
        <div>
            <el-input v-model="text" placeholder="文本" clearable></el-input>
            <el-button type="primary" @click="getinfo()">发送</el-button>
        </div> -->
        <div class="chatting_records">
            <div v-for="(item,i) in 12" :key="i" :value="item">
                <div class="chatting_records_1">
                    <div class="typeface_1">16:43:14</div>
                    <div class="typeface_2">张三</div>
                    <div class="typeface_3">偷偷和你</div>
                    <div class="typeface_0">说：</div>
                </div>
                <div class="chatting_records_2">你好</div>
            </div>
        </div>
        <div class="my_dialog_box">
            <div class="my_dialog_1">
                <div class="typeface_4">发送至</div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="my_dialog_2">
                <el-input type="textarea" v-model="text" maxlength="200" show-word-limit></el-input>
                <el-button type="primary">发送</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socket:"", // socket连接
            input:'', // 测试连接ID
            text:'', // 发送信息
            list:[1,2,3], //便于循环
            options: [{
                value: '',
                label: '所有人'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        }
    },
    methods:{
        // 连接websocket
        connect(){
            console.log('ID：'+this.input)
            if(!this.input){
                alert('为输入ID');
                return;
            }
            var path = 'ws://127.0.0.1:8084/toWsAll/'+this.input;
            // 实例化socket
            this.socket = new WebSocket(path)
            // 监听socket连接
            this.socket.onopen = this.open
            // 监听socket错误信息
            this.socket.onerror = this.error
            // 监听socket消息
            this.socket.onmessage = this.getMessage
        },
        // 连接成功
        open(){
            console.log('成功')
        },
        // 连接失败
        error(){
            console.log('失败')
        },
        // 消息接收
        getMessage(msg){
            console.log('接收消息',msg)
        },
        // 发送消息
        getinfo(){
            var data = this.text;
            if(!data){
                data = '关闭发送消息'
            }
            this.socket.send(data);
        },
        // 销毁连接
        close(){
            // 销毁监听
            this.socket.close();
            console.log('销毁连接');
        },
    },
}
</script>

<style lang="stylus" scoped>
    .chatRoom{
        min-height 90vh
        background-color rgba(245,245,245,0.6)
        display flex
        flex-direction column
        justify-content space-between
        align-items stretch
        margin-bottom 30px
    }

    // 聊天记录
    .chatting_records{
        // 这是边框，删除
        border red solid 2px
        display flex
        flex-direction column
        .chatting_records_1{
            display flex
            flex-direction row
            align-items baseline
        }
        .chatting_records_2{
            display flex
            flex-direction row
            margin 0px 12px 6px 12px
            color #333
            font-weight 550
            font-family "楷体"
        }
        .typeface_0{
            color #000
        }
        .typeface_1{
            color #666
            margin-right 8px
        }
        .typeface_2{
            color #416CA7
        }
        .typeface_3{
            color  #E55DA0
        }
    }

    // 我的输入框
    .my_dialog_box{
        // background-color green
        .my_dialog_1{
            display flex
            justify-content flex-start
            align-items baseline
            margin 6px 40px
            .typeface_4{
                color #584DC3
                font-weight 600
                margin-right 8px
            }
        }
        .my_dialog_2{
            display flex
            flex-direction row
            // justify-content flex-start
            margin 0 40px 6px 40px
        }
    }
</style>
