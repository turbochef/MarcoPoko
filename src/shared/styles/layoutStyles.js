const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
};

export default {
  ...styles,
  fullColumn: {
    ...styles.column,
    justifyContent: 'stretch',
    width: '100%',
    alignItems: 'stretch',
  },
  spreadRow: {
    ...styles.row,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerColumn: {
    ...styles.column,
    justifyContent: 'stretch',
    width: '100%',
    alignItems: 'center',
  },
};
