<template>
  <div
    class="app-square-with-icon"
    :class="`app-square-with-icon-${icon}`"
  >
    <AppIcon
      :name="icon"
      :size="size"
    />
  </div>
</template>

<script>
import components from '@/globals/components';
import AppIcon from '@/components/AppIcon.vue';

export default {
  name: 'AppSquareWithIcon',
  components: {
    AppIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
      validate(value) {
        return components.appSquareWithIcon.icons.includes(value);
      },
    },
    size: {
      type: String,
      required: true,
      validate(value) {
        return components.appIcon.sizes.includes(value);
      },
    },
  },
};
</script>
