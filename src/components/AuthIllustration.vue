<template>
  <div class="auth-illustration">
    <div class="auth-illustration-container" ref="container">
      <AuthIllustrationEllipse
        v-for="(size, idx) in $options.ILLUSTRATION_ELLIPSES"
        :key="idx"
        :size="size"
      />

      <AuthIllustrationSquare
        v-for="(size, idx) in $options.ILLUSTRATION_SQUARES"
        :key="idx"
        :size="size"
      />

      <div class="auth-illustration-icons">
        <AuthIllustrationIcon
          v-for="({ icon, size }, idx) in $options.ILLUSTRATION_ICONS"
          :key="idx"
          :icon="icon"
          :size="size"
          ref="icons"
        />
      </div>

      <h2 class="auth-illustration-title">
        shtab.app
      </h2>
      <p class="auth-illustration-description">
        Держите дела в порядке: планируйте и обсуждайте задачи, отслеживайте происходящее в команде
        и оставайтесь в курсе всех важных мелочей.
      </p>
    </div>

    <div class="auth-illustration-background" ref="background"></div>
  </div>
</template>

<script>
import animate from '@/helpers/authIllustration/animate';
import getElementsFromRefs from '@/helpers/getElementsFromRefs';
import AuthIllustrationEllipse from '@/components/AuthIllustrationEllipse.vue';
import AuthIllustrationIcon from '@/components/AuthIllustrationIcon.vue';
import AuthIllustrationSquare from '@/components/AuthIllustrationSquare.vue';

export default {
  name: 'AuthIllustration',
  ILLUSTRATION_ICONS: [
    {
      icon: 'alarm',
      size: 'smallest',
    },
    {
      icon: 'lock',
      size: 'small',
    },
    {
      icon: 'chat',
      size: 'medium',
    },
    {
      icon: 'fire',
      size: 'big',
    },
    {
      icon: 'shtab-logo',
      size: 'biggest',
    },
  ],
  ILLUSTRATION_SQUARES: ['smallest', 'small', 'medium', 'big', 'bigger', 'biggest'],
  ILLUSTRATION_ELLIPSES: ['small', 'medium', 'big', 'biggest'],
  components: {
    AuthIllustrationEllipse,
    AuthIllustrationIcon,
    AuthIllustrationSquare,
  },
  methods: {
    animate(mode, next) {
      const iconElements = getElementsFromRefs(this.$refs.icons);
      const backgroundElement = this.$refs.background;
      const containerElement = this.$refs.container;

      animate({
        iconElements,
        backgroundElement,
        containerElement,
        mode,
        onComplete: next,
      });
    },
  },
};
</script>
