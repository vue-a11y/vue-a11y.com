<template>
  <div ref="ioWrapper">
    <slot :show="show" />
  </div>
</template>

<script>
import { onMounted, onDeactivated, ref } from '@vue/composition-api'

export default {
  name: 'IntersectionObserver',

  props: {
    threshold: {
      type: Array,
      default: () => [0]
    },
    root: {
      type: typeof HTMLElement !== 'undefined' ? HTMLElement : Object,
      default: () => null
    },
    rootMargin: {
      type: String,
      default: () => '300px'
    }
  },

  setup (props, { refs }) {
    let observer = null
    const show = ref(false)

    onMounted(() => {
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            show.value = true
            observer.disconnect()
          }
        }, props)
        observer.observe(refs.ioWrapper)
      }
    })

    onDeactivated(() => observer.disconnect())

    return {
      show
    }
  }
}
</script>
