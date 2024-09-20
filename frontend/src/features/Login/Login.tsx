import { LoginWrapper } from './Login.styles.ts';
import { LoginError } from './components/LoginError';
import { LoginForm } from './components/LoginForm';


export const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
      <LoginError />
    </LoginWrapper>
  );
};
