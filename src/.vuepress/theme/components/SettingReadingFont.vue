<template>
  <SettingWrapper
    v-show="fonts.length"
    :title="$frontmatter.reading.title"
    class="reading-font"
  >
    <template v-for="item in fonts">
      <SettingOption
        :id="item.id"
        :key="`reading-font-item-${item.val}`"
        v-model="state"
        :text="item.text"
        :val="item.val"
        type="radio"
        name="setting-reading-font"
        :checked="state === item.val"
        @change="toggleSaveButton(true)"
      />
    </template>

    <SettingSaveButton
      v-show="showSaveButton"
      @save="save"
    />

    <SettingSuccessText
      v-show="showSucessText"
      :text="$frontmatter.reading.successText"
    />
  </SettingWrapper>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

import { useSettingSection } from '@/theme/composable'

import SettingOption from './SettingOption'
import SettingSaveButton from './SettingSaveButton'
import SettingSuccessText from './SettingSuccessText'
import SettingWrapper from './SettingWrapper'

export default {
  name: 'SettingReadingFont',

  components: {
    SettingOption,
    SettingWrapper,
    SettingSaveButton,
    SettingSuccessText
  },

  setup (_, { root }) {
    const oldFont = ref(null)

    const fonts = root.$frontmatter.reading && root.$frontmatter.reading.items.map(item => {
      return {
        id: `s-reading-font-${item.value}`,
        name: 'reading-font',
        text: item.label,
        type: 'radio',
        val: item.value
      }
    })

    const setReadingFont = (state, { setStorage, toggleClass }) => {
      setStorage('reading', state.value)
      toggleClass(state.value, oldFont.value)
      root.$announcer.assertive(root.$frontmatter.reading.successText)
    }

    const {
      save,
      state,
      showSaveButton,
      showSucessText,
      toggleSaveButton
    } = useSettingSection('', 'reading', setReadingFont)

    watch(state, (val, old) => {
      if (!old) return
      oldFont.value = old
    })

    return {
      save,
      state,
      fonts,
      showSaveButton,
      showSucessText,
      toggleSaveButton
    }
  }
}
</script>

<style lang="scss">
.reading-font {
  label[for="s-reading-font-set-serif"] {
    font-family: var(--rf-serif);
  }

  label[for="s-reading-font-set-open-dyslexic"] {
    font-family: var(--rf-open-dyslexic);
  }

  label[for="s-reading-font-set-monospace"] {
    font-family: var(--rf-monospace);
  }
}
</style>
