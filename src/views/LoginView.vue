<template>
  <form
    class="login-view"
    @submit.prevent
  >
    <h1 class="login-view-title">
      Авторизация
    </h1>

    <AppInput
      class="login-view-input"
      label="Email"
      type="email"
    />
    <AppInput
      class="login-view-input"
      label="Пароль"
      type="password"
    />

    <app-button type="submit">
      Войти
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
