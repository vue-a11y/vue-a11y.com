<template>
  <div class="main-layout">
    <TheHeading />
    <TheSidebar />
    <TheMain>
      <Page />
    </TheMain>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/theme/components/TheFooter'
import TheHeading from '@/theme/components/TheHeading'
import TheMain from '@/theme/components/TheMain'
import TheSidebar from '@/theme/components/TheSidebar'

export default {
  name: 'Layout',

  components: {
    TheFooter,
    TheHeading,
    TheMain,
    TheSidebar
  }
}
</script>

<style lang="scss">
.main-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30% 70%;
}
</style>
