import { PropTypes } from 'prop-types';

export default PropTypes.shape({
  sideLength: PropTypes.number,
  impassables: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ),
  startingLoc: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  endingLoc: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  mapAction: PropTypes.oneOf(['start', 'end', 'obstacles', '']),
});
