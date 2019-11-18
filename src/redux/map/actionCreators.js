import {
  CREATE_MAP,
  CLEAR_MAP,
  ADD_OBSTACLE,
  REMOVE_OBSTACLE,
  SET_MAP_ACTION,
  SET_START_LOCATION,
  SET_END_LOCATION,
  CLEAR_START_LOCATION,
  CLEAR_END_LOCATION,
} from './actions';

export const createMap = (size) => ({
  type: CREATE_MAP,
  payload: size,
});

export const clearMap = () => ({
  type: CLEAR_MAP,
});

export const addObstacle = (location) => ({
  type: ADD_OBSTACLE,
  payload: location,
});

export const removeObstacle = (location) => ({
  type: REMOVE_OBSTACLE,
  payload: location,
});

export const setMapAction = (action) => ({
  type: SET_MAP_ACTION,
  payload: action,
});

export const setStartLocation = (location) => ({
  type: SET_START_LOCATION,
  payload: location,
});

export const setEndLocation = (location) => ({
  type: SET_END_LOCATION,
  payload: location,
});

export const clearStartLocation = () => ({
  type: CLEAR_START_LOCATION,
});

export const clearEndLocatoin = () => ({
  type: CLEAR_END_LOCATION,
});
