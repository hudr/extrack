import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { Creators as AuthActions } from '../../store/ducks/auth'
import { Creators as ProductActions } from '../../store/ducks/product'

import { bindActionCreators } from 'redux'

import Loader from '../../components/Loader'

import { StyledContainer, Title, GoToProfile } from './styled'

class ProductList extends Component {
  state = {
    userProductsByCategory: []
  }

  handleRemoveProduct = async rowIndex => {
    const { handleLoader, removeUserProduct } = this.props

    await handleLoader(true)
    await removeUserProduct(rowIndex)
    await handleLoader(false)
  }

  async componentDidMount() {
    const {
      authUser: { userUid }
    } = this.props
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
          <Loader />
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
                <Title>{category} List</Title>
                <ul>
                  {userProductsByCategory.map(product => (
                    <div key={product.createdAt}>
                      <li style={{ marginTop: '20px' }}>
                        <p>
                          Name: {product.pName} | Qty: {product.pQuantity}
                        </p>

                        <p>
                          R$: {product.pPrice}{' '}
                          <button
                            onClick={() =>
                              this.handleRemoveProduct(product.rowIndex)
                            }
                          >
                            Delete
                          </button>
                        </p>
                      </li>
                    </div>
                  ))}
                </ul>
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
