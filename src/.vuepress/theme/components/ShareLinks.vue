<template>
  <div class="page-page-share toc">
    <span class="toc-title">
      {{ $themeLocaleConfig.shareLinksText }}
    </span>
    <ul
      class="toc-list"
      :class="{ 'horizontal': horizontal }"
    >
      <li
        v-for="(item, index) in shareLinks"
        :key="`share-item-${index}`"
        class="toc-list-item"
      >
        <ExternalLink
          :href="item.href"
          :label="item.label"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

import { prepareSocialShareLinks } from '@/theme/utils'

export default {
  name: 'ShareLinks',

  props: {
    path: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    summary: {
      type: String,
      default: ''
    },

    horizontal: {
      type: Boolean
    }
  },

  setup (props) {
    const shareLinks = computed(() => (prepareSocialShareLinks(props.path, props.title, props.summary)))

    return {
      shareLinks
    }
  }
}
</script>
