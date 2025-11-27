import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import TeacherCard from '../../components/TeacherCard';

const TeachersList: React.FC = () => {
  const { user } = useAuth();

  // Mock data for teachers
  const teachers = [
    { id: 1, name: 'Dr. Ahmed', subjects: ['Math', 'Physics'], rating: 4.5, sessions: 25, branch: 'math-a', classLevel: '1st year' },
    { id: 2, name: 'Dr. Ahmed', subjects: ['Math', 'SVT'], rating: 4.3, sessions: 22, branch: 'math-b', classLevel: '2nd year' },
    { id: 3, name: 'Ms. Fatima', subjects: ['Physics', 'Chemistry'], rating: 4.8, sessions: 30, branch: 'phys', classLevel: '1st year' },
    { id: 4, name: 'Mr. Omar', subjects: ['Chemistry', 'Biology'], rating: 4.2, sessions: 20, branch: 'exp', classLevel: '2nd year' },
    { id: 5, name: 'Dr. Aisha', subjects: ['Biology', 'SVT'], rating: 4.7, sessions: 28, branch: 'svt', classLevel: '1st year' },
    { id: 6, name: 'Mr. Hassan', subjects: ['Economics', 'Management'], rating: 4.4, sessions: 18, branch: 'eco', classLevel: '2nd year' },
    { id: 7, name: 'Ms. Leila', subjects: ['Management', 'Accounting'], rating: 4.6, sessions: 24, branch: 'gest', classLevel: '1st year' },
    { id: 8, name: 'Dr. Youssef', subjects: ['Electrical Engineering', 'Physics'], rating: 4.5, sessions: 21, branch: 'elec', classLevel: '2nd year' },
    { id: 9, name: 'Mr. Karim', subjects: ['Mechanical Engineering', 'Math'], rating: 4.3, sessions: 19, branch: 'meca', classLevel: '1st year' },
    { id: 10, name: 'Dr. Nadia', subjects: ['Literature', 'History-Geo', 'Français'], rating: 4.8, sessions: 26, branch: 'lettres-hum', classLevel: '2nd year' },
    { id: 11, name: 'Ms. Sara', subjects: ['Languages', 'Anglais', 'Français'], rating: 4.7, sessions: 23, branch: 'lettres-lang', classLevel: '1st year' },
  ];

  // Filter teachers by branch and matching subjects if user.subjects exists
  const filteredTeachers = teachers.filter(teacher => {
    const branchMatch = teacher.branch === user?.branch;
    const subjectMatch = user?.subjects ? teacher.subjects.some(sub => user.subjects?.includes(sub)) : true;
    return branchMatch && subjectMatch;
  });

  const getBranchName = (branch: string) => {
    switch (branch) {
      case 'math-a': return 'Sciences Mathématiques A';
      case 'math-b': return 'Sciences Mathématiques B';
      case 'exp': return 'Sciences Expérimentales';
      case 'phys': return 'Sciences Physiques';
      case 'svt': return 'Sciences de la Vie et de la Terre (SVT)';
      case 'eco': return 'Sciences Économiques';
      case 'gest': return 'Sciences de Gestion / Gestion Comptable';
      case 'elec': return 'Sciences et Technologies Électriques';
      case 'meca': return 'Sciences et Technologies Mécaniques';
      case 'lettres-hum': return 'Lettres et Sciences Humaines / Lettres';
      case 'lettres-lang': return 'Lettres (Langues)';
      default: return branch;
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Teachers List</h1>
      <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Your Information</h2>
        <p><strong>Branch:</strong> {user?.branch ? getBranchName(user.branch) : 'Not selected'}</p>
        <p><strong>Subjects:</strong> {user?.subjects ? user.subjects.join(', ') : 'Not selected'}</p>
        <p><strong>Role:</strong> Student</p>
      </div>
      <h2>Available Teachers ({filteredTeachers.length})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {filteredTeachers.map(teacher => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
