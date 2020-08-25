<template>
  <nav class="toc">
    <component
      :is="titleTag"
      class="block pl-3 mb-4 text-xl font-bold"
      v-text="title"
    />
    <ul class="relative toc-list">
      <li class="w-full leading-4 toc-list-item" />
      <li
        v-for="header in headers"
        :key="header.slug"
        class="w-full leading-4 toc-list-item"
      >
        <a
          class="relative inline-block py-3 pl-10 pr-3"
          :href="header.path"
        >
          {{ header.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TableOfContents',

  props: {
    title: {
      type: String,
      default: 'On this page'
    },

    titleTag: {
      type: String,
      default: 'h2'
    },

    headers: {
      type: Array,
      default: () => ([])
    }
  },

  setup ({ headers }) {
    console.log(headers)
  }
}
</script>

<style lang="scss">
.toc {
  margin-top: 5.3rem;

  &-list {
    &:before {
      @apply absolute z-20 border-l border-dashed border-gray-400;
      content: '';
      width: 2px;
      left: 28px;
      top: -5%;
      height: 110%;
    }
  }

  &-list-item {
    a {
      font-size: 15px;
      &:hover, &:focus, &.active {
        background-color: var(--bg-sidebar);

        &:before {
          @apply absolute rounded-full z-10;
          content: '';
          background-color: var(--accent);
          width: 6px;
          height: 6px;
          left: 10px;
          top: 50%;
          margin-top: -3px;
        }
      }
    }
  }
}
</style>
