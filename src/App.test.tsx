import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Home from './pages/Home/Home';

describe('<App />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it('it has not changed', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('it should render the Home Component', () => {
    expect(wrapper.containsMatchingElement(<Home />)).toEqual(true);
  });
});
