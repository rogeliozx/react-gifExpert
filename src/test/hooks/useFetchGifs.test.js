import { useFetchGifs } from './../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test in custom hook', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('test')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('should return array img and loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('test')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
