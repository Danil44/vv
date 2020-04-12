import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import FilmsListItem from './FilmsListItem';

describe('<FilmsListItem />', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<FilmsListItem name="" />);
  });

  it('has not changed', () => expect(wrapper.html()).toMatchSnapshot());

  it('should render image with provided name props in the alt attribute if the prop imageSrc is present', () => {
    wrapper.setProps({ imageSrc: 'src', name: 'Film' });

    expect(wrapper.find('img').exists()).toEqual(true);
    expect(wrapper.find('img').props().alt).toBe("Film's poster");
  });
});
