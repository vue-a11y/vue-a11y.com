<template>
  <footer
    class="page-edit"
    aria-label="page"
  >
    <ExternalLink
      v-if="$themeConfig.editLinks"
      :href="editLink"
      :label="$themeLocaleConfig.editLinkText"
      class="mb-4 border-b-2 border-accent"
    />
    <div
      v-if="$themeConfig.lastUpdated"
      class="last-update"
    >
      <span class="font-bold">
        {{ $themeLocaleConfig.lastUpdatedText || 'Last update' }}:
      </span>
      <p class="inline-block uc-first">
        <time
          :datetime="$page.lastUpdated"
          class="uc-first"
        >
          {{ $page.lastUpdated }}
        </time>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageEdit',

  setup (_, { root }) {
    const editLink = `https://github.com/${root.$themeConfig.repo}/edit/${root.$themeConfig.docsBranch || 'master'}/${root.$themeConfig.docsDir || 'docs'}/${root.$page.relativePath}`

    return {
      editLink
    }
  }
}
</script>
