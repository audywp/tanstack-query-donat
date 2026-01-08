export type TPriority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface ICreateTodosBody {
  title: string;
  completed: boolean;
  date: Date;
  priority: TPriority;
}

export interface ICreateTodoResponse {
  id: string;
  title: string;
  completed: boolean;
  date: Date;
  priority: TPriority;
}

export interface Todo {
  completed: boolean;
  createdAt: Date;
  date: Date;
  id: string;
  priority: TPriority;
  updatedAt: Date;
  userId: string;
  title: string;
}

export interface IDataTodos {
  hasNextPage: boolean;
  nextPage: number;
  todos: Todo[];
  totalTodos: number;
}

export interface IGetTodosResponse {
  data: IDataTodos;
  message: string;
  success: boolean;
}

export interface IParamsGetTodos {
  limit?: number;
  page?: number;
}
