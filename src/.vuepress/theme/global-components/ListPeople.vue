<template>
  <ul class="list-people">
    <li
      v-for="person in people"
      :key="person.username"
    >
      <CardPerson :person="person" />
    </li>
  </ul>
</template>

<script>
import { computed } from '@vue/composition-api'

import CardPerson from '@/theme/components/CardPerson'

export default {
  name: 'ListPeople',

  components: {
    CardPerson
  },

  props: {
    role: {
      type: String,
      required: true
    }
  },

  setup ({ role }, { root }) {
    const people = computed(() => root.$themeConfig.people.filter(person => person.role === role))

    return {
      people
    }
  }
}
</script>

<style lang="scss" scoped>
.list-people {
  @apply p-0;

  & > li:before {
    display: none;
  }
}
</style>
