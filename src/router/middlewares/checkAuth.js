import store from '@/store';

export default (to) => {
  const notNeedAuth = to.meta.auth === false;
  const isUserAuthorized = store.getters['auth/hasAuth'];
  const isAuthNextPage = to.name === 'login';

  if (isAuthNextPage && isUserAuthorized) {
    return { name: 'profile' };
  }

  if (notNeedAuth) {
    return true;
  }

  if (isUserAuthorized) {
    return true;
  }

  return { name: 'login' };
};
