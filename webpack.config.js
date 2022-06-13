const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/App.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'app.js',
  },
  watch: true,
};
