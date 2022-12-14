export default class LocalStorage {
  static get(key) {
    return JSON.parse(localStorage.getItem(key)) ?? null;
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}
