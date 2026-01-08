import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// install react via vite
// npm create vite@latest

// Tahap Pertama install npm i @tanstack/react-query
// kenapa QueryClient pakai keyword new, karna QueryClient merupakan class, dimana suatu class jika ingin menggunakan class tersebut harus menggunakan keyword new

// QueryClientProvider tidak perlu new, karna QueryClientProvider itu merupakan JSX Element

// tambahkan configurasi
// buat variable object client
// import { QueryClient } from '@tanstack/react-query';

// const client = new QueryClient();

// bungkus aplikasi kita dengan QueryClientProvider
