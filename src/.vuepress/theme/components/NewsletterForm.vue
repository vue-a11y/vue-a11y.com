<template>
  <form
    action="#"
    class="flex newsletter-form"
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
        class="-ml-2 text-black btn btn-accent newsletter-form-btn"
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
.newsletter-form {
  &-btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}
</style>
