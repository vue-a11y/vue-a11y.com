import { onMounted, ref, onUnmounted } from '@vue/composition-api'

export default function useIntersectionObserver (selector, options) {
  const intersectionRatio = ref(0)
  const isIntersecting = ref(false)
  const isFullyInView = ref(false)
  const targetIntercepted = ref(null)
  const targets = ref(null)

  const defaultOptions = { root: null, rootMargin: '0px' }

  function observe () {
    targets.value.forEach(el => observer.observe(el))
  }

  let observer
  onMounted(() => {
    if ('IntersectionObserver' in window) {
      window.requestAnimationFrame(() => {
        targets.value = document.querySelectorAll(selector)
        if (!targets.value) return
        observer = new IntersectionObserver(([entry]) => {
          intersectionRatio.value = entry.intersectionRatio
          if (entry.intersectionRatio > 0) {
            targetIntercepted.value = entry.target
            isIntersecting.value = true
            isFullyInView.value = entry.intersectionRatio >= 1
            return
          }

          isIntersecting.value = false
        }, { ...defaultOptions, ...options })

        observe()
      })
    }
  })

  function unobserve () {
    if (!observer) return
    targets.value.forEach(el => observer.unobserve(el))
    targets.value = null
  }

  onUnmounted(unobserve)

  return {
    intersectionRatio,
    isIntersecting,
    isFullyInView,
    targetIntercepted,
    observe,
    unobserve
  }
}
