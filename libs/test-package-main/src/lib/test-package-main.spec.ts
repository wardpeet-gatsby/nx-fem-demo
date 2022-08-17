import { testPackageMain } from './test-package-main';

describe('testPackageMain', () => {
  it('should work', () => {
    expect(testPackageMain()).toEqual('test-package-main');
  });
});
