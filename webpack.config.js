const path = require('path');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js', // 输出文件
        libraryTarget: 'umd', // 采用通用模块定义, 注意webpack到4.0为止依然不提供输出es module的方法，所以输出的结果必须使用npm安装到node_modules里再用，不然会报错
        library: 'zh-less-loader', // 库名称
        libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    },
    module: {
        rules: [
            { // 在webpack中使用babel需要babel-loader
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            }
        ]
    }
}