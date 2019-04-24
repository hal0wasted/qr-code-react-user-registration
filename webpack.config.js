const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: './index.js'
  },
  devServer: {
    publicPath: '/'
  },
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.ttf$/,
        use: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      filename: './index.html'
    })
  ]
}
