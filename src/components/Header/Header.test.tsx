import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { render } from '@testing-library/react';
import Header from './Header';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('<Header />', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<Header shift={false} />);
  });

  it('has not changed', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("shifts left if 'shift' prop is set to true", () => {
    const { getByTestId } = render(<Header shift={false} />);
    expect(getByTestId('header')).toHaveStyleRule('transform', 'translateX(0)');

    wrapper.setProps({ shift: true });

    expect(wrapper.find('header')).toHaveStyleRule(
      'transform',
      'translateX(-70%)',
    );
  });
});
