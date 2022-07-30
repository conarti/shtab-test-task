<template>
  <div class="auth-illustration">
    <div
      ref="container"
      class="auth-illustration-container"
    >
      <AppEllipse
        v-for="(size, idx) in $options.ILLUSTRATION_ELLIPSES"
        :key="idx"
        ref="ellipses"
        :size="size"
      />

      <AuthIllustrationSquare
        v-for="(size, idx) in $options.ILLUSTRATION_SQUARES"
        :key="idx"
        ref="squares"
        :size="size"
      />

      <div class="auth-illustration-icons">
        <AuthIllustrationIcon
          v-for="({ icon, size }, idx) in $options.ILLUSTRATION_ICONS"
          :key="idx"
          ref="icons"
          :icon="icon"
          :size="size"
        />
      </div>

      <h2
        ref="title"
        class="auth-illustration-title"
      >
        shtab.app
      </h2>
      <p
        ref="description"
        class="auth-illustration-description"
      >
        Держите дела в порядке: планируйте и обсуждайте задачи, отслеживайте происходящее в команде
        и оставайтесь в курсе всех важных мелочей.
      </p>
    </div>

    <div
      ref="background"
      class="auth-illustration-background"
    />
  </div>
</template>

<script>
import components from '@/globals/components';
import animateAuthIllustration from '@/helpers/auth/illustration/animate';
import getElementsFromRefs from '@/helpers/getElementsFromRefs';
import AppEllipse from '@/components/AppEllipse.vue';
import AuthIllustrationIcon from '@/components/AppSquareWithIcon.vue';
import AuthIllustrationSquare from '@/components/AuthIllustrationSquare.vue';

export default {
  name: 'AuthIllustration',
  ILLUSTRATION_ICONS: components.authIllustration.icons,
  ILLUSTRATION_SQUARES: components.authIllustration.squares,
  ILLUSTRATION_ELLIPSES: components.authIllustration.ellipses,
  components: {
    AppEllipse,
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
