<template>
  <div
    class="auth-illustration-icon"
    :class="`auth-illustration-icon--is-${size}`"
  >
    <AppIcon
      :name="icon"
      :size="size"
    />
  </div>
</template>

<script>
import params from '@/params';
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
    },
    size: {
      type: String,
      required: true,
      validate(value) {
        return params.components.appIcon.sizes.includes(value);
      },
    },
  },
};
</script>
