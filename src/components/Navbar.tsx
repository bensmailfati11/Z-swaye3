import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>About</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Contact</Link>
        <Link to="/pricing" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Pricing</Link>
        {isAuthenticated ? (
          <>
            <span style={{ margin: '0 1rem' }}>Welcome, {user?.role}!</span>
            <button onClick={logout} style={{ margin: '0 1rem', padding: '0.5rem', backgroundColor: '#dc3545', color: 'white', border: 'none' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth/login" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Login</Link>
            <Link to="/auth/register" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
