<template>
  <div class="z-10 post-page container-layout container-layout-px">
    <article class="px-6 pb-24 mt-6 mb-24 xl:px-4">
      <BackToPosts class="inline-flex px-4 my-4 -ml-4" />
      <HeaderFullPage>
        <template v-slot:cardTitle>
          {{ $page.title }}
        </template>

        <template v-slot:cardFooter>
          <time :datetime="post.date.datetime">
            {{ post.date.short }}
          </time>
          <router-link
            v-if="post.author"
            ref="authors"
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
              {{ post.author.name }}
            </span>
          </router-link>
        </template>
      </HeaderFullPage>

      <section
        v-show="post.summary"
        :aria-label="$themeLocaleConfig.a11y.landmarks.post.summary"
        class="my-10 text-xl leading-9 sm:px-5 max-char"
      >
        <b>{{ $themeLocaleConfig.a11y.landmarks.post.summary }}:</b>
        {{ post.summary }}
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
        aria-label="Content post"
      >
        <div>
          <Content class="flex-1 sm:px-5 max-char" />

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
        <div class="sticky top-0 flex hidden h-full ml-16 page-page-toc lg:block">
          <TableOfContents
            v-if="$frontmatter.toc !== 0"
            :key="$route.path"
            :title="$themeLocaleConfig.toc.title"
            title-tag="span"
            class="pt-12"
          />

          <ShareLinks
            class="mt-16"
            :path="post.path"
            :title="post.title"
            :summary="post.summary"
          />

          <PageNewsletter class="pl-3 mt-16" />
        </div>
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
    BackToPosts: () => import('@/theme/components/BackToPosts'),
    PageNewsletter: () => import('@/theme/components/PageNewsletter'),
    TableOfContents: () => import('@/theme/components/TableOfContents'),
    WebMentions: () => import('@/theme/components/WebMentions')
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
