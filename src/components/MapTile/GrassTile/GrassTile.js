import React from 'react';
import { withStyles } from '@material-ui/core';
import stylesObject from 'shared/props/stylesObject';
import { PropTypes } from 'prop-types';
import locationObject from 'shared/props/locationObject';
import mapObject from 'shared/props/mapObject';
import styles from './GrassTile.style';

function GrassTile({
  map,
  classes,
  location,
  addObstacle,
  setStartLocation,
  setEndLocation,
}) {
  const clickHandler = () => {
    switch (map.mapAction) {
      case 'start':
        setStartLocation(location);
        break;
      case 'end':
        setEndLocation(location);
        break;
      case 'obstacles':
        addObstacle(location);
        break;
      default:
    }
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.grassSquare}
        role="button"
        tabIndex={-1}
        aria-label="grass tile"
        onKeyDown={clickHandler}
        onClick={clickHandler}
      />
    </div>
  );
}

GrassTile.propTypes = {
  classes: stylesObject.isRequired,
  addObstacle: PropTypes.func.isRequired,
  setStartLocation: PropTypes.func.isRequired,
  setEndLocation: PropTypes.func.isRequired,
  location: locationObject.isRequired,
  map: mapObject.isRequired,
};

export default withStyles(styles)(GrassTile);
