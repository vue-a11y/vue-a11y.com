<template>
  <a
    :href="anchor"
    class="fixed bottom-0 right-0 z-10 p-6 mb-10 mr-16"
    :class="{ 'block': show, 'hidden': !show }"
    :aria-label="$themeLocaleConfig.backToTopText"
  >
    <vp-icon
      name="back-to-top"
      size="24"
    />
  </a>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'

import { useEventListener } from '@/theme/composable'
import { debounce } from '@/theme/utils'

export default {
  name: 'BackToTop',

  props: {
    anchor: {
      type: String,
      default: '#page-top'
    },

    marginTop: {
      type: Number,
      default: 100
    },

    threshold: {
      type: Number,
      default: 500
    },

    selector: {
      type: String,
      default: '#main'
    }
  },

  setup ({ marginTop, threshold, selector }, { root }) {
    const show = ref(false)
    const rootElement = ref(null)

    const setPanel = debounce(function () {
      if (rootElement.value) {
        const diff = rootElement.value.clientHeight - marginTop
        show.value = rootElement.value.scrollTop > diff
      }
    }, threshold)

    useEventListener('scroll', setPanel, {}, selector)

    onMounted(() => {
      rootElement.value = document.querySelector(selector)
      setPanel()
    })

    return {
      show
    }
  }
}
</script>

<style lang="scss"></style>
