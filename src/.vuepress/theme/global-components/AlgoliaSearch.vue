<template>
  <div
    id="docsearch"
    class="w-full"
  />
</template>

<script>
// Credits: https://github.com/vuejs/docs-next/blob/master/src/.vuepress/theme/components/AlgoliaSearchBox.vue
import { onMounted, getCurrentInstance, watch } from '@vue/composition-api'

export default {
  name: 'AlgoliaSearch',

  props: {
    options: {
      type: Object,
      required: true
    }
  },

  setup (props, { root, refs }) {
    const internalInstance = getCurrentInstance()
    const { $router } = root

    watch(() => root.$lang, val => update(props.options, val))
    watch(() => props.options, val => update(val, root.$lang))

    onMounted(() => initialize(props.options, root.$lang))

    function initialize (userOptions, lang) {
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ '@docsearch/js'),
        import(/* webpackChunkName: "docsearch" */ '@docsearch/css')
      ]).then(([docsearch]) => {
        docsearch = docsearch.default

        docsearch(
          Object.assign(
            {},
            userOptions,
            {
              container: '#docsearch',
              searchParameters: Object.assign({}, userOptions.searchParameters),
              navigator: {
                navigate: ({ suggestionUrl }) => {
                  const { pathname: hitPathname } = new URL(window.location.origin + suggestionUrl)
                  // Vue Router doesn't handle same-page navigation so we use
                  // the native browser location API for anchor navigation.
                  if ($router.history.current.path !== hitPathname) return $router.push(suggestionUrl)
                  window.location.assign(window.location.origin + suggestionUrl)
                }
              },
              transformItems: items => {
                return items.map((item) => {
                  return Object.assign({}, item, {
                    url: getRelativePath(item.url)
                  })
                })
              },
              hitComponent: ({ hit, children }) => {
                return {
                  type: 'a',
                  ref: undefined,
                  constructor: undefined,
                  key: undefined,
                  props: {
                    href: hit.url,
                    onClick: (event) => {
                      if (isSpecialClick(event)) return
                      // We rely on the native link scrolling when user is
                      // already on the right anchor because Vue Router doesn't
                      // support duplicated history entries.
                      if ($router.history.current.fullPath === hit.url) return
                      const { pathname: hitPathname } = new URL(window.location.origin + hit.url)
                      // If the hits goes to another page, we prevent the native link behavior
                      // to leverage the Vue Router loading feature.
                      if ($router.history.current.path !== hitPathname) {
                        event.preventDefault()
                      }
                      $router.push(hit.url)
                    },
                    children
                  }
                }
              }
            }
          )
        )
      })
    }

    function update (options, lang) {
      internalInstance.$el.innerHTML = '<div id="docsearch" class="w-full"></div>'
      initialize(options, lang)
    }

    function getRelativePath (absoluteUrl) {
      const { pathname, hash } = new URL(absoluteUrl)
      const url = pathname.replace(root.$site.base, '/') + hash
      return url
    }

    function isSpecialClick (event) {
      return (
        event.button === 1 ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      )
    }
  }
}
</script>

<style lang="scss">
.DocSearch {
  --docsearch-primary-color: var(--secondary);
  --docsearch-highlight-color: var(--accent-secondary);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--accent);

  --docsearch-modal-background: var(--secondary);
  --docsearch-searchbox-background: var(--primary);
  --docsearch-searchbox-focus-background: var(--primary);
  --docsearch-muted-color: var(--color);
}

.DocSearch-Button {
  @apply w-full p-5 m-0 border border-solid border-secondary rounded-md #{!important};
}

span.DocSearch-Button-Placeholder, span.DocSearch-Button-Key {
  display: flex;
}
</style>
