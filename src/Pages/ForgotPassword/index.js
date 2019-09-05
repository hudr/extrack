import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../config/Firebase'

import logo from '../../assets/images/logo.png'

import {
  StyledContainer,
  Form,
  Img,
  Input,
  RecoveryButton,
  ErrorMessage,
  BackToHome
} from './styled'

export default class ForgotPassword extends Component {
  state = {
    email: '',
    error: ''
  }

  handleForgotPassword = async e => {
    e.preventDefault()

    const { email } = this.state

    if (!email) {
      this.setState({ error: 'Please, fill in all required fields.' })
    } else {
      try {
        await firebase.auth().sendPasswordResetEmail(email)
        this.props.history.push('/')
      } catch (error) {
        // console.log(error)

        if (error.code === 'auth/invalid-email')
          this.setState({ error: 'Invalid email address format.' })

        if (error.code === 'auth/user-not-found')
          this.setState({ error: "This account doesn't exist." })
      }
    }
  }

  render() {
    const { email, error } = this.state

    return (
      <StyledContainer>
        <Form onSubmit={this.handleForgotPassword}>
          <Img src={logo} />
          {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
          <Input
            placeholder='Type your email'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <RecoveryButton type='submit'>Recovery password</RecoveryButton>
          <BackToHome>
            <Link to='/'>Back to login</Link>
          </BackToHome>
        </Form>
      </StyledContainer>
    )
  }
}
