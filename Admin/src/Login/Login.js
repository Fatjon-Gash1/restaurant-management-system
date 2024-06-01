import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loginStatus, setLoginStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://localhost:44365/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
        setLoginStatus('success');
        console.log('Login successful:', data);
      } else {
        setLoginStatus('error');
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginStatus('error');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      {loginStatus === 'success' && <p style={{ color: 'green' }}>Login successful!</p>}
      {loginStatus === 'error' && <p style={{ color: 'red' }}>Login failed. Please try again.</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', borderRadius: '3px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
