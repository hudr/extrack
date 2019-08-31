import React, { Component } from 'react'

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
  render() {
    return (
      <StyledContainer>
        <Form>
          <Img src={logo} />
          <Input placeholder='Type your email' />
          <RecoveryButton type='submit'>Recovery password</RecoveryButton>
          <BackToHome href='#'>Back to homepage</BackToHome>
        </Form>
      </StyledContainer>
    )
  }
}
