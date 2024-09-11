import { FaNoteSticky } from 'react-icons/fa6';

import { LogoContainer } from './Logo.styles.ts';

export const Logo = () => {
  return (
    <LogoContainer>
      Notes App
      <FaNoteSticky size="25px" />
    </LogoContainer>
  );
};
