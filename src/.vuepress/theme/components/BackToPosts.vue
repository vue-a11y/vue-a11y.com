<template>
  <router-link :to="`${$localeConfig.path === '/' ? '' : $localeConfig.path}/posts/`">
    <vp-icon
      name="corner-up-left"
      size="8px"
      class="mt-2 mr-2"
    />
    <span>{{ $themeLocaleConfig.backToPostsText }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'BackToPosts'
}
</script>
