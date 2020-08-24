import { ref, watch, onMounted, onUnmounted } from '@vue/composition-api'

import { debounce } from '@/theme/utils'

export default function useSidebar (refs) {
  const isSidebarOpen = ref(false)
  const sidebarFixed = ref(false)

  watch(isSidebarOpen, val => {
    if (val) return window.addEventListener('keydown', toggleSidebarByKeyEscape)
    window.removeEventListener('keydown', toggleSidebarByKeyEscape)
  })

  onMounted(() => {
    isSidebarFixed()
    window.addEventListener('resize', isSidebarFixed)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', isSidebarFixed)
  })

  function toggleSidebarByKeyEscape (e) {
    if (e.key === 'Escape') toggleSidebar()
  }

  function toggleOverflow (value) {
    setTimeout(() => {
      document.body.style.overflow = value ? 'hidden' : 'auto'
    }, 200)
  }

  const isSidebarFixed = debounce(function () {
    if (refs.sidebar) {
      sidebarFixed.value = window.getComputedStyle(refs.sidebar).position === 'fixed'
    }
  }, 200)

  function toggleSidebar () {
    isSidebarOpen.value = !isSidebarOpen.value
    toggleOverflow(isSidebarOpen.value)
  }

  return {
    sidebarFixed,
    isSidebarOpen,
    toggleSidebar
  }
}
