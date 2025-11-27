import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderLinks = () => {
    if (!user) return null;

    const linkStyle = {
      display: 'block',
      padding: '0.75rem 1rem',
      marginBottom: '0.5rem',
      textDecoration: 'none',
      color: '#333',
      borderRadius: '4px',
      transition: 'background-color 0.2s',
      fontSize: '0.9rem',
      fontWeight: '500'
    };

    switch (user.role) {
      case 'admin':
        return (
          <>
            <Link to="/admin/dashboard" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Dashboard</Link>
            <Link to="/admin/analytics" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Analytics</Link>
            <Link to="/admin/teachers-management" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Teachers Management</Link>
            <Link to="/admin/users-management" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Users Management</Link>
            <Link to="/admin/sessions-monitor" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Sessions Monitor</Link>
            <Link to="/admin/sos-control" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>SOS Control</Link>
            <Link to="/admin/replacement-hub" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Replacement Hub</Link>
            <Link to="/admin/branch-subjects-editor" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Branch Subjects Editor</Link>
          </>
        );
      case 'student':
        return (
          <>
            <Link to="/student/dashboard" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Dashboard</Link>
            <Link to="/student/my-subjects" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>My Subjects</Link>
            <Link to="/student/my-packs" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>My Packs</Link>
            <Link to="/student/sessions" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Sessions</Link>
            <Link to="/student/teachers-list" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Teachers List</Link>
            <Link to="/student/sos" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>SOS</Link>
          </>
        );
      case 'teacher':
        return (
          <>
            <Link to="/teacher/dashboard" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Dashboard</Link>
            <Link to="/teacher/my-students" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>My Students</Link>
            <Link to="/teacher/planning" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Planning</Link>
            <Link to="/teacher/sessions-list" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Sessions List</Link>
            <Link to="/teacher/create-session" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Create Session</Link>
            <Link to="/teacher/replacement-requests" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Replacement Requests</Link>
            <Link to="/teacher/sos-alerts" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0d0d0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>SOS Alerts</Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      width: isCollapsed ? '60px' : '200px',
      backgroundColor: '#e0e0e0',
      padding: '1rem',
      height: '100vh',
      transition: 'width 0.3s ease',
      overflow: 'hidden'
    }}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}
      >
        {isCollapsed ? '→' : '←'}
      </button>
      {!isCollapsed && renderLinks()}
    </div>
  );
};

export default Sidebar;
