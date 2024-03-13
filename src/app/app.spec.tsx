import { render } from '@testing-library/react';
import App from './app';

jest.mock('./fragments/todo', () => {
  return {
    esmodule: true,
    TodoSection: () => {
      return <div data-testid="todo-section">Todo Section</div>;
    },
  };
});

describe('App', () => {
  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Jest Testing Examples')).toBeTruthy();
    expect(getByText('Todo Section')).toBeTruthy();
  });
});
