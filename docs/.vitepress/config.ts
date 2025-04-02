import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

export default defineConfig({
  title: "HRIS Documentation",
  description: "Human Resource Information System Documentation",
  themeConfig: {
    logo: '/assets/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/getting-started' },
      { text: 'API', link: '/api/overview' },
      { text: 'Configuration', link: '/config/basic-setup' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/hris' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Your Organization'
    }
  },
  vite: {
    plugins: [
      AutoSidebar({
        collapsed: false,
        titleFromFile: true,
        ignoreList: ['.vitepress', 'public', 'assets'],
        path: 'docs',
      })
    ]
  },
})
