const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanPlugin = require('./CleanPlugin');

const outputPath = path.resolve(__dirname, '..', 'dist', 'css')

module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.ts',
  },
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
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'index.js',
    path: outputPath,
    library: {
      type: 'module', // 输出的模块化格式， umd 表示允许模块通过 CommonJS、AMD 或作为全局变量使用。
      export: 'default', // 指定将入口文件的默认导出作为库暴露。
    },
    clean: true,
  },
  plugins: [
    new CleanPlugin({
      files: [
        path.join(outputPath, 'index.js')
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
