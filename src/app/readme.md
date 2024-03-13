# Child Component Mocking

I am on the fence with child component mocking. Mocking child components could be a an option if you are testing a component with many or expensive child components. However, I would recommend against mocking child components. Mocking child components can lead to brittle tests. If you are testing a component with many child components, you may want to consider breaking the component into smaller components. I recommend testing child components in isolation and testing the parent component with the child components.

```typescript
jest.mock('./fragments/todo', () => {
  return {
    esmodule: true,
    TodoSection: () => {
      return <div data-testid="todo-section">Todo Section</div>;
    },
  };
});
```

Below is an example of mocking a child component with props and dynamic data. This mock loops over data. **I would not recommend mocking child components** with dynamic data and asserting on component interactions in the mocked component. This can lead to brittle tests. If the real child component changes and the mock does not in the parent, the test will still pass creating a false postive. See example below.

```typescript
jest.mock('./fragments/todo', () => {
  return {
    esmodule: true,
    TodoSection: (data) => {
      return (
        <div data-testid="todo-section">
            {data.todos.map((todo) => (
                <div key={todo.id} data-testid="todo">
                {todo.title}
                </div>
            ))}
        </div>
        );
    },
  };
});

....
it('should render todos', () => {
  const { getByTestId } = render(<TodoApp />);
  expect(getByTestId('todo-section')).toBeInTheDocument();
  expect(getByTestId('todo')).toBeInTheDocument();
});

```
