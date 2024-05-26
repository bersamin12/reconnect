import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './my-profile.css'

const MyProfile = (props) => {
  return (
    <div className="my-profile-container">
      <Helmet>
        <title>My-Profile - ServeQuest</title>
        <meta property="og:title" content="My-Profile - ServeQuest" />
      </Helmet>
      <div className="my-profile-calendar">
        <header data-thq="thq-navbar" className="my-profile-navbar-interactive">
          <span className="my-profile-text">ServeQuest</span>
          <div data-thq="thq-navbar-nav" className="my-profile-desktop-menu">
            <nav className="my-profile-links">
              <Link to="/upcoming" className="my-profile-navlink">
                Upcoming
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </Link>
              <Link to="/explore" className="my-profile-navlink1">
                Explore
              </Link>
              <Link to="/rewards" className="my-profile-navlink2">
                Rewards
              </Link>
              <Link to="/plaza" className="my-profile-navlink3">
                Plaza
              </Link>
              <Link to="/my-profile" className="my-profile-navlink4">
                My Profile
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="my-profile-burger-menu">
            <svg viewBox="0 0 1024 1024" className="my-profile-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="my-profile-mobile-menu">
            <div className="my-profile-nav">
              <div className="my-profile-top">
                <img
                  alt="image"
                  src="https://static.vecteezy.com/system/resources/previews/013/483/677/original/8-bit-pixel-girl-black-shirts-women-pixels-for-game-assets-and-cross-stitch-patterns-in-illustrations-vector.jpg"
                  className="my-profile-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="my-profile-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="my-profile-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="my-profile-links1">
                <span className="my-profile-text01">About</span>
                <span className="my-profile-text02">Features</span>
                <span className="my-profile-text03">Pricing</span>
                <span className="my-profile-text04">Team</span>
                <span className="my-profile-text05">Blog</span>
              </nav>
              <div className="my-profile-buttons">
                <button className="my-profile-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="my-profile-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="my-profile-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="my-profile-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          id="userpfp"
          className="my-profile-image thq-img-round"
          accept="image/*"
        />
        <span className="my-profile-text06">
          <span>User</span>
        </span>
        <span className="my-profile-text08">Sprites owned</span>
        <span className="my-profile-text09">About me</span>
        <span className="my-profile-text10">
          <span>Level 2</span>
        </span>
        <span className="my-profile-text12">
          <span>Exp: 5000/10000</span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="Rectangle65116"
          src="/rectangle65116-el6q-200h.png"
          className="my-profile-rectangle6"
        />
        <img
          alt="Rectangle75116"
          src="/rectangle75116-eom8-200h.png"
          className="my-profile-rectangle7"
        />
        <img
          alt="MynaBirdSpritebg24515"
          src="/mynabirdspritebg24515-3x0m-200w.png"
          className="my-profile-myna-bird-spritebg2"
        />
        <span className="my-profile-text16">
          <span>
            (Name):
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Health</span>
          <br></br>
          <span>Skill:</span>
        </span>
        <textarea
          placeholder="type something here!"
          className="my-profile-textarea textarea"
        ></textarea>
        <img
          alt="Rectangle55117"
          src="/rectangle55117-mi6e-700w.png"
          className="my-profile-rectangle5"
        />
      </div>
    </div>
  )
}

export default MyProfile
