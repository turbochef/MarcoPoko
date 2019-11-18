import React from 'react';
import { PropTypes } from 'prop-types';
import mapObject from 'shared/props/mapObject';
import locationObject from 'shared/props/locationObject';
import directionObject from 'shared/props/directionObject';
import GrassTileContainer from './GrassTile/GrassTileContainer';
import RockTileContainer from './RockTile/RockTileContainer';
import StartTile from './StartTile/StartTile';
import EndTile from './EndTile/EndTile';

const MapTileSwitch = ({
  location,
  start,
  end,
  impassables,
  directions,
}) => {
  if (impassables.some((rock) => (rock.y === location.y && rock.x === location.x))) {
    return <RockTileContainer location={location} />;
  }
  if (location.y === start.y && location.x === start.x) {
    return <StartTile />;
  }
  if (location.y === end.y && location.x === end.x) {
    return <EndTile />;
  }
  if (directions.positions.some(
    (direction) => (direction.y === location.y && direction.x === location.x),
  )) {
    return <EndTile />;
  }
  return <GrassTileContainer location={location} />;
};

MapTileSwitch.propTypes = {
  location: mapObject.isRequired,
  start: locationObject.isRequired,
  end: locationObject.isRequired,
  impassables: PropTypes.arrayOf(locationObject).isRequired,
  directions: directionObject.isRequired,
};

export default MapTileSwitch;
