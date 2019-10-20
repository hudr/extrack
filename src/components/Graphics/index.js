import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as ProductActions } from '../../store/ducks/product'

import { StyledContainer, Title, GoToProfile } from './styled'

import {
  filterUserProducts,
  filterAllUserProducts
} from '../../utils/Convertion'

class Graphics extends Component {
  state = {
    userDataInfos: {
      products: {
        userProductsFromCategory: [],
        totalValueFromCategory: [],
        totalMediaFromCategory: []
      },
      categories: [],
      totalProducts: 0,
      totalValueFromAllProducts: 0
    },

    allDataInfos: {
      products: {
        allProductsFromCategory: [],
        allTotalValueFromCategory: [],
        allTotalMediaFromCategory: []
      },
      allCategories: [],
      allTotalProducts: 0,
      allTotalValueFromAllProducts: 0
    },

    hasProducts: false
  }

  async componentDidMount() {
    const {
      getProducts,
      authUser: { userUid, userGenre, userBirthDate }
    } = this.props

    await getProducts()

    const { products } = this.props

    const userHasProducts = products.filter(
      product => product.userUid === userUid
    )

    if (userHasProducts.length > 0 && userGenre && userBirthDate) {
      const filterProductsForUser = await filterUserProducts(products, userUid)
      const filterAllProducts = await filterAllUserProducts(
        products,
        userUid,
        userGenre,
        userBirthDate
      )

      this.setState({
        userDataInfos: filterProductsForUser,
        allDataInfos: filterAllProducts,
        hasProducts: true
      })
    } else {
      this.setState({
        hasProducts: false
      })
    }
  }

  render() {
    const {
      userDataInfos: {
        products: {
          totalProductsFromCategory,
          totalValueFromCategory,
          totalMediaFromCategory
        },
        categories,
        totalProducts,
        totalValueFromAllProducts
      },

      allDataInfos: {
        products: {
          allTotalProductsFromCategory,
          allTotalValueFromCategory,
          allTotalMediaFromCategory
        },
        allCategories,
        allTotalProducts,
        allTotalValueFromAllProducts
      },
      hasProducts
    } = this.state
    const {
      authUser: { userGenre, userBirthDate }
    } = this.props

    return (
      <StyledContainer>
        {!userGenre && !userBirthDate ? (
          <Fragment>
            <Title>
              You can't see graphics yet. Please complete your profile.
            </Title>
            <GoToProfile>
              <Link to='/profile'>Go to profile</Link>
            </GoToProfile>
          </Fragment>
        ) : hasProducts ? (
          <Fragment>
            <Title>Hello to your graphics</Title>
            <ul>
              {totalMediaFromCategory.map((media, i) => (
                <li
                  key={i}
                  style={{
                    marginTop: '10px'
                  }}
                >
                  {totalProductsFromCategory[i] === 0 ? (
                    <div>
                      Insira produtos na categoria {categories[i]} para ver sua
                      média.
                    </div>
                  ) : (
                    <div>
                      Categoria: {categories[i]} | Produtos:{' '}
                      {totalProductsFromCategory[i]} | Total: R${' '}
                      {totalValueFromCategory[i]} | Média: R${media}
                    </div>
                  )}
                </li>
              ))}
              <h4 style={{ marginTop: '20px' }}>
                Qtd. de Produtos: {totalProducts} | Total R$
                {totalValueFromAllProducts}
              </h4>

              {/* ALL PRODUCTS PART */}
              {allTotalMediaFromCategory.map((media, i) => (
                <li
                  key={i}
                  style={{
                    marginTop: '10px'
                  }}
                >
                  {allTotalProductsFromCategory[i] === 0 ? (
                    <div>
                      Nenhum usuário com seu perfil tem produtos na categoria{' '}
                      {allCategories[i]}.
                    </div>
                  ) : (
                    <div>
                      Categoria: {allCategories[i]} | Produtos:{' '}
                      {allTotalProductsFromCategory[i]} | Total: R${' '}
                      {allTotalValueFromCategory[i]} | Média: R${media}
                    </div>
                  )}
                </li>
              ))}
              <h4 style={{ marginTop: '20px' }}>
                Qtd. de Produtos: {allTotalProducts} | Total R$
                {allTotalValueFromAllProducts}
              </h4>
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <Title>
              You can't see graphics yet. Please register any product.
            </Title>
            <GoToProfile>
              <Link to='/create'>Add your first product</Link>
            </GoToProfile>
          </Fragment>
        )}
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.auth.authUser,
  products: state.product.products
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graphics)
