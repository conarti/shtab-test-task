import ElementsAnimation from '@/helpers/ElementsAnimation';
import animation from '@/globals/animation';

export default class BlurrySquaresAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      stagger: 0.15,
      scale: 1.5,
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      opacity: 0,
      stagger: 0.15,
      scale: 1.5,
    });
  }
}
