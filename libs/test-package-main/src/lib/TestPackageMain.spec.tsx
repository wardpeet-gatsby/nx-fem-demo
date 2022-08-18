import * as React from 'react';

import { render } from '@testing-library/react';

import { TestPackageMain } from './TestPackageMain';

describe('testPackageMain', () => {


  it('renders properly', () => {
    const { getByTestId } = render(<TestPackageMain />);

    expect(getByTestId('TestPackageMain')).toBeTruthy();
  });
});
