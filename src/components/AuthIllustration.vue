<template>
  <div class="auth-illustration">
    <div
      ref="container"
      class="auth-illustration-container"
    >
      <AppEllipse
        v-for="(size, idx) in $options.ELLIPSES"
        :key="idx"
        ref="ellipses"
        :class="`auth-illustration-ellipse-${size}`"
        :size="size"
      />

      <AppBlurrySquare
        v-for="(size, idx) in $options.SQUARES"
        :key="idx"
        ref="squares"
        :class="`auth-illustration-blurry-square-${size}`"
        :size="size"
      />

      <div class="auth-illustration-icons">
        <AppSquareWithIcon
          v-for="({ icon, size }, idx) in $options.ICONS"
          :key="idx"
          ref="icons"
          :icon="icon"
          :class="`auth-illustration-square-with-icon-${icon}`"
          :size="size"
        />
      </div>

      <h2
        ref="title"
        class="auth-illustration-title"
      >
        {{ $t('authIllustration.title') }}
      </h2>
      <p
        ref="description"
        class="auth-illustration-description"
      >
        {{ $t('authIllustration.description') }}
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
import AppSquareWithIcon from '@/components/AppSquareWithIcon.vue';
import AppBlurrySquare from '@/components/AppBlurrySquare.vue';

export default {
  name: 'AuthIllustration',
  ICONS: components.authIllustration.icons,
  SQUARES: components.authIllustration.squares,
  ELLIPSES: components.authIllustration.ellipses,
  components: {
    AppEllipse,
    AppSquareWithIcon,
    AppBlurrySquare,
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
