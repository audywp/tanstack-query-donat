import { api } from '../../lib/api';
import type { ICreateTodosBody, IParamsGetTodos } from './type';

export const getTodos = async ({ limit, page }: IParamsGetTodos) => {
  const response = await api.get('/todos', {
    params: {
      limit,
      page,
    },
  });

  return response.data;
};

export const createTodo = async ({ completed, date, priority, title }: ICreateTodosBody) => {
  const response = await api.post('/todos', {
    completed,
    date,
    title,
    priority,
  });

  return response.data;
};
