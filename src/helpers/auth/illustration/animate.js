import { gsap } from 'gsap';
import animation from '@/globals/animation';
import PageScroll from '@/helpers/PageScroll';
import IconsAnimation from '@/helpers/auth/illustration/animations/IconsAnimation';
import BackgroundAnimation from '@/helpers/auth/illustration/animations/BackgroundAnimation';
import EllipsesAnimation from '@/helpers/auth/illustration/animations/EllipsesAnimation';
import SquaresAnimation from '@/helpers/auth/illustration/animations/SquaresAnimation';
import TextAnimation from '@/helpers/auth/illustration/animations/TextAnimation';

export default ({
  iconElements,
  ellipsesElements,
  squaresElements,
  textElements,
  backgroundElement,
  containerElement,
  mode,
  next = () => {},
}) => {
  const iconsAnimation = new IconsAnimation({ elements: iconElements, mode });
  const ellipsesAnimation = new EllipsesAnimation({ elements: ellipsesElements, mode });
  const backgroundAnimation = new BackgroundAnimation({ elements: backgroundElement, mode });
  const squaresAnimation = new SquaresAnimation({ elements: squaresElements, mode });
  const textAnimation = new TextAnimation({ elements: textElements, mode });

  const mainTimeline = gsap.timeline({
    onComplete: () => {
      PageScroll.enable();
      next();
    },
  });

  PageScroll.disable();

  if (mode === animation.modes.leave) {
    mainTimeline.set(containerElement, { overflow: 'visible' });
  }

  mainTimeline.add(backgroundAnimation.timeline);
  mainTimeline.add(ellipsesAnimation.timeline);
  mainTimeline.add(squaresAnimation.timeline, '-=0.5');
  mainTimeline.add(iconsAnimation.timeline, '-=1');
  mainTimeline.add(textAnimation.timeline, '-=1');
};
