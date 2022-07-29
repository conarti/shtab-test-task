import animation from '@/params/animation';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class IconsAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [animation.modes.enter]() {
    this.timeline.from(this.elements, {
      duration: 0.25,
      opacity: 0,
      stagger: 0.1,
    });
  }

  [animation.modes.leave]() {
    this.timeline.to(this.elements, {
      duration: 0.25,
      opacity: 0,
      stagger: 0.1,
    });
  }
}
