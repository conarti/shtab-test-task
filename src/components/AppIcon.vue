<template>
  <svg
    v-once
    class="icon"
    :class="[`icon--is-${size}`, `icon--is-${color}`]"
  >
    <use :xlink:href="`/sprite.svg#${this.name}`"></use>
  </svg>
</template>

<script>
import params from '@/params';

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
      default: params.components.appIcon.defaultSize,
      validate(value) {
        return params.components.appIcon.sizes.includes(value);
      },
    },
    color: {
      type: String,
      required: false,
      default: params.components.appIcon.defaultColor,
      validate(value) {
        return params.components.appIcon.colors.includes(value);
      },
    },
  },
};
</script>
