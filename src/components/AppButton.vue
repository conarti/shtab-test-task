<template>
  <button
    class="app-button"
    :class="`app-button-${style}`"
  >
    <slot />
  </button>
</template>

<script>
import components from '@/params/components';

export default {
  name: 'AppButton',
  props: {
    style: {
      type: String,
      required: false,
      default: components.appButton.defaultStyle,
      validate(value) {
        return components.appButton.styles.includes(value);
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
  },
};
</script>
