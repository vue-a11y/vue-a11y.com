<template>
  <a
    href="#page-top"
    class="fixed bottom-0 right-0 z-10 p-6 mb-10 mr-16"
    :class="{ 'block': show, 'hidden': !show }"
  >
    <span class="sr-only">{{ $themeLocaleConfig.backToTopText }}</span>
    <vp-icon
      name="back-to-top"
      size="24"
    />
  </a>
</template>

<script>
import { ref } from '@vue/composition-api'

import { useEventListener } from '@/theme/composable'
import { debounce } from '@/theme/utils'

export default {
  name: 'BackToTop',

  props: {
    marginTop: {
      type: Number,
      default: 100
    },

    threshold: {
      type: Number,
      default: 500
    },

    rootElement: {
      type: HTMLElement,
      default: ''
    }
  },

  setup ({ marginTop, threshold, rootElement }, { root }) {
    const show = ref(false)

    const setPanel = debounce(function () {
      if (rootElement) {
        const diff = rootElement.clientHeight - marginTop
        console.log(rootElement.scrollTop, rootElement.clientHeight, diff, marginTop)
        show.value = rootElement.scrollTop > diff
      }
    }, threshold)

    useEventListener('scroll', setPanel, { passive: true }, rootElement)

    return {
      show
    }
  }
}
</script>

<style lang="scss"></style>
