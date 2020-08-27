<template>
  <form
    action="#"
    class="flex flex-wrap"
  >
    <span class="block w-full mb-2 text-lg font-bold">Get updates</span>
    <label
      for="sidebar-email-newsletter"
      class="flex flex-1"
    >
      <span class="sr-only">{{ $themeLocaleConfig.a11y.newsletter.placeholder }}</span>
      <input
        id="sidebar-email-newsletter"
        type="email"
        :placeholder="$themeLocaleConfig.a11y.newsletter.placeholder"
        class="w-full p-3 border border-b-4 border-solid outline-none bg-light-200 border-light-400 hover:border-accent focus:border-accent"
      >
    </label>
    <button
      type="submit"
      class="flex items-center justify-center w-12 px-1"
    >
      <span class="sr-only">{{ $themeLocaleConfig.newsletter.textButton }}</span>
      <vp-icon
        name="send"
        size="30"
      />
    </button>
  </form>
</template>

<script>
export default {
  name: 'PageNewsletter'
}
</script>
