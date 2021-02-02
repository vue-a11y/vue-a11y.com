<template>
  <article
    class="card card-post box-default"
    @mousedown="onMouseEvent"
    @mouseup="onMouseEvent"
  >
    <h2
      class="card-title card-post-title"
    >
      <RouterLink
        ref="cardLink"
        :to="post.to"
      >
        {{ post.title }}
      </RouterLink>
    </h2>

    <div class="card-info">
      <time :datetime="post.date.datetime">
        {{ post.date.short }}
      </time>
      <AuthorLink
        v-if="post.author"
        ref="authors"
        :author="post.author"
        style="top: 6px;"
      />
    </div>
  </article>
</template>

<script>
import { onMounted } from '@vue/composition-api'

import AuthorLink from '@/theme/components/AuthorLink'
import { useCard } from '@/theme/composable'

export default {
  name: 'CardPost',

  components: {
    AuthorLink
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  setup (_, { refs, root }) {
    // const { onMouseEvent } = useCard(computed(() => refs.cardLink), computed(() => [refs.authors]))
    const { onMouseEvent, addCardElement, addPreventElements } = useCard()

    onMounted(() => {
      addCardElement(refs.cardLink)
      addPreventElements([refs.authors])
    })

    return {
      onMouseEvent
    }
  }
}
</script>

<style lang="scss">
.card-post {
  &:hover, &:focus-within {
    @apply border-accent-primary;

    .card-post-title > a {
      text-decoration-color: var(--color);
    }
  }

  &:hover {
    @apply cursor-pointer;
  }

  &-title {
    > a {
      position: initial;
      text-decoration-line: underline;
      text-decoration-color: var(--accent);
      transition: text-decoration .2s;
      outline: none !important;
    }
  }
}
</style>
