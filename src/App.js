import React, { Fragment, Component } from 'react'

import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'
import Home from './Pages/Home'
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
