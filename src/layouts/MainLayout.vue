<template>
  <div class="main-layout">
    <nav
      ref="header"
      class="main-layout-header"
    >
      <div class="main-layout-header-container">
        <img
          class="main-layout-header-logo"
          src="@/assets/logo.png"
          alt="logo"
        >
        <h2 class="main-layout-header-title">
          {{ pageTitle }}
        </h2>
      </div>
    </nav>
    <div
      class="main-layout-content"
    >
      <div
        ref="contentContainer"
        class="main-layout-content-container"
      >
        <router-view />
      </div>

      <div class="main-layout-illustration">
        <AppEllipse
          v-for="({ size, name }) in $options.ELLIPSES"
          :key="name"
          ref="ellipses"
          :size="size"
          :class="`main-layout-illustration-ellipse-${name}`"
        />

        <AppBlurrySquare
          v-for="(size) in $options.BLURRY_SQUARES"
          :key="size"
          ref="blurrySquares"
          :size="size"
          :class="`main-layout-illustration-square-${size}`"
        />
      </div>

      <div
        ref="contentBackground"
        class="main-layout-content-bg"
      />
    </div>
  </div>
</template>

<script>
import components from '@/globals/components';
import animation from '@/globals/animation';
import animateMainLayout from '@/helpers/main-layout/animate';
import getElementsFromRefs from '@/helpers/getElementsFromRefs';
import AppBlurrySquare from '@/components/AppBlurrySquare.vue';
import AppEllipse from '@/components/AppEllipse.vue';

export default {
  name: 'MainLayout',
  ELLIPSES: components.mainLayout.ellipses,
  BLURRY_SQUARES: components.mainLayout.blurrySquares,
  components: {
    AppBlurrySquare,
    AppEllipse,
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      animateMainLayout({
        headerElement: vm.$refs.header,
        backgroundElement: vm.$refs.contentBackground,
        contentContainerElement: vm.$refs.contentContainer,
        ellipsesElements: getElementsFromRefs(vm.$refs.ellipses),
        blurrySquaresElements: getElementsFromRefs(vm.$refs.blurrySquares),
        mode: animation.modes.enter,
      });
    });
  },
  beforeRouteLeave(_to, _from, next) {
    animateMainLayout({
      headerElement: this.$refs.header,
      backgroundElement: this.$refs.contentBackground,
      contentContainerElement: this.$refs.contentContainer,
      ellipsesElements: getElementsFromRefs(this.$refs.ellipses),
      blurrySquaresElements: getElementsFromRefs(this.$refs.blurrySquares),
      mode: animation.modes.leave,
      next,
    });
  },
  computed: {
    pageTitle() {
      return this.$t(`pageNames.${this.$route.meta.title}`);
    },
  },
};
</script>
