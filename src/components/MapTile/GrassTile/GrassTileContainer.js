import { connect } from 'react-redux';
import { addObstacle, setStartLocation, setEndLocation } from 'redux/map/actionCreators';
import GrassTile from './GrassTile';

const mapState = ({ map }) => ({ map });
const mapDispatch = {
  addObstacle,
  setStartLocation,
  setEndLocation,
};

export default connect(mapState, mapDispatch)(GrassTile);
