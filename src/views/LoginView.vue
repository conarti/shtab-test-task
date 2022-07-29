<template>
  <div class="login">
    <h1 class="login-title">Авторизация</h1>
    <app-button>Войти</app-button>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  name: 'LoginView',
  components: {
    AppButton,
  },
};
</script>
