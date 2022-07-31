<template>
  <div class="profile-view">
    <div
      v-if="!isProfileNotLoaded"
      class="profile-view-content"
    >
      <div
        class="profile-view-avatar"
      >
        <img
          v-if="hasAvatar"
          class="profile-view-avatar-image"
          :src="avatar"
          alt="avatar"
        >
        <div
          v-else
          class="profile-view-avatar-placeholder"
        >
          <AppIcon
            name="no-photo"
            color="muted"
          />
        </div>
      </div>
      <h1 class="profile-view-name">
        {{ fullName }}
      </h1>

      <div class="profile-view-info-field">
        <div class="profile-view-info-key">
          Username:
        </div>
        <div class="profile-view-info-value">
          {{ email }}
        </div>
      </div>

      <app-button
        theme="white-outline"
        size="sm"
        @click="logout"
      >
        {{ $t('profileView.logoutBtn') }}
      </app-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppButton from '@/components/AppButton.vue';
import AppIcon from '@/components/AppIcon.vue';

export default {
  name: 'ProfileView',
  components: {
    AppButton,
    AppIcon,
  },
  computed: {
    ...mapGetters('user', {
      isProfileNotLoaded: 'isNotLoaded',
      hasAvatar: 'hasAvatar',
      fullName: 'fullName',
      avatar: 'avatar',
      email: 'email',
    }),
  },
  created() {
    if (this.isProfileNotLoaded) {
      this.fetchProfile();
    }
  },
  methods: {
    ...mapActions('user', {
      fetchProfile: 'fetch',
    }),
    logout() {
      this.$store.commit('auth/logout');
      this.$router.replace({ name: 'login' });
    },
  },
};
</script>
