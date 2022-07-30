import ElementsAnimation from '@/helpers/ElementsAnimation';
import animation from '@/globals/animation';

export default class BackgroundAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      top: '-180px',
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      top: '100%',
      opacity: 0,
      duration: 0.35,
    });
  }
}
