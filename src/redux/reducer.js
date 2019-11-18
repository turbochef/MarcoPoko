import { combineReducers } from 'redux';
import mapReducer from './map/reducer';
import directionReducer from './directions/reducer';

/*
  combining reducers is unnecessary for this application
  but I wanted to make an app as close as possible to a
  production application
*/

export default combineReducers({ map: mapReducer, directions: directionReducer });
