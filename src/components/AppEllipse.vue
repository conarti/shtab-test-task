<template>
  <div
    class="app-ellipse"
    :class="`app-ellipse-${size}`"
  />
</template>

<script>
import components from '@/globals/components';

export default {
  name: 'AppEllipse',
  props: {
    size: {
      type: String,
      required: true,
      validate(value) {
        return components.appEllipse.sizes.includes(value);
      },
    },
  },
};
</script>
