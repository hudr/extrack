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
  BackToHome
} from './styled'

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleForgotPassword = event => {
    event.preventDefault()

    const { email } = this.state

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function() {
        console.log('Email enviado com sucesso para')
      })
      .catch(function(e) {
        console.error('error', e)
      })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  render() {
    const { email } = this.state

    return (
      <StyledContainer>
        <Form onSubmit={this.handleForgotPassword}>
          <Img src={logo} />
          <Input
            placeholder='Type your email'
            onChange={this.handleEmailChange}
            value={email}
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
