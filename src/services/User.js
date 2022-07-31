import api from '@/helpers/api';
import apiEndpoints from '@/globals/apiEndpoints';

export default class User {
  static async login({ username, password }) {
    const response = await api.post(apiEndpoints.user.login, { username, password });
    const { token } = response.data;
    return token;
  }

  static async getProfile() {
    const response = await api.get(apiEndpoints.user.profile);
    return response.data;
  }
}
