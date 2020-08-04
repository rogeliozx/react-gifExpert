import React from 'react';
import GifGridItem from './../../components/GifGridItem';
import { shallow } from 'enzyme';
describe('Test GifGridItem', () => {
  const dataTest = {
    id: 'dadsf123fdss',
    title: 'test',
    url: 'test.com',
  };
  const wrapper = shallow(<GifGridItem {...dataTest} />);
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should have title in p', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(dataTest.title);
  });
  test('should have title and src in img', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(dataTest.url);
    expect(img.prop('alt')).toBe(dataTest.title);
  });
  test('should have classes in the div', () => {
    const div = wrapper.find('div');
    const divClass = 'card animate__animated animate__fadeInDown';
    expect(div.prop('className')).toBe(divClass);
    expect(div.prop('className').includes('animate__fadeInDown')).toBe(true);
  });
});
