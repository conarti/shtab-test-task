export default {
  appBlurrySquare: {
    sizes: ['smallest', 'small', 'medium', 'big', 'bigger', 'biggest'],
  },
  appEllipse: {
    sizes: ['small', 'medium', 'big', 'biggest'],
  },
  appIcon: {
    sizes: ['smallest', 'small', 'medium', 'big', 'biggest'],
    defaultSize: 'medium',
    colors: ['white', 'muted'],
    defaultColor: 'white',
  },
  appButton: {
    themes: ['primary', 'white-outline'],
    defaultTheme: 'primary',
    types: [
      'button',
      'submit',
      'reset',
    ],
    defaultType: 'button',
    sizes: ['sm'],
    defaultSize: null,
  },
  appInput: {
    defaultIdPrefix: 'input',
    types: [
      'email',
      'hidden',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'url',
    ],
    defaultType: 'text',
  },
  authIllustration: {
    icons: [
      {
        icon: 'alarm',
        size: 'smallest',
      },
      {
        icon: 'lock',
        size: 'small',
      },
      {
        icon: 'chat',
        size: 'medium',
      },
      {
        icon: 'fire',
        size: 'big',
      },
      {
        icon: 'shtab-logo',
        size: 'biggest',
      },
    ],
    squares: ['smallest', 'small', 'medium', 'big', 'bigger', 'biggest'],
    ellipses: ['small', 'medium', 'big', 'biggest'],
  },
  appSquareWithIcon: {
    icons: ['alarm', 'chat', 'fire', 'lock', 'shtab-logo'],
  },
  profileView: {
    ellipses: [
      {
        size: 'small',
        name: 'small-1',
      },
      {
        size: 'small',
        name: 'small-2',
      },
      {
        size: 'medium',
        name: 'medium',
      },
    ],
    blurrySquares: ['small', 'medium', 'bigger'],
  },
};
