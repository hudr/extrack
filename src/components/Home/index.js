import React, { Fragment, Component } from 'react'

import Header from '../Header'
import Menu from '../Menu'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
      </Fragment>
    )
  }
}

export default Home
