import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { TodoSection } from './todo';

describe('Todo Fragment', () => {
  it('should move a clicked todo to the completed list', () => {
    const { getAllByRole, getByTestId } = render(<TodoSection />);
    const listItems = getAllByRole('listitem');
    fireEvent.click(listItems[0]);
    const completedList = getByTestId('completedTodo');
    expect(completedList.childElementCount).toBe(1);
  });
});
