import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../config/Firebase'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

class Home extends Component {
  loadingUser = async () => {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Usuário logado
        // var uid = user.uid
        // console.log(uid)
        this.props.history.push('/categories')
      } else {
        //Usuário deslogado, volta pra tela inicial
        this.props.history.push('/')
      }
    })
  }

  componentDidMount() {
    this.loadingUser()
  }

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
