import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@yangwch/y-components',
  favicons:[
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  ],
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  lessLoader: {
    math: 'always' // <=== add this
  },
  themeConfig: {
    nav: [
      { title: '组件', link: '/components/button'}
    ]
  }
  // more config: https://d.umijs.org/config
});
