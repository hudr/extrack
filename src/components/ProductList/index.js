import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { Creators as AuthActions } from '../../store/ducks/auth'
import { Creators as ProductActions } from '../../store/ducks/product'

import { bindActionCreators } from 'redux'

import LoaderBullets from '../../components/LoaderBullets'

import { alertSuccessMessage } from '../../utils/SweetAlert'

import {
  StyledContainer,
  Title,
  GoToProfile,
  CardContainer,
  CardDiv,
  CardContent,
  CardTitle,
  CardDescription
} from './styled'

class ProductList extends Component {
  state = {
    userUid: this.props.authUser.userUid,
    userProductsByCategory: []
  }

  handleRemoveProduct = async rowIndex => {
    const { removeUserProduct, handleLoader } = this.props
    await handleLoader(true)
    await removeUserProduct(rowIndex)
    await handleLoader(false)
    alertSuccessMessage('Product has been removed')
  }

  async componentDidMount() {
    const { userUid } = this.state
    const { products, category } = this.props

    const userProductsByCategory = products.filter(
      product => product.userUid === userUid && product.pCategory === category
    )
    this.setState({ userProductsByCategory })
  }

  render() {
    const { category, isLoading } = this.props
    const { userProductsByCategory } = this.state

    return (
      <>
        {isLoading ? (
          <LoaderBullets />
        ) : (
          <StyledContainer>
            {!userProductsByCategory.length > 0 ? (
              <Fragment>
                <Title>
                  This category is empty. Why don't you create your first
                  product here?
                </Title>
                <GoToProfile>
                  <Link to='/create'>Insert a product</Link>
                </GoToProfile>
              </Fragment>
            ) : (
              <Fragment>
                <Title>{category.toUpperCase()} PRODUCTS</Title>
                <CardContainer>
                  <Fragment>
                    {userProductsByCategory.map(product => (
                      <CardDiv key={product.createdAt}>
                        <CardContent>
                          <div>
                            <CardTitle>{product.pName}</CardTitle>
                            <CardDescription>
                              Quantity: {product.pQuantity} | Unity price: R$
                              {product.pPrice}
                            </CardDescription>
                          </div>
                          <div>
                            <button disabled>Edit</button>
                            <button
                              onClick={() =>
                                this.handleRemoveProduct(product.rowIndex)
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </CardContent>
                      </CardDiv>
                    ))}
                  </Fragment>
                </CardContainer>
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
  products: state.product.products
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...ProductActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
