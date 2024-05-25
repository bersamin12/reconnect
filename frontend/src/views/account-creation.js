import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './account-creation.css'

const AccountCreation = (props) => {
  return (
    <div className="account-creation-container">
      <Helmet>
        <title>Account-creation - ServeQuest</title>
        <meta property="og:title" content="Account-creation - ServeQuest" />
      </Helmet>
      <div className="account-creation-signup">
        <input
          type="email"
          name="email"
          required="true"
          placeholder="email"
          className="account-creation-textinput input"
        />
        <Link
          to="/character-creation"
          className="account-creation-navlink button"
        >
          Sign up
        </Link>
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
  )
}

export default AccountCreation
