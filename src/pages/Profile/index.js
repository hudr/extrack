import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { alertSuccessMessage, alertErrorMessage } from '../../utils/SweetAlert'

import { Creators as AuthActions } from '../../store/ducks/auth'

import { format } from 'date-fns'

import {
  StyledContainer,
  Form,
  Img,
  ProfileInfo,
  ProfileSelect,
  DateLabel,
  BrithInfo,
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
      userGenre: props.authUser.userGenre || '',
      userBirthDate: props.authUser.userBirthDate || '',
      userImage: props.authUser.userImage
    }
  }

  submitUserProfile = async e => {
    e.preventDefault()

    const {
      userName,
      userGenre,
      userBirthDate,
      userEmail,
      userImage
    } = this.state

    const { handleUpdateProfile } = this.props

    await handleUpdateProfile(
      userName,
      userGenre,
      userBirthDate,
      userEmail,
      userImage
    )

    const { errorMessage } = this.props

    if (errorMessage === '') {
      alertSuccessMessage('Your profile has been updated')
      this.setState({ isDisabled: true })
    } else {
      alertErrorMessage(errorMessage)
    }
  }

  handleForm = async e => {
    e.preventDefault()
    const { isDisabled } = this.state
    this.setState({ isDisabled: !isDisabled })
  }

  handleGenreChange(e) {
    this.setState({ userGenre: e.target.value })
  }

  handleBase64 = async e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = async () => {
      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000),
        base64: reader.result.split(',')[1],
        file: file
      }

      if (fileInfo.size <= 2000) {
        if (fileInfo.type === 'image/png' || 'image/jpg' || 'image/jpeg') {
          this.setState({
            userImage: fileInfo.base64
          })
        } else {
          alertErrorMessage('Unsupported format.')
        }
      } else {
        alertErrorMessage('This image is too large. Max: 2MB.')
      }
    }
  }

  render() {
    const {
      isDisabled,
      userName,
      userGenre,
      userBirthDate,
      userEmail,
      userImage
    } = this.state

    let editButton

    let maxDate = format(new Date(), 'yyyy-MM-dd')

    if (isDisabled) {
      if (userName && userGenre && userBirthDate && userEmail) {
        editButton = (
          <EditProfileButton onClick={this.handleForm}>Edit</EditProfileButton>
        )
      } else {
        editButton = (
          <EditProfileButton onClick={this.handleForm}>
            Complete Profile
          </EditProfileButton>
        )
      }
    } else {
      editButton = <SaveProfileButton type='submit'>Save</SaveProfileButton>
    }

    return (
      <StyledContainer>
        <Form onSubmit={this.submitUserProfile}>
          <input
            style={{ display: 'none' }}
            accept='image/*'
            ref='imageUpload'
            type='file'
            onChange={this.handleBase64}
            multiple={false}
            disabled={isDisabled}
          />
          <Img
            onClick={() => this.refs.imageUpload.click()}
            src={`data:image/png;base64, ${userImage}`}
          />
          <ProfileInfo
            disabled={isDisabled}
            value={userName}
            placeholder='Fill your display name*'
            onChange={e => this.setState({ userName: e.target.value })}
          />
          {(userGenre || !isDisabled) && (
            <ProfileSelect
              disabled={isDisabled}
              defaultValue={!userGenre ? 'default' : userGenre}
              onChange={e => this.handleGenreChange(e)}
            >
              <option value='default' disabled>
                Select your genre*
              </option>
              <option value='Man'>Man</option>
              <option value='Woman'>Woman</option>
              <option value='Trans'>Trans</option>
              <option value='Agender'>Agender</option>
              <option value='Bi-Gendered'>Bi-Gendered</option>
              <option value='Non-Binary'>Non-Binary</option>
              <option value='Androgyne'>Androgyne</option>
              <option value='Androgynous'>Androgynous</option>
            </ProfileSelect>
          )}
          {!isDisabled && <DateLabel>Fill your birth date*</DateLabel>}
          {(userBirthDate || !isDisabled) && (
            <BrithInfo
              type='date'
              max={maxDate}
              disabled={isDisabled}
              value={userBirthDate}
              onChange={e => this.setState({ userBirthDate: e.target.value })}
            />
          )}
          <ProfileInfo
            disabled={isDisabled}
            value={userEmail}
            placeholder='Fill your email*'
            onChange={e => this.setState({ userEmail: e.target.value })}
          />
          {editButton}
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
  authUser: state.auth.authUser,
  errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile))
