const { generateSidebar } = require('./utils')

module.exports = {
  label: 'English',
  editLinkText: 'Edit this page on GitHub',
  lastUpdatedText: 'Last update',
  backToTopText: 'back to page top',
  backToPostsText: 'back to posts',
  shareLinksText: 'Share on',
  externalLinkText: 'Opens in a new window/tab',
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
      text: 'Posts',
      link: '/posts/'
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
    '/posts/': generateSidebar('posts'),
    '/category/': generateSidebar('posts'),
    '/recipes/': generateSidebar('recipes')
  },
  a11y: {
    newsletter: {
      placeholder: 'Email for subscription'
    },
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
      },
      post: {
        summary: 'Summary',
        content: 'Content post'
      }
    }
  }
}
