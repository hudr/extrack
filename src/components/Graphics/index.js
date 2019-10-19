import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as ProductActions } from '../../store/ducks/product'

import { StyledContainer, Title, GoToProfile, ProductSelect } from './styled'

import { filterUserProducts } from '../../utils/Convertion'

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
    pCategory: 'All'
  }

  async componentDidMount() {
    const {
      getProducts,
      authUser: { userUid }
    } = this.props

    await getProducts()

    const { products } = this.props

    const filterProductsForUser = await filterUserProducts(products, userUid)

    this.setState({
      userDataInfos: filterProductsForUser
    })
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
      pCategory
    } = this.state
    const {
      products,
      authUser: { userUid, userGenre, userBirthDate }
    } = this.props

    //ALL
    const allProducts = products.filter(product => product.userUid !== userUid)

    const allCategoria = allProducts.filter(
      product => product.pCategory === pCategory
    )

    const allValorTotal =
      pCategory === 'All'
        ? allProducts.map(
            product => Number(product.pPrice) * Number(product.pQuantity)
          )
        : allCategoria.map(
            product => Number(product.pPrice) * Number(product.pQuantity)
          )

    const allSoma = allValorTotal.reduce((acc, product) => product + acc, 0)

    const allMedia = (Number(allSoma) / allValorTotal.length).toLocaleString(
      'pt-BR',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    )
    ///////////////////////////////////////////////////////////////////////
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
        ) : (
          <Fragment>
            <Title>Hello to your graphics</Title>

            <ul>
              {totalMediaFromCategory.map((media, i) => (
                <li
                  key={i}
                  style={{
                    listStyleType: 'decimal-leading-zero',
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
            </ul>
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
