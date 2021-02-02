<template>
  <RouterLink
    rel="author"
    :to="{ path: `${path}#${author.username}` }"
    class="relative flex hover:underline"
  >
    <div class="w-8 h-8 mr-2 overflow-hidden rounded-full">
      <img
        :src="author.avatar"
        :alt="`Avatar ${author.name}`"
        class="object-cover object-top w-full h-fl"
      >
    </div>
    <span class="mt-1">
      <span class="sr-only">Post by </span>
      {{ author.name }}
    </span>
  </RouterLink>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'AuthorLink',

  props: {
    author: {
      type: Object,
      required: true
    }
  },

  setup (_, { root }) {
    const path = ref('/project/people.html')

    const people = root.$site.pages.find(page => page.frontmatter.peoplePath === root.$lang)
    if (people) {
      path.value = people.path
    }

    return {
      path
    }
  }
}
</script>
