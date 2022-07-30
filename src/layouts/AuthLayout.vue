<template>
  <div class="auth-layout">
    <div
      ref="content"
      class="auth-layout__content"
    >
      <router-view />
    </div>
    <div class="auth-layout__illustration">
      <AuthLayoutIllustration ref="illustration" />
    </div>
  </div>
</template>

<script>
import animation from '@/globals/animation';
import animateAuthLayoutContent from '@/helpers/auth-layout/content/animate';
import AuthLayoutIllustration from '@/components/AuthLayoutIllustration.vue';

export default {
  name: 'AuthLayout',
  components: {
    AuthLayoutIllustration,
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      animateAuthLayoutContent(vm.$refs.content, animation.modes.enter);
      vm.$refs.illustration.animate(animation.modes.enter);
    });
  },
  beforeRouteLeave(_to, _from, next) {
    animateAuthLayoutContent(this.$refs.content, animation.modes.leave);
    this.$refs.illustration.animate(animation.modes.leave, next);
  },
};
</script>
