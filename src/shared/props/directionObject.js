import { PropTypes } from 'prop-types';

export default PropTypes.shape({
  moves: PropTypes.arrayOf(PropTypes.string),
  positions: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })),
  errors: PropTypes.string,
});
