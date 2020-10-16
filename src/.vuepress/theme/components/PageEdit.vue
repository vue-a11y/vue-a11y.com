<template>
  <footer
    class="page-edit"
    aria-label="page"
  >
    <ExternalLink
      v-if="$themeConfig.editLinks"
      :href="editLink"
      :label="$themeLocaleConfig.editLinkText"
      class="mb-4 border-b-2 border-accent-primary"
    />
    <div
      v-if="$themeConfig.lastUpdated && $page.lastUpdated"
      class="last-update"
    >
      <span class="font-bold">
        {{ $themeLocaleConfig.lastUpdatedText || 'Last update' }}:
      </span>
      <p class="inline-block uc-first">
        <time
          :datetime="datetime"
          class="uc-first"
        >
          {{ $page.lastUpdated }}
        </time>
      </p>
    </div>
  </footer>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'PageEdit',

  setup (_, { root }) {
    const editLink = computed(() => `https://github.com/${root.$themeConfig.repo}/edit/${root.$themeConfig.docsBranch || 'master'}/${root.$themeConfig.docsDir || 'docs'}/${root.$page.relativePath}`)
    const datetime = root.$page.lastUpdated && new Date(root.$page.lastUpdated).toISOString()

    return {
      datetime,
      editLink
    }
  }
}
</script>
