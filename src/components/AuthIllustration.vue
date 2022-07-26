<template>
  <div class="auth-illustration">
    <AuthIllustrationSquare size="smallest" />
    <AuthIllustrationSquare size="small" />
    <AuthIllustrationSquare size="medium" />
    <AuthIllustrationSquare size="big" />
    <AuthIllustrationSquare size="bigger" />
    <AuthIllustrationSquare size="biggest" />

    <AuthIllustrationIcon icon="alarm" size="smallest" />
    <AuthIllustrationIcon icon="lock" size="small" />
    <AuthIllustrationIcon icon="chat" size="medium" />
    <AuthIllustrationIcon icon="fire" size="big" />
    <AuthIllustrationIcon icon="shtab-logo" size="biggest" />
  </div>
</template>

<script>
import AuthIllustrationIcon from '@/components/AuthIllustrationIcon.vue';
import AuthIllustrationSquare from '@/components/AuthIllustrationSquare.vue';

export default {
  name: 'AuthIllustration',
  components: {
    AuthIllustrationIcon,
    AuthIllustrationSquare,
  },
};
</script>
