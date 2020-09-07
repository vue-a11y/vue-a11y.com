
<template>
  <Full>
    <div class="flex items-center justify-center w-full not-found">
      <div class="px-12 py-10 my-32 box-default">
        <h1 class="text-3xl font-bold">
          404 - Page not found
        </h1>
        <p class="text-lg">
          We didn't find what you're looking for.
          <ExternalLink
            :href="urlReportPage"
            label="Report missing page"
            class="block mt-4 mb-2"
          />
          <RouterLink
            to="/"
            class="block"
          >
            Go to Home
          </RouterLink>
        </p>
      </div>
    </div>
  </Full>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'

export default {
  setup () {
    const urlReportPage = ref('')

    onMounted(() => {
      urlReportPage.value = encodeURI(`https://github.com/vue-a11y/vue-a11y.com/issues/new?title=Report missing page&amp;labels=Page,invalid,bug&amp;body=This page was not found: \n${location.href}`)
    })

    return {
      urlReportPage
    }
  }
}
</script>

<style lang="scss">
.not-found {
  a {
    text-decoration: underline;
    text-decoration-color: var(--accent);
  }
}
</style>
