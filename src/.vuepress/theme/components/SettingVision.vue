<template>
  <SettingWrapper
    v-show="visionOptions.length"
    :title="$frontmatter.vision.title"
  >
    <template v-for="item in visionOptions">
      <SettingOption
        :id="item.id"
        :key="`vision-item-${item.val}`"
        v-model="state[item.val]"
        :text="item.text"
        type="checkbox"
        :name="`setting-${item.val}`"
        :checked="state[item.val]"
        @change="toggleSaveButton(true)"
      />
    </template>

    <SettingSaveButton
      v-show="showSaveButton"
      @save="save"
    />

    <SettingSuccessText
      v-show="showSucessText"
      :text="$frontmatter.vision.successText"
    />
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
  name: 'SettingVision',

  components: {
    SettingOption,
    SettingWrapper,
    SettingSaveButton,
    SettingSuccessText
  },

  setup (_, { root }) {
    const visionOptions = computed(() => {
      if (!root.$frontmatter.vision || (root.$frontmatter.vision && !Array.isArray(root.$frontmatter.vision.items))) return []
      return root.$frontmatter.vision.items.map((item, index) => {
        return {
          id: `s-vision-${item.value}`,
          name: `vision-field-${item.value}`,
          text: item.label,
          type: 'checkbox',
          val: item.value
        }
      })
    })

    const setVision = (state, { setStorage, toggleClassByObject }) => {
      setStorage('vision', { ...state.value })
      toggleClassByObject({ ...state.value })
      root.$announcer.assertive(root.$frontmatter.vision.successText)
    }

    const {
      save,
      state,
      showSaveButton,
      showSucessText,
      toggleSaveButton
    } = useSettingSection({ 'set-color-contrast': false }, 'vision', setVision)

    return {
      save,
      state,
      visionOptions,
      showSucessText,
      showSaveButton,
      toggleSaveButton
    }
  }
}
</script>

<style lang="scss"></style>
