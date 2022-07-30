<template>
  <form
    class="login-view"
    @submit.prevent
  >
    <h1 class="login-view-title">
      {{ $t('loginView.title') }}
    </h1>

    <AppInput
      class="login-view-input"
      :label="$t('loginView.inputLabels.email')"
      type="email"
    />
    <AppInput
      class="login-view-input"
      :label="$t('loginView.inputLabels.password')"
      type="password"
    />

    <app-button type="submit">
      {{ $t('loginView.button') }}
    </app-button>
  </form>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';

export default {
  name: 'LoginView',
  components: {
    AppButton,
    AppInput,
  },
};
</script>
