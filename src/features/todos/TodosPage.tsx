import { useState } from 'react';
import { useCreateTodo, useGetInfiniteTodos, useGetTodos } from './hooks';

export function TodosPage() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetInfiniteTodos({
    limit: 4,
  });

  const { data: dataTodos } = useGetTodos({
    limit: 5,
    page: 1,
  });
  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState('');

  const { mutate } = useCreateTodo();

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const onCreateTodo = () => {
    mutate({
      title,
      date: new Date(),
      priority: 'LOW',
      completed: false,
    });

    setIsShow(false);
  };

  if (isLoading) return <p>Loading ....</p>;

  return (
    <main>
      <p>halaman todos</p>

      <button
        onClick={toggleShow}
        className='border border-white rounded-md bg-blue-200 p-4 text-black'
      >
        <p>Create Todos</p>
      </button>

      {isShow ? (
        <section className='flex flex-col mt-8'>
          <label>Masukan Nama Todo</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Judul'
          />
          <button
            className='border border-white rounded-md bg-blue-200 p-4 text-black my-4'
            onClick={onCreateTodo}
          >
            Buat todo
          </button>
        </section>
      ) : null}

      <ul>
        {data?.pages.map((page) => {
          return page.data.todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          });
        })}
      </ul>

      {/* <ul>
        {dataTodos?.data.todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul> */}
      {hasNextPage ? <button onClick={() => fetchNextPage()}>Load More</button> : null}
    </main>
  );
}
