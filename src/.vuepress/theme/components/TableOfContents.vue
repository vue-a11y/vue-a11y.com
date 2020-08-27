<template>
  <nav class="toc">
    <component
      :is="titleTag"
      class="block pl-3 mb-4 text-xl font-bold"
      v-text="title"
    />
    <ul class="relative toc-list">
      <li class="w-full leading-4 toc-list-item" />
      <li
        v-for="header in headers"
        :key="header.slug"
        class="w-full leading-4 toc-list-item"
      >
        <router-link
          v-slot="{ href, route, isExactActive }"
          :to="{ path: $route.path, hash: header.hash }"
        >
          <a
            :href="href"
            class="relative inline-block py-2 pl-10 pr-3 anchor-link"
            :class="{ 'active font-bold': isExactActive }"
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

<style lang="scss">
.toc {
  margin-top: 5.3rem;

  &-list {
    &:before {
      @apply absolute z-20 border-l border-dashed border-gray-400;
      content: '';
      width: 2px;
      left: 28px;
      top: -5%;
      height: 110%;
    }
  }

  &-list-item {
    a {
      &:hover, &:focus, &.active {
        background-color: var(--bg-sidebar);

        &:before {
          @apply absolute rounded-full z-10;
          content: '';
          background-color: var(--accent);
          width: 6px;
          height: 6px;
          left: 10px;
          top: 50%;
          margin-top: -3px;
        }
      }
    }
  }
}
</style>
