<template>
  <footer class="footer">
    <div class="flex justify-center w-full px-4 py-24 lg:py-40 bg-light-400">
      <div class="max-w-md">
        <div class="flex justify-center">
          <vp-icon
            name="send"
            size="1.6rem"
          />
          <span class="ml-2 text-3xl font-bold leading-7">{{ $themeLocaleConfig.newsletter.title }}</span>
        </div>
        <p
          id="a-newsletter-description"
          class="mt-2 text-center"
        >
          {{ $themeLocaleConfig.newsletter.description }}
        </p>
        <form
          action="#"
          class="flex"
        >
          <label
            for="email-newsletter"
            aria-describedby="a-newsletter-description"
            class="w-full mt-6"
          >
            <input
              id="email"
              type="email"
              class="w-full p-4"
            >
          </label>
          <button
            type="submit"
            class="self-end ml-2 text-xl text-black btn btn-accent"
          >
            {{ $themeLocaleConfig.newsletter.textButton }}
          </button>
        </form>
      </div>
    </div>
    <div class="w-full py-6 text-center">
      <Copyright />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  components: {
    SendIcon: () => import('@/theme/components/SendIcon'),
    Copyright: () => import('@/theme/components/Copyright')
  }
}
</script>

<style lang="scss"></style>
