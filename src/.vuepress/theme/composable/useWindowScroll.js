import { ref, onBeforeMount } from '@vue/composition-api'

import { debounce } from '@/theme/utils'

import useEventListener from './useEventListener'

export default function useWindowScroll (threshold = 200) {
  const x = ref(0)
  const y = ref(0)

  const onScroll = debounce(setScroll, threshold)

  onBeforeMount(() => {
    setScroll()
  })

  useEventListener('scroll', onScroll)

  function setScroll () {
    x.value = window.pageXOffset
    y.value = window.pageYOffset
  }

  return {
    y,
    x
  }
}
