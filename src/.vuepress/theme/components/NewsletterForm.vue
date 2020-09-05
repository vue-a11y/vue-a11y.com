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
      class="flex flex-1"
    >
      <span class="sr-only">{{ $themeLocaleConfig.a11y.newsletter.placeholder }}</span>
      <input
        :id="emailLabel"
        ref="emailField"
        v-model="email"
        name="EMAIL"
        type="email"
        required
        autocomplete="email"
        class="w-full p-4 border border-solid rounded-md outline-none newsletter-form-input c-border-color hover:border-accent focus:border-accent"
        :placeholder="$themeLocaleConfig.a11y.newsletter.placeholder"
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
    <span
      class="inline-block w-full px-4 py-2 mt-4 text-sm rounded-md newsletter-form-msg"
      :class="{ 'newsletter-form-msg-success': message.result === 'success', 'newsletter-form-msg-error': message.result === 'error' }"
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
        root.$announcer.assertive(message.value.msg)
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
    background-color: var(--bg-input-news);
  }

  &-btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &-msg {
    @apply border py-3 invisible;
    border-bottom-width: 4px;

    &-success {
      @apply visible bg-green-200 text-green-900 border-accentDark;
    }

    &-error {
      @apply visible bg-red-200 text-red-900 border-red-900;
    }

    a {
      @apply underline;
    }
  }
}
</style>
