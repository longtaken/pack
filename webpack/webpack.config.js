const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    //context: path.resolve(__dirname, 'src'),
    entry: {
        vendor: [
          'react',
          'react-dom',
        ],
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        
        new WebpackMd5Hash(),

        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: { // 这里开始设置缓存的 chunks
                priority: 0, // 缓存组优先级
                vendor: { // key 为entry中定义的 入口名称
                    chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步) 
                    test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
                    name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
                    minSize: 0,
                    minChunks: 1,
                    enforce: true,
                    maxAsyncRequests: 1, // 最大异步请求数， 默认1
                    maxInitialRequests : 1, // 最大初始化请求书，默认1
                    reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
                }
            }
        }),

        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ]
  };