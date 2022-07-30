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

    <div class="profile-view-illustration">
      <AppEllipse
        v-for="({ size, name }) in $options.ELLIPSES"
        :key="name"
        :size="size"
        :class="`profile-view-illustration-ellipse-${name}`"
      />

      <AppBlurrySquare
        v-for="(size) in $options.BLURRY_SQUARES"
        :key="size"
        :size="size"
        :class="`profile-view-illustration-square-${size}`"
      />
    </div>
  </div>
</template>

<script>
import components from '@/globals/components';
import AppButton from '@/components/AppButton.vue';
import AppBlurrySquare from '@/components/AppBlurrySquare.vue';
import AppEllipse from '@/components/AppEllipse.vue';
import AppIcon from '@/components/AppIcon.vue';

export default {
  name: 'ProfileView',
  ELLIPSES: components.profileView.ellipses,
  BLURRY_SQUARES: components.profileView.blurrySquares,
  components: {
    AppButton,
    AppBlurrySquare,
    AppEllipse,
    AppIcon,
  },
};
</script>
