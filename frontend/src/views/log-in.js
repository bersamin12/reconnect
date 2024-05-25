import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './log-in.css';

const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        history.push('/home');  // Redirect to a protected route or dashboard
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="log-in-container">
      <Helmet>
        <title>Log-in - ServeQuest</title>
        <meta property="og:title" content="Log-in - ServeQuest" />
      </Helmet>
      <span className="log-in-text">
        <span>ServeQuest</span>
      </span>
      <div className="log-in-opening-page1">
        <span className="log-in-text2">ServeQuest</span>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="log-in-textinput1 input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className="log-in-textinput input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" className="log-in-button button" onClick={handleLogin}>
          <span>
            <span>Log in</span>
            <br></br>
          </span>
        </button>
        {errorMessage && <p className="log-in-error">{errorMessage}</p>}
        <span className="log-in-text6">
          <span>I forgot my password</span>
        </span>
      </div>
    </div>
  );
};

export default LogIn;
