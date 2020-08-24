<template>
  <div class="flex flex-wrap main-layout">
    <TheHeading
      has-sidebar
      bg-sidebar
      :is-sidebar-open="isSidebarOpen"
      class="relative z-10"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      id="s-sidebar-wrapper"
      ref="sidebar"
      class="relative z-10 flex justify-end w-64 h-full sidebar-wrapper container-layout-pl lg:w-2/7"
      :class="{ 'sidebar-wrapper-show': isSidebarOpen }"
    >
      <FocusLoop
        :disabled="!sidebarFixed"
        :is-visible="isSidebarOpen"
        class="w-full"
      >
        <TheSidebar
          :is-sidebar-open="isSidebarOpen"
          @toggle-sidebar="toggleSidebar"
        />
      </FocusLoop>
    </div>

    <div
      v-if="isSidebarOpen"
      class="fixed top-0 left-0 z-0 w-full h-full opacity-50 sidebar-overlay md:hidden"
      @click="toggleSidebar"
    />

    <TheMain class="flex flex-grow main-wrapper container-layout-pr md:w-4/7 lg:flex-grow-0 lg:w-5/7">
      <Page />
    </TheMain>
  </div>
</template>

<script>
import { FocusLoop } from '@vue-a11y/focus-loop'

import TheHeading from '@/theme/components/TheHeading'
import TheMain from '@/theme/components/TheMain'
import TheSidebar from '@/theme/components/TheSidebar'
import useSidebar from '@/theme/composable/useSidebar'

export default {
  name: 'Layout',

  components: {
    TheMain,
    FocusLoop,
    TheHeading,
    TheSidebar
  },

  setup (_, { emit, refs }) {
    const { isSidebarOpen, sidebarFixed, toggleSidebar } = useSidebar(refs)

    return {
      sidebarFixed,
      toggleSidebar,
      isSidebarOpen
    }
  }
}
</script>

<style lang="scss">
.sidebar-wrapper, .main-wrapper {
  overflow: auto;

  @screen md {
    height: calc(100vh - 65px);
  }
}

.sidebar-wrapper {
  @apply fixed invisible opacity-0 bottom-0;
  left: -100%;
  background-image: var(--bg-left);
  transition: visibility .3s, opacity .3s, left .3s;

  &-show {
    @apply visible opacity-100 left-0;
  }

  @media (max-width: theme('screens.md')) {
    height: calc(100vh - 129px);
  }

  @screen md {
    // width: 250px;
    @apply relative visible opacity-100 left-0;
  }
}

.sidebar-overlay {
  background-color: var(--bg);
}
</style>
