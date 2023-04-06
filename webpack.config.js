const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')   //导入html插件 获得一个构造函数
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',   // 指定源文件的存在目录
    filename: './index.html'    // 指定生成文件的放置目录
}) 

const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development', // mode 用来指定构建模式  development开发版本 production生产阶段
    // devtool: 'eval-source-map',
    entry: path.join(__dirname, './src/index1.js'),  // 指定要处理的文件
    output: {
        // 出口目录
        path: path.join(__dirname, './dist'), 
        // 生成的文件名称 
        filename: 'js/bundle.js'
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],   // 通过plugins节点 使HtmlPlugin生效
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            // 在配置url-loader时，多个参数之间使用&符号进行分割
            {
                test: /\.jpg|png|gif$/,
                use: 'url-loader?limit=470&outputPath=images'
            },
            {
                // 使用babel-loader
                // 在配置babel-loader转换的时候，要排除node_modules里的js代码
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
            
        ]
    }
    
}

