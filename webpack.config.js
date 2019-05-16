// 配置文件
// 1.配置输入，输出路径
const path = require('path')

module.exports = {
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.(jpg|png|jpeg)$/,use:'url-loader?limit=1000'},
            {test:/\.vue$/,use:['vue-loader']}
        ]
    },
    resolve: {
        alias:{
            'vue$':'vue/dist/vue.js'//导入vue完整包
        }
    }
}