<template>
  <teleport to="body">
    <transition-group
      tag="div"
      name="alerts-list"
      class="app-alerts"
    >
      <div
        v-for="alert in allAlerts"
        :key="alert.id"
        class="app-alerts-alert"
      >
        <p class="app-alerts-alert-message">
          {{ alert.message }}
        </p>
      </div>
    </transition-group>
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppAlerts',
  computed: {
    ...mapGetters('alerts', {
      allAlerts: 'all',
    }),
  },
};
</script>
