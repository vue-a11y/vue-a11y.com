<template>
  <fieldset class="flex flex-wrap">
    <legend class="w-full mb-8 text-2xl font-bold">
      {{ title }}
    </legend>
    <div class="flex flex-wrap">
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'SettingWrapper',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
