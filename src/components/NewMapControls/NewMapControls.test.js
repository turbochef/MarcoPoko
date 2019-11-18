import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import NewMapControls from './NewMapControls';

describe('Grass Tile', () => {
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

  it('should render', () => {
    const createMap = jest.fn();

    act(() => {
      const { getByTestId } = render(<NewMapControls
        createMap={createMap}
      />);

      expect(getByTestId('new-map-controls')).toBeDefined();
    });
  });
});
