<template>
  <div class="auth-layout">
    <div class="auth-layout__content">
      <router-view />
    </div>
    <AuthLayoutIllustration />
</div>
</template>

<script>
import AuthLayoutIllustration from '@/components/AuthLayoutIllustration.vue';

export default {
  name: 'AuthLayout',
  components: {
    AuthLayoutIllustration,
  },
};
</script>
