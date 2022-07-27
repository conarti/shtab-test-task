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
import params from '@/params';
import AuthIllustration from '@/components/AuthIllustration.vue';

export default {
  name: 'AuthLayout',
  components: {
    AuthIllustration,
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      vm.$refs.illustration.animate(params.animation.modes.enter);
    });
  },
  beforeRouteLeave(_to, _from, next) {
    this.$refs.illustration.animate(params.animation.modes.leave, next);
  },
};
</script>
