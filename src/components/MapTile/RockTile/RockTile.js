import React from 'react';
import { withStyles } from '@material-ui/core';
import stylesObject from 'shared/props/stylesObject';
import { PropTypes } from 'prop-types';
import locationObject from 'shared/props/locationObject';
import mapObject from 'shared/props/mapObject';
import styles from './RockTile.style';

function RockTile({
  classes,
  removeObstacle,
  setStartLocation,
  setEndLocation,
  location,
  map,
}) {
  const clickHandler = () => {
    switch (map.mapAction) {
      case 'start':
        removeObstacle(location);
        setStartLocation(location);
        break;
      case 'end':
        removeObstacle(location);
        setEndLocation(location);
        break;
      case 'obstacles':
        removeObstacle(location);
        break;
      default:
    }
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.rockSquare}
        role="button"
        tabIndex={-1}
        aria-label="stone tile"
        onKeyDown={clickHandler}
        onClick={clickHandler}
      />
    </div>
  );
}

RockTile.propTypes = {
  classes: stylesObject.isRequired,
  removeObstacle: PropTypes.func.isRequired,
  setStartLocation: PropTypes.func.isRequired,
  setEndLocation: PropTypes.func.isRequired,
  location: locationObject.isRequired,
  map: mapObject.isRequired,
};

export default withStyles(styles)(RockTile);
