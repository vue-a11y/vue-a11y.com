<template>
  <div
    class="global-layout"
    dir="ltr"
  >
    <component :is="layout" />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'GlobalLayout',

  setup (_, { root }) {
    const layout = computed(() => {
      if (!root.$page.path) return 'NotFound'
      if (root.$frontmatter.layout) return root.$frontmatter.layout
      return 'Layout'
    })

    return {
      layout
    }
  }
}
</script>

<style lang="scss" src="@/theme/styles/base.scss"></style>
<style src="@/theme/styles/tailwind.css"></style>
