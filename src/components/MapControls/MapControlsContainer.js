import MapControlsComponent from 'components/MapControls/MapControls';
import { connect } from 'react-redux';
import { setMapAction } from 'redux/map/actionCreators';
import { getDirections, clearDirections } from 'redux/directions/actionCreators';

const mapState = ({ map, directions }) => ({ map, directions });

const mapDispatch = (dispatch) => ({
  setMapAction: (action) => {
    dispatch(setMapAction(action));
  },
  clearDirections: () => {
    dispatch(clearDirections());
  },
  navigate: (map) => {
    dispatch(getDirections(map));
  },
});

export default connect(mapState, mapDispatch)(MapControlsComponent);
