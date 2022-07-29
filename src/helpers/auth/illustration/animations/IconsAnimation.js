import params from '@/params';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class IconsAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [params.animation.modes.enter]() {
    this.timeline.from(this.elements, {
      duration: 0.25,
      opacity: 0,
      stagger: 0.1,
    });
  }

  [params.animation.modes.leave]() {
    this.timeline.to(this.elements, {
      duration: 0.25,
      opacity: 0,
      stagger: 0.1,
    });
  }
}
