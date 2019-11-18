import React from 'react';
import { withStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import styles from './PillButton.styles';

function PillButton({
  classes, text, active, onClick,
}) {
  return (
    <div
      className={active
        ? classes.active
        : classes.button}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={-1}
    >
      <h2>{text}</h2>
    </div>
  );
}

PillButton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

PillButton.defaultProps = {
  onClick: () => null,
  active: false,
};

export default withStyles(styles)(PillButton);
