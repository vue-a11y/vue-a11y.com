<template>
  <div class="w-full">
    <article class="flex justify-between w-full px-6 pt-6 md:mt-4 lg:px-10 xl:pr-0">
      <div class="page-content">
        <Content />
        <PageEdit class="flex flex-wrap justify-between w-full py-6 pb-24 border-t border-light-400 md:mt-4" />
      </div>
      <div class="sticky top-0 flex hidden h-full page-float-toc xl:block">
        <TableOfContents
          v-if="headers.length && $frontmatter.sidebarDepth !== 0"
          :title="$themeLocaleConfig.toc.title"
          title-tag="span"
          :headers="headers"
        />
      </div>
    </article>
  </div>
</template>

<script>
import { computed, watch } from '@vue/composition-api'

import { useIntersectionObserver } from '@/theme/composable'

export default {
  name: 'Page',

  components: {
    PageEdit: () => import('@/theme/components/PageEdit'),
    TableOfContents: () => import('@/theme/components/TableOfContents')
  },

  setup (_, { root }) {
    const headers = computed(() => {
      if (!root.$page.headers) return []
      return root.$page.headers.map(header => {
        return { title: header.title, hash: header.slug }
      })
    })

    const { targetIntercepted } = useIntersectionObserver('.header-anchor') // use { rootMargin: '0px 0px -70%' } to active by header viewport top

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
.page-content {
  @apply w-full;
  @screen xl {
    @apply pr-16;
    width: calc(100% - var(--toc-w-size));
  }
}

.page-float-toc {
  @screen xl {
    width: var(--toc-w-size);
  }
}

</style>
