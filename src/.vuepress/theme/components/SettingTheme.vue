<template>
  <SettingWrapper
    v-show="themes.length"
    :title="$frontmatter.theme.title"
    class="mb-24 setting-theme"
  >
    <!-- Add class="justify-between" -->
    <template v-for="item in themes">
      <SettingOption
        :id="item.id"
        :key="`theme-item-${item.val}`"
        v-model="theme"
        no-style
        :text="item.text"
        :val="item.val"
        type="radio"
        name="setting-theme"
        :checked="theme === item.val"
      >
        <span class="w-full mb-3">
          <img
            :src="`/img/${item.val}.png`"
            :alt="`${$themeLocaleConfig.a11y.settings.theme.altText}`"
          >
        </span>
      </SettingOption>
    </template>
  </SettingWrapper>
</template>

<script>
import { ref, watch, onMounted, computed } from '@vue/composition-api'

import { useSettings } from '@/theme/composable'

import SettingOption from './SettingOption'
import SettingWrapper from './SettingWrapper'

export default {
  name: 'SettingTheme',

  components: {
    SettingOption,
    SettingWrapper
  },

  setup (_, { root }) {
    const theme = ref(null)

    const themes = computed(() => {
      if (!root.$frontmatter.theme || (root.$frontmatter.theme && !Array.isArray(root.$frontmatter.theme.items))) return []
      return root.$frontmatter.theme.items.map(item => {
        return {
          id: `s-theme-${item.value}`,
          name: 'theme',
          text: item.label,
          type: 'radio',
          val: item.value
        }
      })
    })

    watch(theme, setTheme)

    onMounted(() => {
      const { value } = useSettings('theme')
      theme.value = value.value
    })

    function setTheme (val, old) {
      if (!old) return
      const { setStorage } = useSettings()
      setStorage('theme', val)
      root.$set(root.$themeConfig.colorMode, 'defaultMode', val)
    }

    return {
      theme,
      themes
    }
  }
}
</script>

<style lang="scss">
.setting-theme {
  .setting-item {
    @apply mb-6;
  }
  .setting-option {
    @apply flex justify-center;
  }
  .setting-option-label {
    @apply flex-wrap justify-center;
    max-width: 257px;
  }

  > div {
    @apply justify-between;
  }
}
</style>