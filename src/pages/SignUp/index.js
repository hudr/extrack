import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../config/Firebase'

import logo from '../../assets/images/logo.png'

import {
  StyledContainer,
  Form,
  Img,
  Input,
  CreateAccountButton,
  GoToLoginLink,
  ErrorMessage
} from './styled'

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  }

  handleSignUp = async e => {
    e.preventDefault()

    const { email, password, confirmPassword } = this.state

    if (!email || !password || !confirmPassword) {
      this.setState({ error: 'Please, fill in all required fields.' })
    } else {
      if (password !== confirmPassword) {
        this.setState({ error: 'Passwords need to be equal.' })
      } else {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password)
          this.props.history.push('/categories')

          // this.props.history.push('/categories')
        } catch (error) {
          if (error.code === 'auth/invalid-email')
            this.setState({ error: 'Invalid email address format.' })

          if (error.code === 'auth/email-already-in-use')
            this.setState({ error: 'This email is already in use.' })

          if (error.code === 'auth/weak-password')
            this.setState({ error: 'You need to use a strong password.' })

          if (error.code === 'auth/operation-not-allowed')
            this.setState({ error: "Create user with email isn't allowed." })
        }
      }
    }
  }

  render() {
    const { email, password, confirmPassword, error } = this.state

    return (
      <StyledContainer>
        <Form onSubmit={this.handleSignUp}>
          <Img src={logo} />
          {error !== '' && <ErrorMessage>{error}</ErrorMessage>}

          <Input placeholder='Name' />
          <Input placeholder='Last Name' />
          <Input
            placeholder='Type your email'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Input
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={e => this.setState({ confirmPassword: e.target.value })}
          />

          <CreateAccountButton type='submit'>Sign Up</CreateAccountButton>
          <GoToLoginLink>
            <Link to='/'>Already have an account? Go to login!</Link>
          </GoToLoginLink>
        </Form>
      </StyledContainer>
    )
  }
}
