import App from './app';
import { render } from '@testing-library/react';

jest.mock('./fragments/todo', () => () => {
  return <div>Todo</div>;
});

describe('App', () => {
  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Jest Testing Examples')).toBeTruthy();
  });

  it('shouod do a thing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Todo')).toBeTruthy();
  });
});
