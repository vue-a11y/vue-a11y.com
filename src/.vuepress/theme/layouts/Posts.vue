<template>
  <Layout>
    <div
      class="w-full px-4 xl:pr-4"
      :class="{ 'mt-6 md:mt-12': !isCategory }"
    >
      <router-link
        v-show="isCategory"
        :to="`${$localeConfig.path === '/' ? '' : $localeConfig.path}/blog/`"
        class="inline-flex px-4 my-4 ml-2"
      >
        <vp-icon
          name="corner-up-left"
          size="8px"
          class="mt-2 mr-2"
        />
        <span>{{ $themeLocaleConfig.backToPostsText }}</span>
      </router-link>
      <ul class="flex flex-wrap justify-between">
        <li
          v-for="post in posts"
          :key="post.id"
          class="flex w-full mb-6 lg:pl-6 lg:w-1/2"
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

import CardPost from '@/theme/components/CardPost'

export default {
  name: 'Posts',

  components: {
    CardPost,
    Pagination
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
    const isCategory = computed(() => root.$currentCategories && root.$currentCategories.scope === 'categories')

    return {
      posts,
      isCategory
    }
  }
}
</script>

<style lang="scss"></style>
