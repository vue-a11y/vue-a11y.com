const sidebar = require('./sidebarStructure')

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
    label: 'Endereço de email',
    description: 'Digite seu email e receba artigos, vídeos, atualizações e eventos da comunidade Vue.js e acessibilidade.',
    textButton: 'Cadastrar'
  },
  toc: {
    title: 'Nesta página'
  },
  nav: [
    {
      text: 'Projeto',
      link: '/pt/projeto/'
    },
    {
      text: 'Posts',
      link: '/pt/posts/'
    },
    {
      text: 'Receitas',
      link: '/pt/receitas/'
    },
    {
      text: 'Configurações',
      link: '/pt/configuracoes/'
    }
  ],
  sidebar: {
    '/pt/projeto/': sidebar.projeto,
    '/pt/posts/': sidebar.posts,
    '/pt/categoria/': '/pt/posts/',
    '/pt/receitas/': sidebar.receitas
  },
  a11y: {
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
