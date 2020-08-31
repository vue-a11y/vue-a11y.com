import { ref, watch } from '@vue/composition-api'
import { useStorage } from '@vueuse/core'

export default function useSettings (key = null) {
  let { value: settings } = useStorage('settings')

  if (!settings || !settings.value) {
    settings = useStorage('settings', {
      language: 'en',
      reading: 'set-sans-serif',
      theme: 'light',
      vision: {
        'set-color-constrast': false
      },
      motion: {
        'set-reduce-motion': false
      }
    })
  }

  const value = ref(key && settings.value && settings.value[key])

  watch(() => settings.value, init)

  function init (val = settings.value, old = {}) {
    if (!val) return
    toggleClass(val.reading, old.reading)
    toggleClassByObject(val.vision)
    toggleClassByObject(val.motion)
  }

  function toggleClass (val, old) {
    if (old) document.body.classList.remove(old)
    document.body.classList.add(val)
  }

  function toggleClassByObject (data) {
    if (!data) return
    Object.keys(data).forEach(key => {
      document.body.classList.remove(key)
      if (data[key]) document.body.classList.add(key)
    })
  }

  function setStorage (key, val) {
    console.log(key, val)
    settings.value[key] = val
  }

  function setLanguage (root) {
    const isEnglish = settings.value.language === 'en'
    const currentLocalePath = isEnglish ? '/' : `/${settings.value.language}`
    if (!settings.value || root.$localePath === currentLocalePath) return
    root.$vuepress.$set('disableScrollBehavior', true)
    root.$router.replace(root.$route.path.replace(root.$localePath, `${isEnglish ? '' : (currentLocalePath + '/')}`), () => {
      root.$nextTick(() => root.$vuepress.$set('disableScrollBehavior', false))
    })
  }

  return {
    init,
    value,
    settings,
    setStorage,
    toggleClass,
    setLanguage,
    toggleClassByObject
  }
}
