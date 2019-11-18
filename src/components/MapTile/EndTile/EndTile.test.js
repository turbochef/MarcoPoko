import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import EndTile from './EndTile';

describe('EndTile', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('render', () => {
    act(() => {
      const { getByAltText } = render(<EndTile />);
      expect(getByAltText('end')).toBeDefined();
    });
  });
});
