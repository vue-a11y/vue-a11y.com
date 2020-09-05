<template>
  <fieldset class="flex flex-wrap">
    <legend class="w-full mb-8 text-2xl font-bold">
      {{ title }}
    </legend>
    <slot />
  </fieldset>
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
