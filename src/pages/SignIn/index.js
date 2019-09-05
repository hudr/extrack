import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../config/Firebase'

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
  CreateAccountButton,
  ErrorMessage
} from './styled'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleSignIn = async e => {
    e.preventDefault()

    const { email, password } = this.state

    if (!email || !password) {
      this.setState({ error: 'Please, fill in all required fields.' })
    } else {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        this.props.history.push('/categories')
      } catch (error) {
        // console.log(error)

        if (error.code === 'auth/invalid-email')
          this.setState({ error: 'Invalid email address format.' })

        if (error.code === 'auth/user-not-found')
          this.setState({ error: "This account doesn't exist." })

        if (error.code === 'auth/wrong-password')
          this.setState({ error: 'Wrong password' })

        if (error.code === 'auth/too-many-requests')
          this.setState({ error: 'You tried to login so many times, wait.' })
      }
    }
  }

  render() {
    const { email, password, error } = this.state
    return (
      <StyledContainer>
        <Form onSubmit={this.handleSignIn}>
          <Img src={logo} />
          {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
          <Input
            placeholder='Username'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <LoginButton type='submit'>Login</LoginButton>

          <ForgotLink>
            <Link to='/forgotpw'>Forgot password?</Link>
          </ForgotLink>
          <CreateAccount>
            <CreateAccountText>Don't have an account?</CreateAccountText>
            <CreateAccountButton>
              <Link to='/signup'>Sign Up</Link>
            </CreateAccountButton>
          </CreateAccount>
        </Form>
      </StyledContainer>
    )
  }
}

export default withRouter(SignIn)
