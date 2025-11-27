import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      period: 'month',
      features: [
        '5 sessions per month',
        'Access to 3 subjects',
        'Basic support',
        'Session recordings'
      ],
      buttonText: 'Get Basic',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: 'month',
      features: [
        '15 sessions per month',
        'Access to all subjects',
        'Priority support',
        'Session recordings',
        'Progress tracking',
        'Mentoring sessions'
      ],
      buttonText: 'Get Pro',
      popular: true
    },
    {
      name: 'Premium',
      price: '$29.99',
      period: 'month',
      features: [
        'Unlimited sessions',
        'Access to all subjects',
        '24/7 premium support',
        'Session recordings',
        'Advanced progress tracking',
        '1-on-1 mentoring',
        'Custom learning plans'
      ],
      buttonText: 'Get Premium',
      popular: false
    }
  ];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Choose Your Plan</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem' }}>
        Select the perfect plan for your learning journey
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              border: plan.popular ? '2px solid #007bff' : '1px solid #ddd',
              borderRadius: '8px',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative',
              backgroundColor: plan.popular ? '#f8f9ff' : 'white'
            }}
          >
            {plan.popular && (
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '0.25rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                Most Popular
              </div>
            )}
            <h2 style={{ marginBottom: '1rem' }}>{plan.name}</h2>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {plan.price}
            </div>
            <div style={{ marginBottom: '2rem', color: '#666' }}>per {plan.period}</div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} style={{ marginBottom: '0.5rem' }}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/auth/register"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: plan.popular ? '#007bff' : '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p>Need a custom plan? <Link to="/contact" style={{ color: '#007bff' }}>Contact us</Link> for enterprise solutions.</p>
      </div>
    </div>
  );
};

export default Pricing;
