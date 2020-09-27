<template>
  <div class="container z-10 mx-auto post-page">
    <div class="px-6 mt-6 xl:px-4">
      <BackTo
        class="py-2 -ml-4"
        :to="$localePath"
        :text="`${$themeLocaleConfig.backToText} home`"
      />
      <HeaderFullPage>
        <template v-slot:cardTitle>
          {{ $frontmatter.title }}
        </template>
        <p class="mt-3 text-xl">
          {{ $frontmatter.description }} <br>
          {{ $frontmatter.note }}
        </p>
      </HeaderFullPage>

      <div class="mt-20 mb-24 md:px-6">
        <SettingLanguage class="mb-12 lg:mb-24" />
        <SettingTheme class="mb-12 lg:mb-24" />
        <SettingReadingFont class="mb-12 lg:mb-24" />
        <SettingVision class="mb-12 lg:mb-24" />
        <SettingMotion class="mb-12 lg:mb-24" />
      </div>
    </div>
  </div>
</template>

<script>
import BackTo from '@/theme/components/BackTo'
import HeaderFullPage from '@/theme/components/HeaderFullPage'
import SettingLanguage from '@/theme/components/SettingLanguage'
import SettingMotion from '@/theme/components/SettingMotion'
import SettingReadingFont from '@/theme/components/SettingReadingFont'
import SettingTheme from '@/theme/components/SettingTheme'
import SettingVision from '@/theme/components/SettingVision'

export default {
  name: 'Settings',

  components: {
    HeaderFullPage,
    BackTo,
    SettingTheme,
    SettingVision,
    SettingMotion,
    SettingLanguage,
    SettingReadingFont
  },

  setup (_, { root }) {}
}
</script>

<style lang="scss"></style>
