import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const OnboardingSubjects: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const { login } = useAuth();
  const navigate = useNavigate();

  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Geology',
    'Computer Science',
    'Philosophy',
    'Arabic Literature',
    'French',
    'English',
    'History',
    'Geography',
    'Islamic Education',
    'Civics'
  ];

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSubjects.length > 0) {
      // Store subjects in auth context and navigate to dashboard
      login('teacher', selectedSubjects);
      navigate('/teacher/dashboard');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2>Choose Your Teaching Subjects</h2>
      <p>Select the subjects you teach:</p>

      <form onSubmit={handleSubmit}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {subjects.map(subject => (
            <label
              key={subject}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem',
                border: selectedSubjects.includes(subject) ? '2px solid #007bff' : '2px solid #ddd',
                borderRadius: '8px',
                backgroundColor: selectedSubjects.includes(subject) ? '#f8f9ff' : 'white',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <input
                type="checkbox"
                checked={selectedSubjects.includes(subject)}
                onChange={() => handleSubjectToggle(subject)}
                style={{ marginRight: '0.5rem' }}
              />
              {subject}
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={selectedSubjects.length === 0}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: selectedSubjects.length > 0 ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: selectedSubjects.length > 0 ? 'pointer' : 'not-allowed'
          }}
        >
          Complete Setup
        </button>
      </form>
    </div>
  );
};

export default OnboardingSubjects;
