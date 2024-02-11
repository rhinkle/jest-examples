import { render, screen } from '@testing-library/react';

import TodoList from './todo-list';

describe('TodoList', () => {
  const defatulTodos = [
    {
      title: 'Todo 1',
      description: 'Description 1',
      completed: false,
      id: '1',
    },
    {
      title: 'Todo 2',
      description: 'Description 2',
      completed: false,
      id: '2',
    },
    {
      title: 'Todo 3',
      description: 'Description 3',
      completed: false,
      id: '3',
    },
  ];

  it('should render successfully', () => {
    const { baseElement } = render(<TodoList todos={defatulTodos} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a h1 with label', () => {
    const { getByText } = render(<TodoList todos={defatulTodos} />);
    expect(getByText('Todos')).toBeTruthy();
  });

  it('should have a list with three items when I pass in three items', () => {
    const { getAllByRole } = render(<TodoList todos={defatulTodos} />);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  it('should have one completed todo and 2 uncompleted todos', () => {
    const todos = [...defatulTodos];
    todos[0].completed = true;
    render(<TodoList todos={todos} />);
    const listItems = screen.getByTestId('completedTodo').childElementCount;
    expect(listItems).toBe(1);
  });
});
