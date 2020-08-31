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

  posts: [
    {
      title: 'Categories',
      type: 'manual',
      children: [
        ['News', '/category/news/'],
        ['ARIA', '/category/aria/'],
        ['WCAG', '/category/wcag/'],
        ['Tools', '/category/tools/'],
        ['Vue packages', '/category/vue-packages/'],
        ['Single Page App', '/category/assistive-technology/']
      ]
    },
    {
      title: '24 Vue A11y',
      type: 'manual',
      children: [
        ['2020', '/category/24-vue-a11y-2020/']
      ]
    },
    {
      title: 'Follow on Twitter',
      children: [
        ['Sarah Drasner', 'https://twitter.com/sarah_edo'],
        ['Maria Lamardo', 'https://twitter.com/MariaLamardo'],
        ['Alan Ktquez', 'https://twitter.com/ktquez'],
        ['Jinjiang', 'https://twitter.com/zhaojinjiang'],
        ['Marcus Herrmann', 'https://twitter.com/_marcusherrmann'],
        ['Austin Gil', 'https://twitter.com/Stegosource'],
        ['Callum Macrae', 'https://twitter.com/callumacrae'],
        ['Kevin Deisz', 'https://twitter.com/kddeisz'],
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
