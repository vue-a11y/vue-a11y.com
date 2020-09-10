<template>
  <SettingWrapper
    v-show="languages.length"
    :title="$frontmatter.language.title"
  >
    <template v-for="item in languages">
      <SettingOption
        :id="item.id"
        :key="`language-item-${item.val}`"
        v-model="language"
        :text="item.text"
        :val="item.val"
        name="setting-language"
        type="radio"
        :checked="language === item.val"
      />
    </template>

    <SettingSaveButton
      v-show="showSave"
      @save="save"
    />
  </SettingWrapper>
</template>

<script>
import { ref, onMounted, watch } from '@vue/composition-api'

import SettingOption from './SettingOption'
import SettingSaveButton from './SettingSaveButton'
import SettingWrapper from './SettingWrapper'

export default {
  name: 'SettingLanguage',

  components: {
    SettingOption,
    SettingWrapper,
    SettingSaveButton
  },

  setup (_, { root }) {
    const language = ref(null)
    const showSave = ref(false)
    const languages = ref([])

    const settingPages = root.$site.pages.filter(page => page.frontmatter.view === 'Settings')
    if (settingPages.every(page => page.frontmatter.language && page.frontmatter.language.locale)) {
      languages.value = settingPages.map(item => {
        const locale = item.frontmatter.language.locale
        const data = root.$themeConfig.locales[locale]
        const shortLang = getShortLang(locale)

        if (!data || !data.enabled) return false

        return {
          id: `language-field-${shortLang}`,
          name: 'display-language',
          path: item.regularPath,
          text: data.label,
          type: 'radio',
          val: shortLang
        }
      })
        .filter(Boolean)
        .reverse()
    }

    watch(language, (val, old) => {
      if (!old) return
      showSave.value = val !== old
    })

    onMounted(() => {
      language.value = getShortLang(root.$localePath)
    })

    function getShortLang (locale) {
      return locale === '/' ? 'en' : locale.replace(/\//g, '')
    }

    function save () {
      const chosenLanguage = languages.value.find(lang => lang.val === language.value)
      root.$vuepress.$set('disableScrollBehavior', true)
      root.$router.replace(chosenLanguage.path, () => {
        root.$nextTick(() => root.$vuepress.$set('disableScrollBehavior', false))
      })
      showSave.value = false
    }

    return {
      save,
      showSave,
      language,
      languages
    }
  }
}
</script>

<style lang="scss"></style>
