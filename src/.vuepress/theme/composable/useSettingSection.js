import { onMounted, ref } from '@vue/composition-api'

import { useSettings } from './index'

export default function useSettingSection (state, settingKey, cb, timeoutSuccessText = 5000) {
  const showSaveButton = ref(false)
  const showSucessText = ref(false)
  const _state = ref(state)
  let timeout = null

  onMounted(() => {
    const { value } = useSettings(settingKey)
    _state.value = typeof state === 'string' ? value.value : { ...value.value }
  })

  function toggleSaveButton (status = null) {
    showSaveButton.value = typeof status === 'boolean' ? status : !showSaveButton.value
    showSucessText.value = false
  }

  function toggleSuccessText () {
    clearTimeout(timeout)
    showSucessText.value = true
    timeout = setTimeout(() => {
      showSucessText.value = false
    }, timeoutSuccessText)
  }

  function save () {
    cb(_state, { ...useSettings() })
    toggleSaveButton()
    toggleSuccessText()
  }
  return {
    save,
    state: _state,
    showSucessText,
    showSaveButton,
    toggleSaveButton
  }
}
