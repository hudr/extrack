import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InitializeFirebase } from '../../config/Firebase'
import * as firebase from 'firebase'

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
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  componentDidMount() {
    InitializeFirebase()
  }

  handleCategoryChange(event) {
    this.setState({ email: event.target.value })
  }

  SignIn = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      firebase.auth().onAuthStateChanged(function(user) {})
    } catch (error) {
      console.log(error.toString(error))
    }
  }

  SignUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        function(user) {
          // [END createwithemail]
          // callSomeFunction(); Optional
          // var user = firebase.auth().currentUser;
          user
            .updateProfile({
              displayName: 'Hudson'
            })
            .then(
              function() {
                // Update successful.
              },
              function(error) {
                // An error happened.
              }
            )
        },
        function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // [START_EXCLUDE]
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            console.error(error, errorMessage)
          }
          // [END_EXCLUDE]
        }
      )
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
            <Link onClick={() => this.SignIn(this.state.email, '32382989aaA@')}>
              Login
            </Link>
          </LoginButton>
          <ForgotLink>
            <Link to='/forgotpw'>Forgot password?</Link>
          </ForgotLink>
          <CreateAccount>
            <CreateAccountText>Don't have an account?</CreateAccountText>
            <CreateAccountButton>
              <Link
                onClick={() => this.SignUp(this.state.email, '32382989aaA@')}
              >
                SignUp
              </Link>
            </CreateAccountButton>
          </CreateAccount>
        </Form>
      </StyledContainer>
    )
  }
}
