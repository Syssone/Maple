import { render } from '@testing-library/react';

import AdminAdmin from './admin-admin';

describe('AdminAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminAdmin />);
    expect(baseElement).toBeTruthy();
  });
});
