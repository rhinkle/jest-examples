import { useEffect, useState } from 'react';
import TodoList, { Todo } from 'src/components/todo-list/todo-list';
import { getFakeTodos } from 'src/services/todo-api/todo-api';

export function TodoSection() {
  const [todos, setTodos] = useState<Todo[] | never[]>([]);

  useEffect(() => {
    getFakeTodos().then((resp) => {
      if (resp.length > 0) {
        setTodos(resp);
      }
    });
  }, []);

  const handleTodoClick = (id: string) => {
    console.log('Todo clicked', id);

    if (todos && todos.length <= 0) {
      return;
    }

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
