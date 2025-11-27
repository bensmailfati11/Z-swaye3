import React from 'react';

interface Session {
  id: number;
  student: string;
  subject: string;
  time: string;
  branch: string;
  classLevel: string;
}

interface CalendarProps {
  sessions: Session[];
}

const Calendar: React.FC<CalendarProps> = ({ sessions }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getSessionsForDay = (day: number) => {
    return sessions.filter(session => {
      const sessionDate = new Date(session.time);
      return sessionDate.getDate() === day &&
             sessionDate.getMonth() === currentMonth &&
             sessionDate.getFullYear() === currentYear;
    });
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
      <h3>{monthNames[currentMonth]} {currentYear}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
        {dayNames.map(day => (
          <div key={day} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} style={{ minHeight: '60px' }}></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
          const daySessions = getSessionsForDay(day);
          return (
            <div key={day} style={{ border: '1px solid #eee', padding: '0.5rem', textAlign: 'center', minHeight: '60px' }}>
              <div style={{ fontWeight: 'bold' }}>{day}</div>
              {daySessions.map(session => (
                <div key={session.id} style={{ fontSize: '0.8rem', color: '#007bff', marginTop: '0.25rem' }}>
                  {session.subject}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
