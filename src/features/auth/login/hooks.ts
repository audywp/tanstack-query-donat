import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { ILoginBody, ILoginResponse } from './type';
import { doLogin } from './api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation<ILoginResponse, AxiosError, ILoginBody>({
    mutationFn: (body) => doLogin(body),
    onSuccess: (data) => {
      console.log(data, 'data');
      localStorage.setItem('token', data.data.token);
      navigate('/');
    },
    onError: () => {
      toast.error('Login gagal !!');
    },
  });
};
