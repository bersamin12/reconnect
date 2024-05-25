import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ServeQuest</title>
        <meta property="og:title" content="ServeQuest" />
      </Helmet>
      <div className="home-home-page">
        <Link to="/rewards" className="home-text">
          Unlock rewards
        </Link>
        <Link to="/explore" className="home-text01">
          <span>
            Explore events
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>curated for me</span>
        </Link>
        <Link to="/my-profile" className="home-text05">
          Go to my profile
        </Link>
        <Link to="/upcoming" className="home-navlink">
          <img
            alt="image67465"
            src="/image67465-1jpq-200h.png"
            className="home-image6"
          />
        </Link>
        <Link to="/upcoming" className="home-text06">
          <span>
            Check out upcoming
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>volunteering events</span>
        </Link>
        <Link to="/plaza" className="home-text10">
          <span>
            Go to the plaza and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>catch up with friends</span>
        </Link>
        <span className="home-text14">What would you like to do today?</span>
        <span className="home-text15">Welcome to ServeQuest, </span>
        <Link to="/explore" className="home-navlink1">
          <img
            alt="image77463"
            src="/image77463-r30h-200h.png"
            className="home-image7"
          />
        </Link>
        <Link to="/rewards" className="home-navlink2">
          <img
            alt="image87464"
            src="/image87464-dvpq-200h.png"
            className="home-image8"
          />
        </Link>
        <Link to="/plaza" className="home-navlink3">
          <img
            alt="image97464"
            src="/image97464-5w6m-200h.png"
            className="home-image9"
          />
        </Link>
        <Link to="/my-profile" className="home-navlink4">
          <img
            alt="image107464"
            src="/image107464-ph0c-200h.png"
            className="home-image10"
          />
        </Link>
        <Link to="/page" className="home-button button">
          <span>
            <span>Settings</span>
            <br></br>
          </span>
        </Link>
        <Link to="/landing-page" className="home-button1 button">
          <span>
            <span>Log out</span>
            <br></br>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
