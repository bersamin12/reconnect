import React from 'react'

import { Helmet } from 'react-helmet'

import './log-in.css'

const LogIn = (props) => {
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
          type="password"
          name="Password"
          required="true"
          placeholder="Password"
          className="log-in-textinput input"
        />
        <input
          type="email"
          name="email"
          required="true"
          placeholder="Email"
          className="log-in-textinput1 input"
        />
        <button type="button" className="log-in-button button">
          <span>
            <span>Log in</span>
            <br></br>
          </span>
        </button>
        <span className="log-in-text6">
          <span>I forgot my password</span>
        </span>
      </div>
    </div>
  )
}

export default LogIn
