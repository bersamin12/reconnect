import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  
} from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import LogIn from './views/log-in'
import Plaza from './views/plaza'
import Upcoming from './views/upcoming'
import Rewards from './views/rewards'
import MyProfile from './views/my-profile'
import AccountCreation from './views/account-creation'
import CharacterCreation from './views/character-creation'
import Home from './views/home'
import Explore from './views/explore'
import Page from './views/page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route component={LogIn} exact path="/log-in" />
        <Route component={Plaza} exact path="/plaza" />
        <Route component={Upcoming} exact path="/upcoming" />
        <Route component={Rewards} exact path="/rewards" />
        <Route component={MyProfile} exact path="/my-profile" />
        <Route component={AccountCreation} exact path="/account-creation" />
        <Route component={CharacterCreation} exact path="/character-creation" />
        <Route component={Home} exact path="/Home" />
        <Route component={Explore} exact path="/explore" />
        <Route component={Page} exact path="/page" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
