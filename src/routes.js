import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRoute from './utils/PrivateRoute'

//Components
import Header from './components/Header'
import Menu from './components/Menu'

//Pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'

import Categories from './components/CategoryCards'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/forgotpw' component={ForgotPassword} />

      <PrivateRoute
        exact
        path='/profile'
        component={() => (
          <Fragment>
            <Profile />
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/create'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <h1>Create</h1>
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/categories'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <Categories />
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/graphics'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <h1>Graphics</h1>
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/tips'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <h1>Tips</h1>
          </Fragment>
        )}
      />

      <Route path='*' exact={true} component={() => <h1>Page not found!</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
