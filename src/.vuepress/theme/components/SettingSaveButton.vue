<template>
  <button
    type="button"
    class="uppercase btn btn-accent"
    @click="$emit('save')"
  >
    {{ $themeLocaleConfig.btnSaveText || 'Save' }}
  </button>
</template>

<script>
export default {
  name: 'SettingSaveButton'
}
</script>
