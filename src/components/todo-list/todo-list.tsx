import { SyntheticEvent } from 'react';
import './todo-list.css';

export interface Todo {
  title: string;
  description: string;
  completed: boolean;
  id: string;
}

export interface TodoListProps {
  todos: Todo[];
  onTodoClick?: (id: string) => void;
}

export function TodoList(props: TodoListProps) {
  const completedTodos = props.todos.filter((todo) => todo.completed);
  const uncompletedTodos = props.todos.filter((todo) => !todo.completed);

  const formatList = (list: Todo[]) => {
    return list.map((todo) => {
      return (
        <li onClick={handleTodoClick} id={todo.id} key={todo.id}>
          {todo.title}
        </li>
      );
    });
  };

  const handleTodoClick = (
    event: SyntheticEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (props.onTodoClick) {
      props.onTodoClick(event.currentTarget.id);
    }
  };

  return (
    <>
      <h2>Todos</h2>
      <div>
        <ul data-testid="uncompletedTodos">{formatList(uncompletedTodos)}</ul>
        <h3>Completed</h3>
        <ul data-testid="completedTodo">{formatList(completedTodos)}</ul>
      </div>
    </>
  );
}

export default TodoList;
