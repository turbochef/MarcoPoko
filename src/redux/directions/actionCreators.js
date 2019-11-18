import { post } from 'axios';
import {
  SET_MOVES,
  CLEAR_DIRECTIONS,
  SET_ERRORS,
  CLEAR_ERRORS,
} from './actions';


export const setDirections = (data) => ({
  type: SET_MOVES,
  payload: data,
});

export const clearDirections = () => ({ type: CLEAR_DIRECTIONS });

export const clearErrors = () => ({ type: CLEAR_ERRORS });

export const setErrors = (error) => ({
  type: SET_ERRORS,
  payload: error,
});

export const getDirections = (map) => {
  const {
    startingLoc,
    endingLoc,
    impassables,
    sideLength,
  } = map;

  return (dispatch) => post(
    'https://frozen-reef-96768.herokuapp.com/find-path',
    {
      startingLoc,
      endingLoc,
      impassables,
      sideLength,
    },
  )
    .then(({ data }) => {
      const movePositions = [startingLoc];
      // eslint-disable-next-line array-callback-return
      data.moves.map((direction) => {
        switch (direction) {
          case 'U':
            movePositions.push(
              {
                x: movePositions[movePositions.length - 1].x,
                y: movePositions[movePositions.length - 1].y - 1,
              },
            );
            break;
          case 'D':
            movePositions.push(
              {
                x: movePositions[movePositions.length - 1].x,
                y: movePositions[movePositions.length - 1].y + 1,
              },
            );
            break;
          case 'L':
            movePositions.push(
              {
                x: movePositions[movePositions.length - 1].x - 1,
                y: movePositions[movePositions.length - 1].y,
              },
            );
            break;
          case 'R':
            movePositions.push(
              {
                x: movePositions[movePositions.length - 1].x + 1,
                y: movePositions[movePositions.length - 1].y,
              },
            );
            break;
          default:
        }
      });

      dispatch(setDirections({
        moves: data.moves,
        positions: movePositions,
        errors: '',
      }));
      return data.moves;
    }).catch((err) => {
      if (err.response.status === 400) {
        dispatch(setErrors('There is not route to your objective'));
      }
    });
};
