import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import { alertErrorMessage } from '../../utils/SweetAlert'

import logo from '../../assets/images/logo.png'

import {
  StyledContainer,
  Form,
  Img,
  Input,
  CreateAccountButton,
  GoToLoginLink
} from './styled'

class SignUp extends Component {
  state = {
    firstName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSignUp = async e => {
    e.preventDefault()

    const { firstName, email, password, confirmPassword } = this.state

    const { handleSignUp } = this.props

    await handleSignUp(email, password, confirmPassword, firstName)

    const { errorMessage } = this.props

    if (errorMessage !== '') {
      alertErrorMessage(errorMessage)
    }

    const { isLogged } = this.props

    if (isLogged === true) {
      this.props.history.push('/categories')
    }
  }

  render() {
    const { firstName, email, password, confirmPassword } = this.state

    return (
      <StyledContainer>
        <Form onSubmit={this.handleSignUp}>
          <Img src={logo} />

          <Input
            placeholder='First Name'
            value={firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
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

          <CreateAccountButton type='submit'>Signup</CreateAccountButton>
          <GoToLoginLink>
            <Link to='/'>Already have an account? Go to login!</Link>
          </GoToLoginLink>
        </Form>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.auth.authUser,
  isLogged: state.auth.isLogged,
  errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
