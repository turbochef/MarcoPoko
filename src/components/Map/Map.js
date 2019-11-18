import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Slide,
  Box,
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
} from '@material-ui/core';
import mapObject from 'shared/props/mapObject';
import directionObject from 'shared/props/directionObject';
import styles from './Map.styles';
import MapTileSwitch from '../MapTile/MapTileSwitch';

function Map({
  classes,
  map,
  clearMap,
  clearDirections,
  clearErrors,
  directions,
}) {
  return (
    <div className={classes.container} data-testid="map-container">
      <Slide timeout={1000} in={map.sideLength !== 0} direction="down">
        <Box className={classes.spreadRow}>
          <h1 className={classes.logo}>Marco Poko</h1>
          <div
            data-testid="clear-map-button"
            onKeyDown={() => { clearMap(); clearDirections(); }}
            onClick={() => { clearMap(); clearDirections(); }}
            role="button"
            tabIndex={-1}
            className={classes.clearMapButton}
          >
            New Map
          </div>
        </Box>
      </Slide>
      <div className={classes.square}>
        <div className={classes.squareContent} data-testid="square">
          {map.sideLength > 0 && Array(map.sideLength).fill().map((_, y) => (
            /*
            Shouldn't use array indexes as keys normally,
            but since these squares are actually all identical, it won't cause
            any rendering issues
            */
            // eslint-disable-next-line react/no-array-index-key
            <div className={classes.row} key={y}>
              {Array(map.sideLength).fill().map((__, x) => (
                <MapTileSwitch
                  // eslint-disable-next-line react/no-array-index-key
                  key={x}
                  location={{ x, y }}
                  start={map.startingLoc}
                  end={map.endingLoc}
                  impassables={map.impassables}
                  directions={directions}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={directions.errors.length !== 0}
        onClose={clearErrors}
      >
        <DialogTitle id="alert-dialog-title">No route found to your goal.</DialogTitle>
        <DialogActions>
          <Button onClick={clearErrors} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Map.propTypes = {
  map: mapObject.isRequired,
  directions: directionObject.isRequired,
  clearMap: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  clearDirections: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Map);
