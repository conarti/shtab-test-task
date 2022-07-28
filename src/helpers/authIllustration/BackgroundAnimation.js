// import { gsap } from 'gsap';
import ElementsAnimation from '@/helpers/ElementsAnimation';
import params from '@/params';

export default class BackgroundAnimation extends ElementsAnimation {
  constructor({ elements, mode }) {
    super({ elements, mode });
  }

  [params.animation.modes.enter]() {
    this.timeline.fromTo(this.elements, {
      opacity: 0,
      y: '100%',
    }, {
      opacity: 1,
      y: 0,
    });
  }

  [params.animation.modes.leave]() {
    this.timeline.fromTo(this.elements, {
      left: 0,
    }, {
      left: '-100%',
    });
  }
}
