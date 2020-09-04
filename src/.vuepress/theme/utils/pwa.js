import event from '@vuepress/plugin-pwa/lib/event'

export const autoReload = () => {
  if (process.env.NODE_ENV === 'production') {
    event.$on('sw-updated', e => e.skipWaiting().then(() => location.reload(true)))
  }
}
