import * as React from 'react';
import { useRouter } from 'next/router';
import { publicFetch } from '../util/fetch';
import { AuthenticateResult } from '@lucid/identity-api-interfaces';

interface AuthState
  extends Partial<Omit<AuthenticateResult, 'message' | 'userInfo'>> {
  userInfo?: AuthenticateResult['userInfo'] | null;
}

interface AuthContextValue {
  authState: AuthState;
  logout: () => Promise<void>;
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
  setAuthState: (authState: AuthState) => void;
}

const AuthContext = React.createContext<undefined | AuthContextValue>(
  undefined,
);
AuthContext.displayName = 'AuthContext';
const { Provider } = AuthContext;

const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();

  const [authState, setAuthState] = React.useState<AuthState>({});

  const setAuthInfo = ({ userInfo, expiresAt }: AuthState) => {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.localStorage.setItem('expiresAt', String(expiresAt));

    setAuthState({
      userInfo,
      expiresAt,
    });
  };

  const logout = async () => {
    try {
      await publicFetch('logout', { method: 'DELETE' });
      window.localStorage.removeItem('userInfo');
      window.localStorage.removeItem('expiresAt');
      setAuthState({ userInfo: null });
      router.push('/login').catch(console.error);
    } catch (err) {
      return err;
    }
  };

  const isAuthenticated = () => {
    // if (!authState.expiresAt) {
    //   return false;
    // }
    // return (
    //   new Date().getTime() / 1000 < authState.expiresAt
    // );
    return true;
  };

  const isAdmin = () => {
    return authState.userInfo?.role === 'admin';
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: setAuthInfo,
        logout,
        isAuthenticated,
        isAdmin,
      }}>
      {children}
    </Provider>
  );
};

function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
