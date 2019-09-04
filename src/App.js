import React, { Fragment, Component } from 'react'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import CategoryCards from './components/CategoryCards'

import { Switch, Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path='/' exact={true} component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/forgotpw' component={ForgotPassword} />
          <Route
            path='/home'
            render={() => (
              <Fragment>
                <Home />
                <CategoryCards />
              </Fragment>
            )}
          />
        </Switch>
      </Fragment>
    )
  }
}

export default App
