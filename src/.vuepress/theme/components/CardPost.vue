<template>
  <article
    class="relative flex flex-col justify-between w-full p-5 border border-solid card-post"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <h2 class="text-3xl font-bold leading-9">
      <router-link
        ref="cardLink"
        :to="post.to"
      >
        {{ post.title }}
      </router-link>
    </h2>

    <div class="flex items-end justify-between mt-12">
      <time :datetime="post.date.datetime">
        {{ post.date.short }}
      </time>
      <router-link
        v-if="post.author"
        :to="{ path: '/authors/', hash: post.author.username }"
        class="relative flex"
        style="top: 6px;"
      >
        <div class="w-8 h-8 mr-2 overflow-hidden rounded-full">
          <img
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg"
            alt="Avatar Pom Klementieff"
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

    function onMouseUp (e) {
      up.value = +new Date()
      if ((up.value - down.value) < 200) refs.cardLink.$el.click()
    }

    function onMouseDown (e) {
      down.value = +new Date()
    }

    return {
      onMouseUp,
      onMouseDown
    }
  }
}
</script>

<style lang="scss">
.card-post {
  background-color: var(--bg-sidebar);
  border-bottom-width: 6px;
  border-color: var(--bg-hover-sidebar);

  &:hover, &:focus-within {
    @apply border-accent;
  }

  &:hover {
    @apply cursor-pointer;
  }

  h2 > a {
    position: initial;
    text-decoration-line: underline;
    text-decoration-color: var(--accent);

    &:hover, &:focus {
      text-decoration-color: var(--color);
      transition: text-decoration .2s;
      outline: none;
    }
  }
}
</style>
