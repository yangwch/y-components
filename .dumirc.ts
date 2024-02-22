import { defineConfig } from 'dumi';

export default defineConfig({
  // favicons:[
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // ],
  outputPath: 'docs-dist',
  history: { type: 'hash' },
  publicPath: '/y-components/',
  lessLoader: {
    math: 'always', // <=== add this
  },
  themeConfig: {
    logo: false,
    name: 'y-components',
    nav: [
      { title: '组件', link: '/components/button' },
      // { title: '文档', link: '/api' },
    ],
  },
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
    docDirs: ['docs'],
    // codeBlockMode: 'passive',
  },
  // more config: https://d.umijs.org/config
});
