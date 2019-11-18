import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  TextField,
  Button,
} from '@material-ui/core';
import { validateMapSize } from 'shared/utils/validate';
import styles from './NewMapControls.styles';

function NewMapControls({ createMap, classes }) {
  const [size, setSize] = useState({
    value: '',
    errors: [],
    dirty: false,
  });

  return (
    <div className={classes.container} data-testid="new-map-controls">
      <TextField
        label="Choose Map Size"
        type="text"
        data-testid="new-map-input"
        margin="normal"
        value={size.value}
        error={size.errors.length !== 0 && size.dirty}
        onChange={(event) => {
          setSize(validateMapSize(event.target.value));
        }}
        InputProps={{
          classes: {
            input: classes.textBox,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.label,
            shrink: classes.focusedLabel,
          },
        }}
      />
      {size.errors.length !== 0 && (
        <div className={classes.errorContainer}>
          {size.errors.map((error) => (
            <div className={classes.error} key={error}>
              -
              {error}
            </div>
          ))}
        </div>
      )}
      {size.errors.length === 0 && (
        <Button
          className={classes.startButton}
          variant="outlined"
          disabled={!size.dirty}
          onClick={() => { createMap(parseInt(size.value, 10)); }}
        >
          START
        </Button>
      )}
    </div>
  );
}

NewMapControls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  createMap: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewMapControls);
