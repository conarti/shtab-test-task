<template>
  <button
    class="button"
    :class="`button-${style}`"
  >
    <slot />
  </button>
</template>

<script>
import params from '@/params';

export default {
  name: 'AppButton',
  props: {
    style: {
      type: String,
      required: false,
      default: params.components.appButton.defaultStyle,
      validate(value) {
        return params.components.appButton.styles.includes(value);
      },
    },
  },
};
</script>
