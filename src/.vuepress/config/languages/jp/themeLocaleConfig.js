const sidebar = require('./sidebarStructure')

module.exports = {
  enabled: true,
  label: '日本語',
  editLinkText: 'GitHub で編集する',
  lastUpdatedText: '最終更新',
  backToTopText: 'ページトップに戻る',
  backToText: '戻る',
  shareLinksText: 'シェア',
  externalLinkText: '新しいタブで開く',
  skipTo: {
    label: 'コンテンツにスキップする',
    to: '#main'
  },
  newsletter: {
    title: 'ニュースレターを購読する',
    label: 'Eメールアドレス',
    description: 'メールアドレスを入力すると、記事、ビデオ、アップデート、イベントの情報を Vue.js アクセシビリティコミュニティから受け取ることができます。',
    textButton: '購読する'
  },
  toc: {
    title: '目次'
  },
  nav: [
    {
      text: 'プロジェクト',
      link: '/jp/project/'
    },
    {
      text: '投稿',
      link: '/jp/posts/'
    },
    {
      text: 'レシピ',
      link: '/jp/recipes/'
    },
    {
      text: '設定',
      link: '/jp/settings/'
    }
  ],
  sidebar: {
    '/jp/project/': sidebar.project,
    '/jp/posts/': sidebar.posts,
    '/jp/category/': '/jp/posts/',
    '/jp/recipes/': sidebar.recipes
  },
  a11y: {
    codeSnippet: {
      copy: {
        text: 'クリップボードにコピーしました',
        ariaLabel: 'コードスニペットをクリップボードにコピー',
        textCopied: 'コードをコピーしました！'
      },
      skip: {
        text: 'スキップ',
        ariaLabel: 'スニペットコードをスキップ'
      }
    },
    labels: {
      menuButton: {
        open: 'サブナビゲーションを開く',
        close: 'サブナビゲーションを閉じる'
      }
    },
    settings: {
      theme: {
        altText: 'ブラウザテーマのイラスト'
      }
    },
    landmarks: {
      nav: {
        main: 'メインナビゲーション',
        secondary: 'サブナビゲーション'
      },
      post: {
        summary: 'Summary',
        content: 'Content post'
      }
    }
  }
}
