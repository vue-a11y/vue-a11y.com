import { ref } from '@vue/composition-api'

export default function useDisclosure () {
  const isOpen = ref(false)

  function onOpen () {
    isOpen.value = true
  }

  function onClose () {
    isOpen.value = false
  }

  return {
    isOpen,
    onOpen,
    onClose
  }
}
