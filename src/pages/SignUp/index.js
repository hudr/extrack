import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import {
  StyledContainer,
  Form,
  Img,
  Input,
  CreateAccountButton,
  GoToLoginLink
} from './styled'

export default class SignUp extends Component {
  render() {
    return (
      <StyledContainer>
        <Form>
          <Img src={logo} />
          <Input placeholder='Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Type your email' />
          <Input type='password' placeholder='Password' />
          <Input type='password' placeholder='Confirm password' />
          <CreateAccountButton type='submit'>Sign Up</CreateAccountButton>
          <GoToLoginLink>
            <Link to='/'>Already have an account? Go to login!</Link>
          </GoToLoginLink>
        </Form>
      </StyledContainer>
    )
  }
}
