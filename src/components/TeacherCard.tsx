import React from 'react';

interface Teacher {
  id: number;
  name: string;
  subjects: string[];
  rating: number;
  sessions: number;
  branch: string;
  classLevel: string;
}

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', margin: '0.5rem' }}>
      <h3>{teacher.name}</h3>
      <p>Subjects: {teacher.subjects.join(', ')}</p>
      <p>Branch: {teacher.branch === 'math' ? 'Mathematics' : teacher.branch === 'pc' ? 'Physics-Chemistry' : 'Life Sciences'}</p>
      <p>Class: {teacher.classLevel}</p>
      <p>Rating: {teacher.rating} ⭐</p>
      <p>Sessions: {teacher.sessions}</p>
      <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        View Profile
      </button>
    </div>
  );
};

export default TeacherCard;
