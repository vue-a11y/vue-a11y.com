<template>
  <div class="page-edit">
    <a
      v-if="$themeConfig.editLinks"
      :href="editLink"
      target="_blank"
      rel="noopener"
      class="border-b-2 border-accent"
    >
      {{ $themeLocaleConfig.editLinkText }}
      <span class="sr-only">({{ $localeConfig.externalLinkText }})</span>
      <OutboundLink />
    </a>
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
  </div>
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

<style lang="scss">
.page-edit {
  @screen xl {
    width: calc(100% - var(--toc-w-size));
  }
}
</style>
