const { generateSidebar } = require('./utils')

module.exports = {
  label: 'English',
  editLinkText: 'Edit this page on GitHub',
  lastUpdatedText: 'Last update',
  newsletter: {
    title: 'Subscribe to the newsletter',
    description: 'Enter your email address below and receive articles, videos, updates and events from the Vue.js community and accessibility.',
    textButton: 'Subscribe'
  },
  toc: {
    title: 'On this page'
  },
  nav: [
    {
      text: 'Project',
      link: '/project/'
    },
    {
      text: 'Blog',
      link: '/blog/'
    },
    {
      text: 'Recipes',
      link: '/recipes/'
    },
    {
      text: 'Settings',
      link: '/settings/'
    }
  ],
  sidebar: {
    '/project/': generateSidebar('project'),
    '/blog/': generateSidebar('blog'),
    '/recipes/': generateSidebar('recipes')
  },
  a11y: {
    labels: {
      menuButton: {
        open: 'Open sidebar navigation',
        close: 'close sidebar navigation'
      }
    },
    landmarks: {
      nav: {
        main: 'Main',
        secondary: 'Secondary'
      }
    }
  }
}
