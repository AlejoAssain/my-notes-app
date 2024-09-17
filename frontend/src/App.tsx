import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { Loading } from './components/Loading';
import { Navbar } from './components/Navbar';
import { defaultTheme } from './themes';
import { NotesPage, LoginPage } from './pages';
import { useSession } from './contexts';

function App() {
  const { session, loading } = useSession();

  return (
    <ThemeProvider theme={defaultTheme}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                session ? <NotesPage /> : <Navigate replace to="/login" />
              }
            />
            <Route
              path="/login"
              element={session ? <Navigate replace to="/" /> : <LoginPage />}
            />
          </Routes>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
