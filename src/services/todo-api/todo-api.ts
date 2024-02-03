import axios from 'axios';

// This is an example of a service that uses an hard external dependency, axios in this case.
// The service axios calls could also be cconsidered as a hard dependency, As in you cant control the response of server.
// To tests this service you would want to look into contract testing or pact testing.

// These functions are not tested directly, but is tested indirectly by the components that use it.
function getTodos(id: number) {
  return axios
    .get(`/todos/${id}`)
    .then((response) => response.data)
    .catch((error) => error);
}

function createTodo(todo: any) {
  return axios
    .post('/todos', todo)
    .then((response) => response.data)
    .catch((error) => error);
}

export { getTodos, createTodo };
