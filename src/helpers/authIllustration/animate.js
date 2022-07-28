import { gsap } from 'gsap';
import IconsAnimation from '@/helpers/authIllustration/IconsAnimation';
import BackgroundAnimation from '@/helpers/authIllustration/BackgroundAnimation';
import params from '@/params';

export default ({
  iconElements,
  backgroundElement,
  containerElement,
  mode,
  onComplete,
}) => {
  const iconsAnimation = new IconsAnimation({ elements: iconElements, mode });
  const backgroundAnimation = new BackgroundAnimation({ elements: backgroundElement, mode });

  const mainTimeline = gsap.timeline({ onComplete });

  if (mode === params.animation.modes.leave) {
    mainTimeline.set(containerElement, { overflow: 'visible' });
  }

  mainTimeline.add(backgroundAnimation.timeline);
  mainTimeline.add(iconsAnimation.timeline);
};
