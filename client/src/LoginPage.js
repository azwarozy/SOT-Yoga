import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic, e.g., make an API call 
        // using the entered username and password 
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password: <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/home">Login</Link>
          </div>
        </form>
      </div>
    </div>
    );
};

export default LoginPage;