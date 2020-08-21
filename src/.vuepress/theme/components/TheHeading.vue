<template>
  <header class="relative z-10 flex flex-wrap w-full border header border-botton border-light-400 container-layout">
    <div
      class="flex items-center justify-end w-1/4 h-16 md:pl-0 container-layout-pl md:w-1/7 lg:w-2/7"
      :class="bgSidebar ? 'header-logo--bg' : null"
    >
      <div class="w-full">
        <Logo />
      </div>
    </div>
    <div class="flex items-center flex-grow-0 w-3/4 h-16 md:pr-0 md:w-auto md:flex-grow">
      <SearchBox class="w-full lg:pl-8 xl:pl-16" />
    </div>
    <div class="flex items-center h-16 header-nav md:justify-end container-layout-pr md:flex-grow">
      <TheNavigation />
    </div>
  </header>
</template>

<script>
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
      background-color: var(--bg-sidebar)
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
