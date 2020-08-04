import React from 'react';
import GifGrid from './../../components/GifGrid';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from './../../hooks/useFetchGifs';
jest.mock('./../../hooks/useFetchGifs');

describe('Test <GifGrid/>', () => {
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });
  const cetegory = 'One Punch';
  const wrapper = shallow(<GifGrid category={cetegory} />);
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should show items when load images useFetchGifs', () => {
    const cetegory = 'One Punch';
    const gifs = [
      {
        id: 'adfadsf',
        url: 'test.com',
        title: 'test',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={cetegory} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
