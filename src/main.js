import './styles/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

require.context('./assets/icons', true, /\.svg$/); // import all icons for webpack

createApp(App).use(store).use(router).mount('#app');
