import React from 'react';
import LoginForm from '@modules/auth/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Login to Your Account</h1>
      <LoginForm />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: '#f0f2f5',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
};

export default LoginPage;
