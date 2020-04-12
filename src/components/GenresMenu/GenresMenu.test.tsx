import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import GenresMenu from './GenresMenu';
import useKeyboardWalking from '../../hooks/useKeyboardWalking/useKeyboardWalking';
import { renderHook } from '@testing-library/react-hooks';

describe('<GenresMenu />', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <GenresMenu
        genres={[]}
        onGenreChange={() => {}}
        onGenreSubmit={() => {}}
        controlled={true}
      />,
    );
  });

  it('should change cursor index position on keydown', () => {
    // wrapper.find('input').prop('onKeyDown')!({ keyCode: 40 } as any);
    // const { result, waitForNextUpdate } = renderHook(() =>
    //   useKeyboardWalking({
    //     walkType: 'column',
    //     itemsLength: 5,
    //   }),
    // );
    // // await waitForNextUpdate();
    // expect(result.current.cursorPositionIndex).toBe(1);
  });
});
