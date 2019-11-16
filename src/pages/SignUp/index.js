import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import { alertErrorMessage } from '../../utils/SweetAlert'

import Loader from '../../components/Loader'

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
    confirmPassword: '',
    userImage: ''
  }

  componentDidMount() {
    //Method to force redirect if logged.
    setTimeout(() => {
      const parseLocalStorage = JSON.parse(localStorage.getItem('persist:root'))
      const isLogged = JSON.parse(parseLocalStorage.auth).isLogged
      if (isLogged === true) {
        this.props.history.push('/categories')
      }
    }, 50)
  }

  handleSignUp = async e => {
    e.preventDefault()

    const {
      firstName,
      email,
      password,
      confirmPassword,
      userImage
    } = this.state

    const { handleSignUp, handleLoader } = this.props

    //Começando carregar
    await handleLoader(true)

    await handleSignUp(email, password, confirmPassword, firstName, userImage)

    const { errorMessage } = this.props

    if (errorMessage !== '') {
      alertErrorMessage(errorMessage)
    }

    const { isLogged } = this.props

    if (isLogged === true) {
      this.props.history.push('/categories')
    }

    //Começando carregar
    await handleLoader(false)
  }

  render() {
    const { isLoading } = this.props
    const { firstName, email, password, confirmPassword } = this.state

    return isLoading ? (
      <Loader />
    ) : (
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
  isLoading: state.auth.isLoading,
  isLogged: state.auth.isLogged,
  errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
