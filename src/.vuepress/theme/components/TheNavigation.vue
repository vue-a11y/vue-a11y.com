<template>
  <nav :aria-label="$themeLocaleConfig.a11y.landmarks.nav.main">
    <ul class="flex items-center">
      <li
        v-for="item in $themeLocaleConfig.nav"
        :key="item.text"
        class="mr-1"
      >
        <router-link
          v-slot="{ href, route, navigate, isActive }"
          :to="item.link"
        >
          <a
            :href="href"
            :aria-current="isActive && $route.path.indexOf(item.link) === 0 ? 'page' : null"
            class="px-3 py-3 border-b-4 border-transparent border-solid hover:border-accent lg:py-4"
            :class="{ 'active border-accent': isActive && $route.path.indexOf(item.link) === 0 }"
            @click="navigate"
          >
            {{ item.text }}
          </a>
        </router-link>
      </li>
      <li>
        <ExternalLink
          class="px-3 py-3 border-b-4 border-transparent border-solid hover:border-accent lg:py-4"
          :href="`https://github.com/${$themeConfig.repo}`"
          label="Github"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation'
}
</script>
