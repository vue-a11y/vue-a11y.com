<template>
  <div class="full-layout">
    <TheHeading />
    <TheMain>
      <component :is="view" />
    </TheMain>
    <TheFooter />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

import TheFooter from '@/theme/components/TheFooter'
import TheHeading from '@/theme/components/TheHeading'
import TheMain from '@/theme/components/TheMain'

export default {
  name: 'Full',

  components: {
    TheFooter,
    TheHeading,
    TheMain
  },

  setup (_, { root }) {
    const view = computed(() => root.$frontmatter.view)
    if (!view.value) root.$router.push('/')
    return {
      view
    }
  }
}
</script>

<style lang="scss"></style>
