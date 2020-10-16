<template>
  <div class="relative w-full sidebar">
    <button
      type="button"
      class="absolute top-0 left-0 flex ml-4 -mt-10 text-xs md:hidden"
      @click="$emit('toggle-sidebar')"
    >
      <vp-icon
        name="corner-up-left"
        size="8"
        class="mt-1"
      />
      <span class="ml-2 font-bold uppercase">Close</span>
      <span class="sr-only">menu sidebar</span>
    </button>
    <nav
      :aria-label="$themeLocaleConfig.a11y.landmarks.nav.secondary"
      class="mt-12 mb-10"
    >
      <template v-for="(nav, index) in items">
        <span
          :key="`nav-heading-${index}`"
          class="mt-12 ml-4 text-xl font-bold bg-primary"
          :class="{ 'sidebar__title-list--active': sidebarTitleActive === nav.title }"
        >
          {{ nav.title }}
        </span>
        <ul
          :key="`nav-list-${index}`"
          class="mt-3 mb-10 sidebar-list"
        >
          <li
            v-for="(item, itemIndex) in nav.children"
            :key="`nav-list-${index}-item-${itemIndex}`"
            class="pr-2 sidebar-list-item"
          >
            <ExternalLink
              v-if="item.type === 'external'"
              :href="item.path"
              :label="item.title"
              class="block px-4 py-1"
            />

            <RouterLink
              v-else
              v-slot="{ href, route, navigate, isActive }"
              :to="item.path"
            >
              <a
                :href="href"
                :aria-current="isActive && $route.path === item.path ? 'page' : null"
                class="block px-4 py-1"
                :class="{ 'active font-bold': isActive && $route.path === item.path }"
                @click="navigate"
              >
                {{ item.title }}
              </a>
            </RouterLink>

            <ul
              v-if="$route.path === item.path && $frontmatter.sidebarDepth !== 0"
              class="xl:hidden"
            >
              <li
                v-for="(subHeader, subIndex) in $page.headers"
                :key="`sidebar-subHeader-${subIndex}`"
                class="pl-4"
              >
                <RouterLink
                  v-slot="{ href, route, navigate, isActive }"
                  :to="`${$page.regularPath}#${subHeader.slug}`"
                >
                  <a
                    :href="href"
                    :aria-current="isActive && $route.path === item.path ? 'page' : null"
                    class="block px-3 py-1 text-sm hover:underline"
                    :class="{ 'active underline font-bold': isActive && $route.path === item.path }"
                  >
                    {{ subHeader.title }}
                  </a>
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </nav>
  </div>
</template>

<script>
import { computed, ref, watch } from '@vue/composition-api'

import { resolveSidebarItems } from '@/theme/utils/sidebar'

export default {
  name: 'TheSidebar',

  setup (_, { root }) {
    const items = computed(() => resolveSidebarItems(root.$page.regularPath, root.$site, root.$themeLocaleConfig))
    const sidebarTitleActive = ref(null)

    watch(() => root.$route.path, val => {
      const item = items.value.find(item => item.children.some(child => child.path === val))
      if (item) {
        sidebarTitleActive.value = item.title
      }
    }, { immediate: true })

    return {
      items,
      sidebarTitleActive
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  &-list {
    &-item {
      margin-top: 1px;
      > a:focus, > a:hover, > a.active {
        position: relative;
        background-color: var(--secondary);

        &:before {
          @apply absolute top-0 right-0 h-full bg-accent-primary;
          content: '';
          width: 6px;
        }
      }

      > a:hover {
        z-index: 1 !important;
      }
    }
  }
}
</style>
