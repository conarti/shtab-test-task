export default class PageScroll {
  static disable() {
    document.body.style.overflow = 'hidden';
  }

  static enable() {
    document.body.style.overflow = '';
  }
}
