import axios from 'axios';
import { getTodos } from './todo-api';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Todo API', () => {
  it('should call axios.get with the correct URL', async () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    const id = 1;

    await getTodos(id);

    expect(mockAxios.get).toHaveBeenCalledWith(`/todos/${id}`);
  });

  it('should fail to get todos and return an error', async () => {
    const error = new Error('Failed to get todos');
    mockAxios.get.mockRejectedValue(error);
    const id = 1;

    const result = await getTodos(id);

    expect(result).toBe(error);
  });
});
