<template>
  <SettingWrapper
    v-show="motionOptions.length"
    :title="$frontmatter.motion.title"
  >
    <template v-for="item in motionOptions">
      <SettingOption
        :id="item.id"
        :key="`motion-item-${item.val}`"
        v-model="state[item.val]"
        :text="item.text"
        type="checkbox"
        :val="item.val"
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
      :text="$frontmatter.motion.successText"
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
  name: 'SettingMotion',

  components: {
    SettingOption,
    SettingWrapper,
    SettingSaveButton,
    SettingSuccessText
  },

  setup (_, { root }) {
    const motionOptions = computed(() => {
      if (!root.$frontmatter.motion || (root.$frontmatter.motion && !Array.isArray(root.$frontmatter.motion.items))) return []
      return root.$frontmatter.motion.items.map((item, index) => {
        return {
          id: `s-motion-${item.value}`,
          name: `motion-field-${item.value}`,
          text: item.label,
          type: 'checkbox',
          val: item.value
        }
      })
    })

    const setMotion = (state, { setStorage, toggleClassByObject }) => {
      setStorage('motion', { ...state.value })
      toggleClassByObject({ ...state.value })
      root.$announcer.assertive(root.$frontmatter.motion.successText)
    }

    const {
      save,
      state,
      showSaveButton,
      showSucessText,
      toggleSaveButton
    } = useSettingSection({ 'set-reduce-motion': false }, 'motion', setMotion)

    return {
      save,
      state,
      motionOptions,
      showSucessText,
      showSaveButton,
      toggleSaveButton
    }
  }
}
</script>

<style lang="scss"></style>
