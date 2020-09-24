<template>
  <div
    class="relative block w-full mb-4 setting-item lg:mb-0 md:mr-4 md:w-auto setting-option"
    :class="{ active: checked, 'px-5 pt-3 pb-4 box-default': !noStyle }"
  >
    <label
      class="flex items-center setting-option-label"
      :for="id"
    >
      <slot />
      <input
        :id="id"
        v-bind="$attrs"
        class="absolute top-0 left-0 opacity-0 setting-option-input"
        :value="val"
        :type="type"
        :checked="checked"
        v-on="$listeners"
        @change="$emit('update', type === 'checkbox' ? $event.target.checked : $event.target.value)"
      >
      <span class="relative inline-block w-4 h-4 bg-white border border-gray-800 border-solid setting-option-fake-check" />
      <span class="mt-1 ml-2">{{ text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SettingOption',

  inheritAttrs: false,

  model: {
    event: 'update'
  },

  props: {
    noStyle: {
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'checkbox'
    },

    val: {
      type: [String, Number, Boolean],
      default: false
    },

    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.setting-option {
  &:hover, &:focus-within, &.active {
    border-color: var(--accent);
  }

  &:focus-within {
    outline: 2px solid var(--color);
    outline-offset: 3px;
  }

  &-label {
    &:after {
      @apply absolute top-0 left-0 bottom-0 right-0 cursor-pointer;
      content: '';
    }
  }

  &-fake-check {
    top: 2px;
    z-index: 1;
  }

  &-input:checked + &-fake-check {
    &:before {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      left: 2px;
      top: 2px;
      z-index: 2;
      background-color: var(--accent);
    }
  }
}
</style>
