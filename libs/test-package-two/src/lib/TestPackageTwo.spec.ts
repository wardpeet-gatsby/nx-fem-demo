import { testPackageTwo } from './TestPackageTwo';

describe('testPackageTwo', () => {
  it('should work', () => {
    expect(testPackageTwo()).toEqual('test-package-two');
  });
});
