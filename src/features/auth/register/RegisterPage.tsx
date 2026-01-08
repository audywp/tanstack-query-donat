import { useState } from 'react';

import { useRegister } from './hooks';

export function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useRegister();

  const handleName = (text: string) => {
    setName(text);
  };

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({ name, email, password });
  };

  return (
    <main>
      <div>
        <p>Halaman Register</p>
      </div>

      {/* Form Section */}
      <section>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4 '>
            <label>Nama</label>
            <input
              className='border border-white'
              placeholder='Masukan Nama Anda'
              onChange={(e) => handleName(e.target.value)}
            />
          </div>

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
