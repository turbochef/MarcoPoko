
export default {
  button: {
    transition: 'padding-bottom .3s, background .5s, border-radius .3s',
    cursor: 'pointer',
    minHeight: '2rem',
    flexGrow: 1,
    fontSize: '1.1rem',
    border: '1px solid grey',
    background: '#fff',
    textAlign: 'center',
    '&:hover': {
      background: '#7bffb5',
    },
  },
  active: {
    background: '#7bffb5',
    transition: 'padding-bottom .3s, background .5s, border-radius .3s',
    cursor: 'pointer',
    minHeight: '2rem',
    flexGrow: 1,
    fontSize: '1.1rem',
    border: '1px solid grey',
    textAlign: 'center',
    paddingBottom: '1rem',
    borderRadius: '5px 5px 0 0',
  },
};
