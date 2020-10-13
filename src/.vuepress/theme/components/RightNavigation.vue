<template>
  <div class="sticky top-0 flex hidden h-full">
    <slot name="top" />

    <TableOfContents
      v-if="$frontmatter.toc !== 0"
      :key="$route.path"
      :title="$themeLocaleConfig.toc.title"
      title-tag="span"
      class="pt-12"
    />

    <slot />

    <div class="pl-4 mt-16">
      <span class="block mb-2 text-lg font-bold">Newsletter</span>
      <NewsletterForm>
        <button
          slot="button"
          type="submit"
          class="flex items-center self-end justify-center w-12 px-2 py-4 ml-2"
          :aria-label="$themeLocaleConfig.newsletter.textButton"
        >
          <vp-icon
            name="send"
            size="30"
          />
        </button>
      </NewsletterForm>
    </div>

    <slot name="bottom" />
  </div>
</template>

<script>

import NewsletterForm from '@/theme/components/NewsletterForm'
import TableOfContents from '@/theme/components/TableOfContents'

export default {
  name: 'RightNavigation',

  components: {
    NewsletterForm,
    TableOfContents
  }
}
</script>
