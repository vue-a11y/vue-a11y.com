module.exports = {
  projeto: [
    {
      title: 'O projeto',
      children: [
        '',
        ['Roadmap', 'https://github.com/vue-a11y/vue-a11y.com/projects/2'],
        ['Pessoas', 'pessoas'],
        'como-contribuir'
      ]
    },
    {
      title: 'Acessibilidade',
      children: [
        'links-uteis',
        'vue-a11y-checklist'
      ]
    },
    {
      title: 'Comunidade',
      children: [
        ['Plugins', 'https://github.com/vue-a11y/awesome-a11y-vue#components-and-plugins'],
        ['Projetos UI', 'https://github.com/vue-a11y/awesome-a11y-vue#accessible-libraries'],
        ['Awesome', 'https://github.com/vue-a11y/awesome-a11y-vue']
      ]
    }
  ],

  posts: [
    {
      title: 'Categorias',
      type: 'manual',
      children: [
        ['Novidades', '/pt/categoria/novidades/'],
        ['HTML', '/pt/categoria/html/'],
        ['ARIA', '/pt/categoria/aria/'],
        ['WCAG', '/pt/categoria/wcag/'],
        ['Tools', '/pt/categoria/tools/'],
        ['Packages', '/pt/categoria/packages/'],
        ['Single Page App', '/pt/categoria/spa/']
      ]
    },
    // SOON
    // {
    //   title: '24 Vue A11y',
    //   type: 'manual',
    //   children: [
    //     ['2020', '/categoria/24-vue-a11y-2020/']
    //   ]
    // },
    {
      title: 'Siga no Twitter',
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

  receitas: [
    {
      title: 'Receitas',
      children: [
        ''
      ]
    },
    {
      title: 'Widgets',
      children: [
        'widgets/accordion',
        'widgets/alert',
        'widgets/breadcrumbs',
        'widgets/card',
        'widgets/carousel',
        'widgets/dialog',
        'widgets/navegacao-mobile',
        'widgets/pular-links',
        'widgets/tabs',
        'widgets/toast'
      ]
    },
    {
      title: 'Dicas',
      children: [
        ['Atributos ARIA no Vue', 'dicas/atributos-aria-no-vue']
      ]
    }
  ]
}
