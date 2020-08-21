<template>
  <div class="home">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1154.695"
      height="1222.419"
      viewBox="0 0 1154.695 1222.419"
      class="absolute top-0 right-0 z-0 hidden bg-hero-rotate lg:block"
    ><path
      d="M-576.635,0H574l4.061,1222.419L250.269,857.9Z"
      transform="translate(576.635)"
      fill="#fbfcfc"
    /></svg>

    <div
      class="container relative z-10 px-4 mx-auto"
    >
      <section
        class="flex items-center justify-center h-full mt-24 lg:justify-between hero"
        aria-label="Hero"
      >
        <div class="max-w-sm lg:-mt-48">
          <h1 class="text-4xl font-bold">
            {{ $title }}
          </h1>
          <p class="text-xl">
            {{ $description }}
          </p>
          <div class="flex mt-10">
            <a
              :href="$frontmatter.actionLink"
              class="btn btn-accent"
            >
              {{ $frontmatter.actionText }}
            </a>

            <a
              href="#"
              class="ml-4 btn btn-light"
            >
              Github
            </a>
          </div>
        </div>
        <div class="self-end hidden lg:block lg:mr-6">
          <img
            :src="$frontmatter.heroImage"
            :alt="$frontmatter.heroImageAlternativeText"
          >
        </div>
      </section>

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

<style lang="scss"></style>
