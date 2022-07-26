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

    <h2 class="auth-illustration-title">
      shtab.app
    </h2>
    <p class="auth-illustration-description">
      Держите дела в порядке: планируйте и обсуждайте задачи, отслеживайте происходящее в команде
      и оставайтесь в курсе всех важных мелочей.
    </p>
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
