import { useState } from 'react';
import TodoList from 'src/components/todo-list/todo-list';

export function TodoSection() {
  const defaultTodos = [
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

  const [todos, setTodos] = useState(defaultTodos);

  const handleTodoClick = (id: string) => {
    console.log('Todo clicked', id);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoList todos={todos} onTodoClick={handleTodoClick} />
    </div>
  );
}
