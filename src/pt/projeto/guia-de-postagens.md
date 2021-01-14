---
description: Diretrizes para criação de conteúdo para o Vue.js A11y (posts, receitas e dicas).
---

# Guia de postagens

## Como iniciar

Em primeiro lugar, faça uma breve pesquisa para ver se a sua ideia de postagem ainda não existe no site.

Se você está procurando por ideias, temos uma [issue](https://github.com/vue-a11y/vue-a11y.com/issues/14) com várias ideias de postagem, fique à vontade para reservar um assunto.

Depois de verificar, reserve sua postagem abrindo uma issue usando alguns de nossos modelos:

- [New Post/Article](https://github.com/vue-a11y/vue-a11y.com/issues/new?labels=Post&template=new-post.md&title=Post%2FArticle%3A+%5BYour+title%5D)
- [New Widget (Recipe)](https://github.com/vue-a11y/vue-a11y.com/issues/new?labels=Recipe,Widget&template=new-widget.md&title=Recipe%28widget%29%3A+%5BYour+title%5D)
- [New Tip (Recipe)](https://github.com/vue-a11y/vue-a11y.com/issues/new?labels=Recipe,Tip&template=new-tip.md&title=Recipe%28Tip%29%3A+%5BYour+title%5D)

Após reservar um assunto, fork o repositório, siga as etapas em nosso [README](https://github.com/vue-a11y/vue-a11y.com/blob/master/README.md) para instalação.

Crie um arquivo markdown no diretório de tipo de postagem específico e no idioma em que a postagem será escrita.

Por exemplo, conteúdo em português:

- `src/pt/posts`: Para postagens do blog;
- `src/pt/recipes/widgets`: Para postar widgets;
- `src/pt/recipes/tips`: Para postar dicas rápidas;

::: alert warning
Siga a estrutura `2020-05-12-meu-post.md`
:::

Depois de concluir, crie um PR e solicite a revisão dos membros para os ajustes mais recentes e mescle sua postagem.

## Frontmatter

### Blog posts

::: headerCode 2020-05-12-my-post.md
```yaml
---
title: Título do post # (Obrigatório) - entre 50-65 caracteres
description: Descrição do post # (Obrigatório) - no máximo até 155 caracteres
summary: Resumo do post ou tl;dr # (Opcional)
categories: Array de categorias que combinam com a postagem # (Obrigatório)
tag: Array de tags que correspondem à postagem # (Opcional) 
author: Nickname do autor # (Opcional) 
date: YYYY/MM/DD HH:ii:ss # (Obrigatório)
---
```
:::

::: alert warning
Categorias disponíveis: `[news, aria, wcag, tools, packages, spa, html]`.
:::

::: alert warning
As tags não têm limitações, você pode criar quantas tags quiser `[screen-reader, form, ...]`.
:::

::: alert tip
Adicione suas informações de autor `src/config/authors.json`, em breve teremos uma página dedicada aos autores do site.
:::

## Boas práticas

- Use uma hierarquia correta de títulos;
- Adicione a linguagem aos blocos de código (highlight code);
- Texto alternativo em imagens;
- Escreva de forma simples e compreensível;
- [Evite parede de texto](https://axesslab.com/accessibility-according-to-pwd/#wall-of-text);
- Use lazy-load para iframes (Componente IntersectObserver)

## Usando custom-blocks

### Figure + Blockquote + Figcaption 

::::: headerCode
```
:::: fig bq
::: bq
VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system and Plugin API, and a default theme optimized for writing technical documentation.
:::
::: figcap
[Vuepress documentation](https://vuepress.vuejs.org/)
:::
::::
```
:::::

:::: fig bq
::: bq
VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system and Plugin API, and a default theme optimized for writing technical documentation.
:::
::: figcap
[Vuepress documentation](https://vuepress.vuejs.org/)
:::
::::

### Tip, Note, Warning, Danger

:::: headerCode
```
::: alert tip
This is a tip
:::

::: alert note
This is a note
:::

::: alert warning
This is a warning
:::

::: alert danger
This is a danger
:::
```
::::

::: alert tip
This is a tip
:::

::: alert note
This is a note
:::

::: alert warning
This is a warning
:::

::: alert danger
This is a danger
:::

### Figure + HeaderCode + Code block + Figcaption

::::: headerCode
```
:::: fig code
::: headerCode main.js
``js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'
 
Vue.use(VueAnnouncer)
``
:::
::: figcap
Basic usage of Vue announcer
:::
::::
```
:::::

:::: fig code
::: headerCode main.js
```js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'
 
Vue.use(VueAnnouncer)
```
:::
::: figcap
Basic usage of Vue announcer
:::
::::

### headerCode + Code block

:::: headerCode
```
::: headerCode main.js
``js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'
 
Vue.use(VueAnnouncer)
``
:::
```
::::

::: headerCode main.js
```js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'
 
Vue.use(VueAnnouncer)
```
:::

## Vue in markdown

### Componente IntersectionObserver

Use este component para lazy load de iframes, images, dentre outras medias.

::: headerCode
```vue
<intersection-observer>
  <template v-slot="data">
    <iframe
      v-if="data.show"
      src="https://caniuse.bitsofco.de/embed/index.html?feat=hidden&periods=future_1,current,past_1,past_2"
      height="420"
      allowfullscreen="true"
      style="width: 100%">
    </iframe>
  </template>
</intersection-observer>
```
:::