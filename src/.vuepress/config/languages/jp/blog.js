const posts = {
  id: 'jpPost',
  title: 'すべての投稿',
  layout: 'Posts',
  itemLayout: 'Post',
  dirname: 'jp/posts',
  path: '/jp/posts/',
  itemPermalink: '/posts/:slug',
  frontmatter: {
    meta: [
      {
        name: 'description',
        content: 'Vue.js 開発を中心としたアクセシビリティに関するコミュニティの投稿'
      }
    ]
  },
  pagination: {
    layout: 'Posts',
    prevText: '<<',
    nextText: '>>',
    getPaginationPageTitle (pageNumber) {
      return `すべての投稿 - ${pageNumber}ページ目`
    }
  }
}

const categories = {
  id: 'jpCategories',
  keys: ['カテゴリー', 'カテゴリ'],
  title: 'カテゴリ',
  scopeLayout: 'Posts',
  path: '/jp/category/',
  pagination: {
    layout: 'Posts',
    getPaginationPageTitle (pageNumber, key) {
      return `カテゴリ: ${key} - ${pageNumber}ページ目`
    }
  }
}

module.exports = {
  posts,
  categories
}
