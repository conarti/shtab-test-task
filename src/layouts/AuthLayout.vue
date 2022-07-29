<template>
  <div class="auth-layout">
    <div class="auth-layout__content" ref="content">
      <router-view />
    </div>
    <div class="auth-layout__illustration">
      <AuthIllustration ref="illustration" />
    </div>
</div>
</template>

<script>
import animation from '@/params/animation';
import animateAuthContent from '@/helpers/auth/content/animate';
import AuthIllustration from '@/components/AuthIllustration.vue';

export default {
  name: 'AuthLayout',
  components: {
    AuthIllustration,
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      animateAuthContent(vm.$refs.content, animation.modes.enter);
      vm.$refs.illustration.animate(animation.modes.enter);
    });
  },
  beforeRouteLeave(_to, _from, next) {
    animateAuthContent(this.$refs.content, animation.modes.leave);
    this.$refs.illustration.animate(animation.modes.leave, next);
  },
};
</script>
