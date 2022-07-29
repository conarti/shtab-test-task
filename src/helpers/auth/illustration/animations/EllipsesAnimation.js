import ElementsAnimation from '@/helpers/ElementsAnimation';
import animation from '@/params/animation';

export default class EllipsesAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      y: '100%',
      stagger: 0.1,
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      opacity: 0,
      y: '100%',
      stagger: 0.1,
    });
  }
}
