import * as React from 'react';

import { render } from '@testing-library/react';

import { TestPackageTwo } from './TestPackageTwo';

describe('testPackageTwo', () => {


  it('renders properly', () => {
    const { getByTestId } = render(<TestPackageTwo />);

    expect(getByTestId('TestPackageTwo')).toBeTruthy();
  });
});
