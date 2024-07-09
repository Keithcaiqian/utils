import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "daitoue Utils",
  description: "daitoue 的工具库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '工具方法', link: '/color/HexToRgb' },
    ],

    sidebar: [
      {
        text: '颜色相关',
        items: [
          { text: 'HexToRgb', link: '/color/HexToRgb' },
          { text: 'RgbToHex', link: '/color/RgbToHex' },
          { text: 'getDarkColor', link: '/color/getDarkColor' },
          { text: 'getLightColor', link: '/color/getLightColor' },
        ]
      },
      {
        text: '数据转化',
        items: [
          { text: 'arrayToTree', link: '/dataTransform/arrayToTree' },
        ]
      },
      {
        text: '撤销回退',
        items: [
          { text: 'UndoManager', link: '/undoManager/UndoManager' },
          { text: 'RUndoManager', link: '/undoManager/RUndoManager' },
        ]
      },
      {
        text: '文件',
        items: [
          { text: 'downloadPicture', link: '/file/downloadPicture' },
          { text: 'downloadFile', link: '/file/downloadFile' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Keithcaiqian/utils' }
    ]
  }
})
