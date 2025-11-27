import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ChooseBranch: React.FC = () => {
  const [branch, setBranch] = useState('math');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login('student', { branch });
    navigate('/student/dashboard');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Choose Your Branch</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="branch">Branch:</label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="math-a">Sciences Mathématiques A</option>
            <option value="math-b">Sciences Mathématiques B</option>
            <option value="exp">Sciences Expérimentales</option>
            <option value="phys">Sciences Physiques</option>
            <option value="svt">Sciences de la Vie et de la Terre (SVT)</option>
            <option value="eco">Sciences Économiques</option>
            <option value="gest">Sciences de Gestion / Gestion Comptable</option>
            <option value="elec">Sciences et Technologies Électriques</option>
            <option value="meca">Sciences et Technologies Mécaniques</option>
            <option value="lettres-hum">Lettres et Sciences Humaines / Lettres</option>
            <option value="lettres-lang">Lettres (Langues)</option>
          </select>
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#28a745', color: 'white', border: 'none' }}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default ChooseBranch;
