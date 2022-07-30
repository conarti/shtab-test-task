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
    </div>
  </div>
</template>

<script>
import animation from '@/globals/animation';
import animateMainLayoutHeader from '@/helpers/main-layout/header/animate';

export default {
  name: 'MainLayout',
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      animateMainLayoutHeader(vm.$refs.header, animation.modes.enter);
    });
  },
  computed: {
    pageTitle() {
      return this.$t(`pageNames.${this.$route.meta.title}`);
    },
  },
};
</script>
