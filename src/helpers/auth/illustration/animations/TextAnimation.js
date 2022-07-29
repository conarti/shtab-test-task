import params from '@/params';
import ElementsAnimation from '@/helpers/ElementsAnimation';

export default class TextAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [params.animation.modes.enter]() {
    this.timeline.from(this.elements, {
      opacity: 0,
      y: '50px',
      ease: 'power3.out',
      duration: 0.5,
    });
  }

  [params.animation.modes.leave]() {
    this.timeline.fromTo(
      this.elements,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: '50px',
        ease: 'power2.out',
        duration: 0.35,
      },
    );
  }
}
