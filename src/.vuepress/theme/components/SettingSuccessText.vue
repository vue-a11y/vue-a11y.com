<template>
  <div class="w-full mt-8">
    <div class="max-w-sm form-msg form-msg-success">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingSuccessText',

  props: {
    text: {
      type: String,
      default: 'Saved successfully!'
    }
  }
}
</script>
