import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

import { SessionModel } from '../models';
import { getCurrentUser, login } from '../services/auth.service.ts';


interface SessionProviderProps {
  children: ReactNode;
}

interface ISessionContext {
  session: SessionModel | null;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
  loading: boolean;
  error: string | null;
}

const SessionContext = createContext<ISessionContext | undefined>(undefined);

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<SessionModel | null>(null);

  const setTokenCookie = (token: string) => {
    Cookies.set('token', token, { sameSite: 'lax' });
  };

  const removeTokenCookie = () => {
    Cookies.remove('token');
  };

  const setErrorMessage = (e: unknown) => {
    if (axios.isAxiosError(e)) {
      if (e.response) {
        setError(e.response?.data.message);
      } else {
        setError('Unknown error occurred!');
      }
    } else {
      setError(e instanceof Error ? e.message : 'Unknown error occurred!');
    }
  };

  const loginUser = async (username: string, password: string) => {
    setLoading(true);

    try {
      const newSession = await login(username, password);
      setSession(newSession);
      setTokenCookie(newSession.token);
    } catch (e) {
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    removeTokenCookie();
    setSession(null);
    setError(null)
  };

  const getSessionFromCookie = async () => {
    setLoading(true);
    const token = Cookies.get('token');

    if (token) {
      try {
        const user = await getCurrentUser(token)
        setSession({
          token: token,
          user: user,
        });
      } catch (e) {
        setErrorMessage(e);
        setSession(null);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    getSessionFromCookie();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session: session,
        loginUser: loginUser,
        logoutUser: logoutUser,
        loading,
        error,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error('useSession must be used inside SessionProvider');
  return context;
};
