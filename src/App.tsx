import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/login/LoginPage';
import { RegisterPage } from './features/auth/register/RegisterPage';
import { TodosPage } from './features/todos/TodosPage';

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<TodosPage />}
      />

      <Route
        path='/login'
        element={<LoginPage />}
      />

      <Route
        path='/register'
        element={<RegisterPage />}
      />
    </Routes>
  );
}
