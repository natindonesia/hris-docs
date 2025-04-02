import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

export default defineConfig({
  title: "HRIS Documentation",
  description: "Human Resource Information System Documentation",
  themeConfig: {
    logo: '/assets/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/overview' },
      { text: 'Configuration', link: '/config/basic-setup' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Basic Usage', link: '/guide/basic-usage' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/overview' },
            { text: 'REST API', link: '/api/rest' },
            { text: 'Authentication', link: '/api/auth' }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Configuration',
          items: [
            { text: 'Basic Setup', link: '/config/basic-setup' },
            { text: 'Advanced Options', link: '/config/advanced' },
            { text: 'Environment Variables', link: '/config/env' }
          ]
        }
      ]
    },
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
