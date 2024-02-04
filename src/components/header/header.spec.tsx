import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the logo', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Jest Testing Examples')).toBeTruthy();
  });

  it('should render the navigation', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('About')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
  });
});
