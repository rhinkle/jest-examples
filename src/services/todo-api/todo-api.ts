import axios from 'axios';
import { Todo } from 'src/components/todo-list/todo-list';

async function getTodos(id: number) {
  try {
    const response = await axios.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getFakeTodos(): Promise<Todo[]> {
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

  return Promise.resolve(defaultTodos);
}

export { getTodos, getFakeTodos };
