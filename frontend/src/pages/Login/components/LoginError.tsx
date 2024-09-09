import { useSession } from '#contexts/SessionContext.js';

import { LoginErrorContainer } from './styled-components';

export const LoginError = () => {
  const { error } = useSession();

  return (
    <LoginErrorContainer>
      { error }
    </LoginErrorContainer>
  )
}