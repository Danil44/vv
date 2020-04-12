import React from 'react';
import { ShallowWrapper, shallow, mount, ReactWrapper } from 'enzyme';
import GenresMenuItem from './GenresMenuItem';
import { ReactComponent as RightArrowIcon } from '../../images/right-arrow.svg';

describe('<GenresMenuItem />', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<GenresMenuItem active={false} name="" />);
  });

  it('has not changed', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the genre name', () => {
    wrapper.setProps({ name: 'Comedy' });

    expect(wrapper.find('span').text()).toBe('Comedy');
  });

  it('should render RightArrow icon component if active prop is set to true', () => {
    wrapper.setProps({ active: true });

    expect(wrapper.containsMatchingElement(<RightArrowIcon />)).toEqual(true);
  });
});
