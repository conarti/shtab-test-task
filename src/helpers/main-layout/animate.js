import { gsap } from 'gsap';
import animation from '@/globals/animation';

export default ({
  headerElement,
  backgroundElement,
  contentContainerElement,
  mode,
  next = () => {},
}) => {
  const animations = {
    [animation.modes.enter]() {
      gsap.from(headerElement, {
        y: '70px',
        opacity: 0,
      });
      gsap.from(backgroundElement, {
        top: '-180px',
      });
      gsap.from(contentContainerElement, {
        opacity: 0,
        y: '100px',
        scale: '0.75',
      });
    },
    [animation.modes.leave]() {
      gsap.to(headerElement, {
        y: '70px',
        opacity: 0,
      });
      gsap.to(backgroundElement, {
        top: '100%',
        opacity: 0,
      });
      gsap.to(contentContainerElement, {
        opacity: 0,
        y: '100px',
        scale: '0.75',
        onComplete: next,
      });
    },
  };

  animations[mode]();
};
