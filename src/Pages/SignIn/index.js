import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
          <LoginButton type='submit'>
            <Link to='/home'>Login</Link>
          </LoginButton>
          <ForgotLink>
            <Link to='/forgotpw'>Forgot password?</Link>
          </ForgotLink>
          <CreateAccount>
            <CreateAccountText>Don't have an account?</CreateAccountText>
            <CreateAccountButton>
              <Link to='/signup'>Create</Link>
            </CreateAccountButton>
          </CreateAccount>
        </Form>
      </StyledContainer>
    )
  }
}
