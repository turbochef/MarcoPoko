import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Map from './Map';

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
    };
    const clearMap = jest.fn();
    const clearErrors = jest.fn();
    const clearDirections = jest.fn();

    act(() => {
      const { getByTestId } = render(<Map
        map={map}
        directions={directions}
        clearMap={clearMap}
        clearErrors={clearErrors}
        clearDirections={clearDirections}
      />);
      expect(getByTestId('map-container')).toBeDefined();
      expect(getByTestId('square')).toBeDefined();
    });
  });

  it('should clear map on click', () => {
    const map = {
      sideLength: 0,
      startingLoc: {},
      endingLoc: {},
      impassables: [],
    };
    const directions = {
      errors: '',
    };
    const clearMap = jest.fn();
    const clearErrors = jest.fn();
    const clearDirections = jest.fn();
    act(() => {
      const { getByTestId } = render(<Map
        map={map}
        directions={directions}
        clearMap={clearMap}
        clearErrors={clearErrors}
        clearDirections={clearDirections}
      />);
      getByTestId('clear-map-button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(clearMap).toHaveBeenCalledTimes(1);
  });
});
