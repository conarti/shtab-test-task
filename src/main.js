import './styles/index.scss';
import { createApp } from 'vue';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import store from './store';

require.context('./assets/icons', true, /\.svg$/); // import all icons for webpack

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');
