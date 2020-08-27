const { generateSidebar } = require('./utils')

module.exports = {
  label: 'Português',
  editLinkText: 'Editar página no GitHub',
  lastUpdatedText: 'Última atualização em',
  backToTopText: 'voltar ao topo da página',
  backToPostsText: 'voltar para os posts',
  newsletter: {
    title: 'Inscreva-se na newsletter',
    description: 'Digite seu email abaixo e receba artigos, vídeos, atualizações e eventos da comunidade Vue.js e acessibilidade.',
    textButton: 'Cadastrar'
  },
  toc: {
    title: 'Nesta página'
  },
  nav: [
    {
      text: 'Projeto',
      link: '/pt/project/'
    },
    {
      text: 'Posts',
      link: '/pt/posts/'
    },
    {
      text: 'Receitas',
      link: '/pt/recipes/'
    },
    {
      text: 'Configurações',
      link: '/pt/settings/'
    }
  ],
  sidebar: {
    '/pt/project/': generateSidebar('project', ['O Projeto', 'Acessibilidade', 'Comunidade']),
    '/pt/posts/': generateSidebar('posts', ['Categorias', 'Arquivo', 'Seguir no Twitter']),
    '/pt/category/': generateSidebar('posts', ['Categorias', 'Arquivo', 'Seguir no Twitter']),
    '/pt/recipes/': generateSidebar('recipes', ['Receitas', 'Widgets', 'Dicas'])
  },
  a11y: {
    newsletter: {
      placeholder: 'Email para inscrição'
    },
    labels: {
      menuButton: {
        open: 'Abrir navegação da sidebar',
        close: 'Fechar navegação da sidebar'
      }
    },
    landmarks: {
      nav: {
        main: 'Principal',
        secondary: 'Secundária'
      }
    }
  }
}
