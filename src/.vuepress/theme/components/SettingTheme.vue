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
        v-model="state"
        no-style
        :text="item.text"
        :val="item.val"
        type="radio"
        name="setting-theme"
        :checked="state === item.val"
        @change="toggleSaveButton(true)"
      >
        <span class="w-full mb-3">
          <img
            :src="`/img/${item.val}.png`"
            :alt="`${$themeLocaleConfig.a11y.settings.theme.altText}`"
          >
        </span>
      </SettingOption>
    </template>

    <div class="w-full">
      <SettingSaveButton
        v-show="showSaveButton"
        @save="save"
      />
      <SettingSuccessText
        v-show="showSucessText"
        :text="$frontmatter.theme.successText"
      />
    </div>
  </SettingWrapper>
</template>

<script>
import { computed } from '@vue/composition-api'

import { useSettingSection } from '@/theme/composable'

import SettingOption from './SettingOption'
import SettingSaveButton from './SettingSaveButton'
import SettingSuccessText from './SettingSuccessText'
import SettingWrapper from './SettingWrapper'

export default {
  name: 'SettingTheme',

  components: {
    SettingOption,
    SettingWrapper,
    SettingSaveButton,
    SettingSuccessText
  },

  setup (_, { root }) {
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

    const setTheme = (state, { setStorage }) => {
      setStorage('theme', state)
      root.$set(root.$themeConfig.colorMode, 'defaultMode', state.value)
      root.$announcer.assertive(root.$frontmatter.theme.successText)
    }

    const {
      save,
      state,
      showSaveButton,
      showSucessText,
      toggleSaveButton
    } = useSettingSection('', 'theme', setTheme)

    return {
      save,
      state,
      themes,
      showSucessText,
      showSaveButton,
      toggleSaveButton
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
