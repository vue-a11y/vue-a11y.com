---
description: Guidelines for creating content for Vue.js A11y (posts, recipes and tips).
---
# Posts guide

## How to begin

First of all, do a brief search to see if your post idea does not yet exist on the site.

If you are looking for ideas, we have an [issue](https://github.com/vue-a11y/vue-a11y.com/issues/14) with several post ideas, feel free to reserve a subject.

After checking, reserve your post by opening an issue using some of our templates:

- [New Post/Article](https://github.com/vue-a11y/vue-a11y.com/issues/new?labels=Post&template=new-post.md&title=Post%2FArticle%3A+%5BYour+title%5D)
- [New Widget (Recipe)](https://github.com/vue-a11y/vue-a11y.com/issues/new?labels=Recipe,Widget&template=new-widget.md&title=Recipe%28widget%29%3A+%5BYour+title%5D)
- [New Tip (Recipe)](https://github.com/vue-a11y/vue-a11y.com/issues/new?labels=Recipe,Tip&template=new-tip.md&title=Recipe%28Tip%29%3A+%5BYour+title%5D)

After booking a subject, fork the repository, follow the steps in our [README](https://github.com/vue-a11y/vue-a11y.com/blob/master/README.md) for installation.

Create a markdown file in the specific post type directory and in the language in which the post will be written.

For example in the English language:

- `src/posts`: For blog posts;
- `src/recipes/widgets`: For posting widgets;
- `src/recipes/tips`: For quick tip posts;

::: alert warning
Follow the structure `2020-05-12-my-post.md`
:::

After completing, create a PR and request review from members for the latest adjustments and merge your post.

## Frontmatter

### Blog posts

::: headerCode 2020-05-12-my-post.md
```yaml
---
title: Post title # (Required) - between 50-65 characters
description: Description of the post # (Required) - up to 155 characters
summary: Summary of the post or tl;dr # (Optional)
categories: Array of categories that match the post # (Required)
tag: Array of tags that match the post # (Optional) 
author: author's nickname # (Optional) 
date: YYYY/MM/DD HH:ii:ss # (Required)
---
```
:::

::: alert warning
Available categories: `[news, aria, wcag, tools, packages, spa, html]`.
:::

::: alert warning
The tags have no limitations, you can create as many tags as you want `[screen-reader, form, ...]`.
:::

::: alert tip
Add your author information `src/config/authors.json`, soon we will have a page dedicated to the authors of the site.
:::

## Best pratices

- Use a correct hierarchy of headings;
- Add the lang to the code blocks (highlight code);
- Alternative text in images;
- Write simply and understandably;
- [Avoid wall of text](https://axesslab.com/accessibility-according-to-pwd/#wall-of-text);
- Use lazy-load for iframes (IntersectObserver Component)

## Using custom blocks

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
::: headerCode
main.js
:::
``js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'
 
Vue.use(VueAnnouncer)
``
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
```js
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

### IntersectionObserver component

Use this component for lazy-load of iframes, images, among other media.

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