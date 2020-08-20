<template>
  <nav aria-label="Main">
    <ul class="flex">
      <li
        v-for="item in $themeLocaleConfig.nav"
        :key="item.text"
      >
        <a
          :href="item.link"
          class="px-3 py-3 border-b-4 border-transparent border-solid hover:border-accent lg:py-4"
        >
          {{ item.text }}
        </a>
      </li>
      <li>
        <a
          :href="`https://github.com/${$themeConfig.repo}`"
          target="_blank"
          rel="noopener"
          class="px-3 py-3 ml-1 border-b-4 border-transparent border-solid hover:border-accent lg:py-4"
        >
          <span>Github</span>
          <span class="sr-only">({{ $localeConfig.externalLinkText }})</span>
          <OutboundLink />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation'
}
</script>
