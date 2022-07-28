import { gsap } from 'gsap';
import IconsAnimation from '@/helpers/authIllustration/IconsAnimation';
import BackgroundAnimation from '@/helpers/authIllustration/BackgroundAnimation';
import EllipsesAnimation from '@/helpers/authIllustration/EllipsesAnimation';
import params from '@/params';

export default ({
  iconElements,
  ellipsesElements,
  backgroundElement,
  containerElement,
  mode,
  onComplete,
}) => {
  const iconsAnimation = new IconsAnimation({ elements: iconElements, mode });
  const ellipsesAnimation = new EllipsesAnimation({ elements: ellipsesElements, mode });
  const backgroundAnimation = new BackgroundAnimation({ elements: backgroundElement, mode });

  const mainTimeline = gsap.timeline({ onComplete });

  if (mode === params.animation.modes.leave) {
    mainTimeline.set(containerElement, { overflow: 'visible' });
  }

  mainTimeline.add(backgroundAnimation.timeline);
  mainTimeline.add(ellipsesAnimation.timeline);
  mainTimeline.add(iconsAnimation.timeline, '-=0.5');
};
