import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import PillButton from './PillButton';

describe('PillButton', () => {
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
    const text = 'this is a button';
    const active = true;
    const onClick = jest.fn();
    act(() => {
      const { getByRole } = render(<PillButton
        text={text}
        active={active}
        onClick={onClick}
      />);
      expect(getByRole('button')).toBeDefined();
    });
  });

  it('should handle a click', () => {
    const text = 'this is a button';
    const active = false;
    const onClick = jest.fn();
    act(() => {
      const { getByRole } = render(<PillButton
        text={text}
        active={active}
        onClick={onClick}
      />);
      getByRole('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
