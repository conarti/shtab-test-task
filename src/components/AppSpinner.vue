<template>
  <div
    class="app-spinner"
    :class="`app-spinner-${color}`"
  />
</template>

<script>
import components from '@/globals/components';

export default {
  name: 'AppSpinner',
  props: {
    color: {
      type: String,
      required: false,
      default: components.appSpinner.defaultColor,
      validate(value) {
        return components.appSpinner.colors.includes(value);
      },
    },
  },
};
</script>
