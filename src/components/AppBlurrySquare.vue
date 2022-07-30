<template>
  <div
    class="app-blurry-square"
    :class="[`app-blurry-square-${size}`]"
  />
</template>

<script>
export default {
  name: 'AppBlurrySquare',
  props: {
    size: {
      type: String,
      required: true,
      // TODO validation
    },
  },
};
</script>
