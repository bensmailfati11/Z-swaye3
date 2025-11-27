import React from 'react';
import Calendar from '../../components/Calendar';

const Dashboard: React.FC = () => {
  // Mock data for upcoming sessions
  const upcomingSessions = [
    { id: 1, student: 'Ahmed', subject: 'Mathematics', time: '2023-10-15 14:00', branch: 'math-a', classLevel: '1st year' },
    { id: 2, student: 'Fatima', subject: 'Physics', time: '2023-10-16 10:00', branch: 'phys', classLevel: '2nd year' },
    { id: 3, student: 'Omar', subject: 'Chemistry', time: '2023-10-17 16:00', branch: 'exp', classLevel: '1st year' },
  ];

  // Mock data for statistics
  const stats = {
    totalStudents: 45,
    totalSessions: 120,
    upcomingSessions: 8,
    averageRating: 4.6,
  };

  // Mock data for students
  const students = [
    { id: 1, name: 'Ahmed', subject: 'Mathematics', sessions: 5 },
    { id: 2, name: 'Fatima', subject: 'Physics', sessions: 3 },
    { id: 3, name: 'Omar', subject: 'Chemistry', sessions: 7 },
    { id: 4, name: 'Aisha', subject: 'Biology', sessions: 4 },
  ];



  return (
    <div style={{ padding: '2rem' }}>
      <h1>Teacher Dashboard</h1>

      {/* Statistics Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <h3>Total Students</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalStudents}</p>
        </div>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <h3>Total Sessions</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalSessions}</p>
        </div>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <h3>Upcoming Sessions</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.upcomingSessions}</p>
        </div>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <h3>Average Rating</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.averageRating} ⭐</p>
        </div>
      </div>

      {/* Upcoming Sessions Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Upcoming Sessions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {upcomingSessions.map(session => (
            <div key={session.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
              <h3>{session.student} - {session.subject}</h3>
              <p>Time: {session.time}</p>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
                Join Session
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Students Section */}
      <div>
        <h2>My Students</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
          {students.map(student => (
            <div key={student.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
              <h3>{student.name}</h3>
              <p>Subject: {student.subject}</p>
              <p>Sessions: {student.sessions}</p>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Session Management Section */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Session Management</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
            <h3>Create New Session</h3>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
              Schedule Session
            </button>
          </div>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
            <h3>Session Templates</h3>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
              Manage Templates
            </button>
          </div>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
            <h3>Session Reports</h3>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
              View Reports
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Session Calendar</h2>
        <Calendar sessions={upcomingSessions} />
      </div>
    </div>
  );
};

export default Dashboard;
