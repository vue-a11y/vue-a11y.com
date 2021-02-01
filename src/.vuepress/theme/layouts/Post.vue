<template>
  <Full>
    <div
      class="z-10 post-page"
      itemscope
      itemtype="https://schema.org/Blog"
    >
      <article
        itemscope
        itemprop="blogPost"
        itemtype="https://schema.org/BlogPosting"
        class="pb-24 mb-24"
      >
        <meta
          itemprop="mainEntityOfPage"
          :content="$themeConfig.url + post.path"
        >
        <meta
          itemprop="dateModified"
          :content="post.updated_at"
        >
        <header
          class="w-full py-20 border-b border-solid bg-primary border-secondary"
          aria-labelledby="title-post"
        >
          <div class="container max-w-2xl mx-auto">
            <h1
              id="title-post"
              class="text-4xl font-bold"
            >
              {{ $page.title }}
            </h1>
            <aside
              role="note"
              class="flex items-center mt-4 text-sm"
            >
              <!-- <span class="uppercase">3 min</span> -->
              <div
                itemprop="author"
                itemscope
                itemtype="https://schema.org/Person"
              >
                <AuthorLink
                  v-if="post.author"
                  :author="post.author"
                  style="top: 2px;"
                />
              </div>
              <div class="w-6 mx-4 border-b-2 border-solid rounded border-accent-primary" />
              <time
                :datetime="post.date.datetime"
                class="uppercase"
                itemprop="datePublished"
              >
                {{ post.date.short }}
              </time>
            </aside>
          </div>
        </header>

        <div class="container max-w-2xl mx-auto">
          <p
            v-show="post.summary"
            class="mt-10 text-lg leading-9 post-page-summary"
            itemprop="description"
          >
            {{ post.summary }}
          </p>

          <hr
            v-show="post.summary"
            class="my-10"
          >

          <TableOfContents
            v-if="$frontmatter.toc !== 0"
            :key="$route.path"
            :title="$themeLocaleConfig.toc.title"
            title-tag="h2"
            class="my-10"
          />

          <section
            role="region"
            aria-label="Content article"
          >
            <Content itemprop="articleBody" />

            <hr class="my-16">

            <ShareLinks
              :path="post.path"
              :title="post.title"
              :summary="post.summary"
              horizontal
            />

            <hr class="my-16">

            <div class="disqus-section">
              <Disqus v-bind="disqus" />
            </div>

            <hr class="my-16">

            <div class="webmentions-section">
              <WebMentions />
            </div>
          </section>
        </div>
      </article>
    </div>
  </Full>
</template>

<script>
import { computed } from '@vue/composition-api'
import { Disqus } from 'vue-disqus'

import AuthorLink from '@/theme/components/AuthorLink'
import ShareLinks from '@/theme/components/ShareLinks'
import TableOfContents from '@/theme/components/TableOfContents'
import WebMentions from '@/theme/components/WebMentions'

export default {
  name: 'Post',

  components: {
    Disqus,
    AuthorLink,
    ShareLinks,
    WebMentions,
    TableOfContents
  },

  setup (_, { root }) {
    const post = computed(() => ({
      id: root.$page.key,
      title: root.$page.title,
      path: root.$page.path,
      summary: root.$page.frontmatter.summary || '',
      author: root.$themeConfig.people.find(author => author.username === root.$page.frontmatter.author),
      updated_at: root.$page.lastUpdated,
      date: {
        datetime: root.$page.frontmatter.date,
        short: new Intl.DateTimeFormat('default', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(root.$page.frontmatter.date))
      }
    }))

    const disqus = {
      shortname: 'vue-a11y',
      lazyConfig: {
        root: null,
        rootMargin: '1000px',
        threshold: 0.5
      }
    }

    return {
      post,
      disqus
    }
  }
}
</script>
