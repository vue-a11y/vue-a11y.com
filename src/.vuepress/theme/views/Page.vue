<template>
  <div class="w-full">
    <article class="flex justify-between w-full px-6 pt-6 md:mt-4 lg:px-10 xl:pr-0">
      <div class="page-content">
        <Content class="max-char" />
        <PageEdit class="flex flex-wrap justify-between w-full py-6 pb-24 border-t border-light-400 md:mt-4" />
      </div>
      <div class="sticky top-0 flex hidden h-full page-float-toc xl:block">
        <TableOfContents
          v-if="$frontmatter.toc !== 0"
          :key="$route.path"
          :title="$themeLocaleConfig.toc.title"
          title-tag="span"
          class="pt-20"
        />
        <PageNewsletter class="pl-4 mt-16" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Page',

  components: {
    PageEdit: () => import('@/theme/components/PageEdit'),
    PageNewsletter: () => import('@/theme/components/PageNewsletter'),
    TableOfContents: () => import('@/theme/components/TableOfContents')
  }
}
</script>

<style lang="scss">
.page-content {
  @apply w-full;
  @screen xl {
    @apply pr-16;
    width: calc(100% - var(--toc-w-size));
  }
}

.page-float-toc {
  @screen xl {
    width: var(--toc-w-size);
  }
}

</style>
