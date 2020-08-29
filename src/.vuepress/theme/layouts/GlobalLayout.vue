<template>
  <div
    class="global-layout"
    dir="ltr"
  >
    <VueSkipTo
      v-if="$themeLocaleConfig.skipTo"
      ref="skipTo"
      :to="$themeLocaleConfig.skipTo.to"
      :list-label="$themeLocaleConfig.skipTo.label"
      class="z-20"
    /> <!-- when update the @vue-a11y/skip-to, add ariaLabelNav attribute -->
    <component :is="layout" />
  </div>
</template>

<script>
import { computed, watch } from '@vue/composition-api'

export default {
  name: 'GlobalLayout',

  setup (_, { root, refs }) {
    const layout = computed(() => {
      if (!root.$page.path) return 'NotFound'
      if (root.$frontmatter.layout) return root.$frontmatter.layout
      return 'Layout'
    })

    watch(() => root.$route.path, () => {
      root.$nextTick(() => {
        refs.skipTo.$el.setAttribute('tabindex', '-1')
        refs.skipTo.$el.focus()
        refs.skipTo.$el.removeAttribute('tabindex')
      })
    })

    return {
      layout
    }
  }
}
</script>

<style lang="scss" src="@/theme/styles/base.scss"></style>
<style src="@/theme/styles/tailwind.css"></style>

<style>
div.vue-skip-to:focus {
  width: 1px;
  height: 1px;
  clip: rect(0,0,0,0);
  border-width: 0;
}
</style>
