<template>
  <div
    class="auth-illustration-ellipse"
    :class="`auth-illustration-ellipse-${size}`"
  ></div>
</template>

<script>
export default {
  name: 'AuthIllustrationEllipse',
  props: {
    size: {
      type: String,
      required: true,
    },
  },
};
</script>
