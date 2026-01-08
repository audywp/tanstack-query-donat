import { useMutation } from '@tanstack/react-query';
import { registerApi } from './api';
import type { AxiosError } from 'axios';
import type { IRegisterBody } from './type';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation<string, AxiosError, IRegisterBody>({
    mutationFn: (body) => registerApi(body),
    onSuccess: () => {
      navigate('/login');
      toast.success('Register Berhasil');
    },
    onError: () => {
      toast.error('Register gagal');
    },
  });
};
