import { testPackageOne } from './TestPackageOne';

describe('testPackageOne', () => {
  it('should work', () => {
    expect(testPackageOne()).toEqual('test-package-one');
  });
});
