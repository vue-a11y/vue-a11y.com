module.exports = {
  project: [
    {
      title: 'The Project',
      children: [
        '',
        ['Roadmap', 'https://github.com/vue-a11y/vue-a11y.com/projects/2'],
        ['People', 'people'],
        'how-to-contribute'
      ]
    },
    {
      title: 'Accessibility',
      children: [
        ['Basics', 'https://v3.vuejs.org/guide/a11y-basics.html'],
        ['Semantics', 'https://v3.vuejs.org/guide/a11y-semantics.html'],
        ['Standards', 'https://v3.vuejs.org/guide/a11y-standards.html'],
        ['Resources', 'https://v3.vuejs.org/guide/a11y-resources.html'],
        ['Awesome', 'https://github.com/vue-a11y/awesome-a11y-vue']
      ]
    }
  ],

  posts: [
    {
      title: 'Categories',
      type: 'manual',
      children: [
        // ['News', '/category/news/'],
        ['HTML', '/category/html/'],
        ['ARIA', '/category/aria/'],
        // ['WCAG', '/category/wcag/'],
        // ['Tools', '/category/tools/'],
        // ['Packages', '/category/packages/'],
        ['Single Page App', '/category/spa/']
      ]
    },
    // SOON
    // {
    //   title: '24 Vue A11y',
    //   type: 'manual',
    //   children: [
    //     ['2020', '/category/24-vue-a11y-2020/']
    //   ]
    // },
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
      title: 'Widgets',
      children: [
        'widgets/accordion',
        'widgets/alert',
        'widgets/breadcrumbs',
        'widgets/card',
        'widgets/carousel',
        'widgets/dialog',
        'widgets/mobile-navigation',
        'widgets/skip-links',
        'widgets/tabs',
        'widgets/toast'
      ]
    },
    {
      title: 'Tips',
      children: [
        ['ARIA Attributes in Vue', 'tips/aria-attributes-in-vue']
      ]
    }
  ]
}
