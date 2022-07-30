import animation from '@/globals/animation';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class BackgroundAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      y: '100%',
      ease: 'power2.out',
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      left: '-100%',
      ease: 'power2.out',
    });
  }
}
