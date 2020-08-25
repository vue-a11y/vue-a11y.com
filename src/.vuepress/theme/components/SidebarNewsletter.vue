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
      <span class="sr-only">Email for subscription</span>
      <input
        id="sidebar-email-newsletter"
        type="email"
        placeholder="Email for subscription"
        class="w-full p-3 bg-white border-b-4 border-solid border-light-400"
      >
    </label>
    <button
      type="submit"
      class="flex items-center justify-center w-12 px-1 ml-2 mr-2"
    >
      <vp-icon
        name="send"
        size="30"
      />
    </button>
  </form>
</template>

<script>
export default {
  name: 'SidebarNewsletter'
}
</script>
