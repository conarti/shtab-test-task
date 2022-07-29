import { gsap } from 'gsap';
import animation from '@/globals/animation';

export default (contentElement, mode) => {
  const animations = {
    [animation.modes.enter]() {
      gsap.from(contentElement, {
        opacity: 0,
      });
    },
    [animation.modes.leave]() {
      gsap.to(contentElement, {
        opacity: 0,
      });
    },
  };

  animations[mode]();
};
