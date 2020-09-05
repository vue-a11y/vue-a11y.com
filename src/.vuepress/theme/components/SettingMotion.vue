<template>
  <SettingWrapper
    v-show="motionOptions.length"
    :title="$frontmatter.motion.title"
  >
    <template v-for="item in motionOptions">
      <SettingOption
        :id="item.id"
        :key="`motion-item-${item.val}`"
        v-model="motion[item.val]"
        :text="item.text"
        type="checkbox"
        :val="item.val"
        :name="`setting-${item.val}`"
        :checked="motion[item.val]"
      />
    </template>
  </SettingWrapper>
</template>

<script>
import { ref, watch, onMounted, computed } from '@vue/composition-api'

import { useSettings } from '@/theme/composable'

import SettingOption from './SettingOption'
import SettingWrapper from './SettingWrapper'

export default {
  name: 'SettingMotion',

  components: {
    SettingOption,
    SettingWrapper
  },

  setup (_, { root }) {
    const motion = ref({
      'set-reduce-motion': false
    })

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

    watch(motion, setMotion, { deep: true })

    onMounted(() => {
      const { value } = useSettings('motion')
      motion.value = value.value
    })

    function setMotion (val, old) {
      const { setStorage, toggleClassByObject } = useSettings()
      setStorage('motion', { ...val })
      toggleClassByObject({ ...val })
    }

    return {
      motion,
      motionOptions
    }
  }
}
</script>

<style lang="scss"></style>
