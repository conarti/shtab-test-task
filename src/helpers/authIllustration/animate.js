import { gsap } from 'gsap';
import params from '@/params';
import PageScroll from '@/helpers/PageScroll';
import IconsAnimation from '@/helpers/authIllustration/IconsAnimation';
import BackgroundAnimation from '@/helpers/authIllustration/BackgroundAnimation';
import EllipsesAnimation from '@/helpers/authIllustration/EllipsesAnimation';
import SquaresAnimation from '@/helpers/authIllustration/SquaresAnimation';
import TextAnimation from '@/helpers/authIllustration/TextAnimation';

export default ({
  iconElements,
  ellipsesElements,
  squaresElements,
  textElements,
  backgroundElement,
  containerElement,
  mode,
  next,
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

  if (mode === params.animation.modes.leave) {
    mainTimeline.set(containerElement, { overflow: 'visible' });
  }

  mainTimeline.add(backgroundAnimation.timeline);
  mainTimeline.add(ellipsesAnimation.timeline);
  mainTimeline.add(squaresAnimation.timeline, '-=0.5');
  mainTimeline.add(iconsAnimation.timeline, '-=1');
  mainTimeline.add(textAnimation.timeline, '-=1');
};
