<template>
  <article class="flex w-full px-4 pt-6 md:mt-4 md:pr-6 lg:px-10 xl:pr-0">
    <Content class="h-full" />
    <div class="hidden h-full page-float-toc xl:block bg-light-200">
      ON THIS PAGE
    </div>
  </article>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style lang="scss">
div.content__default {
  @apply w-full;
  @screen md {
    @apply w-auto;
  }
  @screen xl {
    @apply pr-16;
    width: calc(100% - 250px);
  }
}

.page-float-toc {
  @screen xl {
    width: 250px;
  }
}
</style>
