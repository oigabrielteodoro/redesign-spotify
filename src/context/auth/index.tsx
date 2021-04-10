import React, { createContext, ReactNode, useCallback, useState, useContext } from 'react';

import AuthContextDataDTO, { SignInValuesDTO } from './dtos/AuthContextDataDTO';

interface AuthState {
  token: string;
  authorize_external_url?: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextDataDTO>({} as AuthContextDataDTO);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = useCallback(async (credentials: SignInValuesDTO) => {
    console.log(credentials);
  }, []);

  const signOut = useCallback(async () => {
    console.log('Sign Out');
  }, []);

  const clearAuthorizeExternalUrl = useCallback(() => {
    setData(prevState => ({
      ...prevState,
      authorize_external_url: undefined,
    }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        authorize_external_url: data.authorize_external_url,
        isSigned: !!data.token,
        clearAuthorizeExternalUrl,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
