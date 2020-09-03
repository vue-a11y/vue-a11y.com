<template>
  <SettingWrapper
    id="a-theme-title"
    :title="$frontmatter.theme.title"
    class="mb-24 setting-theme"
    role="group"
  >
    <SettingWrapperList class="justify-between">
      <SettingWrapperItem
        v-for="item in themes"
        :key="`theme-item-${item.val}`"
      >
        <SettingOption
          :id="item.id"
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
      </SettingWrapperItem>
    </SettingWrapperList>
  </SettingWrapper>
</template>

<script>
import { ref, watch, onMounted, computed } from '@vue/composition-api'

import { useSettings } from '@/theme/composable'

import SettingOption from './SettingOption'
import SettingWrapper from './SettingWrapper'
import SettingWrapperItem from './SettingWrapperItem'
import SettingWrapperList from './SettingWrapperList'

export default {
  name: 'SettingTheme',

  components: {
    SettingOption,
    SettingWrapper,
    SettingWrapperList,
    SettingWrapperItem
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
}
</style>
