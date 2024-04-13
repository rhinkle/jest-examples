import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoSection } from './todo';

describe('Todo Fragment', () => {
  it('should move a clicked todo to the completed list', () => {
    const user = userEvent.setup();
    const { getAllByRole, getByTestId } = render(<TodoSection />);

    waitFor(() => {
      const listItems = getAllByRole('listitem');
      user.click(listItems[0]);
      const completedList = getByTestId('completedTodo');
      expect(completedList.childElementCount).toBe(1);
    });
  });
});
