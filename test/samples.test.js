import '../src/samples.js';

describe('Integration: samples.js', () => {
  test.concurrent('Error log', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    expect(consoleError).toHaveBeenCalledTimes(0);
  });
});
