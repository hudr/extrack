import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { alertSuccessMessage, alertErrorMessage } from '../../utils/SweetAlert'

import Loader from '../../components/Loader'

import { Creators as AuthActions } from '../../store/ducks/auth'

import {
  StyledContainer,
  Form,
  Img,
  ProfileInfo,
  CitySelect,
  ProfileSelect,
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
      monthAmount: props.authUser.monthAmount || '',
      userCity: props.authUser.userCity,
      userEmail: props.authUser.userEmail,
      userGenre: props.authUser.userGenre || '',
      userImage: ''
    }
  }

  submitUserProfile = async e => {
    e.preventDefault()

    const {
      userName,
      monthAmount,
      userCity,
      userGenre,
      userEmail,
      userImage
    } = this.state

    const { handleUpdateProfile, handleLoader } = this.props

    await handleLoader(true)

    await handleUpdateProfile(
      userName,
      monthAmount,
      userCity,
      userGenre,
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

    await handleLoader(false)
  }

  handleForm = async e => {
    e.preventDefault()
    const { isDisabled } = this.state
    this.setState({ isDisabled: !isDisabled })
  }

  handleCityChange(e) {
    this.setState({ userCity: e.target.value })
  }

  handleGenreChange(e) {
    this.setState({ userGenre: e.target.value })
  }

  handleBase64 = async e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async () => {
      const base64 = await reader.result.split('base64,')[1]
      const imageName = file.name
      const imageSize = Math.round(file.size / 1000)

      if (imageSize <= 2000) {
        if (
          imageName.indexOf('.jpeg') >= 0 ||
          imageName.indexOf('.jpg') >= 0 ||
          imageName.indexOf('.png') >= 0
        ) {
          this.setState({
            userImage: base64
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
    const { isLoading, authUser } = this.props

    const {
      isDisabled,
      userName,
      monthAmount,
      userCity,
      userGenre,
      userEmail,
      userImage
    } = this.state

    let editButton

    if (isDisabled) {
      if (userName && userCity && userGenre && userEmail && monthAmount) {
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

    return isLoading ? (
      <Loader />
    ) : (
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
            src={
              userImage
                ? `data:image/png;base64, ${userImage}`
                : `${authUser.userImageURL}`
            }
            alt='Avatar'
          />

          <ProfileInfo
            disabled={isDisabled}
            value={userName}
            placeholder='Fill your display name*'
            onChange={e => this.setState({ userName: e.target.value })}
          />

          {(authUser.userEarnClass || !isDisabled) && (
            <ProfileInfo
              disabled
              value={
                authUser.userEarnClass === undefined
                  ? `You don't have an earn class yet`
                  : `Earn Class: ${authUser.userEarnClass}`
              }
              type='text'
            />
          )}

          {(monthAmount || !isDisabled) && (
            <ProfileInfo
              disabled={isDisabled}
              value={monthAmount}
              type='number'
              min='1'
              max='999999'
              step='.01'
              placeholder='Fill your month amount*'
              onChange={e => this.setState({ monthAmount: e.target.value })}
            />
          )}

          {(userCity || !isDisabled) && (
            <CitySelect
              disabled={isDisabled}
              defaultValue={!userCity ? 'default' : userCity}
              onChange={e => this.handleCityChange(e)}
            >
              <option value='default' disabled>
                Select your city*
              </option>
              <option value='Rio de Janeiro'>Rio de Janeiro</option>
              <option value='São Paulo'>São Paulo</option>
              <option value='Brasília'>Brasília</option>
            </CitySelect>
          )}

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
  isLoading: state.auth.isLoading,
  isLogged: state.auth.isLogged,
  authUser: state.auth.authUser,
  errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
