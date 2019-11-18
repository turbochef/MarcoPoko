import React from 'react';
import NewMapControls from 'components/NewMapControls/NewMapControlsContainer';
import { withStyles, Box, Slide } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import MapComponentContainer from 'components/Map/MapContainer';
import MapControlsComponent from 'components/MapControls/MapControlsContainer';
import mapObject from 'shared/props/mapObject';
import LogoComponent from './components/Logo/Logo';
import styles from './App.styles';

function App({ classes, map }) {
  return (
    <div className={classes.app}>
      <div className={classes.row}>
        <div className={classes.centerColumn}>
          {map.sideLength === 0 && (
            <Slide timeout={2000} in={map.sideLength === 0} direction="down">
              <Box>
                <LogoComponent />
              </Box>
            </Slide>
          )}
          {map.sideLength === 0 && (
            <Slide timeout={300} in direction="up">
              <Box>
                <NewMapControls />
              </Box>
            </Slide>
          )}
          {map.sideLength !== 0 && (
            <MapComponentContainer />
          )}
          {map.sideLength !== 0 && (
            <MapControlsComponent />
          )}
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  map: mapObject.isRequired,
};

export default withStyles(styles)(App);
