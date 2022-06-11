const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
    //mode 用来指定构建模式， 可选值有 development 和 production
    mode: 'development',
    // 打包入口文件的路径
    entry: path.join(__dirname, './src/index.js'),
    // 输出文件的路径
    output: {
        path: path.join(__dirname, 'dist'),//输出文件的存放路径
        filename: 'bundle.js'//输出文件的名称
    },

    // 关联.html文件和.js文件
    plugins: [
        new HtmlWebpackPlugin({
            // 指定要复制那个页面
            template: path.join(__dirname, './src/index.html'),
            //指定复制出来的文件名和存放路径
            filename: 'index.html'
        })
    ],
    // 自动重启webpack-dev-server脚本
    devServer: {
        open: true,//初次打包完成后，自动打开浏览器
        host: '127.0.0.1',//实时打包所使用的主机地址
        port: 8000,//实时打包所使用的端口号
        static: path.join(__dirname, 'dist')
    },
    //所有第三方文件模块的匹配规则
    module: {
        rules: [
            //定义不同模块的 loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'], },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
        ]
    }
    // module: {
    //     rules: [{
    //         test: /\.js$/,
    //         loader: ['babel-loader'],
    //         include: path.join(__dirname, 'src'),
    //         exclude: /node_modules/
    //     }]
    // }
}