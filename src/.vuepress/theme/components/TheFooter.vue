<template>
  <footer class="relative z-10 footer">
    <div class="flex justify-center w-full px-4 py-24 lg:py-32 bg-light-200">
      <div class="max-w-md">
        <div class="flex justify-center">
          <vp-icon
            name="send"
            size="1.6rem"
          />
          <span class="ml-2 text-3xl font-bold leading-7">{{ $themeLocaleConfig.newsletter.title }}</span>
        </div>
        <p
          id="a-newsletter-description"
          class="mt-2 text-center"
        >
          {{ $themeLocaleConfig.newsletter.description }}
        </p>

        <NewsletterForm class="mt-6" />

        <ul class="flex justify-center mt-16">
          <li>
            <a
              href="https://twitter.com/vue_a11y"
              class="block p-5 border border-solid rounded-full border-light-400 btn-social"
              target="_blank"
              rel="me noopener"
              :aria-label="`Vue accesibility Twitter (${$localeConfig.externalLinkText})`"
            >
              <vp-icon
                name="twitter"
                size="1.5rem"
              />
            </a>
          </li>
          <li class="ml-4">
            <a
              href="https://github.com/vue-a11y"
              class="block p-5 border border-solid rounded-full border-light-400 btn-social"
              target="_blank"
              rel="me noopener"
              :aria-label="`Vue accesibility Github (${$localeConfig.externalLinkText})`"
            >
              <vp-icon
                name="github"
                size="1.5rem"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full py-6 text-center">
      <Copyright />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  components: {
    Copyright: () => import('@/theme/components/Copyright'),
    NewsletterForm: () => import('@/theme/components/NewsletterForm')
  }
}
</script>

<style lang="scss">
.btn-social {
  background-color: var(--bg);
}
</style>
