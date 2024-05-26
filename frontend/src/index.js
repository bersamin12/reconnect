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
import Party from './views/party'
import Upcoming from './views/upcoming'
import Page from './views/page'
import Rewards from './views/rewards'
import MyProfile from './views/my-profile'
import AccountCreation from './views/account-creation'
import CharacterCreation from './views/character-creation'
import Home from './views/home'
import Explore from './views/explore'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LandingPage} exact path="/landing-page" />
        <Route component={LogIn} exact path="/log-in" />
        <Route component={Plaza} exact path="/plaza" />
        <Route component={Party} exact path="/party" />
        <Route component={Upcoming} exact path="/upcoming" />
        <Route component={Page} exact path="/page" />
        <Route component={Rewards} exact path="/rewards" />
        <Route component={MyProfile} exact path="/my-profile" />
        <Route component={AccountCreation} exact path="/account-creation" />
        <Route component={CharacterCreation} exact path="/character-creation" />
        <Route component={Home} exact path="/" />
        <Route component={Explore} exact path="/explore" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
