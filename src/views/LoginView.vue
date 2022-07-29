<template>
  <form class="login" @submit.prevent>
    <h1 class="login-title">Авторизация</h1>

    <AppInput class="login-input" label="Email" type="email" />
    <AppInput class="login-input" label="Пароль" type="password" />

    <app-button type="submit">Войти</app-button>
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
