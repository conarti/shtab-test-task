import params from '@/params';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class BackgroundAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [params.animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      y: '100%',
      ease: 'power2.out',
    });
  }

  [params.animation.modes.leave]() {
    this.timeline.to(this.elements, {
      left: '-100%',
      ease: 'power2.out',
    });
  }
}
