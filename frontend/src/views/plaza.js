import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './plaza.css'

const Plaza = (props) => {
  
  // Function to handle inviting friends to the party
  const person_name = localStorage.getItem('username');
  const inviteToParty = (friendName) => {
    const inviterName = person_name.slice(1,-2); // Replace with the actual current user's name

    fetch('http://localhost:8000/add_to_party/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inviter: inviterName,
        recipient: friendName,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // You can add more logic here to handle the response if needed
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="plaza-container">
      <Helmet>
        <title>Plaza - ServeQuest</title>
        <meta property="og:title" content="Plaza - ServeQuest" />
      </Helmet>
      <div className="plaza-calendar">
        <header data-thq="thq-navbar" className="plaza-navbar-interactive">
          <span className="plaza-text">ServeQuest</span>
          <div data-thq="thq-navbar-nav" className="plaza-desktop-menu">
            <nav className="plaza-links">
              <Link to="/upcoming" className="plaza-navlink">
                Upcoming
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </Link>
              <Link to="/explore" className="plaza-navlink1">
                Explore
              </Link>
              <Link to="/rewards" className="plaza-navlink2">
                Rewards
              </Link>
              <Link to="/plaza" className="plaza-navlink3">
                Plaza
              </Link>
              <Link to="/my-profile" className="plaza-navlink4">
                My Profile
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="plaza-burger-menu">
            <svg viewBox="0 0 1024 1024" className="plaza-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="plaza-mobile-menu">
            <div className="plaza-nav">
              <div className="plaza-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="plaza-logo"
                />
                <div data-thq="thq-close-menu" className="plaza-close-menu">
                  <svg viewBox="0 0 1024 1024" className="plaza-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="plaza-links1">
                <span className="plaza-text01">About</span>
                <span className="plaza-text02">Features</span>
                <span className="plaza-text03">Pricing</span>
                <span className="plaza-text04">Team</span>
                <span className="plaza-text05">Blog</span>
              </nav>
              <div className="plaza-buttons">
                <button className="plaza-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="plaza-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="plaza-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="plaza-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <span className="plaza-text08">
          <span className="plaza-text09">
            Check out how your friends are doing!
          </span>
          <br className="plaza-text10"></br>
          <span className="plaza-text11">
            Multiply your experience points by partying up with friends!
          </span>
          <br></br>
        </span>
        <span className="plaza-text13">
          <span>Looking for a friend?</span>
          <br></br>
        </span>
        <img
          src="/boy-1100h.png"
          alt="image"
          id="friend1image"
          className="plaza-image"
        />
        <img
          src="/girl-1100h.png"
          alt="image"
          id="friend2image"
          className="plaza-image1"
        />
        <img
          src="/boy2-1100h.png"
          alt="image"
          id="friend3image"
          className="plaza-image2"
        />
        <span id="friend1" className="plaza-text16">
          Qing Rong
        </span>
        <span id="friend3" className="plaza-text17">
          Justin
        </span>
        <span id="friend2" className="plaza-text18">
          Selen
        </span>
        <button
          type="button"
          id="friend1button"
          className="plaza-button button"
          onClick={() => inviteToParty('Qing Rong')}
        >
          Invite to Party
        </button>
        <button
          type="button"
          id="friend2button"
          className="plaza-button1 button"
          onClick={() => inviteToParty('Selen')}
        >
          Invite to Party
        </button>
        <button
          type="button"
          id="friend3button"
          className="plaza-button2 button"
          onClick={() => inviteToParty('Justin')}
        >
          Invite to Party
        </button>
        <span id="friend1lv" className="plaza-text19">
          Lv80
        </span>
        <span id="friend3lv" className="plaza-text20">
          Lv80
        </span>
        <span id="friend2lv" className="plaza-text21">
          Lv80
        </span>
        <input
          type="text"
          placeholder="Friend Username"
          id="frienduser"
          className="plaza-textinput input"
        />
        <button type="submit" className="plaza-button3 button">
          Add Friend
        </button>
        <button
          type="button"
          id="refreshfriend"
          className="plaza-button4 button"
        >
          See more friends
        </button>
      </div>
    </div>
  )
}

export default Plaza

