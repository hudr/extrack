import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'
import { Creators as ProductActions } from '../../store/ducks/product'

import { alertErrorMessage } from '../../utils/SweetAlert'

import Loader from '../../components/Loader'

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
} from './styled'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount() {
    //Method to force redirect if logged.
    setTimeout(() => {
      const parseLocalStorage = JSON.parse(localStorage.getItem('persist:root'))
      const isLogged = JSON.parse(parseLocalStorage.auth).isLogged
      if (isLogged === true) {
        this.props.history.push('/categories')
      }
    }, 1000)
  }

  handleSignIn = async e => {
    e.preventDefault()

    const { email, password } = this.state
    const { handleLogin, handleLoader } = this.props

    await handleLoader(true)

    await handleLogin(email, password)

    const { errorMessage } = this.props

    if (errorMessage !== '') {
      alertErrorMessage(errorMessage)
    }

    const { isLogged, getProducts, getTips } = this.props

    if (isLogged === true) {
      await getProducts()
      await getTips()
      this.props.history.push('/categories')
    }

    await handleLoader(false)
  }

  render() {
    const { isLoading } = this.props
    const { email, password } = this.state

    return isLoading ? (
      <Loader />
    ) : (
      <StyledContainer>
        <Form onSubmit={this.handleSignIn}>
          <Img src={logo} />
          <Input
            placeholder="Username"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <LoginButton type="submit">Login</LoginButton>

          <ForgotLink>
            <Link to="/forgotpw">Forgot password?</Link>
          </ForgotLink>
          <CreateAccount>
            <CreateAccountText>Don't have an account?</CreateAccountText>
            <CreateAccountButton>
              <Link to="/signup">Signup</Link>
            </CreateAccountButton>
          </CreateAccount>
        </Form>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  isLogged: state.auth.isLogged,
  authUser: state.auth.authUser,
  errorMessage: state.auth.errorMessage,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...ProductActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
