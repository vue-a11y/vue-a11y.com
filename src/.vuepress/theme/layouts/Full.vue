<template>
  <div class="full-layout">
    <TheHeading />
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
import TheHeading from '@/theme/components/TheHeading'
import TheMain from '@/theme/components/TheMain'

export default {
  name: 'Full',

  components: {
    TheFooter,
    TheHeading,
    TheMain
  }
}
</script>
