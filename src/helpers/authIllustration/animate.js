import { gsap } from 'gsap';
import IconsAnimation from '@/helpers/authIllustration/IconsAnimation';

export default ({
  iconElements,
  mode,
  onComplete,
}) => {
  const iconsAnimation = new IconsAnimation({ elements: iconElements, mode });
  const mainTimeline = gsap.timeline({ onComplete });

  mainTimeline.add(iconsAnimation.timeline);
};
