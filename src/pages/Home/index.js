import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../config/Firebase'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

class Home extends Component {
  state = {
    name: ''
  }

  handleLoadingUser = async () => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const db = firebase.firestore()
        const docRef = await db
          .collection('users')
          .doc('data')
          .collection('profile')
          .doc(`${user.uid}`)
        docRef
          .get()
          .then(async doc => {
            if (doc.exists) {
              const userName = await doc.data().name
              this.setState({ name: userName })
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!')
            }
          })
          .catch(function(error) {
            console.log('Error getting document:', error)
          })
      } else {
        //Usuário deslogado, volta pra tela inicial
        this.props.history.push('/')
      }
    })
  }

  async componentDidMount() {
    await this.handleLoadingUser()
  }

  render() {
    const { name } = this.state
    return (
      <Fragment>
        <Header />
        <Menu />
      </Fragment>
    )
  }
}

export default withRouter(Home)
