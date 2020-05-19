import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import { alertSuccessMessage, alertErrorMessage } from '../../utils/SweetAlert'

import logo from '../../assets/images/logo.png'

import {
  StyledContainer,
  Form,
  Img,
  Input,
  RecoveryButton,
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
      alertSuccessMessage('Your reset email has been sent')
      this.props.history.push('/')
    } else {
      alertErrorMessage(errorMessage)
    }
  }

  render() {
    const { email } = this.state

    return (
      <StyledContainer>
        <Form onSubmit={this.handleForgotPassword}>
          <Img src={logo} />

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
