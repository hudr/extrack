import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as ProductActions } from '../../store/ducks/product'

import { StyledContainer, Title, GoToProfile } from './styled'

class Graphics extends Component {
  state = {
    userProducts: []
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
    const { userProducts } = this.state
    const {
      authUser: { userGenre, userBirthDate }
    } = this.props

    const valorTotal = userProducts.map(
      product => Number(product.pPrice) * Number(product.pQuantity)
    )
    const soma = valorTotal.reduce((acc, product) => product + acc, 0)

    const media = (soma / userProducts.length).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
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

            <h2>Produtos: {userProducts.length}</h2>
            <h2>Valor Total: R${soma}</h2>
            <h2>Média: R${media}</h2>
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
