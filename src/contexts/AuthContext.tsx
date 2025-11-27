import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { role: string; branch?: string; subjects?: string[]; classLevel?: string } | null;
  login: (role: string, details?: { branch?: string; subjects?: string[]; classLevel?: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ role: string; branch?: string; subjects?: string[]; classLevel?: string } | null>(null);

  const login = (role: string, details?: { branch?: string; subjects?: string[]; classLevel?: string }) => {
    setIsAuthenticated(true);
    setUser({ role, ...details });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
