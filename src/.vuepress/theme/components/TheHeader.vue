<template>
  <header
    class="relative z-10 w-full border-b header c-border-color"
    itemscope
    itemtype="https://schema.org/Organization"
  >
    <meta
      itemprop="name"
      :content="$siteTitle"
    >
    <meta
      v-for="social in $themeConfig.social"
      :key="`meta-rich-${social.name}`"
      itemprop="sameAs"
      :content="social.link"
    >
    <div class="flex flex-wrap w-full px-0">
      <div
        class="flex items-center justify-end w-1/5 h-16 md:pl-0 md:w-1/12 lg:w-3/12"
        :class="{'header-logo--bg': bgSidebar, 'container-layout-pl lg:w-2/7': hasSidebar }"
      >
        <div class="w-full">
          <Logo />
        </div>
      </div>
      <div
        class="flex items-center flex-grow-0 w-3/5 h-16 md:pl-4 lg:pl-0 md:pr-0 md:w-auto md:flex-grow"
        :class="{ 'w-4/5': !hasSidebar }"
      >
        <form class="relative w-full lg:pl-10">
          <vp-icon
            name="search"
            class="absolute z-20 ml-3 pin-c-y"
          />
          <SearchBox
            role="search"
            class="w-full"
          />
        </form>
      </div>
      <div
        v-if="hasSidebar"
        class="flex items-center justify-end w-1/5 md:hidden"
      >
        <button
          type="button"
          class="flex px-4 py-3 mr-1 md:hidden"
          aria-controls="s-sidebar-wrapper"
          :aria-label="menuButtonAriaLabel"
          :aria-expanded="isSidebarOpen.toString()"
          @click="$emit('toggle-sidebar')"
        >
          <vp-icon
            :name="isSidebarOpen ? 'close' : 'menu'"
            size="23"
          />
        </button>
      </div>
      <div
        class="flex items-center h-16 header-nav md:justify-end md:flex-grow"
        :class="{ 'container-layout-pr': hasSidebar }"
      >
        <TheNavigation />
      </div>
    </div>
  </header>
</template>

<script>
import { watch, computed } from '@vue/composition-api'

import Logo from '@/theme/components/Logo'
import TheNavigation from '@/theme/components/TheNavigation'
import SearchBox from '@SearchBox'

export default {
  name: 'TheHeader',

  components: {
    Logo,
    SearchBox,
    TheNavigation
  },

  props: {
    bgSidebar: {
      type: Boolean,
      default: false
    },

    hasSidebar: {
      type: Boolean,
      default: false
    },

    isSidebarOpen: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { root, emit }) {
    const labels = root.$themeLocaleConfig.a11y.labels
    const menuButtonAriaLabel = labels.menuButton ? computed(() => props.isSidebarOpen ? labels.menuButton.close : labels.menuButton.open) : 'Menu sidebar button'

    watch(() => root.$route.fullPath, () => props.isSidebarOpen && emit('toggle-sidebar'))

    return {
      menuButtonAriaLabel
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: var(--bg);

  @media (min-width: theme('screens.md')) {
    height: 65px;
  }

  @media (max-width: theme('screens.lg')) {
    @apply px-3;
  }

  &-logo--bg {
    @media (min-width: theme('screens.lg')) {
      @apply bg-page-gradient-left;

      .logo {
        @apply bg-primary;
      }
    }
  }

  &-nav {
    @media (max-width: theme('screens.sm')) {
      max-width: 100vw;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
    }
  }
}
</style>
