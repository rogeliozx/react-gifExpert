import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import AddCategory from './../../components/AddCategory';

describe('Test AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  //esto se llama antes de cada prueba
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('should show render rigth', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should change textInput', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } });
    const valueInput = wrapper.find('input').get(0).props.value;
    expect(valueInput).toBe(value);
  });

  test('should no post the info whe is submited', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test('should call setCategories and cleant text box', () => {
    const value = 'Hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
