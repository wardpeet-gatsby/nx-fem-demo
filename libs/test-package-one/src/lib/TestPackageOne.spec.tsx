import * as React from 'react';

import { render } from '@testing-library/react';

import { TestPackageOne } from './TestPackageOne';

describe('testPackageOne', () => {


  it('renders properly', () => {
    const { getByTestId } = render(<TestPackageOne />);

    expect(getByTestId('TestPackageOne')).toBeTruthy();
  });
});
