import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { NotesPage } from '#notes/NotesPage.tsx';
import { Navbar } from '#components/index.ts';
import { useSession } from './contexts/SessionContext';
import { LoginPage } from '#pages/Login/LoginPage.tsx';
import { defaultTheme } from './themes/default.theme';

function App() {
  const { session } = useSession();

  return(
    <>
      <ThemeProvider theme={defaultTheme}>
        <Navbar />
        <Routes>
          <Route 
            path='/'
            element={ session ? <NotesPage /> : <Navigate replace to='/login' /> }
          />
          <Route 
            path='/login'
            element={ session ? <Navigate replace to='/' /> : <LoginPage /> }
          />

        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App;
