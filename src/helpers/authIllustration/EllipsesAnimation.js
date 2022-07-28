import ElementsAnimation from '@/helpers/ElementsAnimation';
import params from '@/params';

export default class EllipsesAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [params.animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      y: '100%',
      stagger: 0.1,
    });
  }

  [params.animation.modes.leave]() {
    this.timeline.to(this.elements, {
      opacity: 0,
      y: '100%',
      stagger: 0.1,
    });
  }
}
