<template>
  <svg
    v-once
    class="icon"
  >
    <use :xlink:href="`./sprite.svg#${this.name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
