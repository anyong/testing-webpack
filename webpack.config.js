module.exports = {
  entry: './src/react/admin/app',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
