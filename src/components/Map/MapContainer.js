import { connect } from 'react-redux';
import { clearMap } from 'redux/map/actionCreators';
import { clearDirections, clearErrors } from 'redux/directions/actionCreators';
import MapComponent from './Map';

const mapState = ({ map, directions }) => ({ map, directions });

const mapDispatch = {
  clearMap,
  clearDirections,
  clearErrors,
};


export default connect(mapState, mapDispatch)(MapComponent);
