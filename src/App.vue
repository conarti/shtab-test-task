<template>
  <component :is="layoutComponentName" />
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    AuthLayout,
    MainLayout,
  },
  computed: {
    layoutName() {
      return this.$route.meta.layout ?? null;
    },
    layoutComponentName() {
      const hasNotLayout = this.layoutName === null;
      if (hasNotLayout) {
        return 'main-layout';
      }

      return `${this.layoutName}-layout`;
    },
  },
};
</script>
