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
    <DarkMode
      class="hidden"
      v-bind="colorModeConfig"
    />
    <component :is="layout" />
    <ClientOnly>
      <VueAnnouncer />
    </ClientOnly>
  </div>
</template>

<script>
import { DarkMode } from '@vue-a11y/dark-mode'
import { computed, watch, onBeforeMount, ref } from '@vue/composition-api'

import { useSettings } from '@/theme/composable'

export default {
  name: 'GlobalLayout',

  components: {
    DarkMode
  },

  setup (_, { root, refs }) {
    const colorModeConfig = ref(root.$themeConfig.colorMode)

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

    watch(() => colorModeConfig, newConfig => {
      colorModeConfig.value = { ...newConfig }
    })

    onBeforeMount(() => {
      const { init, setLanguage } = useSettings()
      setLanguage(root)
      init()
    })

    return {
      layout,
      colorModeConfig
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
