import { FaNoteSticky } from 'react-icons/fa6'

import { LogoContainer, LogoutButton, NavbarContainer } from './styled-components/containers'
import { useSession } from '#contexts/SessionContext.js'

export const Navbar = () => {
  const { logoutUser, session } = useSession()

  return (
    <NavbarContainer>
      <LogoContainer>
        Notes App 
        <FaNoteSticky size="25px" />
      </LogoContainer>
      { session ? 
        <LogoutButton
          onClick={logoutUser}
        >
          Logout
        </LogoutButton>
        : null
      }
      
    </NavbarContainer>
  )
}