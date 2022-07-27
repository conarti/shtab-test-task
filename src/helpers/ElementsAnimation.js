import { gsap } from 'gsap';

export default class ElementsAnimation {
  #timeline = gsap.timeline();

  #mode;

  #elements;

  constructor({
    elements,
    mode,
  }) {
    this.#mode = mode;
    this.#elements = elements;
    this.#initByMode();
  }

  get elements() {
    return this.#elements;
  }

  get timeline() {
    return this.#timeline;
  }

  #initByMode() {
    this[this.#mode]();
  }

  enter() {
    throw new Error(`enter animation of ${this.constructor.name} is undefined`);
  }

  leave() {
    throw new Error(`leave animation of ${this.constructor.name} is undefined`);
  }
}
