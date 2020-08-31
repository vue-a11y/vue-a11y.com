<template>
  <SettingWrapper
    id="a-language-title"
    :title="$frontmatter.language.title"
    role="group"
  >
    <SettingWrapperList>
      <SettingWrapperItem
        v-for="item in languages"
        :key="`language-item-${item.val}`"
      >
        <SettingOption
          :id="item.id"
          v-model="language"
          :text="item.text"
          :val="item.val"
          name="setting-language"
          type="radio"
          :checked="language === item.val"
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
  name: 'SettingLanguage',

  components: {
    SettingOption,
    SettingWrapper,
    SettingWrapperItem,
    SettingWrapperList
  },

  setup (_, { root }) {
    const language = ref(null)

    const languages = Object.keys(root.$themeConfig.locales)
      .map(locale => {
        const data = root.$themeConfig.locales[locale]
        if (!data.enabled) return false
        const shortLang = getShortLang(locale)

        return {
          id: `language-field-${shortLang}`,
          name: 'display-language',
          text: data.label,
          type: 'radio',
          val: shortLang
        }
      }).filter(Boolean)

    watch(language, setLanguage)

    onMounted(() => {
      const { value } = useSettings('language')
      language.value = value.value
    })

    function getShortLang (locale) {
      return locale === '/' ? 'en' : locale.replace(/\//g, '')
    }

    function setLanguage (val, old) {
      if (!old) return
      const { setStorage, setLanguage: setLanguageByStorage } = useSettings()
      setStorage('language', val)
      setLanguageByStorage(root)
    }

    return {
      language,
      languages
    }
  }
}
</script>

<style lang="scss"></style>
