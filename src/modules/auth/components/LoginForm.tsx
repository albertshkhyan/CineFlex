import React, { useState } from 'react';
import { useLoginMutation } from '@modules/auth/api/auth.api';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({ email, password }).unwrap();
      console.log('Logged in successfully', response);
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
