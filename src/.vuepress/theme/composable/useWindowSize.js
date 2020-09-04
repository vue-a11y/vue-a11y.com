import { ref, onBeforeMount } from '@vue/composition-api'

import { debounce } from '@/theme/utils'

import useEventListener from './useEventListener'

export default function useWindowSize (threshold = 200) {
  const width = ref(0)
  const height = ref(0)

  const onResize = debounce(setSize, threshold)

  onBeforeMount(() => {
    setSize()
  })

  useEventListener('resize', onResize)

  function setSize () {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  return {
    height,
    width
  }
}
