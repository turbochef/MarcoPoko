import { connect } from 'react-redux';
import NewMapControls from 'components/NewMapControls/NewMapControls';
import { createMap } from '../../redux/map/actionCreators';

export default connect(null, { createMap })(NewMapControls);
