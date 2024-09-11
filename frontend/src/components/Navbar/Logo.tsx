import { FaNoteSticky } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import { LogoContainer } from './Logo.styles.ts';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoContainer onClick={() => navigate('/')}>
      Notes App
      <FaNoteSticky size="25px" />
    </LogoContainer>
  );
};
