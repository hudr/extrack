import React, { Fragment, Component } from 'react'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import Header from './components/Header'
import Menu from './components/Menu'
import CategoryCards from './components/CategoryCards'

import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <CategoryCards />
      </Fragment>
    )
  }
}

export default App
