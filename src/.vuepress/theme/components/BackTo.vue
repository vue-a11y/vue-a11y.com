<template>
  <RouterLink
    class="inline-flex"
    :to="to"
  >
    <vp-icon
      name="corner-up-left"
      size="8px"
      class="mt-2 mr-2"
    />
    <span>{{ text }}</span>
  </RouterLink>
</template>

<script>
export default {
  name: 'BackTo',

  props: {
    text: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: true
    }
  }
}
</script>
