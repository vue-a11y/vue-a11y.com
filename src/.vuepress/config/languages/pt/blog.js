const posts = {
  id: 'postPt',
  title: 'Todos os posts',
  layout: 'Posts',
  itemLayout: 'Full',
  dirname: 'pt/posts',
  path: '/pt/posts/',
  itemPermalink: '/pt/posts/:slug',
  pagination: {
    layout: 'Posts',
    prevText: '<<',
    nextText: '>>',
    getPaginationPageTitle (pageNumber) {
      return `Todos os posts - página ${pageNumber}`
    }
  }
}

const categories = {
  id: 'categoriesPt',
  keys: ['categoria', 'categorias'],
  title: 'categoria',
  scopeLayout: 'Posts',
  path: '/pt/category/',
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
