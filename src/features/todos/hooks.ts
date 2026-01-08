import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodo, getTodos } from './api';
import type { AxiosError } from 'axios';
import type { ICreateTodoResponse, ICreateTodosBody, IGetTodosResponse, IParamsGetTodos } from './type';
import { toast } from 'sonner';

export const useGetInfiniteTodos = (params: IParamsGetTodos) => {
  return useInfiniteQuery<IGetTodosResponse, AxiosError>({
    initialPageParam: 1,
    queryKey: ['infinity-todos', params],
    queryFn: ({ pageParam }) => getTodos({ ...params, page: pageParam as number }),
    getNextPageParam: (responseData) => {
      if (responseData.data.hasNextPage) return responseData.data.nextPage;
      else return undefined;
    },
  });
};

export const useGetTodos = (params: IParamsGetTodos) => {
  return useQuery<IGetTodosResponse, AxiosError>({
    queryKey: ['todos', params],
    queryFn: () => getTodos({ ...params }),
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation<ICreateTodoResponse, AxiosError, ICreateTodosBody>({
    mutationFn: (body) => {
      return createTodo(body);
    },
    onSuccess: () => {
      // di jalankan jika mutation berhasil
      toast.success('berhasil membuat todo');
    },

    onError: (err) => {
      console.log(err);
      // di jalankan jika mutation gagal
      toast.error('gagal membuat todo');
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos']);
      // di jalankan setalah proses mutation selsai
    },
  });
};
