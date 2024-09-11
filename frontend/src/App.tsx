import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { defaultTheme } from './themes';
import { NotesPage, LoginPage } from './pages';
import { useSession } from './contexts';
import { Loading, Navbar } from './components';

// TODO - create reusable form components
// TODO - pass create and edit note form to reusable form
function App() {
  const { session, loading } = useSession();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Navbar />
        {
          loading ? <Loading /> :
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
        }
      </ThemeProvider>
    </>
  )
}

export default App;
