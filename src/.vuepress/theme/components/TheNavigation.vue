<template>
  <nav
    :aria-label="$themeLocaleConfig.a11y.landmarks.nav.main"
    class="the-nav"
  >
    <ul class="flex items-center">
      <li
        v-for="item in $themeLocaleConfig.nav"
        :key="item.text"
        class="mr-1"
      >
        <RouterLink
          v-slot="{ href, route, navigate, isActive }"
          :to="item.link"
        >
          <a
            :href="href"
            :aria-current="isActive && $route.path.indexOf(item.link) === 0 ? 'page' : null"
            class="px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent"
            :class="{ 'active border-accent': isActive && $route.path.indexOf(item.link) === 0 }"
            @click="navigate"
          >
            {{ item.text }}
          </a>
        </RouterLink>
      </li>
      <li>
        <ExternalLink
          class="px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent"
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

<style lang="scss">
.the-nav {
  &-link {
    padding-top: 1rem;
    padding-bottom: 1.2rem;
  }
}
</style>
