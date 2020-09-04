const posts = {
  id: 'postagens',
  title: 'Todas as postagens',
  layout: 'Posts',
  itemLayout: 'Post',
  dirname: 'pt/posts',
  path: '/pt/posts/',
  itemPermalink: '/pt/posts/:slug',
  pagination: {
    layout: 'Posts',
    prevText: '<<',
    nextText: '>>',
    getPaginationPageTitle (pageNumber) {
      return `Todas as postagens - página ${pageNumber}`
    }
  }
}

const categories = {
  id: 'categoria',
  keys: ['categoria', 'categorias'],
  title: 'categoria',
  scopeLayout: 'Posts',
  path: '/pt/categoria/',
  pagination: {
    layout: 'Posts',
    getPaginationPageTitle (pageNumber, key) {
      return `Categoria: ${key} - página ${pageNumber}`
    }
  }
}

module.exports = {
  posts,
  categories
}
