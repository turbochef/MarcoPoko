import { header } from 'shared/styles/typography';

export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textBox: {
    ...header,
  },
  label: {
    ...header,
  },
  focusedLabel: {
    ...header,
    transform: 'translate(0, -40%) scale(1)',
  },
  startButton: {
    ...header,
    borderRadius: 0,
  },
  errorContainer: {
    border: '2px solid red',
    padding: '1rem',
    borderRadius: 5,
  },
  error: {
    fontSize: '2rem',
  },
};
