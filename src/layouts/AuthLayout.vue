<template>
  <div class="auth-layout">
    <div class="auth-layout__content">
      <router-view />
    </div>
    <div class="auth-layout__illustration">
      <AuthIllustration />
    </div>
  </div>
</template>

<script>
import AuthIllustration from '@/components/AuthIllustration.vue';

export default {
  name: 'AuthLayout',
  components: {
    AuthIllustration,
  },
};
</script>

<style lang="scss">
.auth-layout {
  display: flex;

  &__content,
  &__illustration {
    flex: 50% 1 1;
  }
}
</style>
