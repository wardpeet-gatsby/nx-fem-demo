import { testPackageMain } from './TestPackageMain';

describe('testPackageMain', () => {
  it('should work', () => {
    expect(testPackageMain()).toEqual('test-package-main');
  });
});
