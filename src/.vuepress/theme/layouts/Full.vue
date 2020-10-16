<template>
  <div class="full-layout">
    <TheHeader class="pl-1 pr-3 md:px-4" />
    <TheMain>
      <slot>
        <component :is="$frontmatter.view || 'Home'" />
      </slot>
    </TheMain>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/theme/components/TheFooter'
import TheHeader from '@/theme/components/TheHeader'
import TheMain from '@/theme/components/TheMain'

export default {
  name: 'Full',

  components: {
    TheFooter,
    TheHeader,
    TheMain
  }
}
</script>
