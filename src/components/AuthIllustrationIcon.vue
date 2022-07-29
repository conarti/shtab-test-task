<template>
  <div
    class="auth-illustration-icon"
    :class="`auth-illustration-icon-${icon}`"
  >
    <AppIcon
      :name="icon"
      :size="size"
    />
  </div>
</template>

<script>
import components from '@/params/components';
import AppIcon from '@/components/AppIcon.vue';

export default {
  name: 'AuthLayoutIllustrationSquareWithIcon',
  components: {
    AppIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
      validate(value) {
        return components.authIllustrationIcon.icons.includes(value);
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
