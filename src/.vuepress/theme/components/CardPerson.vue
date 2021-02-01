<template>
  <div
    class="flex content-center card-person box-default ms:flex-no-wrap border-a"
    :class="{ 'border-accent-primary': $route.hash === `#${person.username}` }"
  >
    <div class="w-1/4 box-image">
      <img
        :src="person.avatar"
        :alt="`Avatar ${person.name}`"
      >
    </div>
    <div class="flex flex-wrap content-center w-3/4 pl-6">
      <h3
        :id="person.username"
        class="pb-2 title"
      >
        {{ person.name }}
      </h3>
      <p
        class="w-full text-base bio"
        v-html="person.bio"
      />

      <a
        :href="person.website"
        class="px-2 py-1 mt-4 uppercase border border-gray-600"
        rel="noopener noreferrer"
      >
        Website
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPeople',

  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-person {
  @apply p-6;
  .box-image {
    > img {
      @apply m-0 rounded-full;
    }
  }
  .title {
    @apply m-0 bg-transparent;
  }
  .bio {
    @apply leading-5;
  }
}
</style>
