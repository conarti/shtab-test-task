<template>
  <div
    class="auth-illustration-square"
    :class="[
      `auth-illustration-square--is-${size}`,
      `auth-illustration-square--is-position-${position}`,
     ]"
  ></div>
</template>

<script>
export default {
  name: 'AuthIllustrationSquare',
  props: {
    size: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
};
</script>
