import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../config/Firebase'
import history from '../../history'

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

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleCategoryChange(event) {
    this.setState({ email: event.target.value })
  }

  SignIn = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function() {
          firebase.auth().onAuthStateChanged(function(user) {
            console.log('UID', user.uid)
            history.push('/home')
          })
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message

          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            console.error(error, errorMessage)
          }
          // ...
          console.log('error code', errorCode)
        })
    } catch (error) {
      console.log(error.toString(error))
    }
  }

  render() {
    const { email } = this.state
    return (
      <StyledContainer>
        <Form>
          <Img src={logo} />
          <Input
            placeholder='Username'
            value={email}
            onChange={this.handleCategoryChange}
          />
          <Input
            type='password'
            placeholder='Password'
            value={email}
            onChange={this.handleCategoryChange}
          />
          <LoginButton type='submit'>
            <Link onClick={() => this.SignIn(this.state.email, '32382989abb')}>
              Login
            </Link>
          </LoginButton>
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

export default SignIn
