export default {
  appIcon: {
    sizes: ['smallest', 'small', 'medium', 'big', 'biggest'],
    defaultSize: 'medium',
    colors: ['white'],
    defaultColor: 'white',
  },
  appButton: {
    styles: ['primary'],
    defaultStyle: 'primary',
    types: [
      'button',
      'submit',
      'reset',
    ],
    defaultType: 'button',
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
  authIllustrationIcon: {
    icons: ['alarm', 'chat', 'fire', 'lock', 'shtab-logo'],
  },
};
