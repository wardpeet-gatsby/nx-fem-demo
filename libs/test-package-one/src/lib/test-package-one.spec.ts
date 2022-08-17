import { testPackageOne } from './test-package-one';

describe('testPackageOne', () => {
  it('should work', () => {
    expect(testPackageOne()).toEqual('test-package-one');
  });
});
