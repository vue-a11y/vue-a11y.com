<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ label }}
    <span class="sr-only">({{ $localeConfig.externalLinkText }})</span>
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
