<template>
  <header class="flex flex-wrap border border-botton border-light-400 md:h-16">
    <div
      class="flex items-center justify-end w-1/4 h-16 pl-2 md:pl-0 container-pl md:w-1/7 lg:w-2/7"
      :class="bgSidebar ? 'bg-sidebar' : null"
    >
      <div class="w-full">
        <Logo />
      </div>
    </div>
    <div class="flex items-center w-3/4 h-16 pr-4 md:pr-0 md:w-2/7 lg:w-2/7">
      <SearchBox class="w-full lg:pl-8 xl:pl-16" />
    </div>
    <div class="flex items-center w-full h-16 header-nav md:justify-end container-pr md:w-4/7 lg:w-3/7">
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
.header-nav {
  @media (max-width: theme('screens.sm')) {
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
}
</style>
