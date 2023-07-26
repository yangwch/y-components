const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CleanPlugin = require('./CleanPlugin');

const outputPath = path.resolve(__dirname, '..', 'dist', 'umd');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                math: 'always',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  externals: {
    react: 'React',
  },
  output: {
    filename: 'index.js',
    path: outputPath,
    library: {
      type: 'umd', // 输出的模块化格式， umd 表示允许模块通过 CommonJS、AMD 或作为全局变量使用。
      name: 'y',
    },
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
