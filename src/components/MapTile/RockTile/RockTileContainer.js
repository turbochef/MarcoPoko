import { connect } from 'react-redux';
import {
  removeObstacle,
  setStartLocation,
  setEndLocation,
} from 'redux/map/actionCreators';
import RockTile from './RockTile';

const mapState = ({ map }) => ({ map });
const mapDispatch = {
  removeObstacle,
  setStartLocation,
  setEndLocation,
};

export default connect(mapState, mapDispatch)(RockTile);
