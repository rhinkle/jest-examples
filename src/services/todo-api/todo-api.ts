import axios from 'axios';

async function getTodos(id: number) {
  try {
    const response = await axios.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export { getTodos };
