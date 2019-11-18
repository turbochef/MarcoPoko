import layoutStyles from 'shared/styles/layoutStyles';

export default {
  ...layoutStyles,
  container: {
    position: 'relative',
    width: '60%',
    height: '100%',
    marginBottom: '7rem',
  },
  clearMapButton: {
    fontSize: '3rem',
    cursor: 'pointer',
  },
  square: {
    display: 'block',
    paddingBottom: '100%',
  },
  squareContent: {
    position: 'absolute',
    width: '100%',
  },
  logo: {
    fontSize: '6rem',
    margin: 0,
  },
};
