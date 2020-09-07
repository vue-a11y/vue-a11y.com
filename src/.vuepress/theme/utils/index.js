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

export function programmaticFocus (el) {
  el.setAttribute('tabindex', '-1')
  el.focus()
  el.removeAttribute('tabindex')
}

export function prepareSocialShareLinks (path, title, summary) {
  const currentURL = process.env.URL_BASE + path
  return [
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`
    },
    {
      label: 'Twitter',
      href: `https://twitter.com/share?url=${currentURL}&text=${encodeURIComponent(title)}&via=vue_a11y`
    },
    {
      label: 'Linkedin',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}&source=website`
    },
    {
      label: 'Whatsapp',
      href: `https://wa.me/?text=${encodeURIComponent(title + ' - ' + currentURL)}`
    },
    {
      label: 'Telegram',
      href: `https://telegram.me/share/url?url=${currentURL}&text=${encodeURIComponent(title)}`
    },
    {
      label: 'Email',
      href: `mailto:info@example.com?&subject=${encodeURIComponent(title)}&body=${currentURL}`
    }
  ]
}
