<template>
  <RouterLink
    class="inline-flex px-4 my-4 text-color bg-main"
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
