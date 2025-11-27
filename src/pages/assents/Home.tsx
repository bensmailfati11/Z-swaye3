import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#f8f9fa',
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Z-Sway3</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Connect with expert teachers and accelerate your learning journey. Personalized education at your fingertips.
        </p>
        <div>
          <Link to="/auth/register" style={{
            padding: '1rem 2rem',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            marginRight: '1rem',
            display: 'inline-block'
          }}>
            Get Started
          </Link>
          <Link to="/about" style={{
            padding: '1rem 2rem',
            backgroundColor: 'transparent',
            color: 'white',
            textDecoration: 'none',
            border: '2px solid white',
            borderRadius: '4px',
            display: 'inline-block'
          }}>
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Z-Sway3?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Expert Teachers</h3>
            <p>Learn from verified professionals with years of experience in their fields.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Flexible Scheduling</h3>
            <p>Book sessions at times that work best for you, 24/7 availability.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Interactive Learning</h3>
            <p>Engage in live video sessions with real-time collaboration tools.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Progress Tracking</h3>
            <p>Monitor your learning progress with detailed analytics and reports.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of students already improving their skills with Z-Sway3.</p>
        <Link to="/auth/register" style={{
          padding: '1rem 2rem',
          backgroundColor: '#28a745',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          marginTop: '1rem'
        }}>
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
