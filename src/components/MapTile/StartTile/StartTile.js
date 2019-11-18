import React from 'react';
import { withStyles } from '@material-ui/core';
import stylesObject from 'shared/props/stylesObject';
import style from './StartTile.style';

function StartTile({ classes }) {
  return (
    <div className={classes.container}>
      <div
        className={classes.startTile}
        aria-label="start"
      >
        <img
          alt="start"
          className={classes.bulbasaurImage}
          src="bulbasaur.png"
        />
      </div>
    </div>
  );
}

StartTile.propTypes = {
  classes: stylesObject.isRequired,
};

export default withStyles(style)(StartTile);
