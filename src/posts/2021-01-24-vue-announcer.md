---
title: 'Using Vue Announcer'
description: Silence isn't always golden in web apps
summary: Vue Announcer provides an easy way to really tell what’s going on in your application to people using screen readers.

categories: [aria, html, spa]
tags: [live-regions, screen-reader]
author: marcus-herrmann

date: 2021-01-24 16:42:43

meta:
  - name: 'twitter:title'
    content: Using Vue Announcer
  - name: 'twitter:description'
    content: Silence isn't always golden in web apps

-------------------------

Screen readers are a form of assistive technology and capable of transforming content displayed on a screen into either speech or braille output. When it comes to websites and browsers,  semantic HTML that is not only a way of helping search engines to understand a web page better. Using "meaningful" (semantic) elements to your app also conveys the information and functionality to screen readers users. Thus, a sound document outline, alternative texts for multimedia content, labeled buttons, form inputs and sensible link texts are necessary to ensure a website can be perceived by everyone.

A screen reader's point of "focus", its "virtual cursor", can only be at one place of the document (in this case, the DOM, Document Object Model) at once.  This is comparable to read a book page with your index finger helping you read while pointing towards a particular word – it can be in one place at a time. When the virtual cursor is on an HTML node, its name, role and value will be read out to the user. This way, they can find out whether the element you are currently set the cursor on offers pieces of information (e.g. text, multimedia) or function (e.g. link, button).

One characteristic of client-side rendered web-apps is their dynamic DOM. Parts of the doucment could and will get updated, added and removed. All of this in an elegant, smooth and asynchronous way, to delivery that reactive, "app-y" experience – but without a page reload. Alas, this causes a problem for screen reader users. Imagine that they traversed to the last third of a document (their screen reader's virtual cursor is on a link in the footer section for example), and a part of the document's header gets updated. Or imagine another scenario: in a single page application (SPA), a screen reader user is currently in the main navigation, meaning its virtual cursor is in a list of links. They activate the link to the "About" page – and because it is a SPA, only parts of the dynamic document, the content area, will get updated ("routing"). But if the screen reader stays silent after the interaction with the "About" page, a user is in doubt where their interaction worked. They have to actively go to the content area to check. Compare that to the server-side experience of clicking a link and knowing the interaction has worked, because a new page loads and its page title gets announced.

This is why WAI (W3C's Web Accessibility Initiative) established a concept called "live regions" some years ago. Live regions give web developers the chance to programmatically send announcements to screen readers, regardless of where its virtual cursor currently "sits" in the document. This way, there is an item in a web developer's toolbox that could help with the confusing silence after dynamic DOM updates. Needless to say, with great power comes great responsibility: If the "natural" flow of the screen reader is disturbed too often or too aggressively, the helper instrument becomes a source of great annoyance. Therefore, live regions must be used very reasonably – a means to fill a potentially irritating silence. Thus, WAI offered two general modes of announcements:

- The first is dubbed **"polite"** and is exactly that. Just like a polite human being does not interrupt you mid-sentence in a dialogue only because they have something to say, a polite live region waits until the currently active announcements have finished. Remember: "currently active" has most of the time something to do with the position of the virtual cursor in the DOM.
- The second one is more suitable for error messages and really important things. If your house is on fire, a polite person that waits for their turn in the dialogue, but to then yell "GET OUT! THERE'S A FIRE!" would be really inappropriate considering the emergency. This type of live region is called an **"assertive"** one, and it interrupts the screen reader output right away.

[Vue Announcer offers a way to conveniently use these live region in your Vue application](https://github.com/vue-a11y/vue-announcer).

You can install it with npm (`npm install -S @vue-a11y/announcer`) or yarn (`yarn add @vue-a11y/announcer`). For the Vue 3 version you point towards the `next` branch of the project: `npm install -S @vue-a11y/announcer@next`) or yarn (`yarn add -D @vue-a11y/announcer@next`. To include it in your app, import it and register it as a Vue plugin. At first, let's show the Vue 2 way:

```js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'

Vue.use(VueAnnouncer)

```

If you use the Vue 3 version, the code is as follows:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueAnnouncer from '@vue-a11y/announcer'

createApp(App)
  .use(VueAnnouncer)
  .mount('#app')

```

The next step of actually using it is to add `<VueAnnouncer />` into your `App.vue`, for example like this:

```vue
<template>
  <div>
    <VueAnnouncer /> <!-- You can place it anywhere in your application. But you MUST add this custom element in order for vue-announcer to work -->
    ...
  </div>
</template>
```

The third step is to send the actual announcements. [To quote the official documentation](https://vue-announcer-v2.surge.sh/guide/announcer.html#methods):

> _The $announcer is available on the property injected into the Vue instance, so it is available everywhere in your application. With it, it is possible to announce any necessary information and in real time to a person with a screen reader._

In total, `$announcer` has three methods:
- With `set` you can send an accessible annoucement, its first parameter being the message itself and the second being its politeness setting. A concrete example:       `this.$announcer.set('Could not save file', 'assertive')`.
- `polite`  is a wrapper of the "set" method that defines the politeness setting as polite: `this.$announcer.polite('Added item to your shopping cart')`.
- `assertive`  is a wrapper of the "set" method that defines the politeness setting as polite: `this.$announcer.assertive('Could not save file')`.

Sidenote for the Vue 3 version of `vue-announcer`: The project's `next` branch provides the composable `useAnnouncer()` for using it in a composition API context. Named exports are `announce` (defaulting to polite), `assertive`, `polite` and ` setRouteComplement` for usage after route changes. Find more details in [Readme.md of the libraries `next` branch]( https://github.com/vue-a11y/vue-announcer/blob/next/README.md).

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

So much for the basics. Vue Announcer's [official documentation](https://vue-announcer-v2.surge.sh/guide/announcer-router.html) has extended information on triggering [announcements on route change](https://vue-announcer-v2.surge.sh/guide/announcer-router.html) and also usage examples in conjunction with a ["vanilla" Vue App](https://vue-announcer-v2.surge.sh/demos/), [Nuxt.js](https://vue-announcer-v2.surge.sh/demos/nuxt.html) and [Vuepress](https://vue-announcer-v2.surge.sh/demos/vuepress.html).
