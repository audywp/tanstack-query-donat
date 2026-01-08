import { useState } from 'react';
import { useLogin } from './hooks';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useLogin();

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };
  return (
    <main>
      <div>
        <p>Halaman Login</p>
      </div>

      <section>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4'>
            <label>email</label>
            <input
              placeholder='Masukan Nama Anda'
              className='border border-white'
              type='email'
              onChange={(e) => handleEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label>password</label>
            <input
              className='border border-white'
              placeholder='Masukan Nama Anda'
              type='password'
              onChange={(e) => handlePassword(e.target.value)}
            />
          </div>
          <input type='submit' />
        </form>
      </section>
    </main>
  );
}
