<template>
  <nav :aria-label="$themeLocaleConfig.a11y.landmarks.nav.main">
    <ul class="flex items-center">
      <li
        v-for="item in $themeLocaleConfig.nav"
        :key="item.text"
        class="mr-1 last:mr-0"
      >
        <router-link
          v-slot="{ href, route, navigate, isActive }"
          :to="item.link"
        >
          <a
            :href="href"
            :aria-current="isActive && $route.path === item.link ? 'page' : null"
            class="px-3 py-3 border-b-4 border-transparent border-solid hover:border-accent lg:py-4"
            :class="{ 'active border-accent': isActive && $route.path === item.link }"
            @click="navigate"
          >
            {{ item.text }}
          </a>
        </router-link>
      </li>
      <li>
        <a
          :href="`https://github.com/${$themeConfig.repo}`"
          target="_blank"
          rel="noopener"
          class="px-3 py-3 ml-1 border-b-4 border-transparent border-solid hover:border-accent lg:py-4"
        >
          Github
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
