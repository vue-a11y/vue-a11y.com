const { generateSidebar } = require('./utils')

module.exports = {
  enabled: true,
  label: 'Português',
  editLinkText: 'Editar página no GitHub',
  lastUpdatedText: 'Última atualização em',
  backToTopText: 'voltar ao topo da página',
  backToText: 'voltar para',
  shareLinksText: 'Compartilhe no',
  externalLinkText: 'Abre em uma nova guia',
  skipTo: {
    label: 'Pular para o conteúdo principal',
    to: '#main'
  },
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
    '/pt/category/': '/pt/posts/',
    '/pt/recipes/': generateSidebar('recipes', ['Receitas', 'Widgets', 'Dicas'])
  },
  a11y: {
    newsletter: {
      placeholder: 'Email para inscrição'
    },
    codeSnippet: {
      copy: {
        text: 'Copiar',
        ariaLabel: 'Copiar trecho de código para o clipboard',
        textCopied: 'Código copiado!'
      },
      skip: {
        text: 'Pular',
        ariaLabel: 'Pular trecho de código'
      }
    },
    labels: {
      menuButton: {
        open: 'Abrir navegação da sidebar',
        close: 'Fechar navegação da sidebar'
      }
    },
    settings: {
      theme: {
        altText: 'Ilustração do browser com o tema %cm'
      }
    },
    landmarks: {
      nav: {
        main: 'Principal',
        secondary: 'Secundária'
      },
      post: {
        summary: 'Resumo',
        content: 'Conteúdo do post'
      }
    }
  }
}
