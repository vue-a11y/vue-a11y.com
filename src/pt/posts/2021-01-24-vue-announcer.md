---
title: Usando o Vue Announcer
description: O silêncio nem sempre é ouro em aplicativos da web
summary: O Vue Announcer fornece uma maneira fácil de realmente anunciar o que está acontecendo em seu aplicativo para as pessoas que usam leitores de tela.

categorias: [aria, html, spa]
tags: [live-regions, screen-reader]
author: marcus-herrmann

date: 2021-01-24 16:42:43

meta:
  - name: 'twitter:title'
    content: Usando o Vue Announcer
  - name: 'twitter:description'
    content: O silêncio nem sempre é ouro em aplicativos da web

-------------------------

##  Como funcionam os leitores de tela

Leitores de tela são uma forma de tecnologia de assistência e são capazes de transformar o conteúdo exibido em uma tela em voz ou em braille. 

Quando se trata de sites e navegadores, o HTML semântico não é apenas uma forma de ajudar os mecanismos de pesquisa a entender melhor uma página da web. O uso de elementos "Com significado" (semânticos) em seu aplicativo também transmite as informações e a funcionalidade aos usuários de leitores de tela. Assim, um esboço de documento sonoro, textos alternativos para conteúdo multimídia, botões rotulados, entradas de formulários e textos de links sensíveis são necessários para garantir que um site possa ser percebido por todos.

O ponto de "foco" de um leitor de tela, seu "cursor virtual", só pode estar em um lugar do documento (neste caso, o DOM, Document Object Model) de uma vez. Isso é comparável a ler a página de um livro com o dedo indicador, ajudando-o a ler enquanto aponta para uma palavra específica - pode estar em um lugar de cada vez.

Quando o cursor virtual está em um nó HTML, seu nome, função e valor serão lidos para o usuário. Dessa forma, eles podem descobrir se o elemento em que você está colocando o cursor no momento oferece informações (por exemplo, texto, multimídia) ou função (por exemplo, link, botão).

## O problema das atualizações assíncronas

Uma característica dos aplicativos da web renderizados do lado do cliente é seu DOM dinâmico. Partes do documento podem e serão atualizadas, adicionadas e removidas. Tudo isso de uma forma elegante, suave e assíncrona, para fornecer aquela experiência reativa "app-y" - mas sem recarregar a página. Infelizmente, isso causa um problema para os usuários de leitores de tela.

Imagine que eles tenham passado para o último terço de um documento (o cursor virtual do leitor de tela está em um link na seção de rodapé, por exemplo) e uma parte do cabeçalho do documento seja atualizada. 

Ou imagine outro cenário: em um aplicativo de página única (SPA), um usuário leitor de tela está atualmente na navegação principal, ou seja, seu cursor virtual está em uma lista de links. Eles ativam o link para a página "Sobre" - e por se tratar de um SPA, apenas partes do documento dinâmico, a área de conteúdo, serão atualizadas ("roteamento"), mas se o leitor de tela permanecer em silêncio após a interação com a página "Sobre", o usuário terá dúvidas sobre onde sua interação funcionou. Eles precisam ir ativamente para a área de conteúdo para verificar.

Compare isso com a experiência quando é renderizado no servidor, ao clicar em um link e saber que a interação funcionou, porque uma nova página é carregada e o título da página é anunciado.

## Regiões ativas

É por isso que WAI (<span lang="en">W3C's Web Accessibility Initiative</span>) estabeleceu um conceito chamado "regiões ativas" (live regions) alguns anos atrás.

As regiões ativas oferecem aos desenvolvedores da web a chance de enviar anúncios programaticamente aos leitores de tela, independentemente de onde seu cursor virtual "esteja" atualmente no documento. 

Dessa forma, há um item na caixa de ferramentas de um desenvolvedor da web que pode ajudar com o silêncio confuso após atualizações dinâmicas de DOM.

Desnecessário dizer que grande poder vem com grande responsabilidade: se o fluxo "natural" do leitor de tela for perturbado com muita freqüência ou agressividade, o instrumento auxiliar se tornará uma fonte de grande aborrecimento.

Portanto, as regiões ativas devem ser usadas de maneira muito razoável - um meio para preencher um silêncio potencialmente irritante.

Assim, WAI ofereceu dois modos gerais de anúncios:

- O primeiro é apelidado de **"educado"** e é exatamente isso. Assim como um ser humano educado ele não interrompe você no meio de uma frase em um diálogo apenas porque tem algo a dizer, uma região ativa educada espera até que os anúncios atualmente ativos terminem. Lembre-se: "atualmente ativo" tem, na maioria das vezes, algo a ver com a posição do cursor virtual no DOM.

- O segundo é mais adequado para mensagens de erro e coisas realmente importantes. Se sua casa está pegando fogo, uma pessoa educada que aguarda sua vez no diálogo, mas para depois gritar "SAIA! ESTÁ PEGANDO FOGO!" seria realmente inapropriado, considerando a emergência. Esse tipo de região ativa é chamada de **"assertiva"** e interrompe a saída do leitor de tela imediatamente.

O [Vue Announcer](https://github.com/vue-a11y/vue-announcer) oferece uma maneira de usar convenientemente essas regiões ao vivo em seu aplicativo Vue.

## Conhecendo Vue Announcer

Para a versão 2, você pode instalá-lo com npm ou yarn:

```shell
npm install -S @vue-a11y/announcer
# or
yarn add @vue-a11y/announcer
```

Para a versão 3, você aponta para o ramo `next` do projeto:
```shell
npm install -S @vue-a11y/announcer@next
# or
yarn add @vue-a11y/announcer@next
```

Para incluí-lo em seu aplicativo, importe e registre como um plugin Vue.  
Em primeiro lugar, vamos mostrar o caminho Vue 2:

```js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'

Vue.use(VueAnnouncer)
```

Se você usar a versão Vue 3, o código é o seguinte:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueAnnouncer from '@vue-a11y/announcer'

createApp(App)
  .use(VueAnnouncer)
  .mount('#app')

```

O próximo passo para realmente usá-lo é adicionar `<VueAnnouncer />` em seu `App.vue`, por exemplo assim:

```vue
<template>
  <div>
    <VueAnnouncer /> <!-- Você pode colocá-lo em qualquer lugar em seu aplicativo. Mas você DEVE adicionar este componente funcione -->
    ...
  </div>
</template>
```

A terceira etapa é enviar os anúncios reais. [Para citar a documentação oficial](https://vue-announcer-v2.surge.sh/guide/announcer.html#methods):

:::: fig bq
::: bq
> _O **$announcer** está disponível na propriedade injetada na instância Vue, portanto, está disponível em qualquer lugar em seu aplicativo. Com ele, é possível anunciar qualquer informação necessária e em tempo real para uma pessoa com um leitor de tela._
:::
::::

No total, `$announcer` possui três métodos:

- <div style="display: inline">
    <p>Com <code>set</code> você pode enviar um anúncio acessível, seu primeiro parâmetro sendo a própria mensagem e o segundo sendo sua configuração de polidez. Um exemplo concreto:</p>
    
    ```js
    this.$announcer.set('Não foi possível salvar o arquivo', 'assertive')
    ```

  </div>

- <div style="display: inline">
    <p> <code>polite</code>  é um wrapper do método "set" que define a configuração de polidez como "educada (<span lang="en">polite</span>)":</p>
    
    ```js
    this.$announcer.polite('Item adicionado ao seu carrinho de compras')
    ```

  </div>

- <div style="display: inline">
    <p> <code>assertive</code> is a wrapper of the "set" method that defines the politeness setting as "assertiva (<span lang="en">assertive</span>)"</p>
    
    ```js
    this.$announcer.assertive('Não foi possível salvar o arquivo')
    ```

  </div>


::: alert tip
Para a versão Vue 3 do `vue-announcer`: O branch `next` do projeto fornece o `useAnnouncer()` para usá-lo em um contexto de API de composição.
Exportações nomeadas são `announce` (padronizado para <span lang="en">polite</span>),` assertive`, `polite` e` setRouteComplement` para uso após mudanças de rota.
<br /><br />
Encontre mais detalhes em [README do branch `next`]( https://github.com/vue-a11y/vue-announcer/blob/next/README.md).
:::

```js
export default {
  setup () {
    const { assertive } = useAnnouncer()
    
    function someErrorMethod () {
      assertive('Não foi possível salvar o arquivo');
    }
    // ...
  }
}
```

## Saiba mais sobre o Vue Announcer

Tanto para o básico. Vue Announcer [Documentação oficial](https://vue-announcer-v2.surge.sh/guide/announcer-router.html) estendeu informações sobre o acionamento [anúncios sobre mudança de rota](https://vue-announcer-v2.surge.sh/guide/announcer-router.html) e também exemplos de uso em conjunto com um ["vanilla" Vue App](https://vue-announcer-v2.surge.sh/demos/), [Nuxt.js](https://vue-announcer-v2.surge.sh/demos/nuxt.html) and [Vuepress](https://vue-announcer-v2.surge.sh/demos/vuepress.html).
