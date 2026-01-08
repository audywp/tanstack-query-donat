import { api } from '../../../lib/api';
import type { ILoginBody } from './type';

export const doLogin = async ({ email, password }: ILoginBody) => {
  const response = await api.post('auth/login', {
    email,
    password,
  });

  return response.data;
};
