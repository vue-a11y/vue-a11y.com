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
  </SettingWrapper>
</template>

<script>
import { ref, watch, onMounted } from '@vue/composition-api'

import SettingOption from './SettingOption'
import SettingWrapper from './SettingWrapper'

export default {
  name: 'SettingLanguage',

  components: {
    SettingOption,
    SettingWrapper
  },

  setup (_, { root }) {
    const language = ref(null)

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

    watch(language, changeLanguage)

    onMounted(() => {
      language.value = getShortLang(root.$localePath)
    })

    function getShortLang (locale) {
      return locale === '/' ? 'en' : locale.replace(/\//g, '')
    }

    function changeLanguage (val) {
      const chosenLanguage = languages.value.find(language => language.val === val)
      root.$vuepress.$set('disableScrollBehavior', true)
      root.$router.replace(chosenLanguage.path, () => {
        root.$nextTick(() => root.$vuepress.$set('disableScrollBehavior', false))
      })
    }

    return {
      language,
      languages
    }
  }
}
</script>

<style lang="scss"></style>
