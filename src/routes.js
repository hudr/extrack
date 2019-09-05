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
      <Route exact path='/' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/forgotpw' component={ForgotPassword} />

      <Home />
      <Switch>
        {/* <Route path='*' component={() => <h1>Page not found</h1>} /> */}
        <Route path='/create' component={() => <h1>Create</h1>} />
        <Route path='/categories' component={Categories} />
        <Route path='/graphics' component={() => <h1>Graphics</h1>} />
        <Route path='/tips' component={() => <h1>Tips</h1>} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes
