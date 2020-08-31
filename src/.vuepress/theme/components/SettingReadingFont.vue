<template>
  <SettingWrapper
    id="a-reading-font-title"
    :title="$frontmatter.reading.title"
    class="reading-font"
    role="group"
  >
    <SettingWrapperList>
      <SettingWrapperItem
        v-for="item in fonts"
        :key="`reading-font-item-${item.val}`"
      >
        <SettingOption
          :id="item.id"
          v-model="font"
          :text="item.text"
          :val="item.val"
          type="radio"
          name="setting-reading-font"
          :checked="font === item.val"
        />
      </SettingWrapperItem>
    </SettingWrapperList>
  </SettingWrapper>
</template>

<script>
import { ref, watch, onMounted } from '@vue/composition-api'

import { useSettings } from '@/theme/composable'

import SettingOption from './SettingOption'
import SettingWrapper from './SettingWrapper'
import SettingWrapperItem from './SettingWrapperItem'
import SettingWrapperList from './SettingWrapperList'

export default {
  name: 'SettingReadingFont',

  components: {
    SettingOption,
    SettingWrapper,
    SettingWrapperItem,
    SettingWrapperList
  },

  setup (_, { root }) {
    const font = ref(null)

    const fonts = root.$frontmatter.reading && root.$frontmatter.reading.items.map(item => {
      return {
        id: `s-reading-font-${item.value}`,
        name: 'reading-font',
        text: item.label,
        type: 'radio',
        val: item.value
      }
    })

    watch(font, setReadingFont)

    onMounted(() => {
      const { value } = useSettings('reading')
      font.value = value.value
    })

    function setReadingFont (val, old) {
      const { toggleClass, setStorage } = useSettings()
      setStorage('reading', val)
      toggleClass(val, old)
    }

    return {
      font,
      fonts
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
