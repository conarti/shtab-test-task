<template>
  <button
    class="app-button"
    :class="[
      `app-button-${theme}`,
      {
        [`app-button-${size}`]: hasSize
      }
    ]"
  >
    <slot />
  </button>
</template>

<script>
import components from '@/globals/components';

export default {
  name: 'AppButton',
  props: {
    theme: {
      type: String,
      required: false,
      default: components.appButton.defaultTheme,
      validate(value) {
        return components.appButton.themes.includes(value);
      },
    },
    type: {
      type: String,
      required: false,
      default: components.appButton.defaultType,
      validate(value) {
        return components.appButton.types.includes(value);
      },
    },
    size: {
      type: String,
      required: false,
      default: components.appButton.defaultSize,
      validate(value) {
        return components.appButton.sizes.includes(value);
      },
    },
  },
  computed: {
    hasSize() {
      return this.size !== null;
    },
  },
};
</script>
