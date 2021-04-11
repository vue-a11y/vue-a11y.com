---
title: 'Vue Announcer の使い方'
description: Web アプリにおいて沈黙は金になるとは限らない
summary: Vue Announcer はスクリーンリーダーを使用している人にアプリケーションで何が起こっているかをとても簡単に伝える手段を提供しています。

categories: [aria, html, spa]
tags: [live-regions, screen-reader]
author: marcus-herrmann

date: 2021-01-24 16:42:43

meta:
  - property: 'og:image'
    content: 'https://vue-a11y.com/img/social-share-jp.png'
  - name: 'twitter:title'
    content: Vue Announcer の使い方
  - name: 'twitter:description'
    content: Web アプリにおいて沈黙は金になるとは限らない
  - name: 'twitter:image'
    content: 'https://vue-a11y.com/img/social-share-jp.png'

-------------------------

##  スクリーンリーダーはどのように動いているか

スクリーンリーダーは支援技術の一つであり、スクリーンに表示されたコンテンツを音声または点字出力に変換することができます。ウェブサイトやブラウザに関して、セマンティック HTML は検索エンジンがウェブページをよりよく理解するための方法であるだけではありません。アプリに「意味のある」（セマンティック）要素を使用することで、スクリーンリーダーのユーザーに情報や機能を伝えることもできます。このように、ウェブサイトがすべての人に知覚されることを保証するために、音声文書の概要、マルチメディアコンテンツの代替テキスト、ラベル付きボタン、フォーム入力、および良識あるリンクテキストが必要です。

スクリーンリーダーの「フォーカス」ポイントである「仮想カーソル」は、ドキュメントの一箇所（この場合、DOM、Document Object Model）にしか同時に配置できません。これは、人差し指で特定の単語を指しながら本のページを読むようなもので、一度に１つの場所で読むことができます。仮想カーソルが HTML ノード上にある場合、その名前、役割、および値がユーザーに読み取られます。このようにして、現在カーソルが置かれている要素が情報（テキスト、マルチメディアなど）を提供しているのか、機能（例：リンク、ボタン）を提供しているのかを知ることができます。

## 非同期更新の問題

クライアント側でレンダリングされる Web アプリケーションの特徴の１つは、動的な DOM であるということです。ドキュメントの一部は、更新されたり、追加されたり、削除されたりします。これらはすべて、エレガントでスムーズかつ非同期な方法で、ページをリロードすることなく、リアクティブで「アプリケーションのような」体験を提供します。しかし、これはスクリーンリーダーのユーザーにとっては問題があります。文書の最後の三分の一（たとえば、スクリーンリーダーの仮想カーソルがフッターセクションのリンク上にある場合）まで移動し、文書のヘッダーの一部が更新されたとします。あるいは、別のシナリオを考えてみてください。シングルページアプリケーション（SPA）では、スクリーンリーダーユーザーが現在のメイン・ナビゲーションにいて、仮想カーソルがリンクのリストにあります。これにより、「About」ページへのリンクがアクティブになります。SPA なので、ダイナミックドキュメントの一部であるコンテンツエリアのみが更新（ルーティング）されます。しかし、「About」ページに移動した後にスクリーンリーダーから何も通知がなければ、ユーザーは自分の操作がどこで機能したのか疑問に思うことになります。ユーザーは自らコンテンツエリアに移動して確認しなければなりません。新しいページが読み込まれ、そのページタイトルが通知されるために、リンクをクリックして、インタラクションがうまくいったことを知るという、サーバーサイドの体験と比較してみてください。

## ライブリージョン

WAI（W3C の Web Accessibility Initiative）が数年前に「ライブリージョン」という概念を確立したのはこのためです。ライブリージョンを使用すると、Web 開発者は、ドキュメント内の現在の仮想カーソルの位置がどこにあるか関係なく、プログラムによってスクリーンリーダーに通知を送信できます。このように Web 開発者のツールボックスには、動的な DOM の更新後に混乱した沈黙を解決するための役立つ項目があります。言うまでもなく、大きな力には大きな責任が伴います。もしスクリーンリーダの「自然な」流れが乱れすぎたり、積極的になりすぎると、補助器具にとっては大きな迷惑の源泉になります。したがって、ライブリージョンは非常に合理的に使用する必要があります。これは、潜在的な苛立たしい沈黙を埋めるための手段です。このようなことから、WAI は２つの一般的なアナウンスモードを提供しました。

- １つ目は **"polite"** と呼ばれるもので、まさにその名の通りのものです。礼儀正しい人間が、何か言いたいことがあるからといって、会話の途中で話を中断したりしないのと同じように、礼儀正しいライブリージョンは、現在進行中のアナウンスが終わるまで待ちます。覚えておいてください。"現在進行中"とは、ほとんどの場合、DOM 内の仮想カーソルの位置に関係しています。
- ２つ目は、エラーメッセージや非常に重要なことを伝えることに適しています。もしあなたの家が火事になったときに、対話の順番を待つ礼儀正しい人が「外に出て！火事だ！」と叫ぶのは、緊急時を考えるととても不適切です。このタイプのライブリージョンは **"assertive"** と呼ばれ、スクリーンリーダーの出力をすぐに中断します。

[Vue Announcer は、Vue アプリケーションでこれらのライブリージョンを便利に使用する方法を提供しています。](https://github.com/vue-a11y/vue-announcer).

## Vue Announcer と出会う

npm（`npm install -S @vue-a11y/announcer`）または yarn（`yarn add @vue-a11y/announcer`）でインストールできます。Vue 3 バージョンの場合は、プロジェクトの次のブランチを指定します。npm（`npm install -S @vue-a11y/announcer@next`）または yarn（`yarn add -D @vue-a11y/announcer@next`）。

アプリに組み込むには、インポートしてVueプラグインとして登録します。  
とりあえず、Vue 2 の方法で表示してみましょう。

```js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'

Vue.use(VueAnnouncer)

```

Vue 3 版を使用している場合、コードは以下のようになります。

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueAnnouncer from '@vue-a11y/announcer'

createApp(App)
  .use(VueAnnouncer)
  .mount('#app')

```

実際に使用する次のステップとしては、例えば以下のように、`App.vue` に `<VueAnnouncer />` を追加することです。

```vue
<template>
  <div>
    <VueAnnouncer />
    ...
  </div>
</template>
```

::: alert info
`<VueAnnouncer />` アプリケーションのどこにでも配置することができます。しかし、vue-announcer を動作させるためには、このカスタム要素を追加しなければなりません。
:::

３つ目のステップは、実際に通知を送ることです。[公式ドキュメントを引用すると](https://vue-announcer-v2.surge.sh/guide/announcer.html#methods)、

:::: fig bq
::: bq
> _Vue インスタンスに注入されたプロパティ上で $announcer が利用可能なので、アプリケーション内のどこでも利用可能です。これを使えば、スクリーンリーダーを持った人に必要な情報をリアルタイムで通知することができます。_
:::
::::

まとめると、`$announcer` は３つのメソッドがあります:

- <div style="display: inline">
    <p><code>set</code> を使用すると、アクセシブルな通知を送信できます。最初のパラメータはメッセージ自体で、２番目のパラメータはメッセージの丁寧さの設定です。具体例:</p>
    
    ```js
    this.$announcer.set('Could not save file', 'assertive')
    ```

  </div>

- <div style="display: inline">
    <p> <code>polite</code>  は丁寧さの設定を polite として定義するための "set" メソッドのラッパーです:</p>
    
    ```js
    this.$announcer.polite('Added item to your shopping cart')
    ```

  </div>

- <div style="display: inline">
    <p> <code>assertive</code> は丁寧さの設定を assertive として定義するための "set" メソッドのラッパーです:</p>
    
    ```js
    this.$announcer.assertive('Could not save file')
    ```

  </div>

::: alert tip
Vue 3 バージョンの `vue-announcer` に関する注釈。プロジェクトの次のブランチでは、Composition API のコンテキストで使用するためのコンポジション可能な `useAnnouncer()` が提供されています。指定されたエクスポートは、`announce` (デフォルトは polite)、`assertive`、`polite`、そしてルート変更後の使用のための `setRouteComplement` です。詳細は[ライブラリの `next` ブランチの Readme.md](https://github.com/vue-a11y/vue-announcer/blob/next/README.md) を参照してください。
:::

```js
export default {
  setup () {
    const { assertive } = useAnnouncer()

    function someErrorMethod () {
      assertive("Could not save draft");
    }
    // ...
  }
}
```
## より学ぶために

基本的なことはここまでです。
Vue Announcer の[公式ドキュメント](https://vue-announcer-v2.surge.sh/guide/announcer-router.html)には、ルート変更時のアナウンス のトリガーに関する拡張情報や、[「バニラな」Vue アプリケーション](https://vue-announcer-v2.surge.sh/demos/)、[Nuxt.js](https://vue-announcer-v2.surge.sh/demos/nuxt.html)、[Vuepress](https://vue-announcer-v2.surge.sh/demos/vuepress.html) と連携した使用例が掲載されています。