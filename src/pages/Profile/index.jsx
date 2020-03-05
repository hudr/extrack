import React, { useState, createRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { alertErrorMessage } from '../../utils/SweetAlert'

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
  BackToHome,
} from './styled'

export default function Profile() {
  //Getting redux states
  const { isLoading, authUser } = useSelector(
    state => ({
      isLoading: state.auth.isLoading,
      authUser: state.auth.authUser,
    }),
    shallowEqual,
  )

  const [isDisabled, setIsDisabled] = useState(true)

  const [userName, setUserName] = useState(
    useSelector(state => state.auth.authUser.userName),
  )

  const [monthAmount, setMonthAmount] = useState(
    useSelector(state => state.auth.authUser.monthAmount) || '',
  )

  const [userEmail, setUserEmail] = useState(
    useSelector(state => state.auth.authUser.userEmail),
  )

  const [userCity, setUserCity] = useState(
    useSelector(state => state.auth.authUser.userCity),
  )

  const [userGenre, setUserGenre] = useState(
    useSelector(state => state.auth.authUser.userGenre) || '',
  )

  const [userImage, setUserImage] = useState('')

  async function handleBase64(e) {
    if (e.target.files.length === 0) {
      return
    }

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
          setUserImage(base64)
        } else {
          alertErrorMessage('Unsupported format.')
        }
      } else {
        alertErrorMessage('This image is too large. Max: 2MB.')
      }
    }
  }

  const dispatch = useDispatch()

  async function submitUserProfile(e) {
    e.preventDefault()

    const result = await dispatch(
      AuthActions.handleUpdateProfile(
        userName,
        monthAmount,
        userCity,
        userGenre,
        userEmail,
        userImage,
      ),
    )

    if (result) {
      setIsDisabled(true)
    }
  }

  async function handleForm(e) {
    e.preventDefault()
    setIsDisabled(!isDisabled)
  }

  //////////////////////////////////////////////////////////////////////////////
  let editButton
  if (isDisabled) {
    if (userName && userCity && userGenre && userEmail && monthAmount) {
      editButton = (
        <EditProfileButton onClick={handleForm}>Edit</EditProfileButton>
      )
    } else {
      editButton = (
        <EditProfileButton onClick={handleForm}>
          Complete Profile
        </EditProfileButton>
      )
    }
  } else {
    editButton = <SaveProfileButton type="submit">Save</SaveProfileButton>
  }
  //////////////////////////////////////////////////////////////////////////////

  if (isLoading) {
    return <Loader />
  }

  let imageUpload = createRef()

  return (
    <StyledContainer>
      <Form onSubmit={submitUserProfile}>
        <input
          style={{ display: 'none' }}
          accept="image/*"
          type="file"
          onChange={handleBase64}
          multiple={false}
          disabled={isDisabled}
          ref={imageUpload}
        />
        <Img
          src={
            userImage
              ? `data:image/png;base64, ${userImage}`
              : `${authUser.userImageURL}`
          }
          alt="Avatar"
          onClick={() => imageUpload.current.click()}
        />

        <ProfileInfo
          disabled={isDisabled}
          value={userName}
          placeholder="Fill your display name*"
          onChange={e => setUserName(e.target.value)}
        />

        {(authUser.userEarnClass || !isDisabled) && (
          <ProfileInfo
            disabled
            value={
              authUser.userEarnClass === undefined
                ? `You don't have an earn class yet`
                : `Earn Class ${authUser.userEarnClass}`
            }
            type="text"
          />
        )}

        {(monthAmount || !isDisabled) && (
          <ProfileInfo
            disabled={isDisabled}
            value={monthAmount}
            type="number"
            min="1"
            max="999999"
            step=".01"
            placeholder="Fill your month amount*"
            onChange={e => setMonthAmount(e.target.value)}
          />
        )}

        {(userCity || !isDisabled) && (
          <CitySelect
            disabled={isDisabled}
            defaultValue={!userCity ? 'default' : userCity}
            onChange={e => setUserCity(e.target.value)}
          >
            <option value="default" disabled>
              Select your city*
            </option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Brasília">Brasília</option>
          </CitySelect>
        )}

        {(userGenre || !isDisabled) && (
          <ProfileSelect
            disabled={isDisabled}
            defaultValue={!userGenre ? 'default' : userGenre}
            onChange={e => setUserGenre(e.target.value)}
          >
            <option value="default" disabled>
              Select your genre*
            </option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Trans">Trans</option>
            <option value="Agender">Agender</option>
            <option value="Bi-Gendered">Bi-Gendered</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Androgyne">Androgyne</option>
            <option value="Androgynous">Androgynous</option>
          </ProfileSelect>
        )}

        <ProfileInfo
          disabled={isDisabled}
          value={userEmail}
          placeholder="Fill your email*"
          onChange={e => setUserEmail(e.target.value)}
        />
        {editButton}
        <BackToHome>
          <Link to="/categories">Back to home</Link>
        </BackToHome>
      </Form>
    </StyledContainer>
  )
}
