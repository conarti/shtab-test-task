import './styles/index.scss';
import { createApp } from 'vue';
import { createAlertInterceptor, createSetAuthInterceptor } from './helpers/api';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import store from './store';

require.context('./assets/icons', true, /\.svg$/); // import all icons for webpack

const hasAuth = () => store.getters['auth/hasAuth'];
const token = () => store.getters['auth/token'];
const addAlert = (message) => store.dispatch('alerts/add', message);

createSetAuthInterceptor(hasAuth, token);
createAlertInterceptor(addAlert);

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');
