import { gsap } from 'gsap';

const animateEnter = (elements) => {
  gsap.fromTo(elements, {
    opacity: 0,
  }, {
    duration: 0.25,
    opacity: 1,
    stagger: 0.1,
  });
};

const animateLeave = (elements, onComplete) => {
  gsap.fromTo(elements, {
    opacity: 1,
  }, {
    duration: 0.25,
    opacity: 0,
    stagger: 0.1,
    onComplete,
  });
};

/**
 * Animate icon element.
 * @param {Array<HTMLElement>|HTMLElement} target Target elements or element.
 * @param {'enter'|'leave'} mode Transition mode.
 * @param {Function} onComplete Callback on animation complete.
 */
export default (target, mode, onComplete = () => {}) => {
  const transitions = {
    enter: animateEnter,
    leave: animateLeave,
  };

  transitions[mode](target, onComplete);
};

// enter(el, done) {
//   const tl = new TimelineMax({
//     onComplete: done
//   })
//
//   tl.set(el, {
//     y: window.innerWidth * 1.5,
//     scale: 0.8,
//     transformOrigin: '50% 50%'
//   })
//
//   tl.to(el, 0.5, {
//     y: 0,
//     ease: Power4.easeOut
//   });
//
//   tl.to(el, 1, {
//     scale: 1,
//     ease: Power4.easeOut
//   });
// },
// leave(el, done) {
//   TweenMax.to(el, 1, {
//     y: window.innerHeight * -1.5,
//     ease: Power4.easeOut,
//     onComplete: done
//   });
// }
