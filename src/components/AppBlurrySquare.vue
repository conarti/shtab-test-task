<template>
  <div
    class="app-blurry-square"
    :class="[`app-blurry-square-${size}`]"
  />
</template>

<script>
import components from '@/globals/components';

export default {
  name: 'AppBlurrySquare',
  props: {
    size: {
      type: String,
      required: true,
      validate(value) {
        return components.appBlurrySquare.sizes.includes(value);
      },
    },
  },
};
</script>
