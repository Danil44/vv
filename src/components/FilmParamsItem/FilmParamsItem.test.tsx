import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import FilmParamsItem from './FilmParamsItem';
import { render } from '@testing-library/react';

describe('<FilmParamsItem />', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<FilmParamsItem name="" value="" />);
  });

  it('has not changed', () => expect(wrapper.html()).toMatchSnapshot());

  it('should render the params name and value', () => {
    const { getByTestId } = render(
      <FilmParamsItem name="Length" value="1hour 50minutes" />,
    );

    expect(getByTestId('option-name').textContent).toBe('Length');
    expect(getByTestId('option-value').textContent).toBe('1hour 50minutes');
  });
});
