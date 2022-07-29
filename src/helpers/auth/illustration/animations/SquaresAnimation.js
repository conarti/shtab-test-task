import animation from '@/params/animation';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class SquaresAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      stagger: 0.15,
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      opacity: 0,
      stagger: 0.15,
    });
  }
}
