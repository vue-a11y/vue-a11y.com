module.exports = {
  project: [
    {
      title: 'プロジェクト',
      children: [
        '',
        ['ロードマップ', 'https://github.com/vue-a11y/vue-a11y.com/projects/2'],
        ['参加者', 'people'],
        ['貢献する方法', 'how-to-contribute']
      ]
    },
    {
      title: 'アクセシビリティ',
      children: [
        ['基礎', 'https://v3.ja.vuejs.org/guide/a11y-basics.html'],
        ['セマンティクス', 'https://v3.ja.vuejs.org/guide/a11y-semantics.html'],
        ['標準', 'https://v3.ja.vuejs.org/guide/a11y-standards.html'],
        ['リソース', 'https://v3.ja.vuejs.org/guide/a11y-resources.html'],
        ['Awesome', 'https://github.com/vue-a11y/awesome-a11y-vue']
      ]
    }
  ],

  posts: [
    {
      title: 'カテゴリ',
      type: 'manual',
      children: [
        ['ニュース', '/jp/category/news/'],
        ['HTML', '/jp/category/html/'],
        ['ARIA', '/jp/category/aria/'],
        ['WCAG', '/jp/category/wcag/'],
        ['ツール', '/jp/category/tools/'],
        ['パッケージ', '/jp/category/packages/'],
        ['Single Page App', '/jp/category/spa/']
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
      title: 'Twitter でフォローする',
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
      title: 'ウィジェット',
      children: [
        ['アコーディオン', 'widgets/accordion'],
        ['アラート', 'widgets/alert'],
        ['パンくず', 'widgets/breadcrumbs'],
        ['カード', 'widgets/card'],
        ['カルーセル', 'widgets/carousel'],
        ['ダイアログ', 'widgets/dialog'],
        ['モバイルナビゲーション', 'widgets/mobile-navigation'],
        ['スキップリンク', 'widgets/skip-links'],
        ['タブ', 'widgets/tabs'],
        ['トースト', 'widgets/toast']
      ]
    },
    {
      title: 'ヒント',
      children: [
        ['Vue における ARIA 属性', 'tips/aria-attributes-in-vue']
      ]
    }
  ]
}
