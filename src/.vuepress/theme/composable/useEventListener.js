import { onMounted, onUnmounted } from '@vue/composition-api'

export default function useEventListener (type, listener, options, target = window) {
  onMounted(() => {
    target && target.addEventListener(type, listener, options)
  })

  onUnmounted(() => {
    target && target.removeEventListener(type, listener, options)
  })
}
