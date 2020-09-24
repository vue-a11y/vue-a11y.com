<template>
  <Layout>
    <div
      class="w-full px-4 posts xl:pr-4"
      :class="{ 'mt-8 md:mt-12': !isCategory }"
    >
      <BackTo
        v-show="isCategory"
        :text="`${$themeLocaleConfig.backToText} posts`"
        :to="`${$localePath}posts/`"
        class="ml-2"
      />

      <h1 class="pl-3 mt-2 mb-12 text-5xl font-bold leading-10 lg:pl-6">
        Latest posts <span class="capitalize">{{ isCategory ? `(${$currentCategories.key})` : '' }}</span>
      </h1>

      <ul class="flex flex-wrap justify-between w-full px-3 lg:pr-6 lg:pl-0 lg:ml-6 xl:pr-0">
        <li
          v-for="post in posts"
          :key="post.id"
          class="flex w-full mb-6 posts-item lg:w-1/2"
        >
          <CardPost :post="post" />
        </li>
      </ul>

      <div
        v-show="$pagination.hasPrev || $pagination.hasNext"
        class="flex justify-center w-full my-16"
      >
        <pagination />
      </div>
    </div>
  </Layout>
</template>

<script>
import { computed } from '@vue/composition-api'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

import BackTo from '@/theme/components/BackTo'
import CardPost from '@/theme/components/CardPost'

export default {
  name: 'Posts',

  components: {
    CardPost,
    Pagination,
    BackTo
  },

  setup (_, { root }) {
    const posts = computed(() => {
      if (!root.$pagination.pages && !root.$pagination.pages.length) return []
      return root.$pagination.pages.map(post => ({
        id: post.key,
        title: post.title,
        to: post.path,
        author: root.$themeConfig.authors.find(author => author.username === post.frontmatter.author),
        date: {
          datetime: post.frontmatter.date,
          short: new Intl.DateTimeFormat('default', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(post.frontmatter.date))
        }
      }))
    })
    const isCategory = computed(() => !root.$route.path.includes('/posts/'))

    return {
      posts,
      isCategory
    }
  }
}
</script>

<style lang="scss">

.posts-item {
  @screen lg {
    &:nth-child(odd) {
      @apply pr-3;
    }
    &:nth-child(even) {
      @apply pl-3;
    }
  }
}
</style>
