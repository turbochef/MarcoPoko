import React from 'react';
import stylesObject from 'shared/props/stylesObject';
import { withStyles } from '@material-ui/core';
import styles from './EndTile.style';

function EndTile({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.endTile}>
        <img
          alt="end"
          data-testid="end-tile"
          className={classes.endImage}
          src="finishtile.png"
        />
      </div>
    </div>
  );
}

EndTile.propTypes = {
  classes: stylesObject.isRequired,
};

export default withStyles(styles)(EndTile);
