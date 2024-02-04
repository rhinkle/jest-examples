import axios from 'axios';

// This is an example of a service that uses an hard external dependency, axios in this case.
// The service axios calls could also be cconsidered as a hard dependency, As in you cant control the response of server.
// To tests this service you would want to look into contract testing or pact testing.

// These functions are not tested directly, but is tested indirectly by the components that use it.
async function getTodos(id: number) {
  try {
    const response = await axios.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function createTodo(todo: any) {
  try {
    const response = await axios.post('/todos', todo);
    return response.data;
  } catch (error) {
    return error;
  }
}

export { getTodos, createTodo };
