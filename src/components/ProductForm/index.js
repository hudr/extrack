import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { Creators as ProductActions } from '../../store/ducks/product'

import LoaderBullets from '../../components/LoaderBullets'

import { alertSuccessMessage, alertErrorMessage } from '../../utils/SweetAlert'

import {
  StyledContainer,
  Title,
  Form,
  ProfileInfo,
  ProductSelect,
  GoToProfile,
  RegisterProduct
} from './styled'

export default function ProductForm() {
  //Getting redux states
  const { isLoading, authUser } = useSelector(
    state => ({
      isLoading: state.auth.isLoading,
      authUser: state.auth.authUser
    }),
    shallowEqual
  )

  //Component states
  const [name, setName] = useState('')
  const [category, setCategory] = useState('default')
  const [qty, setQty] = useState('')
  const [price, setPrice] = useState('')

  //Instance redux actions
  const dispatch = useDispatch()

  if (isLoading) {
    return <LoaderBullets />
  }

  async function submitProduct(e) {
    e.preventDefault()

    if (name && category !== 'default' && qty && price) {
      dispatch(
        ProductActions.submitUserProduct({
          userUid: authUser.userUid,
          userCity: authUser.userCity,
          monthAmount: authUser.monthAmount,
          userGenre: authUser.userGenre,
          userEarnClass: authUser.userEarnClass,
          name,
          category,
          qty,
          price,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      )

      //Display success message
      alertSuccessMessage('Product has been created')

      //Reseting fields
      setName('')
      setCategory('default')
      setQty('')
      setPrice('')
    } else {
      alertErrorMessage('Please, fill all required fields')
    }
  }

  return (
    <StyledContainer>
      {!authUser.userGenre &&
      !authUser.userEarnClass &&
      !authUser.monthAmount ? (
        <>
          <Title>
            You can't insert products yet. Please complete your profile.
          </Title>
          <GoToProfile>
            <Link to='/profile'>Go to profile</Link>
          </GoToProfile>
        </>
      ) : (
        <>
          <Title>Fill all informations to register your products:</Title>
          <Form onSubmit={submitProduct}>
            <ProfileInfo
              placeholder='Name*'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <ProductSelect
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value='default' disabled>
                Select the category*
              </option>
              <option value='Food'>Food</option>
              <option value='House'>House</option>
              <option value='Vehicle'>Vehicle</option>
              <option value='Health'>Health</option>
              <option value='Beauty'>Beauty</option>
              <option value='Personal'>Personal</option>
            </ProductSelect>

            <ProfileInfo
              placeholder='Quantity*'
              value={qty}
              type='number'
              min='1'
              step='1'
              onChange={e => setQty(e.target.value)}
            />

            <ProfileInfo
              placeholder='Price*'
              value={price}
              type='number'
              min='0.01'
              step='.01'
              onChange={e => setPrice(e.target.value)}
            />

            <RegisterProduct type='submit'>+</RegisterProduct>
          </Form>
        </>
      )}
    </StyledContainer>
  )
}
