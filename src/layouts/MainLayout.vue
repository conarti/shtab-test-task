<template>
  <div class="main-layout">
    <nav class="main-layout-header">
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
export default {
  name: 'MainLayout',
  computed: {
    pageTitle() {
      return this.$t(`pageNames.${this.$route.meta.title}`);
    },
  },
};
</script>
