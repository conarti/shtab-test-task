import { gsap } from 'gsap';
import params from '@/params';

export default (contentElement, mode) => {
  const animations = {
    [params.animation.modes.enter]() {
      gsap.from(contentElement, {
        opacity: 0,
      });
    },
    [params.animation.modes.leave]() {
      gsap.to(contentElement, {
        opacity: 0,
      });
    },
  };

  animations[mode]();
};
