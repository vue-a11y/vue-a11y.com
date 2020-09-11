<template>
  <div class="w-full">
    <article class="flex justify-between w-full px-6 pt-6 md:mt-4 lg:px-10 xl:pr-0">
      <div class="page-content">
        <Content />
        <PageEdit class="flex flex-wrap justify-between w-full py-6 pb-24 border-t c-border-color md:mt-4" />
      </div>
      <RightNavigation class="page-float-toc xl:block" />
    </article>
  </div>
</template>

<script>
import PageEdit from '@/theme/components/PageEdit'
import RightNavigation from '@/theme/components/RightNavigation'

export default {
  name: 'Page',

  components: {
    PageEdit,
    RightNavigation
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

@media (min-width: 1280px) and (max-width: 1600px){
  .container-layout-pr {
    padding-right: 2%!important;
  }
}

</style>
