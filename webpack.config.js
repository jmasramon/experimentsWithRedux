module.exports = {
  entry: [
    // './src/trackerIndex.js'
    './src/index.js'
  ],
  module: {
    loaders: [{ test: /\.json$/, loader: "json-loader" },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};