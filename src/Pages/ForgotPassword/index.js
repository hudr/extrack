import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
          <BackToHome>
            <Link to='/'>Back to login</Link>
          </BackToHome>
        </Form>
      </StyledContainer>
    )
  }
}
