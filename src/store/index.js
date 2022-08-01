import { createStore } from 'vuex';
import auth from '@/store/auth.module';
import user from '@/store/user.module';
import alerts from '@/store/alerts.module';

export default createStore({
  modules: {
    auth,
    user,
    alerts,
  },
});
