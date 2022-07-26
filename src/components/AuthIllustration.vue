<template>
  <div class="auth-illustration">
    <AuthIllustrationEllipse size="small" />
    <AuthIllustrationEllipse size="medium" />
    <AuthIllustrationEllipse size="big" />
    <AuthIllustrationEllipse size="biggest" />

    <AuthIllustrationSquare size="smallest" />
    <AuthIllustrationSquare size="small" />
    <AuthIllustrationSquare size="medium" />
    <AuthIllustrationSquare size="big" />
    <AuthIllustrationSquare size="bigger" />
    <AuthIllustrationSquare size="biggest" />

    <div class="auth-illustration-icons">
      <AuthIllustrationIcon icon="alarm" size="smallest" />
      <AuthIllustrationIcon icon="lock" size="small" />
      <AuthIllustrationIcon icon="chat" size="medium" />
      <AuthIllustrationIcon icon="fire" size="big" />
      <AuthIllustrationIcon icon="shtab-logo" size="biggest" />
    </div>
  </div>
</template>

<script>
import AuthIllustrationEllipse from '@/components/AuthIllustrationEllipse.vue';
import AuthIllustrationIcon from '@/components/AuthIllustrationIcon.vue';
import AuthIllustrationSquare from '@/components/AuthIllustrationSquare.vue';

export default {
  name: 'AuthIllustration',
  components: {
    AuthIllustrationEllipse,
    AuthIllustrationIcon,
    AuthIllustrationSquare,
  },
};
</script>
