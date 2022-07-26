<template>
  <div class="auth-illustration">
    <AuthIllustrationIcon icon="alarm" size="smallest" />
    <AuthIllustrationIcon icon="lock" size="small" />
    <AuthIllustrationIcon icon="chat" size="medium" />
    <AuthIllustrationIcon icon="fire" size="big" />
    <AuthIllustrationIcon icon="shtab-logo" size="biggest" />
  </div>
</template>

<script>
import AuthIllustrationIcon from '@/components/AuthIllustrationIcon.vue';

export default {
  name: 'AuthIllustration',
  components: {
    AuthIllustrationIcon,
  },
};
</script>
