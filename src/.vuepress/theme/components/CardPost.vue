<template>
  <article
    class="card card-post"
    @mousedown="onMouseEvent"
    @mouseup="onMouseEvent"
  >
    <h2
      class="card-title card-post-title"
    >
      <router-link
        ref="cardLink"
        :to="post.to"
      >
        {{ post.title }}
      </router-link>
    </h2>

    <div class="card-info">
      <time :datetime="post.date.datetime">
        {{ post.date.short }}
      </time>
      <router-link
        v-if="post.author"
        ref="authors"
        :to="{ path: '/authors/', hash: post.author.username }"
        class="relative flex hover:underline"
        style="top: 6px;"
      >
        <div class="w-8 h-8 mr-2 overflow-hidden rounded-full">
          <img
            :src="post.author.avatar"
            :alt="`Avatar ${post.author.name}`"
            class="object-cover object-top w-full h-fl"
          >
        </div>
        <span class="mt-1">
          <span class="sr-only">Post by </span>
          {{ post.author.name }}
        </span>
      </router-link>
    </div>
  </article>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'CardPost',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  setup (_, { refs }) {
    const up = ref(null)
    const down = ref(null)

    function isRightClick (buttons) {
      return buttons === 2
    }

    function onMouseEvent ({ type, buttons, target }) {
      if (isRightClick(buttons) || (refs.authors && refs.authors.$el.contains(target))) return
      type === 'mousedown' ? onMouseDown() : onMouseUp()
    }

    function onMouseUp () {
      up.value = +new Date()
      if ((up.value - down.value) < 200) refs.cardLink.$el.click()
    }

    function onMouseDown () {
      down.value = +new Date()
    }

    return {
      onMouseEvent
    }
  }
}
</script>

<style lang="scss">
.card-post {
  &:hover, &:focus-within {
    @apply border-accent;

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
      outline: none;
    }
  }
}
</style>
