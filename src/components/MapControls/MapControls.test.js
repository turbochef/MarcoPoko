import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import MapControls from './MapControls';

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
    const map = {
      sideLength: 0,
      startingLoc: {},
      endingLoc: {},
      impassables: [],
    };
    const directions = {
      errors: '',
      moves: [],
    };
    const setMapAction = jest.fn();
    const navigate = jest.fn();
    const clearDirections = jest.fn();


    act(() => {
      const { getByTestId } = render(<MapControls
        setMapAction={setMapAction}
        navigate={navigate}
        clearDirections={clearDirections}
        map={map}
        directions={directions}
      />);
      expect(getByTestId('map-controls')).toBeDefined();
    });
  });
});
