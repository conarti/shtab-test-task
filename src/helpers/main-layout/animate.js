import { gsap } from 'gsap';
import animation from '@/globals/animation';

export default ({ headerElement, backgroundElement, mode }) => {
  const animations = {
    [animation.modes.enter]() {
      gsap.from(headerElement, {
        y: '70px',
        opacity: 0,
      });
      gsap.from(backgroundElement, {
        top: '-180px',
      });
    },
    [animation.modes.leave]() {
      gsap.to(headerElement, {
        y: '70px',
        opacity: 0,
      });
      gsap.to(backgroundElement, {
        top: '-180px',
      });
    },
  };

  animations[mode]();
};
