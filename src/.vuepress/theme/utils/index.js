// JavaScript Debounce Function by David Walsh
export function debounce (func, wait, immediate) {
  let timeout
  return function () {
    const context = this; const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export function getLastUpdateString (lastUpdate, lang) {
  if (!lastUpdate) return ''
  const date = new Date(lastUpdate)
  return date.toLocaleDateString(lang, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
