import VueCompositionApi from '@vue/composition-api'

import { autoReload } from '@/theme/utils/pwa'

export default ({ Vue, router, isServer }) => {
  autoReload()
  Vue.use(VueCompositionApi)
}
