<template>
  <div class="profile-view">
    <div class="profile-view-content">
      <div
        class="profile-view-avatar"
      >
        <AppIcon
          name="no-photo"
          color="muted"
        />
      </div>
      <h1 class="profile-view-name">
        Front Test
      </h1>

      <div class="profile-view-info-field">
        <div class="profile-view-info-key">
          Username:
        </div>
        <div class="profile-view-info-value">
          didayi3273@satedly.com
        </div>
      </div>

      <app-button
        theme="white-outline"
        size="sm"
      >
        {{ $t('profileView.logoutBtn') }}
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import AppIcon from '@/components/AppIcon.vue';

export default {
  name: 'ProfileView',
  components: {
    AppButton,
    AppIcon,
  },
};
</script>
