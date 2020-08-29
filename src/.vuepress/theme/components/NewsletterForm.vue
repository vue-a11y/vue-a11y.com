<template>
  <form
    action="#"
    class="flex"
  >
    <label
      for="email-newsletter"
      class="flex flex-1"
    >
      <span class="sr-only">{{ $themeLocaleConfig.a11y.newsletter.placeholder }}</span>
      <input
        id="email-newsletter"
        type="email"
        class="w-full p-4 border border-solid rounded-md outline-none border-light-600 hover:border-accent focus:border-accent"
        :placeholder="$themeLocaleConfig.a11y.newsletter.placeholder"
        style="border-bottom-width: 6px"
      >
    </label>
    <slot name="button">
      <button
        type="submit"
        class="ml-2 text-black btn btn-accent"
      >
        {{ $themeLocaleConfig.newsletter.textButton }}
      </button>
    </slot>
  </form>
</template>

<script>
export default {
  name: 'NewsletterForm'
}
</script>

<style lang="scss">

</style>
