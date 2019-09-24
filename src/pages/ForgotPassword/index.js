import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import logo from '../../assets/images/logo.png'

import {
  StyledContainer,
  Form,
  Img,
  Input,
  RecoveryButton,
  ErrorMessage,
  BackToHome
} from './styled'

class ForgotPassword extends Component {
  state = {
    email: ''
  }

  handleForgotPassword = async e => {
    e.preventDefault()

    const { email } = this.state

    const { handleForgotPassword } = this.props

    await handleForgotPassword(email)

    const { errorMessage } = this.props

    if (errorMessage === '') {
      this.props.history.push('/')
    }
  }

  render() {
    const { email } = this.state

    const { errorMessage } = this.props

    return (
      <StyledContainer>
        <Form onSubmit={this.handleForgotPassword}>
          <Img src={logo} />

          {errorMessage !== '' && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Input
            placeholder='Type your email'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <RecoveryButton type='submit'>Recovery password</RecoveryButton>
          <BackToHome>
            <Link to='/'>Back to login</Link>
          </BackToHome>
        </Form>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)
