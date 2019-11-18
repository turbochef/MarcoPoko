import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import RockTile from './RockTile';

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
    const removeObstacle = jest.fn();
    const addObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const setEndLocation = jest.fn();
    const location = { x: 1, y: 2 };
    const map = {};
    act(() => {
      const { getByRole } = render(<RockTile
        removeObstacle={removeObstacle}
        addObstacle={addObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={location}
        map={map}
      />);
      expect(getByRole('button')).toBeDefined();
    });
  });

  it('should set a start location', () => {
    const removeObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const setEndLocation = jest.fn();
    const map = { mapAction: 'start' };
    const location = { x: 1, y: 2 };
    act(() => {
      const { getByRole } = render(<RockTile
        removeObstacle={removeObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={location}
        map={map}
      />);
      getByRole('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(setStartLocation).toHaveBeenCalledWith(location);
  });

  it('should set an end location', () => {
    const removeObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const location = { x: 1, y: 2 };
    const setEndLocation = jest.fn();
    const map = { mapAction: 'start' };
    act(() => {
      const { getByRole } = render(<RockTile
        removeObstacle={removeObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={location}
        map={map}
      />);
      getByRole('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(removeObstacle).toHaveBeenCalledWith(location);
  });

  it('should remove an obstacle', () => {
    const removeObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const setEndLocation = jest.fn();
    const location = { x: 1, y: 2 };
    const map = { mapAction: 'start' };
    act(() => {
      const { getByRole } = render(<RockTile
        removeObstacle={removeObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={location}
        map={map}
      />);
      getByRole('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(removeObstacle).toHaveBeenCalledWith(location);
  });
});
