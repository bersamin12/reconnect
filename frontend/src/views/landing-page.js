import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Landing-Page - ServeQuest</title>
        <meta property="og:title" content="Landing-Page - ServeQuest" />
      </Helmet>
      <div className="landing-page-opening-page1">
        <span className="landing-page-text">
          <span>Discover a variety of volunteering </span>
          <span>experiences tailored to your interests</span>
          <br></br>
          <span>and schedule!</span>
        </span>
        <span className="landing-page-text05">Welcome to</span>
        <span className="landing-page-text06">ServeQuest</span>
        <svg viewBox="0 0 1097.142857142857 1024" className="landing-page-icon">
          <path d="M1097.143 658.286c0 121.143-98.286 219.429-219.429 219.429h-621.714c-141.143 0-256-114.857-256-256 0-102.286 60.571-190.857 147.429-231.429-0.571-8-1.143-16.571-1.143-24.571 0-161.714 130.857-292.571 292.571-292.571 122.286 0 226.857 74.857 270.857 181.714 25.143-22.286 58.286-35.429 94.857-35.429 80.571 0 146.286 65.714 146.286 146.286 0 29.143-8.571 56-23.429 78.857 97.143 22.857 169.714 109.714 169.714 213.714z"></path>
        </svg>
        <span className="landing-page-text07">
          <span>
            Level up while
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>giving a helping hand</span>
        </span>
        <img
          alt="image44474"
          src="/image44474-x7z-200w.png"
          className="landing-page-image4"
        />
        <img
          alt="MynaBirdSpritebg24455"
          src="/mynabirdspritebg24455-x0q6-300h.png"
          className="landing-page-myna-bird-spritebg2"
        />
        <div className="landing-page-container1"></div>
        <span className="landing-page-text11">
          Volunteer to unlock features
        </span>
        <Link to="/account-creation" className="landing-page-button button">
          <span>
            <span>Sign up</span>
            <br></br>
          </span>
        </Link>
        <Link to="/log-in" className="landing-page-button1 button">
          <span>
            <span>Log in</span>
            <br></br>
          </span>
        </Link>
        <Link to="/log-in" className="landing-page-button2 button">
          <span>
            <span>Log in to existing account</span>
            <br></br>
          </span>
        </Link>
        <Link to="/account-creation" className="landing-page-navlink button">
          I want to become a volunteer
        </Link>
        <img
          alt="image54710"
          src="/image54710-l9ki-200h.png"
          className="landing-page-image5"
        />
        <span className="landing-page-text21">
          Join us today as a volunteer!
        </span>
        <img
          alt="image34464"
          src="/image34464-4302-200h.png"
          className="landing-page-image3"
        />
        <span className="landing-page-text22">
          <span>Choose your sprites</span>
        </span>
        <span className="landing-page-text24">
          <span>level up!</span>
        </span>
        <span className="landing-page-text26">
          <span>level up!</span>
        </span>
        <img
          alt="lizardbg13513"
          src="/lizardbg13513-r9z-300w.png"
          className="landing-page-lizardbg1"
        />
        <img
          alt="image24457"
          src="/image24457-lly-300h.png"
          className="landing-page-image2"
        />
        <span className="landing-page-text28">
          <span>Join a community of like-minded volunteers</span>
          <br></br>
          <span> to make a real impact.</span>
        </span>
        <img
          alt="image"
          src="/merlion-3000h.png"
          className="landing-page-image"
        />
      </div>
    </div>
  )
}

export default LandingPage
