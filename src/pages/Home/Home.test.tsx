import React from 'react';
import Home from './Home';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Header from '../../components/Header/Header';
// import Films from '../../components/Films';

describe('<Home/>', () => {
  let wrapper: ReactWrapper;
  let useEffect: jest.SpyInstance;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect();

    wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  });

  it('has not changed', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the Header component', () => {
    expect(wrapper.containsMatchingElement(<Header shift={false} />)).toEqual(
      true,
    );
  });
});
