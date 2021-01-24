<template>
  <div
    class="global-layout"
    dir="ltr"
    itemscope
    itemtype="https://schema.org/WebPage"
  >
    <meta
      itemprop="name"
      :content="$siteTitle"
    >
    <meta
      itemprop="alternateName"
      :content="$siteTitle"
    >
    <meta
      itemprop="url"
      :content="$themeConfig.url"
    >
    <ClientOnly>
      <VueSkipTo
        v-if="$themeLocaleConfig.skipTo"
        :to="$themeLocaleConfig.skipTo.to"
        :label="$themeLocaleConfig.skipTo.label"
        class="z-20"
      />
    </ClientOnly>
    <component :is="layout" />
    <ClientOnly>
      <DarkMode
        class="hidden"
        v-bind="colorModeConfig"
      />
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

    watch(() => colorModeConfig, newConfig => {
      colorModeConfig.value = { ...newConfig }
    })

    onBeforeMount(() => {
      const { init } = useSettings()
      init()
    })

    return {
      layout,
      colorModeConfig
    }
  }
}
</script>

<style lang="scss" src="@/theme/styles/index.scss"></style>
