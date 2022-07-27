import params from '@/params';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class IconsAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [params.animation.modes.enter]() {
    this.timeline.fromTo(this.elements, {
      opacity: 0,
    }, {
      duration: 0.25,
      opacity: 1,
      stagger: 0.1,
    });
  }

  [params.animation.modes.leave]() {
    this.timeline.fromTo(this.elements, {
      opacity: 1,
    }, {
      duration: 0.25,
      opacity: 0,
      stagger: 0.1,
    });
  }
}
