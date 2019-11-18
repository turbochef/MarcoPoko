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

const initialState = {
  sideLength: 0,
  impassables: [],
  startingLoc: {},
  endingLoc: {},
  mapAction: 'obstacles',
};


export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MAP: {
      return {
        ...state,
        sideLength: action.payload,
      };
    }
    case CLEAR_MAP: {
      return initialState; // clearing all data so resetting to initial state
    }
    case ADD_OBSTACLE: {
      return {
        ...state,
        impassables: [...state.impassables, action.payload],
      };
    }
    case REMOVE_OBSTACLE: {
      const { x, y } = action.payload;
      return {
        ...state,
        impassables: state.impassables.filter((item) => !(item.x === x && item.y === y)),
      };
    }
    case SET_MAP_ACTION: {
      return {
        ...state,
        mapAction: action.payload,
      };
    }
    case SET_START_LOCATION: {
      return {
        ...state,
        startingLoc: action.payload,
      };
    }
    case SET_END_LOCATION: {
      return {
        ...state,
        endingLoc: action.payload,
      };
    }
    case CLEAR_START_LOCATION: {
      return {
        ...state,
        startingLoc: {},
      };
    }
    case CLEAR_END_LOCATION: {
      return {
        ...state,
        endingLoc: {},
      };
    }
    default:
      return state;
  }
}
