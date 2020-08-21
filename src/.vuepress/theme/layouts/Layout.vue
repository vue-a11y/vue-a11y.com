<template>
  <div class="flex flex-wrap main-layout">
    <TheHeading bg-sidebar />
    <div class="flex justify-end w-64 h-full sidebar-wrapper container-layout-pl lg:w-2/7">
      <TheSidebar />
    </div>
    <TheMain class="flex w-full main-wrapper container-layout-pr md:w-6/7 lg:w-5/7">
      <Page />
    </TheMain>
  </div>
</template>

<script>
import TheHeading from '@/theme/components/TheHeading'
import TheMain from '@/theme/components/TheMain'
import TheSidebar from '@/theme/components/TheSidebar'

export default {
  name: 'Layout',

  components: {
    TheHeading,
    TheMain,
    TheSidebar
  }
}
</script>

<style lang="scss">
.sidebar-wrapper {
  background-color: var(--bg-sidebar);
}

.sidebar-wrapper, .main-wrapper {
  height: calc(100vh - 65px);
  overflow: auto;
}
</style>
