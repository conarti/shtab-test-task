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
