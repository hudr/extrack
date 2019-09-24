import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'

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

export default withRouter(Home)
