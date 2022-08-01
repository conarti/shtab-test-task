<template>
  <router-view />
  <AppAlerts />
</template>

<script>
import AppAlerts from '@/components/AppAlerts.vue';

export default {
  name: 'App',
  components: {
    AppAlerts,
  },
};
</script>
