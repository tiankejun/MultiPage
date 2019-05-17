// vue.config.js
const path = require('path');
const merge = require('webpack-merge')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 选项...
    publicPath: '/',
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src/'))
            .set('assets', resolve('src/assets/'))
            // key,value自行定义，比如.set('components', resolve('src/components'))，
            //使用的时候 ~assets/imgs/img1.png， 引用静态文件前面必须加“ ~ ”符号
    },
    pages: {
        login: {
            entry: './src/pages/login/main.js',
            template: './public/login.html',
            filename: 'login.html',
            title: 'Login Page',
            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
        index: {
          // page 的入口
          entry: 'src/pages/index/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Index Page',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        detail: {
            entry: './src/pages/detail/main.js',
            template: './public/detail.html',
            filename: 'detail.html',
            title: 'Detail Page',
            chunks: ['chunk-vendors', 'chunk-common', 'detail']
        },
    }
}
