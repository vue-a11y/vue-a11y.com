<template>
  <SettingWrapper
    v-show="visionOptions.length"
    id="a-vision-title"
    :title="$frontmatter.vision.title"
    class="vision"
  >
    <SettingWrapperList>
      <SettingWrapperItem
        v-for="item in visionOptions"
        :key="`vision-item-${item.val}`"
      >
        <SettingOption
          :id="item.id"
          v-model="vision[item.val]"
          :text="item.text"
          type="checkbox"
          :name="`setting-${item.val}`"
          :checked="vision[item.val]"
        />
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
  name: 'SettingVision',

  components: {
    SettingOption,
    SettingWrapper,
    SettingWrapperItem,
    SettingWrapperList
  },

  setup (_, { root }) {
    const vision = ref({
      'set-color-contrast': false
    })

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

    watch(vision, setVision, { deep: true })

    onMounted(() => {
      const { value } = useSettings('vision')
      vision.value = value.value
    })

    function setVision (val, old) {
      const { setStorage, toggleClassByObject } = useSettings()
      setStorage('vision', { ...val })
      toggleClassByObject({ ...val })
    }

    return {
      vision,
      visionOptions
    }
  }
}
</script>

<style lang="scss"></style>
