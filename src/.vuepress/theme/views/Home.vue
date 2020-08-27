<template>
  <div class="mt-24 home">
    <div class="container relative z-10 px-4 mx-auto">
      <div class="flex items-center justify-center h-fulllg:justify-between hero">
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
        <div class="self-end hidden lg:block lg:mr-6">
          <img
            :src="$frontmatter.heroImage"
            :alt="$frontmatter.heroImageAlternativeText"
          >
        </div>
      </div>

      <section
        class="flex flex-wrap items-center pt-20 mt-20 border-t border-solid border-light-400 lg:mt-48 lg:pt-0 lg:border-transparent lg:justify-between"
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
        v-if="false"
        class="flex flex-wrap mt-20 lg:mt-32"
        aria-label="Sponsors"
      >
        <span class="w-full mb-8 text-2xl font-bold sm:w-48">Sponsors:</span>
        <ul class="flex flex-wrap flex-grow">
          <li class="w-48">
            <a
              href="#"
              class="block"
            >
              <img
                src="/img/sponsors/vuemastery.png"
                alt="Vue Mastery logo"
                class="w-full"
              >
            </a>
          </li>
        </ul>
      </section>

      <section
        class="flex flex-wrap pt-20 my-20 border-t border-solid border-light-400 lg:pt-0 lg:border-transparent lg:my-32 "
        aria-label="Supporters"
      >
        <span class="w-full mb-8 text-2xl font-bold sm:w-48">Supporters:</span>
        <ul class="flex flex-wrap justify-between flex-grow">
          <li class="w-48">
            <a
              href="https://github.com/ktquez"
              class="block w-12 h-12 overflow-hidden rounded-full"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4"
                alt="Alan Ktquez"
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
