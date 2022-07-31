import { createStore } from 'vuex';
import auth from '@/store/auth.module';
import user from '@/store/user.module';

export default createStore({
  modules: {
    auth,
    user,
  },
});
