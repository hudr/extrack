import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Pages & Components
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'

import Categories from './components/CategoryCards'

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/forgotpw' component={ForgotPassword} />

        {/* Nested Components - Need to refactor */}
        <Route
          path='/create'
          render={() => (
            <Fragment>
              <Home />
              <h1>Create</h1>
            </Fragment>
          )}
        />

        <Route
          path='/categories'
          render={() => (
            <Fragment>
              <Home />
              <Categories />
            </Fragment>
          )}
        />

        <Route
          path='/graphics'
          render={() => (
            <Fragment>
              <Home />
              <h1>Graphics</h1>
            </Fragment>
          )}
        />

        <Route
          path='/tips'
          render={() => (
            <Fragment>
              <Home />
              <h1>Tips</h1>
            </Fragment>
          )}
        />

        <Route
          path='*'
          exact={true}
          component={() => <h1>Page not found!</h1>}
        />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes
