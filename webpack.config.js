module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'build/bundle.js',
  },
  devServer: {
    inline: true,
    port: 2000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  }
}
