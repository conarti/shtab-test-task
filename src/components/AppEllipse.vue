<template>
  <div
    class="app-ellipse"
    :class="`app-ellipse-${size}`"
  />
</template>

<script>
export default {
  name: 'AppEllipse',
  props: {
    size: {
      type: String,
      required: true,
    },
  },
};
</script>
