import animation from '@/globals/animation';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class HeaderAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      y: '70px',
      opacity: 0,
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      y: '-70px',
      opacity: 0,
    });
  }
}
