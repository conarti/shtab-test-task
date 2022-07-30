import { gsap } from 'gsap';
import animation from '@/globals/animation';
import HeaderAnimation from '@/helpers/main-layout/animations/HeaderAnimation';
import BackgroundAnimation from '@/helpers/main-layout/animations/BackgroundAnimation';
import ContentAnimation from '@/helpers/main-layout/animations/ContentAnimation';
import EllipsesAnimation from '@/helpers/main-layout/animations/EllipsesAnimation';
import BlurrySquaresAnimation from '@/helpers/main-layout/animations/BlurrySquaresAnimation';

export default ({
  headerElement,
  backgroundElement,
  contentContainerElement,
  ellipsesElements,
  blurrySquaresElements,
  mode,
  next = () => {},
}) => {
  const headerAnimation = new HeaderAnimation({ elements: headerElement, mode });
  const backgroundAnimation = new BackgroundAnimation({ elements: backgroundElement, mode });
  const contentAnimation = new ContentAnimation({ elements: contentContainerElement, mode });
  const ellipsesAnimation = new EllipsesAnimation({ elements: ellipsesElements, mode });
  const blurrySquaresAnimation = new BlurrySquaresAnimation({
    elements: blurrySquaresElements,
    mode,
  });

  const mainTimeline = gsap.timeline({ onComplete: next });

  mainTimeline.add(headerAnimation.timeline);

  if (mode === animation.modes.enter) {
    mainTimeline.add(backgroundAnimation.timeline, '-=0.5');
  }

  mainTimeline.add(ellipsesAnimation.timeline, '-=0.5');
  mainTimeline.add(blurrySquaresAnimation.timeline, '-=0.5');
  mainTimeline.add(contentAnimation.timeline, '-=0.75');

  if (mode === animation.modes.leave) {
    mainTimeline.add(backgroundAnimation.timeline);
  }
};
