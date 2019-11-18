import React from 'react';
import PillButtonComponent from 'shared/ui/PillButton/PillButton';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core';
import mapObject from 'shared/props/mapObject';
import directionObject from 'shared/props/directionObject';
import styles from './MapControls.styles';

function MapControlsComponent({
  classes,
  setMapAction,
  map,
  navigate,
  directions,
  clearDirections,
}) {
  return (
    <div className={classes.container} data-testid="map-controls">
      <PillButtonComponent
        text="Set Obstacles"
        active={map.mapAction === 'obstacles'}
        onClick={() => { setMapAction('obstacles'); }}
      />
      <PillButtonComponent
        text="Start Position"
        active={map.mapAction === 'start'}
        onClick={() => { setMapAction('start'); }}
      />
      <PillButtonComponent
        text="End Position"
        active={map.mapAction === 'end'}
        onClick={() => { setMapAction('end'); }}
      />
      {directions.moves.length === 0 && (
        <PillButtonComponent
          text="Calculate Route"
          onClick={() => { navigate(map); }}
        />
      )}
      {directions.moves.length && (
        <PillButtonComponent
          text="Clear Route"
          onClick={() => { clearDirections(map); }}
        />
      )}
    </div>
  );
}

MapControlsComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setMapAction: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  clearDirections: PropTypes.func.isRequired,
  map: mapObject.isRequired,
  directions: directionObject.isRequired,
};

export default withStyles(styles)(MapControlsComponent);
