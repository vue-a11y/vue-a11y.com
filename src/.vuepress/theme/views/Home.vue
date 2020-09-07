<template>
  <div class="pt-24 home">
    <div class="container relative z-10 px-4 mx-auto">
      <div class="flex items-center justify-center h-full lg:justify-between home-hero">
        <div class="max-w-sm">
          <h1 class="text-4xl font-bold">
            {{ $title }}
          </h1>
          <p>
            <span class="text-xl">{{ $description }}</span>
          </p>
          <div class="flex mt-10">
            <RouterLink
              :to="$frontmatter.actionLink"
              class="btn btn-accent"
            >
              {{ $frontmatter.actionText }}
            </RouterLink>

            <ExternalLink
              class="ml-4 btn btn-light"
              :href="`https://github.com/${$themeConfig.repo}`"
              label="Github"
            />
          </div>
        </div>
        <div class="relative self-end hidden lg:block xl:mr-6">
          <div
            class="absolute z-10 rounded-full home-hero-ball"
          />
          <img
            class="relative z-20"
            :src="$frontmatter.heroImage"
            :alt="$frontmatter.heroImageAlternativeText"
          >
        </div>
      </div>

      <section
        class="flex flex-wrap items-center pt-20 mt-24 border-t border-solid c-border-color lg:mt-48 lg:pt-0 lg:border-transparent lg:justify-between"
        role="region"
        aria-labelledby="a-features"
      >
        <h2
          id="a-features"
          class="sr-only"
        >
          Features
        </h2>
        <div
          v-for="(feature, index) in $frontmatter.features"
          :key="`feature-${index}`"
          class="w-full mb-12 last:mb-0 xl:mb-0 lg:max-w-sm"
        >
          <h3 class="text-2xl font-bold">
            {{ feature.title }}
          </h3>
          <p class="mt-4 text-lg">
            {{ feature.details }}
          </p>
        </div>
      </section>

      <section
        v-show="$themeConfig.sponsors.length"
        class="flex flex-wrap mt-24 lg:mt-32"
        role="region"
        aria-labelledby="a-sponsors"
      >
        <h2
          id="a-sponsors"
          class="w-full mb-8 text-2xl font-bold sm:w-48"
        >
          {{ $frontmatter.sponsorsText }}:
        </h2>
        <ul class="flex flex-wrap flex-grow">
          <li
            v-for="(sponsors, index) in $themeConfig.sponsors"
            :key="`sponsor-${index}`"
            class="w-48"
          >
            <a
              :href="sponsors.link"
              class="block"
              :aria-label="`${sponsors.name}`"
            >
              <img
                :src="`/img/sponsors/${sponsors.image}`"
                :alt="`${sponsors.name} logo`"
                class="w-full"
              >
            </a>
          </li>
        </ul>
      </section>

      <section
        v-show="$themeConfig.supporters.length"
        class="flex flex-wrap pt-20 my-24 border-t border-solid c-border-color lg:pt-0 lg:border-transparent lg:my-32 "
        role="region"
        aria-labelledby="a-supporters"
      >
        <h2
          id="a-supporters"
          class="w-full mb-8 text-2xl font-bold sm:w-48"
        >
          {{ $frontmatter.supportersText }}:
        </h2>
        <ul class="flex flex-wrap justify-between flex-grow">
          <li
            v-for="(supporter, index) in $themeConfig.supporters"
            :key="`supporter-${index}`"
            class="w-48"
          >
            <a
              :href="supporter.link"
              :aria-label="`${supporter.name}`"
              class="block w-12 h-12 overflow-hidden rounded-full"
            >
              <img
                :src="`/img/supporters/${supporter.image}`"
                :alt="`Avatar ${supporter.name}`"
                class="w-full"
              >
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.home {
  &-hero {
    &-ball {
      bottom: -16%;
      left: -2%;
      width: 54%;
      height: 66%;
      background-color: var(--bg-secondary);
    }
  }
}
</style>
