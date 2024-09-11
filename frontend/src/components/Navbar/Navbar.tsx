import { useSession } from '../../contexts'
import { Button } from '../Button';
import { Logo } from './Logo.tsx';
import { NavbarContainer } from './Navbar.styles';

export const Navbar = () => {
  const { logoutUser, session } = useSession()

  return (
    <NavbarContainer>
      <Logo />
      { session ? 
        <Button color='warning' onClick={() => logoutUser()}>
          Logout
        </Button>
        : null
      }
    </NavbarContainer>
  )
}