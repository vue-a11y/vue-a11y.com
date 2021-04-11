<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="mr-1">{{ label }}</span>
    <OutboundLink />
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',

  props: {
    label: {
      type: String,
      required: true
    },

    href: {
      type: String,
      required: true
    }
  }
}
</script>
