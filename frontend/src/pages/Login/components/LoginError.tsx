import { useSession } from '../../../contexts';
import { LoginErrorContainer } from './styled-components';

export const LoginError = () => {
  const { error } = useSession();

  return (
    <LoginErrorContainer>
      { error }
    </LoginErrorContainer>
  )
}