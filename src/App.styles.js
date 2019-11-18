import layoutStyles from './shared/styles/layoutStyles';

export default {
  app: {
    fontFamily: '\'VT323\', monospace',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
  },
  ...layoutStyles,
};
