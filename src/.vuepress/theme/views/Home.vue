<template>
  <div class="pt-24 home">
    <div class="container relative z-10 px-4 mx-auto">
      <div class="flex items-center justify-center h-fulllg:justify-between home-hero">
        <div class="max-w-sm lg:-mt-48">
          <h1 class="text-4xl font-bold">
            {{ $title }}
          </h1>
          <p class="text-xl">
            {{ $description }}
          </p>
          <div class="flex mt-10">
            <router-link
              :to="$frontmatter.actionLink"
              class="btn btn-accent"
            >
              {{ $frontmatter.actionText }}
            </router-link>

            <ExternalLink
              class="ml-4 btn btn-light"
              :href="`https://github.com/${$themeConfig.repo}`"
              label="Github"
            />
          </div>
        </div>
        <div class="relative self-end hidden lg:block lg:mr-6">
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
        class="flex flex-wrap items-center pt-20 mt-20 border-t border-solid c-border-color lg:mt-48 lg:pt-0 lg:border-transparent lg:justify-between"
        role="region"
        aria-label="Features"
      >
        <div
          v-for="(feature, index) in $frontmatter.features"
          :key="`feature-${index}`"
          class="w-full mb-12 last:mb-0 xl:mb-0 lg:max-w-sm"
        >
          <h2 class="text-2xl font-bold">
            {{ feature.title }}
          </h2>
          <p class="mt-4 text-lg">
            {{ feature.details }}
          </p>
        </div>
      </section>

      <section
        v-show="$themeConfig.sponsors.length"
        class="flex flex-wrap mt-20 lg:mt-32"
        role="region"
        :aria-label="$frontmatter.sponsorsText"
      >
        <span class="w-full mb-8 text-2xl font-bold sm:w-48">{{ $frontmatter.sponsorsText }}:</span>
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
        class="flex flex-wrap pt-20 my-20 border-t border-solid c-border-color lg:pt-0 lg:border-transparent lg:my-32 "
        role="region"
        :aria-label="$frontmatter.supportersText"
      >
        <span class="w-full mb-8 text-2xl font-bold sm:w-48">{{ $frontmatter.supportersText }}:</span>
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
