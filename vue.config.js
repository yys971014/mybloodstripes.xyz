// vue.config.js
// 项目打包
module.exports = {
    // 选项...
    // publicPath: '/demo2',
    devServer: {
        port: 3000, // 端口号，如果端口号被占用，会自动加1
        host: "127.0.0.1", //主机名， 127.0.0.1，  真机 0.0.0.0
        https: false, //协议
        open: false, //启动服务时自动打开浏览器访问
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8084',
                // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                changeOrigin: true, 
                ws: true,
                pathRewrite: {
                    '^/api': '' 
                    // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                }
            }
        }
    },

    lintOnSave: false, // 默认true，警告会被输出到命令行，但不会使得编译失败。如果为false，则不输出警告
    outputDir: "dist", // 打包之后所在目录， 默认值 dist
    assetsDir: "assets", // 静态资源打包之后 存放路径 ，（相对于outputDir指定的路径）, 默认值 ''
    indexPath: "out/index.html", // index.html 主页面打包之后存放的目录（相对于outputDir指定的路径），默认值 index.html
    productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度 
    // filenameHashing: false, 打包时，静态文件不会生成hash值，一般不要这个
    
}