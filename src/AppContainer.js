import { connect } from 'react-redux';
import App from './App';

const mapState = ({ map }) => ({ map });

export default connect(mapState)(App);
