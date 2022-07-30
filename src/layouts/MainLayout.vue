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
    <div class="main-layout-content">
      <router-view />

      <div
        ref="contentBackground"
        class="main-layout-content-bg"
      />
    </div>
  </div>
</template>

<script>
import animation from '@/globals/animation';
import animateMainLayout from '@/helpers/main-layout/animate';

export default {
  name: 'MainLayout',
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      animateMainLayout({
        headerElement: vm.$refs.header,
        backgroundElement: vm.$refs.contentBackground,
        mode: animation.modes.enter,
      });
    });
  },
  beforeRouteLeave(_to, _from, next) {
    animateMainLayout({
      headerElement: this.$refs.header,
      backgroundElement: this.$refs.contentBackground,
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
