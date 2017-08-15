var webpack = require('webpack')
const path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,//js压缩
      comments: false,//删除注释
      compress: {
        warnings: false//压缩是不输出警告
      },
    })
  ]

}