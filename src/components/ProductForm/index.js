import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'
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

class ProductForm extends Component {
  state = {
    userUid: this.props.authUser.userUid,
    userCity: this.props.authUser.userCity,
    monthAmount: this.props.authUser.monthAmount || '',
    userGenre: this.props.authUser.userGenre || '',
    userEarnClass: this.props.authUser.userEarnClass || '',
    pName: '',
    pCategory: 'default',
    pQuantity: '',
    pPrice: ''
  }

  submitProduct = async e => {
    e.preventDefault()

    const {
      userUid,
      userCity,
      monthAmount,
      userEarnClass,
      userGenre,
      pName,
      pCategory,
      pQuantity,
      pPrice
    } = this.state

    const { submitUserProduct, handleLoader } = this.props

    if (pName && pCategory !== 'default' && pQuantity && pPrice) {
      await handleLoader(true)
      await submitUserProduct({
        userUid,
        userCity,
        monthAmount,
        userGenre,
        userEarnClass,
        pName,
        pCategory,
        pQuantity,
        pPrice,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      await handleLoader(false)

      alertSuccessMessage('Product has been created')

      this.setState({
        pName: '',
        pCategory: 'default',
        pQuantity: '',
        pPrice: ''
      })
    } else {
      alertErrorMessage('Please, fill all required fields')
    }
  }

  handleGenreChange(e) {
    this.setState({ pCategory: e.target.value })
  }

  render() {
    const { pName, pCategory, pQuantity, pPrice } = this.state
    const {
      isLoading,
      authUser: { userGenre, monthAmount, userEarnClass }
    } = this.props

    return (
      <>
        {isLoading ? (
          <LoaderBullets />
        ) : (
          <StyledContainer>
            {!userGenre && !userEarnClass && !monthAmount ? (
              <Fragment>
                <Title>
                  You can't insert products yet. Please complete your profile.
                </Title>
                <GoToProfile>
                  <Link to='/profile'>Go to profile</Link>
                </GoToProfile>
              </Fragment>
            ) : (
              <Fragment>
                <Title>Fill all informations to register your products:</Title>
                <Form onSubmit={this.submitProduct}>
                  <ProfileInfo
                    placeholder='Name*'
                    type='text'
                    value={pName}
                    onChange={e => this.setState({ pName: e.target.value })}
                  />

                  <ProductSelect
                    value={pCategory}
                    onChange={e => this.handleGenreChange(e)}
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
                    value={pQuantity}
                    type='number'
                    min='1'
                    step='1'
                    onChange={e => this.setState({ pQuantity: e.target.value })}
                  />

                  <ProfileInfo
                    placeholder='Price*'
                    value={pPrice}
                    type='number'
                    min='0.01'
                    step='.01'
                    onChange={e => this.setState({ pPrice: e.target.value })}
                  />

                  <RegisterProduct type='submit'>+</RegisterProduct>
                </Form>
              </Fragment>
            )}
          </StyledContainer>
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  authUser: state.auth.authUser,
  products: state.product.products,
  userProducts: state.product.userProducts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...ProductActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
