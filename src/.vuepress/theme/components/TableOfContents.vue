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
        <RouterLink
          v-slot="{ href, route, isExactActive }"
          :to="{ path: $route.path, hash: header.hash }"
        >
          <a
            :href="href"
            :class="{ 'active': isExactActive }"
          >
            {{ header.title }}
          </a>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { watch, computed, onMounted } from '@vue/composition-api'

import { useIntersectionObserver } from '@/theme/composable'
import { programmaticFocus } from '@/theme/utils'

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
        return header.level === 2 && { title: header.title, hash: header.slug }
      }).filter(Boolean)
    })

    onMounted(() => {
      if (root.$route.hash) {
        const heading = document.getElementById(root.$route.hash.substring(1))
        heading && programmaticFocus(heading)
      }
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
