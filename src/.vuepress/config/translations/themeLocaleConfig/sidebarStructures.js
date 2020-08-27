module.exports = {
  project: [
    {
      title: 'The Project',
      children: [
        '',
        'roadmap',
        'supporting',
        'contributors'
      ]
    },
    {
      title: 'Accessibility',
      children: [
        'resources',
        'tools-testing',
        'vue-a11y-checklist'
      ]
    },
    {
      title: 'Community',
      children: [
        'a11y-vue-packages',
        'ui-projects',
        'cases',
        'awesome-a11y-vue'
      ]
    }
  ],

  blog: [
    {
      title: 'Categories',
      type: 'manual',
      children: [
        ['HTML', '/category/html/'],
        ['ARIA', '/category/aria/'],
        ['WCAG', '/category/wcag/'],
        ['Vue packages', '/category/vue-packages/'],
        ['News', '/category/news/'],
        ['Tools', '/category/tools/'],
        ['Mobile A11y', '/category/mobile-accessibility/'],
        ['AT', '/category/assistive-technology/']
      ]
    },
    {
      title: 'Archives',
      type: 'manual',
      children: [
        ['2020', '/category/2020/']
      ]
    },
    {
      title: 'Follow on Twitter',
      children: [
        ['Vue.js', 'https://twitter.com/vuejs'],
        ['Evan You', 'https://twitter.com/youyuxi'],
        ['Sarah Drasner', 'https://twitter.com/sarah_edo'],
        ['Thorsten Lünborg', 'https://twitter.com/Linus_Borg'],
        ['Maria Lamardo', 'https://twitter.com/MariaLamardo'],
        ['Alan Ktquez', 'https://twitter.com/ktquez'],
        ['Jinjiang', 'https://twitter.com/zhaojinjiang'],
        ['Kevin Deisz', 'https://twitter.com/kddeisz'],
        ['Marcus Herrmann', 'https://twitter.com/_marcusherrmann'],
        ['Callum Macrae', 'https://twitter.com/callumacrae'],
        ['Victoria Bergquist', 'https://twitter.com/vicbergquist']
      ]
    }
  ],

  recipes: [
    {
      title: 'Recipes',
      children: [
        '',
        'guide',
        'contribute'
      ]
    },
    {
      title: 'Widgets',
      children: [
        'alert',
        'bradcrumbs',
        'button',
        'card',
        'carousel',
        'dialog',
        'toast'
      ]
    },
    {
      title: 'Tips',
      children: [
        'ARIA attributes',
        'Handling keyboard',
        'Handling focus'
      ]
    }
  ]
}
