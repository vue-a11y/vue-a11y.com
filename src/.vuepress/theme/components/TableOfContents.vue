<template>
  <nav
    v-show="headers.length"
    class="toc"
    :aria-label="title"
  >
    <component
      :is="titleTag"
      class="toc-title"
      v-text="title"
    />
    <ul class="toc-list">
      <li
        v-for="header in headers"
        :key="header.slug"
        class="toc-list-item"
      >
        <router-link
          v-slot="{ href, route, isExactActive }"
          :to="{ path: $route.path, hash: header.hash }"
        >
          <a
            :href="href"
            :class="{ 'active': isExactActive }"
          >
            {{ header.title }}
          </a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { watch, computed } from '@vue/composition-api'

import { useIntersectionObserver } from '@/theme/composable'

export default {
  name: 'TableOfContents',

  props: {
    title: {
      type: String,
      default: 'On this page'
    },

    titleTag: {
      type: String,
      default: 'h2'
    }
  },

  setup (_, { root }) {
    const { targetIntercepted } = useIntersectionObserver('.header-anchor') // use { rootMargin: '0px 0px -70%' } to active by header viewport top

    const headers = computed(() => {
      if (!root.$page.headers) return []
      return root.$page.headers.map(header => {
        return { title: header.title, hash: header.slug }
      })
    })

    watch(targetIntercepted, val => {
      if (root.$route.hash && root.$route.hash === val.hash) return
      root.$vuepress.$set('disableScrollBehavior', true)
      root.$router.replace({ path: root.$route.path, hash: val.hash }, () => {
        root.$nextTick(() => root.$vuepress.$set('disableScrollBehavior', false))
      })
    })

    return {
      headers
    }
  }
}
</script>
