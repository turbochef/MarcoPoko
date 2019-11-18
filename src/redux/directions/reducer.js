import {
  SET_MOVES,
  CLEAR_DIRECTIONS,
  SET_ERRORS,
  CLEAR_ERRORS,
} from './actions';

const initialState = {
  moves: [],
  positions: [],
  errors: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MOVES: {
      const {
        moves,
        positions,
      } = action.payload;
      return {
        ...state,
        moves,
        positions,
      };
    }
    case SET_ERRORS: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        errors: '',
      };
    }
    case CLEAR_DIRECTIONS: {
      return initialState;
    }
    default:
      return state;
  }
}
