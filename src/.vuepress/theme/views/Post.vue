<template>
  <div
    class="z-10 post-page container-layout container-layout-px"
    itemscope
    itemtype="https://schema.org/Blog"
  >
    <article
      itemscope
      itemprop="blogPost"
      itemtype="https://schema.org/BlogPosting"
      class="px-6 pb-24 mt-6 mb-24 xl:px-4"
    >
      <meta
        itemprop="mainEntityOfPage"
        :content="$themeConfig.url + post.path"
      >
      <BackTo
        class="inline-flex px-4 my-4 -ml-4"
        :text="`${$themeLocaleConfig.backToText} posts`"
        :to="`${$localePath === '/' ? '' : $localePath}/posts/`"
      />
      <HeaderFullPage>
        <template v-slot:cardTitle>
          {{ $page.title }}
        </template>

        <template v-slot:cardFooter>
          <time
            :datetime="post.date.datetime"
            itemprop="datePublished"
          >
            {{ post.date.short }}
          </time>
          <span
            itemprop="author"
            itemscope
            itemtype="https://schema.org/Person"
          >
            <router-link
              v-if="post.author"
              ref="authors"
              rel="author"
              itemprop="url"
              :to="{ path: '/authors/', hash: post.author.username }"
              class="relative flex hover:underline"
              style="top: 6px;"
            >
              <div class="w-8 h-8 mr-2 overflow-hidden rounded-full">
                <img
                  :src="post.author.avatar"
                  :alt="`Avatar ${post.author.name}`"
                  class="object-cover object-top w-full h-fl"
                >
              </div>
              <span class="mt-1">
                <span class="sr-only">Post by </span>
                <span itemprop="name">{{ post.author.name }}</span>
              </span>
            </router-link>
          </span>
        </template>
      </HeaderFullPage>
      <meta
        itemprop="dateModified"
        content="post.updated_at"
      >

      <section
        v-show="post.summary"
        class="my-10 text-xl leading-9 post-page-summary sm:px-5 max-char"
        role="region"
        :aria-label="$themeLocaleConfig.a11y.landmarks.post.summary"
      >
        <b>{{ $themeLocaleConfig.a11y.landmarks.post.summary }}:</b>
        <span itemprop="description">
          {{ post.summary }}
        </span>
      </section>

      <TableOfContents
        v-if="$frontmatter.toc !== 0"
        :key="$route.path"
        :title="$themeLocaleConfig.toc.title"
        title-tag="h2"
        class="my-10 lg:hidden"
      />

      <hr v-show="post.summary">

      <section
        class="flex justify-between mt-12"
        role="region"
        aria-label="Content post"
      >
        <div>
          <Content
            itemprop="articleBody"
            class="flex-1 sm:px-5 max-char"
          />

          <hr class="mt-16">

          <div class="py-20 disqus-section">
            <Comment
              v-if="isDisqusIntersecting"
              shortname="vue-a11y-test"
            />
          </div>

          <hr>

          <div class="py-20 webmentions-section">
            <WebMentions />
          </div>
        </div>
        <RightNavigation class="ml-16 lg:block page-page-toc">
          <ShareLinks
            class="mt-16"
            :path="post.path"
            :title="post.title"
            :summary="post.summary"
          />
        </RightNavigation>
      </section>
    </article>
  </div>
</template>

<script>
import { computed, watch } from '@vue/composition-api'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

import HeaderFullPage from '@/theme/components/HeaderFullPage'
import { useIntersectionObserver } from '@/theme/composable'

export default {
  name: 'Post',

  components: {
    Comment,
    HeaderFullPage,
    ShareLinks: () => import('@/theme/components/ShareLinks'),
    BackTo: () => import('@/theme/components/BackTo'),
    WebMentions: () => import('@/theme/components/WebMentions'),
    TableOfContents: () => import('@/theme/components/TableOfContents'),
    RightNavigation: () => import('@/theme/components/RightNavigation')
  },

  setup (_, { root }) {
    if (root.$page && root.$page.id !== 'Post') return root.$router.push(`${root.$localePath === '/' ? '' : '/'}posts/`)
    const { isIntersecting: isDisqusIntersecting, unobserve: unobserveDisqus } = useIntersectionObserver('.disqus-section', { rootMargin: '350px' })

    watch(isDisqusIntersecting, val => val && unobserveDisqus())

    const post = computed(() => ({
      id: root.$page.key,
      title: root.$page.title,
      path: root.$page.path,
      summary: root.$page.frontmatter.summary || '',
      author: root.$themeConfig.authors.find(author => author.username === root.$page.frontmatter.author),
      updated_at: root.$page.lastUpdated,
      date: {
        datetime: root.$page.frontmatter.date,
        short: new Intl.DateTimeFormat('default', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(root.$page.frontmatter.date))
      }
    }))

    return {
      post,
      isDisqusIntersecting
    }
  }
}
</script>

<style lang="scss">
.post-page-content {
  max-width: 57rem
}

.page-page-toc {
  @screen xl {
    width: var(--toc-w-size);
  }
}
</style>
