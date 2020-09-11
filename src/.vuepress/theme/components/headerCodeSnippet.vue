<template>
  <div
    ref="headerCodeSnippet"
    class="flex items-center justify-between w-full header-code"
  >
    <div class="pl-6 text-base">
      <slot />
    </div>
    <div class="flex">
      <button
        type="button"
        class="p-4 text-xs uppercase opacity-0 focus:opacity-100"
        :aria-label="t.skip.ariaLabel || t.skip.text"
        @click="skipCodeSnippet"
      >
        {{ t.skip.text }}
      </button>
      <button
        type="button"
        class="flex items-center p-4 text-xs"
        :aria-label="t.copy.ariaLabel || t.copy.text"
        @click="copyCondeSnippet"
      >
        <vp-icon name="copy" />
        <span
          v-show="!copied"
          class="pl-2 uppercase"
        >
          {{ t.copy.text }}
        </span>
        <span
          v-show="copied"
          class="pl-2 uppercase"
        >
          {{ t.copy.textCopied }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { useClipboard } from '@vueuse/core'

import { programmaticFocus } from '@/theme/utils'

export default {
  name: 'HeaderCodeSnippet',

  props: {
    info: {
      type: String,
      default: ''
    }
  },

  setup (_, { root, refs }) {
    const copied = ref(false)
    const t = computed(() => root.$themeLocaleConfig.a11y.codeSnippet)

    function skipCodeSnippet () {
      const parent = refs.headerCodeSnippet.parentElement
      if (parent) programmaticFocus(parent.nextSibling)
    }

    function copyCondeSnippet () {
      const { copy, supported } = useClipboard()
      if (supported) {
        copy(refs.headerCodeSnippet.nextSibling && refs.headerCodeSnippet.nextSibling.textContent)
        copied.value = true
        root.$announcer.assertive(t.value.copy.textCopied)
        setTimeout(() => {
          copied.value = false
        }, 5000)
      }
    }

    return {
      t,
      copied,
      skipCodeSnippet,
      copyCondeSnippet
    }
  }
}
</script>

<style lang="scss">
.header-code {
  height: 50px;
  color: theme('colors.gray.300');
  background-color: var(--bg-header-code);

  button {
    background-color: var(--bg-header-code);
  }

  p {
    margin: 0;
  }
}
</style>
