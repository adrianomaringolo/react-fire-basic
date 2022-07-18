import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Acesse sua conta">
      <LoginForm onSuccess={() => navigate('/app')} />
    </Layout>
  );
};
