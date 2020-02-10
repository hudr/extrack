import React, { Fragment, Component } from 'react'

import { Categories } from '../../utils/Mocks/Categories'

import { connect } from 'react-redux'

import { filterUserProducts } from '../../utils/Convertion'

import { Link } from 'react-router-dom'

import '../../../src/App.css'

import {
  StyledContainer,
  CardContainer,
  CardDiv,
  CardContent,
  CardImg,
  CardTitle,
  CardDescription
} from './styled'

export class CategoryCards extends Component {
  state = {
    userProducts: {}
  }
  async componentDidMount() {
    const {
      authUser: { userUid, userCity, userGenre, userEarnClass }
    } = this.props
    const { products } = this.props

    const userHasProducts = products.filter(
      product => product.userUid === userUid
    )

    if (userHasProducts.length > 0 && userCity && userGenre && userEarnClass) {
      const filterProductsForUser = await filterUserProducts(products, userUid)
      this.setState({ userProducts: filterProductsForUser })
    }
  }

  render() {
    const { userProducts } = this.state
    return (
      <StyledContainer>
        <CardContainer>
          {Categories.map((category, index) => (
            <Fragment key={category.id}>
              <Link to={`/categories/${category.title.toLocaleLowerCase()}`}>
                <CardDiv>
                  <CardContent>
                    <CardImg src={category.imgURL} alt={category.altText} />
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>
                      {userProducts && userProducts.products === undefined
                        ? '0'
                        : userProducts.products.totalProductsFromCategory[
                            index
                          ]}{' '}
                      item(s)
                    </CardDescription>
                  </CardContent>
                </CardDiv>
              </Link>
            </Fragment>
          ))}
        </CardContainer>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.auth.authUser,
  products: state.product.products
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCards)
