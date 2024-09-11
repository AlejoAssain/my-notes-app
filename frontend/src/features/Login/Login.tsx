import { LoginForm } from './components';
import { LoginError } from './components/LoginError.tsx';
import { LoginWrapper } from './components/styled-components';

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
      <LoginError />
    </LoginWrapper>
  );
};
