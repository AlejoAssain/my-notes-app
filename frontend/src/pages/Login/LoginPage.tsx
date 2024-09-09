import { LoginForm } from './components';
import { LoginError } from './components/LoginError';
import { LoginPageWrapper } from './components/styled-components';

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <h2>Login!</h2>
      <LoginForm />
      <LoginError />
    </LoginPageWrapper>
  )
}