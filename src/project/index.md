---
description: Vue A11y is an open-source community project, where the main objective is to create content focused on Vue.js and bringing maximum accessibility
---

# Introduction

## Beginning of everything

Vue A11y appeared in 2018 with an initial idea of helping Vue.js developers to create apps accessible to everyone by creating packages that help correct some accessibility problems that have arisen with modern applications.

Based on this idea, we sought solutions and found projects that influenced us in the beginning, such as the [Ember A11y](https://github.com/ember-a11y) project and also the [react-axe](https://github.com/dequelabs/react-axe) package produced by Deque Labs, from both projects, the first Vue A11y packages emerged, which were the [VueAnnouncer](https://github.com/vue-a11y/vue-announcer) and the [VueAxe](https://github.com/vue-a11y/vue-axe-next)

In March 2020, Joe Devon, founder of GAAD, contacted some members of Vue.js to say that among the JavaScript Frameworks, Vue.js ranked last in an annual accessibility analysis of the top 1 million home pages of WebAIM ([The WebAIM Million](https://webaim.org/projects/million/)).

<intersection-observer>
  <template v-slot="data">
    <iframe
      v-if="data.show"
      src="https://twitframe.com/show?url=https://twitter.com/joedevon/status/1257107914499604480"
      height="320"
      allowfullscreen="true"
      style="width: 100%">
    </iframe>
  </template>
</intersection-observer>

## Goal

The project is no longer just a package repository but has also become an accessible content creation project focused on Vue.js.

Usually, the accessibility flaws do not come 100% from the framework but from how companies and developers create their applications.

Our goal is to bring enough information for developers to apply daily and create apps the right way, with high quality and usability where users can perceive, understand, navigate and interact without creating barriers that hinder access for all people. 

## Blog

We want to create a lot of content about accessibility in JavaScript applications, and the [Blog](/posts/) is a perfect space for that.

The content created will be strictly about web accessibility, focused on Vue.js, and also about best practices in web development in general.

We will have some requirements to maintain a quality standard, for example:

- Simple and understandable writing;
- Online reproduction when necessary;
- Combinations of Assistive Technology and Browsers tested;
- Resources;
- Updates;
- Transcription for media content;

Participate by writing an article or requesting a specific matter through the [issues](https://github.com/vue-a11y/vue-a11y.com/issues) in our [repository on GitHub](https://github.com/vue-a11y).

## Recipes

The idea of the [Recipe](/recipes/) section is to bring tips on how to build Widgets with Vue.js in an accessible way, following the best practices documented in [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/), demos, tests in various combinations of AT/Browsers, and reference links for you to go deeper into the subject.

You will also have a tips section with several code snippets following the best practices with Vue.js and HTML semantics in the creation of forms, tables, buttons, among others.

## Package development

We created in our [GitHub repository](https://github.com/vue-a11y/) several packages, components, and tools, in order to facilitate the use and correct scenarios that cause accessibility failures.

For example, [VueAnnouncer](https://github.com/vue-a11y/vue-announcer/tree/next) came about to fill a deficiency in Single Page Apps where screen readers are not informed when there is navigation to another page, consequently, the user stops being informed as well.

We do not intend to create yet another accessible UI framework.
We believe that the best choice is to contribute to existing projects and that it has a lot of users.

## Other projects

We hope that community-created content can help library creators make their projects even more accessible.

We want to work actively in identifying accessibility flaws, creating Issues and Pull Requests, especially in the most used projects in the community.

By making projects accessible, we will indirectly help the developer to build more accessible apps.

### Where we can contribute

- Plugins, Components, and modules for Vue and Nuxt;
- UI frameworks such as Quasar, Vuetify, Vuesax, Element UI, among others;
- Vuepress, Vitepress, Gridsome, and NuxtContent;
- Official documentations;

## Ideas for the near future

We are just at the beginning. With the help of the community, we can build a robust project that helps ensure access for everyone in our applications and encourages other communities to pursue the same goal.

We can share experiences and ideas between different communities to evolve together and make the web more accessible.

We have some ideas that we want to put into practice soon, for example:

### Internationalization

Translate the content into as many languages as possible.

If you want to contribute with the translation into your native language, contact us by creating an [issue](https://github.com/vue-a11y/vue-a11y.com/issues) in our [repository on GitHub](https://github.com/vue-a11y).

### 24 Vue A11y

Inspired by [24 Accessibility](https://www.24a11y.com/), the idea is to produce a series of articles by various experts on accessibility focused on Vue.js and JavaScript Apps during the first 24 days of December.

### Vue Accessibility day

Online event with a full day dedicated to web accessibility, teaching you how to make your Vue projects accessible.

### Video content

In addition to text content, we will also produce video series, live streams, and talks on our [Youtube channel](https://www.youtube.com/channel/UCb9O_r2PEJkp1oilD5pnlIg).

<br>

---

Web Accessibility is super important! We believe that if we join efforts to centralize content that is easy to understand, through recipes, tips, and blog posts, we can help developers and creators of Vue.js libraries to have consistent and more inclusive code.

Feel invited to **[contribute](/project/how-to-contribute.html)** in the development, in the creation of posts, recipes and tips, or by giving an incentive **[supporting](/project/how-to-contribute.html#supporting)** the project.
