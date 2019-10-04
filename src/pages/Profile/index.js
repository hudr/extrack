import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import {
  StyledContainer,
  Form,
  Img,
  ProfileInfo,
  EditProfileButton,
  SaveProfileButton,
  BackToHome
} from './styled'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: true,
      userName: props.authUser.userName,
      userEmail: props.authUser.userEmail,
      userGenre: props.authUser.userGenre || null,
      userBirthDate: props.authUser.userBirthDate || null
    }
  }

  submitUserProfile = async e => {
    e.preventDefault()

    const { userName, userGenre, userBirthDate, userEmail } = this.state
    const { handleUpdateProfile } = this.props

    if (userName && userGenre && userBirthDate && userEmail) {
      handleUpdateProfile(userName, userGenre, userBirthDate, userEmail)
      this.setState({ isDisabled: true })
    }
  }

  handleForm = async e => {
    e.preventDefault()
    const { isDisabled } = this.state
    this.setState({ isDisabled: !isDisabled })
  }

  render() {
    const {
      isDisabled,
      userName,
      userGenre,
      userBirthDate,
      userEmail
    } = this.state

    return (
      <StyledContainer>
        <Form onSubmit={this.submitUserProfile}>
          <Img src='https://neo-labor.com/wp-content/uploads/2016/08/13.jpg' />

          <ProfileInfo
            disabled={isDisabled}
            value={userName}
            placeholder='Fill your display name*'
            onChange={e => this.setState({ userName: e.target.value })}
          />

          {(userGenre || !isDisabled) && (
            <ProfileInfo
              disabled={isDisabled}
              value={userGenre}
              placeholder='Insert your genre*'
              onChange={e => this.setState({ userGenre: e.target.value })}
            />
          )}

          {(userBirthDate || !isDisabled) && (
            <ProfileInfo
              disabled={isDisabled}
              value={userBirthDate}
              placeholder='Insert your birth date*'
              onChange={e => this.setState({ userBirthDate: e.target.value })}
            />
          )}

          <ProfileInfo
            disabled={isDisabled}
            value={userEmail}
            placeholder='Fill your email*'
            onChange={e => this.setState({ userEmail: e.target.value })}
          />

          {isDisabled ? (
            <EditProfileButton onClick={this.handleForm}>
              Edit
            </EditProfileButton>
          ) : (
            <SaveProfileButton type='submit'>Save</SaveProfileButton>
          )}
          <BackToHome>
            <Link to='/categories'>Back to home</Link>
          </BackToHome>
        </Form>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  authUser: state.auth.authUser
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile))
