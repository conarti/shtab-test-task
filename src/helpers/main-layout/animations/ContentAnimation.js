import ElementsAnimation from '@/helpers/ElementsAnimation';
import animation from '@/globals/animation';

export default class ContentAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      y: '100px',
      scale: '0.75',
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      opacity: 0,
      y: '100px',
      scale: '0.75',
    });
  }
}
