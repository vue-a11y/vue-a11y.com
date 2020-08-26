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
import { ref, onMounted, onUnmounted } from '@vue/composition-api'

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

    rootSelector: {
      type: String,
      default: '#main'
    }
  },

  setup ({ marginTop, threshold, rootSelector }, { root }) {
    const show = ref(false)
    const rootElement = ref(null)

    const setPanel = debounce(function () {
      if (rootElement.value) {
        const diff = rootElement.value.clientHeight - marginTop
        show.value = rootElement.value.scrollTop > diff
      }
    }, threshold)

    onMounted(() => {
      rootElement.value = document.querySelector(rootSelector)
      setPanel()
      rootElement.value.addEventListener('scroll', setPanel, { passive: true })
    })

    onUnmounted(() => {
      rootElement.value.removeEventListener('scroll', setPanel, { passive: true })
    })

    return {
      show
    }
  }
}
</script>

<style lang="scss"></style>
