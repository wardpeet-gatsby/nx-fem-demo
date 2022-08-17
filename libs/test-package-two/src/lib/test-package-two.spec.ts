import { testPackageTwo } from './test-package-two';

describe('testPackageTwo', () => {
  it('should work', () => {
    expect(testPackageTwo()).toEqual('test-package-two');
  });
});
