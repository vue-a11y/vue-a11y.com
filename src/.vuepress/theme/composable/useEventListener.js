import { onMounted, onUnmounted } from '@vue/composition-api'

export default function useEventListener (type, listener, options = {}, target = window) {
  const eventOptions = { capture: false, ...options }

  onMounted(() => {
    target && target.addEventListener(type, listener, eventOptions)
  })

  onUnmounted(() => {
    target && target.removeEventListener(type, listener, eventOptions)
  })
}
