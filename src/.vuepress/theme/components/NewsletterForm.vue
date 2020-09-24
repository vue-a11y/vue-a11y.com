<template>
  <form
    ref="newsletterForm"
    class="flex flex-wrap newsletter-form"
    novalidate
    method="POST"
    :action="$themeConfig.mailchimp"
    @submit.prevent="submitNewsletter"
  >
    <label
      :for="emailLabel"
      class="flex flex-wrap flex-1"
    >
      <span class="block w-full pb-2 text-base font-bold">{{ $themeLocaleConfig.newsletter.label }}</span>
      <input
        :id="emailLabel"
        ref="emailField"
        v-model="email"
        name="EMAIL"
        type="email"
        required
        autocomplete="email"
        class="w-full p-4 border border-solid rounded-md outline-none bg-main newsletter-form-input c-border-color hover:border-accent-primary focus:border-accent-primary"
      >
    </label>
    <slot name="button">
      <button
        type="submit"
        class="self-end -ml-2 text-black btn btn-accent newsletter-form-btn"
      >
        {{ $themeLocaleConfig.newsletter.textButton }}
      </button>
    </slot>
    <span
      class="inline-block w-full mt-4 text-sm form-msg"
      :class="{ 'form-msg-success': message.result === 'success', 'form-msg-error': message.result === 'error' }"
    >
      <span
        v-show="message.result"
        v-text="message.msg"
      />
    </span>
  </form>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  name: 'NewsletterForm',

  setup (_, { root, refs }) {
    const email = ref(null)
    const message = ref({})

    const emailLabel = `email-${Math.floor(Math.random() * 1000)}`

    watch(email, val => {
      if (val === '') {
        message.value = {}
      }
    })

    async function submitNewsletter () {
      try {
        if (!refs.emailField.validity.valid) throw new Error(refs.emailField.validationMessage)
        refs.newsletterForm.submit()
      } catch (e) {
        refs.emailField.focus()
        root.$announcer.assertive(e.message)
        message.value = { result: 'error', msg: e.message }
      }
    }

    return {
      email,
      message,
      emailLabel,
      submitNewsletter
    }
  }
}
</script>

<style lang="scss">
.newsletter-form {
  &-input {
    border-bottom-width: 6px;
  }

  &-btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}
</style>
