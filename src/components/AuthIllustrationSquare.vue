<template>
  <div
    class="auth-illustration-square"
    :class="[`auth-illustration-square-${size}`]"
  />
</template>

<script>
export default {
  name: 'AuthIllustrationSquare',
  props: {
    size: {
      type: String,
      required: true,
    },
  },
};
</script>
