export default {
  components: {
    appIcon: {
      sizes: ['smallest', 'small', 'medium', 'big', 'biggest'],
      defaultSize: 'medium',
      colors: ['white'],
      defaultColor: 'white',
    },
    appButton: {
      styles: ['primary'],
      defaultStyle: 'primary',
    },
    authIllustrationIcon: {
      icons: ['alarm', 'chat', 'fire', 'lock', 'shtab-logo'],
    },
  },
  animation: {
    modes: {
      enter: 'enter',
      leave: 'leave',
    },
  },
};
