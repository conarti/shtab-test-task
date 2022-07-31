<template>
  <form
    class="login-view"
    @submit.prevent="login"
  >
    <h1 class="login-view-title">
      {{ $t('loginView.title') }}
    </h1>

    <AppInput
      v-model="username"
      class="login-view-input"
      :label="$t('loginView.inputLabels.email')"
      :errors="errors.username"
      type="email"
    />
    <AppInput
      v-model="password"
      class="login-view-input"
      :label="$t('loginView.inputLabels.password')"
      :errors="errors.password"
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
  data() {
    return {
      username: null,
      password: null,
      errors: {
        username: [],
        password: [],
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', {
          username: this.username,
          password: this.password,
        });
        this.$router.push({ name: 'profile' });
      } catch (error) {
        const { password, username } = error.response.data;

        this.errors.password = password ?? [];
        this.errors.username = username ?? [];
      }
    },
  },
};
</script>
