<template>
  <svg
    v-once
    class="app-icon"
    :class="[`app-icon-${size}`, `app-icon-${color}`]"
  >
    <use :xlink:href="`/sprite.svg#${name}`" />
  </svg>
</template>

<script>
import components from '@/globals/components';

export default {
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: components.appIcon.defaultSize,
      validate(value) {
        return components.appIcon.sizes.includes(value);
      },
    },
    color: {
      type: String,
      required: false,
      default: components.appIcon.defaultColor,
      validate(value) {
        return components.appIcon.colors.includes(value);
      },
    },
  },
};
</script>
