import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './account-creation.css';

const AccountCreation = () => {
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignUp = async () => {
    const user = {
      person_name: personName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8000/create_user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Make another API call to get the person_name
        const nameResponse = await fetch('http://localhost:8000/get_person_name/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });
        if (nameResponse.ok) {
          const nameData = await nameResponse.json();
          localStorage.setItem('username', nameData); // Store person_name in local storage
        history.push('/character-creation');
        } else {
          setErrorMessage('Failed to retrieve user name.');
        }
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="account-creation-container">
      <Helmet>
        <title>Account-creation - ServeQuest</title>
        <meta property="og:title" content="Account-creation - ServeQuest" />
      </Helmet>
      <div className="account-creation-signup">
        <input
          type="text"
          name="username"
          required
          placeholder="Choose a Username"
          className="account-creation-textinput input"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
        />
        <input
          type="password"
          name="pw"
          required
          placeholder="Password"
          className="account-creation-textinput1 input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="account-creation-textinput2 input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignUp} className="account-creation-navlink button">
          Sign up
        </button>
        <span className="account-creation-text">
          <span>Gamifying your volunteer experience</span>
        </span>
        <span className="account-creation-text02">
          <span className="account-creation-text03">
            By clicking continue, you agree to our
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="account-creation-text04">Terms of Service</span>
          <span className="account-creation-text05">
            {' '}
            and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Privacy Policy</span>
        </span>
        <span className="account-creation-text07">ServeQuest</span>
        <span className="account-creation-text08">
          <span>Create an account</span>
        </span>
      </div>
    </div>
  );
};

export default AccountCreation;
