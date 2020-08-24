export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
const outboundRE = /^[a-z]+:/i

function isExternal (path) {
  return outboundRE.test(path)
}

export function normalize (path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

function resolveItem (item, pages, base) {
  const children = item.children || []
  const result = { title: item.title, children: [] }

  if (!children.length) return result

  children.forEach(child => {
    const childIsArray = Array.isArray(child)
    const isBasePath = child === ''

    if (childIsArray && isExternal(child[1])) {
      return result.children.push({
        title: child[0],
        type: 'external',
        path: child[1]
      })
    }

    const page = pages.find(page => {
      if (isBasePath) return page.regularPath === base
      return page.regularPath.indexOf(base + (childIsArray ? child[1] : child)) === 0
    })

    if (!page) return

    return result.children.push({
      title: childIsArray ? child[0] : page.title,
      path: page.regularPath
    })
  })

  return result
}

export function resolveSidebarItems (regularPath, site, themeLocaleConfig) {
  const { pages, themeConfig } = site
  const localeConfig = Object.keys(themeLocaleConfig).length ? themeLocaleConfig : themeConfig
  if (!localeConfig.sidebar) return []
  const { base, config } = resolveMatchingConfig(regularPath, localeConfig.sidebar)

  return config
    ? config.map(item => resolveItem(item, pages, base))
    : []
}

function resolveMatchingConfig (regularPath, config) {
  for (const base in config) {
    const normalizeRegularPath = /(\.html|\/)$/.test(regularPath) ? regularPath : regularPath + '/'
    if (normalizeRegularPath.indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base]
      }
    }
  }
  return {}
}
