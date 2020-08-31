import VueAnnouncer from '@vue-a11y/announcer'
import VueSkipTo from '@vue-a11y/skip-to'
import VueCompositionApi from '@vue/composition-api'

import { autoReload } from '@/theme/utils/pwa'

export default ({ Vue, router, isServer }) => {
  autoReload()
  Vue.use(VueCompositionApi)
  Vue.use(VueSkipTo)
  Vue.use(VueAnnouncer, {}, router)
}
