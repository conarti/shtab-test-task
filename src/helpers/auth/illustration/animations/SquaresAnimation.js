import params from '@/params';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class SquaresAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [params.animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      stagger: 0.15,
    });
  }

  [params.animation.modes.leave]() {
    this.timeline.to(this.elements, {
      opacity: 0,
      stagger: 0.15,
    });
  }
}
