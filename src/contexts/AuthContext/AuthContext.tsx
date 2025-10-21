import React from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  profile: null;
  setProfile: React.Dispatch<React.SetStateAction<null>>;
  reset: () => void;
};

const initialAuthContext: AuthContextType = {
  isAuthenticated: false,
  setIsAuthenticated: () => false,
  profile: null,
  setProfile: () => null,
  reset: () => null,
};

const AuthContext = React.createContext<AuthContextType>(initialAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(
    initialAuthContext.isAuthenticated
  );

  const [profile, setProfile] = React.useState<null>(
    initialAuthContext.profile
  );

  const reset = () => {
    setIsAuthenticated(false);
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
