<template>
  <div class="auth-illustration">
    <div class="auth-illustration-container" ref="container">
      <AuthIllustrationEllipse
        v-for="(size, idx) in $options.ILLUSTRATION_ELLIPSES"
        :key="idx"
        :size="size"
        ref="ellipses"
      />

      <AuthIllustrationSquare
        v-for="(size, idx) in $options.ILLUSTRATION_SQUARES"
        :key="idx"
        :size="size"
        ref="squares"
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

      <h2 class="auth-illustration-title" ref="title">
        shtab.app
      </h2>
      <p class="auth-illustration-description" ref="description">
        Держите дела в порядке: планируйте и обсуждайте задачи, отслеживайте происходящее в команде
        и оставайтесь в курсе всех важных мелочей.
      </p>
    </div>

    <div class="auth-illustration-background" ref="background"></div>
  </div>
</template>

<script>
import params from '@/params';
import animateAuthIllustration from '@/helpers/auth/illustration/animate';
import getElementsFromRefs from '@/helpers/getElementsFromRefs';
import AuthIllustrationEllipse from '@/components/AuthIllustrationEllipse.vue';
import AuthIllustrationIcon from '@/components/AuthIllustrationIcon.vue';
import AuthIllustrationSquare from '@/components/AuthIllustrationSquare.vue';

export default {
  name: 'AuthIllustration',
  ILLUSTRATION_ICONS: params.components.authIllustration.icons,
  ILLUSTRATION_SQUARES: params.components.authIllustration.squares,
  ILLUSTRATION_ELLIPSES: params.components.authIllustration.ellipses,
  components: {
    AuthIllustrationEllipse,
    AuthIllustrationIcon,
    AuthIllustrationSquare,
  },
  methods: {
    animate(mode, next) {
      const iconElements = getElementsFromRefs(this.$refs.icons);
      const ellipsesElements = getElementsFromRefs(this.$refs.ellipses);
      const squaresElements = getElementsFromRefs(this.$refs.squares);
      const backgroundElement = this.$refs.background;
      const containerElement = this.$refs.container;
      const titleElement = this.$refs.title;
      const descriptionElement = this.$refs.description;
      const textElements = [descriptionElement, titleElement];

      animateAuthIllustration({
        iconElements,
        ellipsesElements,
        squaresElements,
        backgroundElement,
        containerElement,
        textElements,
        mode,
        next,
      });
    },
  },
};
</script>
