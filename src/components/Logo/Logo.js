import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Logo.styles';

function Logo({ classes }) {
  return (
    <div>
      <div className={classes.container}>
        <h1 className={classes.logo}>Marco Poko</h1>
      </div>
    </div>
  );
}

Logo.propTypes = { classes: PropTypes.objectOf(PropTypes.string).isRequired };

export default withStyles(styles)(Logo);
