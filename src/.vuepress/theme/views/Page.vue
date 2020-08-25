<template>
  <article class="flex justify-between w-full px-6 pt-6 md:mt-4 lg:px-10 xl:pr-0">
    <Content class="h-full" />
    <div class="flex hidden h-full page-float-toc xl:block">
      <TableOfContents
        v-if="headers.length && $frontmatter.sidebarDepth !== 0"
        :title="$themeLocaleConfig.toc.title"
        title-tag="span"
        :headers="headers"
        class="fixed"
        style="top: 100px;"
      />
    </div>
  </article>
</template>

<script>
import { computed, watch } from '@vue/composition-api'

import { useIntersectionObserver } from '@/theme/composable'

export default {
  name: 'Page',

  components: {
    TableOfContents: () => import('@/theme/components/TableOfContents')
  },

  setup (_, { root }) {
    const headers = computed(() => {
      if (!root.$page.headers) return []
      return root.$page.headers.map(header => {
        return { title: header.title, hash: header.slug }
      })
    })

    const { targetIntercepted } = useIntersectionObserver('.header-anchor')

    watch(targetIntercepted, val => {
      if (root.$route.hash && root.$route.hash === val.hash) return
      root.$router.push({ path: root.$route.path, hash: val.hash })
    })

    return {
      headers
    }
  }
}
</script>

<style lang="scss">
div.content__default {
  @apply w-full;
  @screen md {
    @apply w-auto;
  }
  @screen xl {
    @apply pr-16;
    width: calc(100% - 250px);
  }
}

.page-float-toc {
  @screen xl {
    width: 260px;
  }
}

</style>
