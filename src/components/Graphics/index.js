import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as ProductActions } from '../../store/ducks/product'

import { StyledContainer, Title, GoToProfile, ProductSelect } from './styled'

class Graphics extends Component {
  state = {
    userProducts: [],
    pCategory: 'All'
  }

  async componentDidMount() {
    const {
      getProducts,
      authUser: { userUid }
    } = this.props
    await getProducts()

    const { products } = this.props

    //UserProducts
    const filteredUserProducts = products.filter(
      product => product.userUid === userUid
    )
    this.setState({ userProducts: filteredUserProducts })
    //End UserProducts
  }

  handleGenreChange(e) {
    this.setState({ pCategory: e.target.value })
  }

  render() {
    const { userProducts, pCategory } = this.state
    const {
      products,
      authUser: { userUid, userGenre, userBirthDate }
    } = this.props

    //USUARIO
    const categoria = userProducts.filter(
      product => product.pCategory === pCategory
    )

    const valorTotal =
      pCategory === 'All'
        ? userProducts.map(
            product => Number(product.pPrice) * Number(product.pQuantity)
          )
        : categoria.map(
            product => Number(product.pPrice) * Number(product.pQuantity)
          )

    const soma = valorTotal.reduce((acc, product) => product + acc, 0)

    const media = (soma / valorTotal.length).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    ///////////////////////////////////////////////////////////////////////

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

            <ProductSelect
              value={pCategory}
              onChange={e => this.handleGenreChange(e)}
            >
              <option value='All'>All</option>
              <option value='Food'>Food</option>
              <option value='House'>House</option>
              <option value='Vehicle'>Vehicle</option>
              <option value='Health'>Health</option>
              <option value='Beauty'>Beauty</option>
              <option value='Personal'>Personal</option>
            </ProductSelect>

            <div style={{ marginTop: '50px' }}>
              <h3>User:</h3>
              <h4>Produtos: {valorTotal.length}</h4>
              <h4>Valor Total: R${soma}</h4>
              <h4>Média: R${media}</h4>
            </div>

            <div style={{ marginTop: '50px' }}>
              <h3>All: </h3>
              <h4>Produtos: {allValorTotal.length}</h4>
              <h4>Valor Total: R${allSoma}</h4>
              <h4>Média: R${allMedia}</h4>
            </div>
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
