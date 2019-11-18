import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import GrassTile from './GrassTile';

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
    const addObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const setEndLocation = jest.fn();
    const map = {};
    act(() => {
      const { getByRole } = render(<GrassTile
        addObstacle={addObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={{ x: 1, y: 2 }}
        map={map}
      />);
      expect(getByRole('button')).toBeDefined();
    });
  });

  it('should set a start location', () => {
    const addObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const setEndLocation = jest.fn();
    const map = { mapAction: 'start' };
    act(() => {
      const { getByRole } = render(<GrassTile
        addObstacle={addObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={{ x: 1, y: 2 }}
        map={map}
      />);
      getByRole('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(setStartLocation).toHaveBeenCalledTimes(1);
  });

  it('should set an end location', () => {
    const addObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const setEndLocation = jest.fn();
    const map = { mapAction: 'end' };
    act(() => {
      const { getByRole } = render(<GrassTile
        addObstacle={addObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={{ x: 1, y: 2 }}
        map={map}
      />);
      getByRole('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(setEndLocation).toHaveBeenCalledTimes(1);
  });

  it('should add an obstacle', () => {
    const addObstacle = jest.fn();
    const setStartLocation = jest.fn();
    const setEndLocation = jest.fn();
    const map = { mapAction: 'obstacles' };
    act(() => {
      const { getByRole } = render(<GrassTile
        addObstacle={addObstacle}
        setStartLocation={setStartLocation}
        setEndLocation={setEndLocation}
        location={{ x: 1, y: 2 }}
        map={map}
      />);
      getByRole('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(addObstacle).toHaveBeenCalledTimes(1);
  });
});
