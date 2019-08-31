import React, { Component } from 'react'

import logo from '../../assets/images/logo.png'

import {
  StyledContainer,
  Form,
  Img,
  Input,
  LoginButton,
  ForgotLink,
  CreateAccount,
  CreateAccountText,
  CreateAccountButton
} from './styled'

export default class SignIn extends Component {
  render() {
    return (
      <StyledContainer>
        <Form>
          <Img src={logo} />
          <Input placeholder='Username' />
          <Input type='password' placeholder='Password' />
          <LoginButton type='submit'>Login</LoginButton>
          <ForgotLink href='#'>Forgot password?</ForgotLink>
          <CreateAccount>
            <CreateAccountText>Don't have an account?</CreateAccountText>
            <CreateAccountButton>Create</CreateAccountButton>
          </CreateAccount>
        </Form>
      </StyledContainer>
    )
  }
}
