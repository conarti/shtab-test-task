<template>
  <div class="auth-illustration">
    <AuthIllustrationSquare position="1" size="smallest" />
    <AuthIllustrationSquare position="2" size="small" />
    <AuthIllustrationSquare position="3" size="medium" />
    <AuthIllustrationSquare position="4" size="big" />
    <AuthIllustrationSquare position="5" size="bigger" />
    <AuthIllustrationSquare position="6" size="biggest" />

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
