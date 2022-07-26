<template>
  <div class="auth-layout">
    <div class="auth-layout__content">
      <router-view />
    </div>
    <div class="auth-layout__illustration">
      <AuthIllustration ref="illustration" />
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
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      vm.$refs.illustration.animateEnter();
    });
  },
  beforeRouteLeave(_to, _from, next) {
    this.$refs.illustration.animateLeave(next);
  },
};
</script>
