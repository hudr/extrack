import React, { Fragment, Component } from 'react'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

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
