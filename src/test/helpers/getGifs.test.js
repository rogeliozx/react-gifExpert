import { getGif } from './../../helpers/getGifs';
describe('Test getGif Fetch', () => {
  test('should return 10 elemnts', async () => {
    const gifs = await getGif('One Punch');
    expect(gifs.length).toBe(10);
  });
  test('should return 10 elemnts', async () => {
    const gifs = await getGif('One Punch');
    expect(gifs.length).toBe(10);
  });
  test('should return 0 elemnts if dont set param', async () => {
    const gifs = await getGif('');
    expect(gifs.length).toBe(0);
  });
});
