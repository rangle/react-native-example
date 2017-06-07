/*eslint-disable */
describe('Home suite', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a home view', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });
});
