import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "HRIS Docs",
  description: "Human Resource Information System Documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      }
    ]
  }
})
