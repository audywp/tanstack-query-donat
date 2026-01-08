import { api } from '../../../lib/api';
import type { IRegisterBody } from './type';

export const registerApi = async ({ name, email, password }: IRegisterBody) => {
  const response = await api.post('/auth/register', {
    name,
    email,
    password,
  });

  return response.data;
};
