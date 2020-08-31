<template>
  <div
    class="flex flex-wrap"
    :aria-labelledby="id"
  >
    <div class="w-full mb-8">
      <h2
        :id="id"
        class="text-2xl font-bold"
      >
        {{ title }}
      </h2>
    </div>
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingWrapper',

  props: {
    id: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  }
}
</script>
