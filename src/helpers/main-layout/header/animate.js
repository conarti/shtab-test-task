import { gsap } from 'gsap';
import animation from '@/globals/animation';

export default (headerElement, mode) => {
  const animations = {
    [animation.modes.enter]() {
      gsap.from(headerElement, {
        y: '70px',
        opacity: 0,
      });
    },
    [animation.modes.leave]() {
      gsap.to(headerElement, {
        y: '70px',
        opacity: 0,
      });
    },
  };

  animations[mode]();
};
