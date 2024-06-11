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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Keithcaiqian/utils' }
    ]
  }
})
